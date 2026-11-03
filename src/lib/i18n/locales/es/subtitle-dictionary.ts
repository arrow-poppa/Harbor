// Subtitle dictionary: word lookups in the subtitles and word audio.
const subtitleDictionary: Record<string, string> = {
  "Subtitle dictionary": "Diccionario de subtítulos",
  "Look up words in subtitles": "Buscar palabras en los subtítulos",
  "Works with Harbor's subtitles and with styled (ASS) subtitles drawn by mpv. Image subtitles (PGS) have no text to look up.":
    "Funciona con los subtítulos de Harbor y con subtítulos con estilo (ASS) dibujados por mpv. Los subtítulos de imagen (PGS) no tienen texto que buscar.",
  "Pause while the popup is open": "Pausar mientras la ventana emergente está abierta",
  "Resumes when the popup closes.": "Se reanuda al cerrar la ventana emergente.",
  "Keep the popup open when the mouse leaves":
    "Mantener la ventana emergente abierta cuando sale el ratón",
  "The popup (and the pause) stays until you click outside it or press Escape.":
    "La ventana emergente (y la pausa) se mantiene hasta que hagas clic fuera o pulses Escape.",
  "Look up with": "Buscar con",
  "Hover looks words up as the mouse passes over them. With a key, hold it while hovering (or press it on a word) and plain hovering does nothing. Clicking a word always looks it up.":
    "Pasar el ratón busca las palabras a medida que pasa sobre ellas. Con una tecla, mantenla pulsada mientras pasas el ratón (o púlsala sobre una palabra) y pasar el ratón sin más no hace nada. Hacer clic en una palabra siempre la busca.",
  Hover: "Pasar el ratón",
  "Hold Shift": "Mantener Shift",
  "Hold Ctrl": "Mantener Ctrl",
  "Hold Alt": "Mantener Alt",
  "Scan delay (in milliseconds)": "Retraso de búsqueda (en milisegundos)",
  "Wait before looking up the word under the mouse when no key is required. Lower is faster; higher avoids lookups while the mouse just passes over the subtitle.":
    "Espera antes de buscar la palabra bajo el ratón cuando no se requiere tecla. Menos es más rápido; más evita búsquedas cuando el ratón solo pasa por el subtítulo.",
  "Keep subtitles above the seek bar": "Mantener los subtítulos sobre la barra de progreso",
  "The seek bar covers the lowest subtitle line, so lift the subtitles above it while you look words up.":
    "La barra de progreso tapa la línea más baja del subtítulo, así que sube los subtítulos por encima mientras buscas palabras.",
  "Same setting as Player → Subtitles.": "El mismo ajuste que Reproductor → Subtítulos.",
  "Subtitle height": "Altura de los subtítulos",
  "Distance from the bottom of the video.": "Distancia desde la parte inferior del vídeo.",
  "Subtitle language": "Idioma de los subtítulos",
  "Picks the deinflection rules used for lookups.":
    "Elige las reglas de deflexión usadas en las búsquedas.",
  "Loading dictionaries…": "Cargando diccionarios…",
  "No dictionaries yet. Import Yomitan .zip files such as JMdict or Jitendex.":
    "Aún no hay diccionarios. Importa archivos .zip de Yomitan como JMdict o Jitendex.",
  "Importing {name}…": "Importando {name}…",
  "Import dictionary (.zip)": "Importar diccionario (.zip)",
  "Word audio": "Audio de la palabra",
  "No database selected": "Ninguna base de datos seleccionada",
  "Choose database": "Elegir base de datos",
  "(empty)": "(vacío)",
  "Download the desktop app to look up words while you watch.":
    "Descarga la app de escritorio para buscar palabras mientras ves.",
  Greek: "Griego",
  Latin: "Latín",
  Controller: "Mando",
  Dictionary: "Diccionario",
  "Look up words in subtitles with your Yomitan dictionaries and hear them.":
    "Busca palabras de los subtítulos en tus diccionarios de Yomitan y escúchalas.",
  "Hover a word in the subtitles to look it up in your Yomitan dictionaries and hear it. Uses Manatan's dictionary engine.":
    "Pasa el ratón por una palabra de los subtítulos para buscarla en tus diccionarios de Yomitan y oírla. Usa el motor de diccionarios de Manatan.",
  "Plays pronunciations from a local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Reproduce pronunciaciones de una base de datos local-audio-yomichan (Forvo, NHK16, Shinmeikai8, JPod101). Elige android.db, o entries.db junto a sus carpetas *_files. La versión Flatpak solo puede leer android.db.",
  "Subtitle dictionary lookups and word audio run in the Harbor desktop app.":
    "Las búsquedas en el diccionario de subtítulos y el audio de palabras funcionan en la app de escritorio de Harbor.",
};

export default subtitleDictionary;
