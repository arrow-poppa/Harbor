//! The `Sec-MS-GEC` value Edge's Read Aloud service asks for, version 2.
//!
//! Since October 2026 the service refuses the version 1 value (a plain SHA-256
//! of the clock and the client token) with HTTP 403. Version 2 hashes the same
//! text with Edge's keyed SHA-256, whose secret 57-byte prefix is only known as
//! the hash state after its first 14 words, and prefixes Edge's CS64 checksum:
//! "<CS64, 16 hex>-<SHA-256, 64 hex>", upper case. The constants are Edge's,
//! as the edge-tts project documents them.

pub(super) const CLIENT_TOKEN: &str = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
/// Seconds from 1601-01-01 (Windows file time) to 1970-01-01.
const WINDOWS_EPOCH_OFFSET: i64 = 11_644_473_600;
/// The value changes every five minutes.
const WINDOW_SECS: i64 = 300;

const H0: [u32; 8] = [
    0x6A09_E667,
    0xBB67_AE85,
    0x3C6E_F372,
    0xA54F_F53A,
    0x510E_527F,
    0x9B05_688C,
    0x1F83_D9AB,
    0x5BE0_CD19,
];
const K: [u32; 64] = [
    0x428A_2F98,
    0x7137_4491,
    0xB5C0_FBCF,
    0xE9B5_DBA5,
    0x3956_C25B,
    0x59F1_11F1,
    0x923F_82A4,
    0xAB1C_5ED5,
    0xD807_AA98,
    0x1283_5B01,
    0x2431_85BE,
    0x550C_7DC3,
    0x72BE_5D74,
    0x80DE_B1FE,
    0x9BDC_06A7,
    0xC19B_F174,
    0xE49B_69C1,
    0xEFBE_4786,
    0x0FC1_9DC6,
    0x240C_A1CC,
    0x2DE9_2C6F,
    0x4A74_84AA,
    0x5CB0_A9DC,
    0x76F9_88DA,
    0x983E_5152,
    0xA831_C66D,
    0xB003_27C8,
    0xBF59_7FC7,
    0xC6E0_0BF3,
    0xD5A7_9147,
    0x06CA_6351,
    0x1429_2967,
    0x27B7_0A85,
    0x2E1B_2138,
    0x4D2C_6DFC,
    0x5338_0D13,
    0x650A_7354,
    0x766A_0ABB,
    0x81C2_C92E,
    0x9272_2C85,
    0xA2BF_E8A1,
    0xA81A_664B,
    0xC24B_8B70,
    0xC76C_51A3,
    0xD192_E819,
    0xD699_0624,
    0xF40E_3585,
    0x106A_A070,
    0x19A4_C116,
    0x1E37_6C08,
    0x2748_774C,
    0x34B0_BCB5,
    0x391C_0CB3,
    0x4ED8_AA4A,
    0x5B9C_CA4F,
    0x682E_6FF3,
    0x748F_82EE,
    0x78A5_636F,
    0x84C8_7814,
    0x8CC7_0208,
    0x90BE_FFFA,
    0xA450_6CEB,
    0xBEF9_A3F7,
    0xC671_78F2,
];

/// Length of Edge's secret prefix.
const PREFIX_LEN: usize = 57;
/// Working registers after the prefix's 14 words of the first block.
const PREFIX_REGISTERS: [u32; 8] = [
    0xFD9F_BEA2,
    0x9124_3CE7,
    0xBE49_9094,
    0xCD2E_1E0A,
    0x6C00_6F49,
    0x04BD_35AB,
    0xFEB0_A7E4,
    0x03EF_FBD2,
];
/// The prefix's share of schedule words 16 to 29.
const PREFIX_SCHEDULE: [u32; 14] = [
    0xEB24_BF9E,
    0x1558_691F,
    0xA0C0_9EE2,
    0x0CFA_32BA,
    0xA622_EE8C,
    0xD1DD_9491,
    0xC0DD_25A0,
    0xF9E7_0AB6,
    0xF0C3_1573,
    0x7058_CE4E,
    0x7188_E606,
    0x00E5_AB33,
    0xD258_B060,
    0x7276_6564,
];
/// The prefix's last byte shares word 14 with the text; Edge folds it into
/// round 14's constant and two schedule terms.
const ROUND_14_CONSTANT: u32 = 0xC9DC_06A7;
const SIGMA0_FOLD: u32 = 0x059C_0B80;
const SIGMA1_FOLD: u32 = 0x000B_92C0;

const CS64_SEEDS: [(u32, u32); 14] = [
    (0xE82E_91B1, 0xB327_00D0),
    (0x44DE_24C6, 0x88DF_F51D),
    (0x3BEB_65BC, 0x2951_4038),
    (0xC89C_5933, 0xB328_CBDF),
    (0x8D1E_C211, 0xD405_B4D5),
    (0x314E_F5D5, 0x26E5_5F3C),
    (0xE924_91B1, 0x6078_01C6),
    (0xF0A5_B9D5, 0x82B2_C1FB),
    (0x0606_4CF3, 0xFA51_A3DA),
    (0xDA79_FA60, 0x207C_C464),
    (0xBED2_0560, 0x3C3C_74F3),
    (0x89F9_C9F8, 0xD2D1_4B61),
    (0x35FA_38C6, 0xBB04_A2C1),
    (0xCB49_E3C6, 0xC562_6167),
];
const CS64_FACTOR: u32 = 0x8289_3933;
const CS64_FIRST_TERM: u32 = 0xF2F9_0B1A;
const CS64_FIRST_OFFSET: u32 = 0x0B1A_0000;

