// Anki cards from the dictionary popup.
const ankiMining: Record<string, string> = {
  "Hover a word in the subtitles to look it up in your Yomitan dictionaries, hear it and add it to Anki. Uses Manatan's dictionary engine.":
    "Pasa el ratón por una palabra de los subtítulos para buscarla en tus diccionarios de Yomitan, oírla y añadirla a Anki. Usa el motor de diccionarios de Manatan.",
  "Open the popup for words no dictionary contains, with only the AI explanation, so they can still go to Anki.":
    "Abre la ventana emergente para palabras que ningún diccionario contiene, solo con la explicación con IA, para que aún puedan ir a Anki.",
  "Plays and mines pronunciations from a local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Reproduce y mina pronunciaciones de una base de datos local-audio-yomichan (Forvo, NHK16, Shinmeikai8, JPod101). Elige android.db, o entries.db junto a sus carpetas *_files. La versión Flatpak solo puede leer android.db.",
  "Connected to Anki": "Conectado a Anki",
  Anki: "Anki",
  "Adds cards through AnkiConnect with the word, sentence, definitions, a screenshot, the sentence audio and the word audio. Anki must be open with the AnkiConnect add-on.":
    "Añade tarjetas mediante AnkiConnect con la palabra, la frase, las definiciones, una captura, el audio de la frase y el audio de la palabra. Anki debe estar abierto con el complemento AnkiConnect.",
  "AnkiConnect address": "Dirección de AnkiConnect",
  Deck: "Mazo",
  "Choose…": "Elegir…",
  "Connect first": "Conecta primero",
  "Note type": "Tipo de nota",
  Fields: "Campos",
  "Auto-fill": "Rellenar automáticamente",
  "Separated by spaces.": "Separadas por espacios.",
  "Sentence audio padding": "Margen del audio de la frase",
  "Seconds added before and after the subtitle line.":
    "Segundos añadidos antes y después de la línea del subtítulo.",
  "Animated clip format": "Formato del clip animado",
  "For fields set to the animated clip. AVIF is smallest; WebP and GIF play in older Anki versions. Falls back to WebP, then GIF, if an encoder is missing.":
    "Para los campos configurados como clip animado. AVIF es el más pequeño; WebP y GIF se reproducen en versiones antiguas de Anki. Pasa a WebP y luego a GIF si falta un codificador.",
  "Animated clip size": "Tamaño del clip animado",
  "Width in pixels and frames per second. Clips stop after 12 seconds.":
    "Ancho en píxeles y fotogramas por segundo. Los clips se detienen a los 12 segundos.",
  "Allow duplicate cards": "Permitir tarjetas duplicadas",
  "When off, words already in the deck are refused.":
    "Desactivado, se rechazan las palabras que ya están en el mazo.",
  "Subtitle dictionary lookups, word audio and Anki mining run in the Harbor desktop app.":
    "Las búsquedas en el diccionario de subtítulos, el audio de palabras y la minería para Anki funcionan en la app de escritorio de Harbor.",
  Word: "Palabra",
  "Word with furigana": "Palabra con furigana",
  "Definitions (all)": "Definiciones (todas)",
  "Definition (first dictionary)": "Definición (primer diccionario)",
  Sentence: "Frase",
  "Sentence (word in bold)": "Frase (palabra en negrita)",
  "Sentence (word as cloze)": "Frase (palabra como cloze)",
  "Sentence audio": "Audio de la frase",
  "Word audio (local)": "Audio de la palabra (local)",
  "Animated clip of the line (AVIF/WebP/GIF)": "Clip animado de la línea (AVIF/WebP/GIF)",
  Frequency: "Frecuencia",
  "Pitch accent": "Acento tonal",
  "Title / episode": "Título / episodio",
  "Text selected in the popup (else first definition)":
    "Texto seleccionado en la ventana emergente (si no, la primera definición)",
  "Add to Anki": "Añadir a Anki",
  "Dictionary & Anki": "Diccionario y Anki",
  "Look up words in subtitles with your Yomitan dictionaries, hear them, get AI explanations and turn them into Anki cards.":
    "Busca palabras de los subtítulos en tus diccionarios de Yomitan, escúchalas, obtén explicaciones con IA y conviértelas en tarjetas de Anki.",
  "Cards of the word": "Tarjetas de la palabra",
  "The Anki button shows how many notes the word already has. All decks also finds notes from other decks and note types, such as cards made with Yomitan, with a field that is exactly the word.":
    "El botón de Anki muestra cuántas notas tiene ya la palabra. Todos los mazos también encuentra notas de otros mazos y tipos de nota, como tarjetas hechas con Yomitan, con un campo que es exactamente la palabra.",
  "This deck": "Este mazo",
  "This deck and all decks": "Este mazo y todos los mazos",
  "Definition (selected dictionary)": "Definición (diccionario seleccionado)",
};

export default ankiMining;
