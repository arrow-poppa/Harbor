//! Microsoft Edge's Read Aloud service: one WebSocket per request that answers
//! MP3 frames and word boundaries.
//!
//! Harbor used to go through the kothok-edge-tts crate, which still signs
//! requests with the version 1 `Sec-MS-GEC` the service has refused since
//! October 2026, so every synthesis failed with HTTP 403.

use super::sec_ms_gec::{sec_ms_gec, CLIENT_TOKEN};
use futures_util::{SinkExt, StreamExt};
use serde::Deserialize;
use std::sync::atomic::{AtomicI64, Ordering};
use std::time::{Duration, SystemTime, UNIX_EPOCH};
use tokio_tungstenite::tungstenite::{self, client::IntoClientRequest, http::HeaderValue, Message};

/// The Edge build the requests claim to come from; `Sec-MS-GEC-Version` is
/// "2-" followed by it.
const EDGE_VERSION: &str = "143.0.3650.75";
const EDGE_MAJOR: &str = "143";
const BASE_URL: &str = "speech.platform.bing.com/consumer/speech/synthesize/readaloud";
const ORIGIN: &str = "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold";
const OUTPUT_FORMAT: &str = "audio-24khz-48kbitrate-mono-mp3";
/// The service drops some connections at random, so a request is tried again.
const ATTEMPTS: usize = 3;
const CONNECT_TIMEOUT: Duration = Duration::from_secs(10);
const IDLE_TIMEOUT: Duration = Duration::from_secs(30);

/// Seconds to add to the local clock, learned from the service after a 403.
static CLOCK_OFFSET: AtomicI64 = AtomicI64::new(0);

pub(super) struct WordBoundary {
    /// Both in 100 ns ticks from the start of this request's audio.
    pub offset: u64,
    pub duration: u64,
    pub text: String,
}

pub(super) struct Speech {
    pub audio: Vec<u8>,
    pub boundaries: Vec<WordBoundary>,
}

fn now() -> i64 {
    let local = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|elapsed| elapsed.as_secs() as i64)
        .unwrap_or(0);
    local + CLOCK_OFFSET.load(Ordering::Relaxed)
}

pub(super) fn user_agent() -> String {
    format!(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) \
         Chrome/{EDGE_MAJOR}.0.0.0 Safari/537.36 Edg/{EDGE_MAJOR}.0.0.0"
    )
}

/// The query that authorizes a request: token, `Sec-MS-GEC` and its version.
pub(super) fn auth_query(token_key: &str) -> String {
    format!(
        "{token_key}={CLIENT_TOKEN}&Sec-MS-GEC={}&Sec-MS-GEC-Version=2-{EDGE_VERSION}",
        sec_ms_gec(now())
    )
}

pub(super) fn voices_url() -> String {
    format!(
        "https://{BASE_URL}/voices/list?{}",
        auth_query("trustedclienttoken")
    )
}

fn random_id() -> String {
    uuid::Uuid::new_v4().simple().to_string()
}

/// The `X-Timestamp` Edge sends, JavaScript's `Date#toString` in UTC.
fn timestamp(unix: i64) -> String {
    const WEEKDAYS: [&str; 7] = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"];
    const MONTHS: [&str; 12] = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    let days = unix.div_euclid(86_400);
    let secs = unix.rem_euclid(86_400);
    // Days since 1970-01-01 to a civil date (H. Hinnant's algorithm).
    let shifted = days + 719_468;
    let era = shifted.div_euclid(146_097);
    let day_of_era = shifted - era * 146_097;
    let year_of_era =
        (day_of_era - day_of_era / 1_460 + day_of_era / 36_524 - day_of_era / 146_096) / 365;
    let day_of_year = day_of_era - (365 * year_of_era + year_of_era / 4 - year_of_era / 100);
    let month_index = (5 * day_of_year + 2) / 153;
    let day = day_of_year - (153 * month_index + 2) / 5 + 1;
    let month = if month_index < 10 {
        month_index + 3
    } else {
        month_index - 9
    };
    let year = year_of_era + era * 400 + i64::from(month <= 2);
    format!(
        "{} {} {day:02} {year} {:02}:{:02}:{:02} GMT+0000 (Coordinated Universal Time)",
        WEEKDAYS[days.rem_euclid(7) as usize],
        MONTHS[(month - 1) as usize],
        secs / 3_600,
        secs / 60 % 60,
        secs % 60
    )
}

fn escape_xml(text: &str) -> String {
    let mut out = String::with_capacity(text.len());
    for character in text.chars() {
        match character {
            '&' => out.push_str("&amp;"),
            '<' => out.push_str("&lt;"),
            '>' => out.push_str("&gt;"),
            '"' => out.push_str("&quot;"),
            '\'' => out.push_str("&apos;"),
            // Control characters make the service reject the SSML.
            c if c.is_control() && !matches!(c, '\n' | '\t') => out.push(' '),
            c => out.push(c),
        }
    }
    out
}