/// The value for a Unix time in seconds.
pub(super) fn sec_ms_gec(unix_secs: i64) -> String {
    let mut secs = unix_secs + WINDOWS_EPOCH_OFFSET;
    secs -= secs.rem_euclid(WINDOW_SECS);
    let ticks = secs as u128 * 10_000_000;
    let text = format!("{ticks}{CLIENT_TOKEN}");
    let digest = keyed_sha256(text.as_bytes());
    let (low, high) = cs64(text.as_bytes(), &digest);
    let mut out = String::with_capacity(81);
    for byte in low.to_le_bytes().iter().chain(&high.to_le_bytes()) {
        out.push_str(&format!("{byte:02X}"));
    }
    out.push('-');
    for byte in digest {
        out.push_str(&format!("{byte:02X}"));
    }
    out
}

fn small_sigma0(x: u32) -> u32 {
    x.rotate_right(7) ^ x.rotate_right(18) ^ (x >> 3)
}

fn small_sigma1(x: u32) -> u32 {
    x.rotate_right(17) ^ x.rotate_right(19) ^ (x >> 10)
}

fn extend_schedule(w: &mut [u32; 64], from: usize) {
    for i in from..64 {
        w[i] = small_sigma1(w[i - 2])
            .wrapping_add(w[i - 7])
            .wrapping_add(small_sigma0(w[i - 15]))
            .wrapping_add(w[i - 16]);
    }
}

/// SHA-256 rounds `first..64` on `registers`, returned as the next chaining state.
fn rounds(
    chain: [u32; 8],
    registers: [u32; 8],
    w: &[u32; 64],
    first: usize,
    k: &[u32; 64],
) -> [u32; 8] {
    let [mut a, mut b, mut c, mut d, mut e, mut f, mut g, mut h] = registers;
    for i in first..64 {
        let s1 = e.rotate_right(6) ^ e.rotate_right(11) ^ e.rotate_right(25);
        let choose = (e & f) ^ (!e & g);
        let t1 = h
            .wrapping_add(s1)
            .wrapping_add(choose)
            .wrapping_add(k[i])
            .wrapping_add(w[i]);
        let s0 = a.rotate_right(2) ^ a.rotate_right(13) ^ a.rotate_right(22);
        let majority = (a & b) ^ (a & c) ^ (b & c);
        let t2 = s0.wrapping_add(majority);
        h = g;
        g = f;
        f = e;
        e = d.wrapping_add(t1);
        d = c;
        c = b;
        b = a;
        a = t1.wrapping_add(t2);
    }
    let mut next = chain;
    for (slot, value) in next.iter_mut().zip([a, b, c, d, e, f, g, h]) {
        *slot = slot.wrapping_add(value);
    }
    next
}

/// SHA-256 of Edge's secret prefix followed by `text` (at least 7 bytes).
fn keyed_sha256(text: &[u8]) -> [u8; 32] {
    // First block: the prefix's 14 words are already applied, words 14 and 15
    // carry the first 7 bytes of the text.
    let mut w = [0u32; 64];
    w[14] = u32::from_be_bytes([0, text[0], text[1], text[2]]);
    w[15] = u32::from_be_bytes([text[3], text[4], text[5], text[6]]);
    for i in 16..30 {
        let mut value = PREFIX_SCHEDULE[i - 16].wrapping_add(if i == 16 {
            small_sigma1(w[14]) ^ SIGMA1_FOLD
        } else {
            small_sigma1(w[i - 2])
        });
        if i >= 21 {
            value = value.wrapping_add(w[i - 7]);
        }
        if i == 29 {
            value = value.wrapping_add(small_sigma0(w[14]) ^ SIGMA0_FOLD);
        }
        w[i] = value;
    }
    w[30] = small_sigma1(w[28])
        .wrapping_add(w[23])
        .wrapping_add(small_sigma0(w[15]))
        .wrapping_add(w[14])
        .wrapping_add(ROUND_14_CONSTANT)
        .wrapping_sub(K[14]);
    extend_schedule(&mut w, 31);
    let mut first_k = K;
    first_k[14] = ROUND_14_CONSTANT;
    let mut state = rounds(H0, PREFIX_REGISTERS, &w, 14, &first_k);

    // The rest of the text, padded as usual for the full message length.
    let total = PREFIX_LEN + text.len();
    let mut rest = text[7..].to_vec();
    rest.push(0x80);
    rest.resize((rest.len() + 8).div_ceil(64) * 64 - 8, 0);
    rest.extend_from_slice(&((total as u64) * 8).to_be_bytes());
    for block in rest.chunks_exact(64) {
        let mut w = [0u32; 64];
        for (slot, word) in w.iter_mut().zip(block.chunks_exact(4)) {
            *slot = u32::from_be_bytes([word[0], word[1], word[2], word[3]]);
        }
        extend_schedule(&mut w, 16);
        state = rounds(state, state, &w, 0, &K);
    }
    let mut digest = [0u8; 32];
    for (bytes, value) in digest.chunks_exact_mut(4).zip(state) {
        bytes.copy_from_slice(&value.to_be_bytes());
    }
    digest
}

