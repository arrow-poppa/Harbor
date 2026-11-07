// Subtitle dictionary: word lookups in the subtitles and word audio.
const subtitleDictionary: Record<string, string> = {
  "Subtitle dictionary": "Dizionario dei sottotitoli",
  "Look up words in subtitles": "Cerca parole nei sottotitoli",
  "Works with Harbor's subtitles and with styled (ASS) subtitles drawn by mpv. Image subtitles (PGS) have no text to look up.":
    "Funziona con i sottotitoli di Harbor e con i sottotitoli con stile (ASS) disegnati da mpv. I sottotitoli immagine (PGS) non hanno testo da cercare.",
  "Pause while the popup is open": "Metti in pausa mentre il popup è aperto",
  "Resumes when the popup closes.": "Riprende quando il popup si chiude.",
  "Keep the popup open when the mouse leaves": "Tieni aperto il popup quando il mouse esce",
  "The popup (and the pause) stays until you click outside it or press Escape.":
    "Il popup (e la pausa) resta finché non fai clic fuori o premi Esc.",
  "Look up with": "Cerca con",
  "Hover looks words up as the mouse passes over them. With a key, hold it while hovering (or press it on a word) and plain hovering does nothing. Clicking a word always looks it up.":
    "Il passaggio del mouse cerca le parole mentre il mouse ci passa sopra. Con un tasto, tienilo premuto mentre passi il mouse (o premilo su una parola) e il semplice passaggio non fa nulla. Un clic su una parola la cerca sempre.",
  Hover: "Passaggio del mouse",
  "Hold Shift": "Tieni premuto Maiusc",
  "Hold Ctrl": "Tieni premuto Ctrl",
  "Hold Alt": "Tieni premuto Alt",
  "Scan delay (in milliseconds)": "Ritardo di ricerca (in millisecondi)",
  "Wait before looking up the word under the mouse when no key is required. Lower is faster; higher avoids lookups while the mouse just passes over the subtitle.":
    "Attesa prima di cercare la parola sotto il mouse quando non serve alcun tasto. Più basso è più veloce; più alto evita ricerche quando il mouse passa soltanto sul sottotitolo.",
  "Same setting as Player → Subtitles.": "Stessa impostazione di Player → Sottotitoli.",
  "Subtitle height": "Altezza dei sottotitoli",
  "Distance from the bottom of the video.": "Distanza dal fondo del video.",
  "Subtitle language": "Lingua dei sottotitoli",
  "Picks the deinflection rules used for lookups.":
    "Sceglie le regole di deflessione usate nelle ricerche.",
  "Loading dictionaries…": "Caricamento dei dizionari…",
  "No dictionaries yet. Import Yomitan .zip files such as JMdict or Jitendex.":
    "Ancora nessun dizionario. Importa file .zip di Yomitan come JMdict o Jitendex.",
  "Importing {name}…": "Importazione di {name}…",
  "Import dictionary (.zip)": "Importa dizionario (.zip)",
  "Word audio": "Audio della parola",
  "No database selected": "Nessun database selezionato",
  "Choose database": "Scegli database",
  "(empty)": "(vuoto)",
  "Download the desktop app to look up words while you watch.":
    "Scarica l’app desktop per cercare parole mentre guardi.",
  Greek: "Greco",
  Latin: "Latino",
  Controller: "Controller",
  Dictionary: "Dizionario",
  "Detect from the subtitle track": "Rileva dalla traccia dei sottotitoli",
  "Lookups and word audio use the selected subtitle's language when it has one; otherwise the language above.":
    "Le ricerche e l’audio della parola usano la lingua del sottotitolo scelto quando ne ha una; altrimenti la lingua qui sopra.",
};

export default subtitleDictionary;
