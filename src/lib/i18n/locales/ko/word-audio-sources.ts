// Word audio sources: recorded and synthesized voices for looked-up words.
const wordAudioSources: Record<string, string> = {
  "Plays the looked-up word and adds it to Anki cards. Sources are tried from top to bottom, and pressing the audio button again plays the next voice. Online sources send the word to their site.":
    "찾아본 단어를 재생하고 Anki 카드에 추가합니다. 소스는 위에서 아래로 시도되며, 오디오 버튼을 다시 누르면 다음 음성이 재생됩니다. 온라인 소스는 단어를 해당 사이트로 보냅니다.",
  "Local audio database": "로컬 오디오 데이터베이스",
  "Custom URL": "사용자 지정 URL",
  "Custom URL (JSON)": "사용자 지정 URL(JSON)",
  "Voices for the lookup language.": "찾기 언어의 음성입니다.",
  "The reading (kana), when there is one": "읽기(가나)가 있으면 읽기",
  "The word as written": "쓰인 그대로의 단어",
  URL: "URL",
  "A local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "local-audio-yomichan 데이터베이스(Forvo, NHK16, Shinmeikai8, JPod101). android.db, 또는 *_files 폴더 옆의 entries.db를 고르세요. Flatpak 버전은 android.db만 읽을 수 있습니다.",
  "Recorded Japanese words from JapanesePod101.": "JapanesePod101의 일본어 단어 녹음입니다.",
  "Recorded words from the LanguagePod101 sites, in about 35 languages.":
    "LanguagePod101 사이트의 단어 녹음으로, 약 35개 언어입니다.",
  "Recorded Japanese words from Jisho.org.": "Jisho.org의 일본어 단어 녹음입니다.",
  "Recordings shared on Wikimedia Commons by Lingua Libre speakers.":
    "Lingua Libre 화자가 Wikimedia Commons에 공유한 녹음입니다.",
  "Wiktionary recordings on Wikimedia Commons.":
    "Wikimedia Commons에 있는 위키낱말사전 녹음입니다.",
  "Microsoft Edge's online neural voices, the same ones the eBook narration uses.":
    "Microsoft Edge의 온라인 뉴럴 음성으로, 전자책 낭독과 같은 음성입니다.",
  "An audio file at your own URL. {term}, {reading} and {language} are filled in.":
    "직접 지정한 URL의 오디오 파일입니다. {term}, {reading}, {language}가 채워집니다.",
  "A URL that answers with a list of audio files, such as a local audio server. {term}, {reading} and {language} are filled in.":
    "로컬 오디오 서버처럼 오디오 파일 목록으로 응답하는 URL입니다. {term}, {reading}, {language}가 채워집니다.",
};

export default wordAudioSources;