fn ssml(text: &str, voice: &str, rate: &str, locale: &str) -> String {
    format!(
        "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='{}'>\
         <voice name='{}'><prosody pitch='+0Hz' rate='{}' volume='+0%'>{}</prosody></voice></speak>",
        escape_xml(locale),
        escape_xml(voice),
        escape_xml(rate),
        escape_xml(text)
    )
}

enum Failure {
    /// The handshake was refused, usually because the local clock is off.
    Rejected,
    Other(String),
}

impl From<tungstenite::Error> for Failure {
    fn from(error: tungstenite::Error) -> Self {
        match error {
            tungstenite::Error::Http(response)
                if matches!(response.status().as_u16(), 401 | 403) =>
            {
                Failure::Rejected
            }
            other => Failure::Other(other.to_string()),
        }
    }
}

/// Splits a text message into its `Path` header and its body.
fn path_and_body(message: &str) -> (&str, &str) {
    let (head, body) = message.split_once("\r\n\r\n").unwrap_or((message, ""));
    let path = head
        .split("\r\n")
        .find_map(|line| line.strip_prefix("Path:"))
        .unwrap_or("")
        .trim();
    (path, body)
}

/// The audio of a binary message: a 2-byte header length, a header whose
/// `Path` is `audio`, then MP3 data.
fn binary_audio(frame: &[u8]) -> Option<&[u8]> {
    let header_len = usize::from(u16::from_be_bytes([*frame.first()?, *frame.get(1)?]));
    let header = frame.get(2..2 + header_len)?;
    header
        .split(|byte| *byte == b'\n')
        .any(|line| line.strip_suffix(b"\r").unwrap_or(line) == b"Path:audio")
        .then_some(&frame[2 + header_len..])
}

#[derive(Deserialize)]
struct Metadata {
    #[serde(rename = "Metadata", default)]
    items: Vec<MetadataItem>,
}

#[derive(Deserialize)]
struct MetadataItem {
    #[serde(rename = "Type", default)]
    kind: String,
    // Read loosely: other kinds of metadata carry other fields.
    #[serde(rename = "Data", default)]
    data: serde_json::Value,
}

fn word_boundaries(body: &str) -> impl Iterator<Item = WordBoundary> {
    serde_json::from_str::<Metadata>(body)
        .map(|metadata| metadata.items)
        .unwrap_or_default()
        .into_iter()
        .filter(|item| item.kind == "WordBoundary")
        .filter_map(|item| {
            Some(WordBoundary {
                offset: item.data.get("Offset")?.as_u64()?,
                duration: item.data.get("Duration")?.as_u64()?,
                text: item.data.get("text")?.get("Text")?.as_str()?.to_owned(),
            })
        })
}

async fn synthesize_once(
    text: &str,
    voice: &str,
    rate: &str,
    locale: &str,
) -> Result<Speech, Failure> {
    let url = format!(
        "wss://{BASE_URL}/edge/v1?{}&ConnectionId={}",
        auth_query("TrustedClientToken"),
        random_id()
    );
    let mut request = url.into_client_request()?;
    let headers = request.headers_mut();
    headers.insert("Origin", HeaderValue::from_static(ORIGIN));
    headers.insert("Pragma", HeaderValue::from_static("no-cache"));
    headers.insert("Cache-Control", HeaderValue::from_static("no-cache"));
    headers.insert(
        "Accept-Language",
        HeaderValue::from_static("en-US,en;q=0.9"),
    );
    if let Ok(agent) = HeaderValue::from_str(&user_agent()) {
        headers.insert("User-Agent", agent);
    }
    if let Ok(cookie) = HeaderValue::from_str(&format!("muid={};", random_id().to_uppercase())) {
        headers.insert("Cookie", cookie);
    }

    let (mut socket, _) =
        tokio::time::timeout(CONNECT_TIMEOUT, tokio_tungstenite::connect_async(request))
            .await
            .map_err(|_| Failure::Other("the connection timed out".into()))??;

    let stamp = timestamp(now());
    socket
        .send(Message::Text(format!(
            "X-Timestamp:{stamp}\r\nContent-Type:application/json; charset=utf-8\r\n\
             Path:speech.config\r\n\r\n\
             {{\"context\":{{\"synthesis\":{{\"audio\":{{\"metadataoptions\":{{\
             \"sentenceBoundaryEnabled\":\"false\",\"wordBoundaryEnabled\":\"true\"}},\
             \"outputFormat\":\"{OUTPUT_FORMAT}\"}}}}}}}}\r\n"
        )))
        .await?;
    socket
        .send(Message::Text(format!(
            "X-RequestId:{}\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:{stamp}Z\r\n\
             Path:ssml\r\n\r\n{}",
            random_id(),
            ssml(text, voice, rate, locale)
        )))
        .await?;

    let mut speech = Speech {
        audio: Vec::new(),
        boundaries: Vec::new(),
    };
    loop {
        let next = tokio::time::timeout(IDLE_TIMEOUT, socket.next())
            .await
            .map_err(|_| Failure::Other("the service stopped answering".into()))?;
        match next {
            Some(Ok(Message::Text(message))) => match path_and_body(&message) {
                ("turn.end", _) => break,
                ("audio.metadata", body) => speech.boundaries.extend(word_boundaries(body)),
                _ => {}
            },
            Some(Ok(Message::Binary(frame))) => {
                if let Some(audio) = binary_audio(&frame) {
                    speech.audio.extend_from_slice(audio);
                }
            }
            Some(Ok(Message::Close(_))) | None => {
                return Err(Failure::Other(
                    "the service closed the connection early".into(),
                ))
            }
            Some(Ok(_)) => {}
            Some(Err(error)) => return Err(error.into()),
        }
    }
    let _ = socket.close(None).await;
    if speech.audio.is_empty() {
        return Err(Failure::Other("the service sent no audio".into()));
    }
    Ok(speech)
}

