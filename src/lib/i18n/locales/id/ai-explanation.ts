// AI explanation of a looked-up word.
const aiExplanation: Record<string, string> = {
  "AI Explanation": "Penjelasan AI",
  "Generate a contextual explanation of the looked-up word with your own AI provider. Requests go directly from this device to any OpenAI-compatible endpoint (OpenRouter, OpenAI, DeepSeek, Groq, a local server…).":
    "Buat penjelasan kontekstual untuk kata yang dicari dengan penyedia AI Anda sendiri. Permintaan langsung dikirim dari perangkat ini ke endpoint apa pun yang kompatibel dengan OpenAI (OpenRouter, OpenAI, DeepSeek, Groq, server lokal…).",
  "AI explanation in the popup": "Penjelasan AI di popup",
  "Shows the explanation above the dictionary entries.":
    "Menampilkan penjelasan di atas entri kamus.",
  "Custom endpoint": "Endpoint khusus",
  "Full URL, used exactly as entered. No path is appended.":
    "URL lengkap, dipakai persis seperti yang dimasukkan. Tidak ada path yang ditambahkan.",
  "Stored on this device only.": "Hanya disimpan di perangkat ini.",
  "Model ID sent to the provider.": "ID model yang dikirim ke penyedia.",
  "OpenRouter provider routing": "Perutean penyedia OpenRouter",
  "Prioritize listed providers": "Utamakan penyedia yang tercantum",
  "Only listed providers": "Hanya penyedia yang tercantum",
  "Ignore listed providers": "Abaikan penyedia yang tercantum",
  "OpenRouter provider slugs": "Slug penyedia OpenRouter",
  "Separated by commas or line breaks.": "Dipisahkan koma atau baris baru.",
  "Allow OpenRouter fallbacks": "Izinkan cadangan OpenRouter",
  "Thinking mode": "Mode berpikir",
  "Thinking intensity": "Intensitas berpikir",
  "Custom thinking value": "Nilai berpikir khusus",
  "A word, a token count, or a JSON object.": "Sebuah kata, jumlah token, atau objek JSON.",
  "Custom request body JSON": "JSON isi permintaan khusus",
  "A JSON object merged over the generated request.":
    "Objek JSON yang digabungkan di atas permintaan yang dibuat.",
  "Auto generate on lookup": "Buat otomatis saat mencari",
  "When off, the box appears without sending a request and you generate it manually.":
    "Jika mati, kotak muncul tanpa mengirim permintaan dan Anda membuatnya secara manual.",
  "Real time response": "Respons waktu nyata",
  "Stream the explanation into the popup as it is written.":
    "Mengalirkan penjelasan ke popup selagi ditulis.",
  "Cancel unfinished requests": "Batalkan permintaan yang belum selesai",
  "Drop an explanation still being generated when the popup closes or another word is looked up.":
    "Membuang penjelasan yang masih dibuat saat popup ditutup atau kata lain dicari.",
  "Fallback for unknown words": "Cadangan untuk kata tak dikenal",
  "Custom prompt": "Prompt khusus",
  "Use {target} for the word and {sentence} for its context.":
    "Gunakan {target} untuk kata dan {sentence} untuk konteksnya.",
  "System prompt": "Prompt sistem",
  "Optional instructions sent before the user prompt. Leave empty to send none.":
    "Instruksi opsional yang dikirim sebelum prompt pengguna. Kosongkan agar tidak mengirim apa pun.",
  Temperature: "Temperatur",
  "Between 0 and 2. Lower is more deterministic.":
    "Antara 0 dan 2. Lebih rendah lebih deterministik.",
  "AI explanation": "Penjelasan AI",
  "Not a valid JSON object.": "Bukan objek JSON yang valid.",
  "Look up words in subtitles with your Yomitan dictionaries, hear them and get AI explanations.":
    "Cari kata di subtitel dengan kamus Yomitan Anda, dengarkan, dan dapatkan penjelasan AI.",
  "Open the popup for words no dictionary contains, with only the AI explanation.":
    "Membuka popup untuk kata yang tidak ada di kamus mana pun, hanya dengan penjelasan AI.",
};

export default aiExplanation;
