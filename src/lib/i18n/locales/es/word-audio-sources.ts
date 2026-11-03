// Word audio sources: recorded and synthesized voices for looked-up words.
const wordAudioSources: Record<string, string> = {
  "Plays the looked-up word and adds it to Anki cards. Sources are tried from top to bottom, and pressing the audio button again plays the next voice. Online sources send the word to their site.":
    "Reproduce la palabra buscada y la añade a las tarjetas de Anki. Las fuentes se prueban de arriba abajo, y al pulsar otra vez el botón de audio suena la siguiente voz. Las fuentes en línea envían la palabra a su sitio.",
  "Local audio database": "Base de datos de audio local",
  "Custom URL": "URL personalizada",
  "Custom URL (JSON)": "URL personalizada (JSON)",
  "Voices for the lookup language.": "Voces del idioma de búsqueda.",
  "The reading (kana), when there is one": "La lectura (kana), si la hay",
  "The word as written": "La palabra tal como se escribe",
  URL: "URL",
  "A local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Una base de datos local-audio-yomichan (Forvo, NHK16, Shinmeikai8, JPod101). Elige android.db, o entries.db junto a sus carpetas *_files. La versión Flatpak solo puede leer android.db.",
  "Recorded Japanese words from JapanesePod101.": "Palabras japonesas grabadas de JapanesePod101.",
  "Recorded words from the LanguagePod101 sites, in about 35 languages.":
    "Palabras grabadas de los sitios LanguagePod101, en unos 35 idiomas.",
  "Recorded Japanese words from Jisho.org.": "Palabras japonesas grabadas de Jisho.org.",
  "Recordings shared on Wikimedia Commons by Lingua Libre speakers.":
    "Grabaciones compartidas en Wikimedia Commons por hablantes de Lingua Libre.",
  "Wiktionary recordings on Wikimedia Commons.": "Grabaciones de Wikcionario en Wikimedia Commons.",
  "Microsoft Edge's online neural voices, the same ones the eBook narration uses.":
    "Las voces neuronales en línea de Microsoft Edge, las mismas que usa la narración de eBooks.",
  "An audio file at your own URL. {term}, {reading} and {language} are filled in.":
    "Un archivo de audio en tu propia URL. Se rellenan {term}, {reading} y {language}.",
  "A URL that answers with a list of audio files, such as a local audio server. {term}, {reading} and {language} are filled in.":
    "Una URL que responde con una lista de archivos de audio, como un servidor de audio local. Se rellenan {term}, {reading} y {language}.",
};

export default wordAudioSources;
