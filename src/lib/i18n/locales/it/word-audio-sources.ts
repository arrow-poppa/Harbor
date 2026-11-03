// Word audio sources: recorded and synthesized voices for looked-up words.
const wordAudioSources: Record<string, string> = {
  "Plays the looked-up word and adds it to Anki cards. Sources are tried from top to bottom, and pressing the audio button again plays the next voice. Online sources send the word to their site.":
    "Riproduce la parola cercata e la aggiunge alle carte Anki. Le fonti vengono provate dall’alto in basso e premendo di nuovo il pulsante audio parte la voce successiva. Le fonti online inviano la parola al loro sito.",
  "Local audio database": "Database audio locale",
  "Custom URL": "URL personalizzato",
  "Custom URL (JSON)": "URL personalizzato (JSON)",
  "Voices for the lookup language.": "Voci per la lingua di ricerca.",
  "The reading (kana), when there is one": "La lettura (kana), se c’è",
  "The word as written": "La parola come è scritta",
  URL: "URL",
  "A local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Un database local-audio-yomichan (Forvo, NHK16, Shinmeikai8, JPod101). Scegli android.db, oppure entries.db accanto alle cartelle *_files. La versione Flatpak può leggere solo android.db.",
  "Recorded Japanese words from JapanesePod101.": "Parole giapponesi registrate da JapanesePod101.",
  "Recorded words from the LanguagePod101 sites, in about 35 languages.":
    "Parole registrate dai siti LanguagePod101, in circa 35 lingue.",
  "Recorded Japanese words from Jisho.org.": "Parole giapponesi registrate da Jisho.org.",
  "Recordings shared on Wikimedia Commons by Lingua Libre speakers.":
    "Registrazioni condivise su Wikimedia Commons dai parlanti di Lingua Libre.",
  "Wiktionary recordings on Wikimedia Commons.":
    "Registrazioni del Wikizionario su Wikimedia Commons.",
  "Microsoft Edge's online neural voices, the same ones the eBook narration uses.":
    "Le voci neurali online di Microsoft Edge, le stesse della narrazione degli eBook.",
  "An audio file at your own URL. {term}, {reading} and {language} are filled in.":
    "Un file audio al tuo URL. {term}, {reading} e {language} vengono compilati.",
  "A URL that answers with a list of audio files, such as a local audio server. {term}, {reading} and {language} are filled in.":
    "Un URL che risponde con un elenco di file audio, come un server audio locale. {term}, {reading} e {language} vengono compilati.",
};

export default wordAudioSources;
