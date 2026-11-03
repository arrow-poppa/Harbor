// Subtitle dictionary: word lookups in the subtitles and word audio.
const subtitleDictionary: Record<string, string> = {
  "Subtitle dictionary": "Untertitel-Wörterbuch",
  "Look up words in subtitles": "Wörter in Untertiteln nachschlagen",
  "Works with Harbor's subtitles and with styled (ASS) subtitles drawn by mpv. Image subtitles (PGS) have no text to look up.":
    "Funktioniert mit Harbors Untertiteln und mit gestalteten (ASS-)Untertiteln, die mpv zeichnet. Bild-Untertitel (PGS) haben keinen Text zum Nachschlagen.",
  "Pause while the popup is open": "Pausieren, solange das Popup offen ist",
  "Resumes when the popup closes.": "Läuft weiter, wenn das Popup schließt.",
  "Keep the popup open when the mouse leaves": "Popup offen lassen, wenn die Maus es verlässt",
  "The popup (and the pause) stays until you click outside it or press Escape.":
    "Das Popup (und die Pause) bleibt, bis du daneben klickst oder Escape drückst.",
  "Look up with": "Nachschlagen mit",
  "Hover looks words up as the mouse passes over them. With a key, hold it while hovering (or press it on a word) and plain hovering does nothing. Clicking a word always looks it up.":
    "Beim Überfahren werden Wörter nachgeschlagen, sobald die Maus darüber fährt. Mit einer Taste hältst du sie beim Überfahren gedrückt (oder drückst sie auf einem Wort), und bloßes Überfahren bewirkt nichts. Ein Klick auf ein Wort schlägt es immer nach.",
  Hover: "Überfahren",
  "Hold Shift": "Umschalt halten",
  "Hold Ctrl": "Strg halten",
  "Hold Alt": "Alt halten",
  "Scan delay (in milliseconds)": "Such-Verzögerung (in Millisekunden)",
  "Wait before looking up the word under the mouse when no key is required. Lower is faster; higher avoids lookups while the mouse just passes over the subtitle.":
    "Wartezeit, bevor das Wort unter der Maus nachgeschlagen wird, wenn keine Taste nötig ist. Niedriger ist schneller; höher vermeidet Nachschlagen, wenn die Maus nur über den Untertitel fährt.",
  "Keep subtitles above the seek bar": "Untertitel über der Zeitleiste halten",
  "The seek bar covers the lowest subtitle line, so lift the subtitles above it while you look words up.":
    "Die Zeitleiste verdeckt die unterste Untertitelzeile, also hebe die Untertitel darüber, während du Wörter nachschlägst.",
  "Same setting as Player → Subtitles.": "Dieselbe Einstellung wie Player → Untertitel.",
  "Subtitle height": "Untertitelhöhe",
  "Distance from the bottom of the video.": "Abstand vom unteren Rand des Videos.",
  "Subtitle language": "Untertitelsprache",
  "Picks the deinflection rules used for lookups.":
    "Wählt die Deflexionsregeln für das Nachschlagen.",
  "Loading dictionaries…": "Wörterbücher werden geladen …",
  "No dictionaries yet. Import Yomitan .zip files such as JMdict or Jitendex.":
    "Noch keine Wörterbücher. Importiere Yomitan-.zip-Dateien wie JMdict oder Jitendex.",
  "Importing {name}…": "{name} wird importiert …",
  "Import dictionary (.zip)": "Wörterbuch importieren (.zip)",
  "Word audio": "Wort-Audio",
  "No database selected": "Keine Datenbank ausgewählt",
  "Choose database": "Datenbank wählen",
  "(empty)": "(leer)",
  "Download the desktop app to look up words while you watch.":
    "Lade die Desktop-App, um beim Schauen Wörter nachzuschlagen.",
  Greek: "Griechisch",
  Latin: "Latein",
  Controller: "Controller",
  Dictionary: "Wörterbuch",
  "Hover a word in the subtitles to look it up in your Yomitan dictionaries and hear it. Uses Manatan's dictionary engine.":
    "Fahre über ein Wort im Untertitel, um es in deinen Yomitan-Wörterbüchern nachzuschlagen und anzuhören. Nutzt die Wörterbuch-Engine von Manatan.",
  "Plays pronunciations from a local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Spielt Aussprachen aus einer local-audio-yomichan-Datenbank (Forvo, NHK16, Shinmeikai8, JPod101) ab. Wähle android.db oder entries.db neben den *_files-Ordnern. Die Flatpak-Version kann nur android.db lesen.",
  "Subtitle dictionary lookups and word audio run in the Harbor desktop app.":
    "Nachschlagen im Untertitel-Wörterbuch und Wort-Audio laufen in der Harbor-Desktop-App.",
};

export default subtitleDictionary;
