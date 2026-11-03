// Word audio sources: recorded and synthesized voices for looked-up words.
const wordAudioSources: Record<string, string> = {
  "Plays the looked-up word and adds it to Anki cards. Sources are tried from top to bottom, and pressing the audio button again plays the next voice. Online sources send the word to their site.":
    "Memutar kata yang dicari dan menambahkannya ke kartu Anki. Sumber dicoba dari atas ke bawah, dan menekan tombol audio lagi memutar suara berikutnya. Sumber online mengirim kata ke situs mereka.",
  "Local audio database": "Database audio lokal",
  "Custom URL": "URL kustom",
  "Custom URL (JSON)": "URL kustom (JSON)",
  "Voices for the lookup language.": "Suara untuk bahasa pencarian.",
  "The reading (kana), when there is one": "Bacaan (kana), jika ada",
  "The word as written": "Kata seperti yang tertulis",
  URL: "URL",
  "A local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Database local-audio-yomichan (Forvo, NHK16, Shinmeikai8, JPod101). Pilih android.db, atau entries.db di samping folder *_files. Versi Flatpak hanya bisa membaca android.db.",
  "Recorded Japanese words from JapanesePod101.": "Rekaman kata bahasa Jepang dari JapanesePod101.",
  "Recorded words from the LanguagePod101 sites, in about 35 languages.":
    "Rekaman kata dari situs LanguagePod101, dalam sekitar 35 bahasa.",
  "Recorded Japanese words from Jisho.org.": "Rekaman kata bahasa Jepang dari Jisho.org.",
  "Recordings shared on Wikimedia Commons by Lingua Libre speakers.":
    "Rekaman yang dibagikan penutur Lingua Libre di Wikimedia Commons.",
  "Wiktionary recordings on Wikimedia Commons.": "Rekaman Wiktionary di Wikimedia Commons.",
  "Microsoft Edge's online neural voices, the same ones the eBook narration uses.":
    "Suara neural online Microsoft Edge, sama dengan yang dipakai narasi eBook.",
  "An audio file at your own URL. {term}, {reading} and {language} are filled in.":
    "File audio di URL Anda sendiri. {term}, {reading}, dan {language} diisi otomatis.",
  "A URL that answers with a list of audio files, such as a local audio server. {term}, {reading} and {language} are filled in.":
    "URL yang menjawab dengan daftar file audio, seperti server audio lokal. {term}, {reading}, dan {language} diisi otomatis.",
};

export default wordAudioSources;
