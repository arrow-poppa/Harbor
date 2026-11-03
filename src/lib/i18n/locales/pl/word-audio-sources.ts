// Word audio sources: recorded and synthesized voices for looked-up words.
const wordAudioSources: Record<string, string> = {
  "Plays the looked-up word and adds it to Anki cards. Sources are tried from top to bottom, and pressing the audio button again plays the next voice. Online sources send the word to their site.":
    "Odtwarza sprawdzane słowo i dodaje je do kart Anki. Źródła są próbowane od góry do dołu, a ponowne naciśnięcie przycisku audio odtwarza następny głos. Źródła online wysyłają słowo do swojej strony.",
  "Local audio database": "Lokalna baza audio",
  "Custom URL": "Własny URL",
  "Custom URL (JSON)": "Własny URL (JSON)",
  "Voices for the lookup language.": "Głosy dla języka wyszukiwania.",
  "The reading (kana), when there is one": "Odczyt (kana), jeśli jest",
  "The word as written": "Słowo w zapisie",
  URL: "URL",
  "A local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Baza local-audio-yomichan (Forvo, NHK16, Shinmeikai8, JPod101). Wybierz android.db albo entries.db obok folderów *_files. Wersja Flatpak potrafi czytać tylko android.db.",
  "Recorded Japanese words from JapanesePod101.": "Nagrania japońskich słów z JapanesePod101.",
  "Recorded words from the LanguagePod101 sites, in about 35 languages.":
    "Nagrania słów ze stron LanguagePod101, w około 35 językach.",
  "Recorded Japanese words from Jisho.org.": "Nagrania japońskich słów z Jisho.org.",
  "Recordings shared on Wikimedia Commons by Lingua Libre speakers.":
    "Nagrania udostępnione na Wikimedia Commons przez mówców Lingua Libre.",
  "Wiktionary recordings on Wikimedia Commons.": "Nagrania Wikisłownika na Wikimedia Commons.",
  "Microsoft Edge's online neural voices, the same ones the eBook narration uses.":
    "Neuronowe głosy online Microsoft Edge, te same, których używa lektor e-booków.",
  "An audio file at your own URL. {term}, {reading} and {language} are filled in.":
    "Plik audio pod Twoim adresem URL. {term}, {reading} i {language} są uzupełniane.",
  "A URL that answers with a list of audio files, such as a local audio server. {term}, {reading} and {language} are filled in.":
    "Adres URL zwracający listę plików audio, np. lokalny serwer audio. {term}, {reading} i {language} są uzupełniane.",
};

export default wordAudioSources;