fn swap_halves(x: u32) -> u32 {
    x.rotate_left(16)
}

/// Edge's CS64 checksum of `text`, keyed by the first 8 bytes of its digest.
fn cs64(text: &[u8], digest: &[u8; 32]) -> (u32, u32) {
    let key_a = u32::from_le_bytes([digest[0], digest[1], digest[2], digest[3]]) | 1;
    let key_b = u32::from_le_bytes([digest[4], digest[5], digest[6], digest[7]]) | 1;
    let keys = [key_a, key_b];
    let factors = [
        key_a.wrapping_mul(CS64_FACTOR),
        key_b.wrapping_mul(CS64_FACTOR),
    ];

    let mut terms = Vec::new();
    let mut offsets = Vec::new();
    for (i, (seed, offset)) in CS64_SEEDS.iter().enumerate() {
        terms.push(seed.wrapping_mul(factors[i % 2]));
        offsets.push(*offset);
    }
    // A zero byte, then the text, as little-endian words padded to an even count.
    let mut bytes = Vec::with_capacity(text.len() + 8);
    bytes.push(0);
    bytes.extend_from_slice(text);
    bytes.resize(bytes.len().div_ceil(8) * 8, 0);
    for (i, word) in bytes.chunks_exact(4).enumerate() {
        let word = u32::from_le_bytes([word[0], word[1], word[2], word[3]]);
        let mut term = word.wrapping_mul(keys[i % 2]);
        let mut offset =
            swap_halves(word).wrapping_mul(if i % 2 == 0 { 0xEF05_69FB } else { 0xC317_13DB });
        if i == 0 {
            term = term.wrapping_add(CS64_FIRST_TERM.wrapping_mul(factors[0]));
            offset = offset.wrapping_add(CS64_FIRST_OFFSET);
        }
        terms.push(term);
        offsets.push(offset);
    }

    let mut mix_sum = 0u32;
    let mut mix_last = 0u32;
    let mut state = 0u32;
    let mut sum = 0u32;
    for (pair, offset) in terms.chunks_exact(2).zip(offsets.chunks_exact(2)) {
        let q = swap_halves(offset[0].wrapping_add(pair[0])).wrapping_mul(0x76F5_0F34);
        mix_sum = mix_sum.wrapping_add(swap_halves(q).wrapping_mul(0xC3EF_EA97).wrapping_add(q));
        let q = swap_halves(offset[1].wrapping_add(pair[1])).wrapping_mul(0x1881_CE3C);
        mix_last = swap_halves(q).wrapping_mul(0x35BD_1EC9).wrapping_add(q);
        mix_sum = mix_sum.wrapping_add(mix_last);

        state = state.wrapping_mul(key_a).wrapping_add(pair[0]);
        for factor in [0xCF98_B111, 0x8708_5B9F, 0x12CE_B96D, 0x257E_1D83] {
            state = swap_halves(state).wrapping_mul(factor);
        }
        sum = sum.wrapping_add(state);
        state = state.wrapping_mul(key_b).wrapping_add(pair[1]);
        for factor in [0xA274_16F5, 0xD383_96FF, 0x7C93_2B89, 0xBFA4_9F69] {
            state = swap_halves(state).wrapping_mul(factor);
        }
        sum = sum.wrapping_add(state);
    }
    (mix_last ^ state, mix_sum ^ sum)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn matches_edge_tts_reference_values() {
        // Published by edge-tts 7.3.1 (generate_sec_ms_gec_v2).
        assert_eq!(
            sec_ms_gec(0),
            "52BC7A17B50DFEC9-28C4394775C8751CD2F6859C030C06DB1489ACAB3B3A7651831FC26895177ED6"
        );
        assert_eq!(
            sec_ms_gec(1_700_000_000),
            "2CD23A2CA0B2595A-F3C846C370E05F9CC83ACC5F995C5F5D87A4D0F14CE8936A0F902E64099E38A2"
        );
        assert_eq!(
            sec_ms_gec(1_792_499_696),
            "DC588E2A6D03411A-AFC50DB6E15D1D6EBFDE7CAB419EC4897730487706D2964B657EAE2D2EC5A514"
        );
    }

    #[test]
    fn changes_every_five_minutes() {
        let start = 1_800_000_000 - 1_800_000_000 % 300;
        assert_eq!(sec_ms_gec(start), sec_ms_gec(start + 299));
        assert_ne!(sec_ms_gec(start), sec_ms_gec(start + 300));
    }
}
