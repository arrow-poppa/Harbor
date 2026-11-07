// Word audio sources: recorded and synthesized voices for looked-up words.
const wordAudioSources: Record<string, string> = {
  "Plays the looked-up word and adds it to Anki cards. Sources are tried from top to bottom, and pressing the audio button again plays the next voice. Online sources send the word to their site.":
    "Spielt das nachgeschlagene Wort ab und fügt es Anki-Karten hinzu. Die Quellen werden von oben nach unten versucht, und ein erneuter Druck auf die Audiotaste spielt die nächste Stimme. Online-Quellen senden das Wort an ihre Website.",
  "Local audio database": "Lokale Audio-Datenbank",
  "Custom URL": "Eigene URL",
  "Custom URL (JSON)": "Eigene URL (JSON)",
  "Automatic picks a voice for the lookup language.":
    "„Automatisch“ wählt eine Stimme für die Nachschlagesprache.",
  "The reading (kana), when there is one": "Die Lesung (Kana), wenn es eine gibt",
  "The word as written": "Das Wort, wie es geschrieben wird",
  URL: "URL",
  "A local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Eine local-audio-yomichan-Datenbank (Forvo, NHK16, Shinmeikai8, JPod101). Wähle android.db oder entries.db neben den *_files-Ordnern. Die Flatpak-Version kann nur android.db lesen.",
  "Recorded Japanese words from JapanesePod101.":
    "Aufgenommene japanische Wörter von JapanesePod101.",
  "Recorded words from the LanguagePod101 sites, in about 35 languages.":
    "Aufgenommene Wörter von den LanguagePod101-Seiten, in etwa 35 Sprachen.",
  "Recorded Japanese words from Jisho.org.": "Aufgenommene japanische Wörter von Jisho.org.",
  "Recordings shared on Wikimedia Commons by Lingua Libre speakers.":
    "Aufnahmen, die Lingua-Libre-Sprecher auf Wikimedia Commons teilen.",
  "Wiktionary recordings on Wikimedia Commons.": "Wiktionary-Aufnahmen auf Wikimedia Commons.",
  "Microsoft Edge's online neural voices, the same ones the eBook narration uses.":
    "Die neuronalen Online-Stimmen von Microsoft Edge, dieselben wie bei der E-Book-Vorlesefunktion.",
  "An audio file at your own URL. {term}, {reading} and {language} are filled in.":
    "Eine Audiodatei unter deiner eigenen URL. {term}, {reading} und {language} werden eingesetzt.",
  "A URL that answers with a list of audio files, such as a local audio server. {term}, {reading} and {language} are filled in.":
    "Eine URL, die mit einer Liste von Audiodateien antwortet, etwa ein lokaler Audioserver. {term}, {reading} und {language} werden eingesetzt.",
  "Only when no other source has audio": "Nur wenn keine andere Quelle Audio hat",
  "Synthesized speech is used only if no recorded voice is found for the word.":
    "Synthetische Sprache wird nur verwendet, wenn für das Wort keine Aufnahme gefunden wird.",
};

export default wordAudioSources;