/// After a 403, sets the clock offset from the service's `Date` header.
async fn sync_clock() {
    let Ok(client) = crate::http_fetch::http_client_builder().build() else {
        return;
    };
    let Ok(response) = client.head(format!("https://{BASE_URL}/")).send().await else {
        return;
    };
    let Some(server) = response
        .headers()
        .get("date")
        .and_then(|value| value.to_str().ok())
        .and_then(|value| httpdate::parse_http_date(value).ok())
        .and_then(|time| time.duration_since(UNIX_EPOCH).ok())
    else {
        return;
    };
    let local = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|elapsed| elapsed.as_secs() as i64)
        .unwrap_or(0);
    CLOCK_OFFSET.store(server.as_secs() as i64 - local, Ordering::Relaxed);
}

/// `text` read by `voice` at `rate` ("+0%"), as MP3 with its word boundaries.
pub(super) async fn synthesize(
    text: &str,
    voice: &str,
    rate: &str,
    locale: &str,
) -> Result<Speech, String> {
    let _ = rustls::crypto::ring::default_provider().install_default();
    let mut clock_synced = false;
    let mut last_error = String::new();
    for _ in 0..ATTEMPTS {
        match synthesize_once(text, voice, rate, locale).await {
            Ok(speech) => return Ok(speech),
            Err(Failure::Rejected) => {
                last_error = "the service refused the connection (HTTP 403)".into();
                if !clock_synced {
                    clock_synced = true;
                    sync_clock().await;
                }
            }
            Err(Failure::Other(error)) => last_error = error,
        }
        eprintln!("[harbor::tts] Edge TTS attempt failed: {last_error}");
    }
    Err(last_error)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn timestamp_matches_javascript() {
        assert_eq!(
            timestamp(0),
            "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
        );
        assert_eq!(
            timestamp(1_792_499_696),
            "Tue Oct 20 2026 12:34:56 GMT+0000 (Coordinated Universal Time)"
        );
        assert_eq!(
            timestamp(951_782_400),
            "Tue Feb 29 2000 00:00:00 GMT+0000 (Coordinated Universal Time)"
        );
    }

    #[test]
    fn ssml_escapes_text_and_control_characters() {
        let built = ssml("a<b & 'c'\u{7}", "ja-JP-NanamiNeural", "+0%", "ja-JP");
        assert!(built.contains(">a&lt;b &amp; &apos;c&apos; </prosody>"));
        assert!(built.contains("<voice name='ja-JP-NanamiNeural'>"));
        assert!(built.contains("xml:lang='ja-JP'"));
    }

    #[test]
    fn reads_text_and_binary_messages() {
        assert_eq!(
            path_and_body("X-RequestId:1\r\nPath:turn.end\r\n\r\n{}"),
            ("turn.end", "{}")
        );
        let mut frame = vec![0, 12];
        frame.extend_from_slice(b"Path:audio\r\n");
        frame.extend_from_slice(&[0xFF, 0xF3]);
        assert_eq!(binary_audio(&frame), Some(&[0xFF, 0xF3][..]));
        assert_eq!(binary_audio(&[0, 40, b'x']), None);

        let mut other = vec![0, 17];
        other.extend_from_slice(b"Path:turn.start\r\n");
        assert_eq!(binary_audio(&other), None);
    }

    #[test]
    fn reads_word_boundaries() {
        let body = r#"{"Metadata":[{"Type":"WordBoundary","Data":{"Offset":1000,"Duration":500,"text":{"Text":"hi"}}},{"Type":"SessionEnd","Data":null}]}"#;
        let boundaries: Vec<_> = word_boundaries(body).collect();
        assert_eq!(boundaries.len(), 1);
        assert_eq!(
            (
                boundaries[0].offset,
                boundaries[0].duration,
                boundaries[0].text.as_str()
            ),
            (1000, 500, "hi")
        );
        assert_eq!(word_boundaries("not json").count(), 0);
    }
}
