// Anki cards from the dictionary popup.
const ankiMining: Record<string, string> = {
  "Hover a word in the subtitles to look it up in your Yomitan dictionaries, hear it and add it to Anki. Uses Manatan's dictionary engine.":
    "Fahre über ein Wort im Untertitel, um es in deinen Yomitan-Wörterbüchern nachzuschlagen, anzuhören und zu Anki hinzuzufügen. Nutzt die Wörterbuch-Engine von Manatan.",
  "Open the popup for words no dictionary contains, with only the AI explanation, so they can still go to Anki.":
    "Öffnet das Popup für Wörter, die kein Wörterbuch kennt, nur mit der KI-Erklärung, damit sie trotzdem zu Anki können.",
  "Plays and mines pronunciations from a local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Spielt Aussprachen aus einer local-audio-yomichan-Datenbank (Forvo, NHK16, Shinmeikai8, JPod101) ab und übernimmt sie. Wähle android.db oder entries.db neben den *_files-Ordnern. Die Flatpak-Version kann nur android.db lesen.",
  "Connected to Anki": "Mit Anki verbunden",
  Anki: "Anki",
  "Adds cards through AnkiConnect with the word, sentence, definitions, a screenshot, the sentence audio and the word audio. Anki must be open with the AnkiConnect add-on.":
    "Fügt über AnkiConnect Karten mit Wort, Satz, Definitionen, einem Screenshot, dem Satz-Audio und dem Wort-Audio hinzu. Anki muss mit dem Add-on AnkiConnect geöffnet sein.",
  "AnkiConnect address": "AnkiConnect-Adresse",
  Deck: "Stapel",
  "Choose…": "Auswählen …",
  "Connect first": "Erst verbinden",
  "Note type": "Notiztyp",
  Fields: "Felder",
  "Auto-fill": "Automatisch ausfüllen",
  "Separated by spaces.": "Durch Leerzeichen getrennt.",
  "Sentence audio padding": "Polster für das Satz-Audio",
  "Seconds added before and after the subtitle line.": "Sekunden vor und nach der Untertitelzeile.",
  "Animated clip format": "Format des animierten Clips",
  "For fields set to the animated clip. AVIF is smallest; WebP and GIF play in older Anki versions. Falls back to WebP, then GIF, if an encoder is missing.":
    "Für Felder mit dem animierten Clip. AVIF ist am kleinsten; WebP und GIF laufen in älteren Anki-Versionen. Weicht auf WebP, dann GIF aus, wenn ein Encoder fehlt.",
  "Animated clip size": "Größe des animierten Clips",
  "Width in pixels and frames per second. Clips stop after 12 seconds.":
    "Breite in Pixeln und Bilder pro Sekunde. Clips enden nach 12 Sekunden.",
  "Allow duplicate cards": "Doppelte Karten erlauben",
  "When off, words already in the deck are refused.":
    "Aus: Wörter, die schon im Stapel sind, werden abgelehnt.",
  "Subtitle dictionary lookups, word audio and Anki mining run in the Harbor desktop app.":
    "Nachschlagen im Untertitel-Wörterbuch, Wort-Audio und Anki-Mining laufen in der Harbor-Desktop-App.",
  Word: "Wort",
  "Word with furigana": "Wort mit Furigana",
  "Definitions (all)": "Definitionen (alle)",
  "Definition (first dictionary)": "Definition (erstes Wörterbuch)",
  Sentence: "Satz",
  "Sentence (word in bold)": "Satz (Wort fett)",
  "Sentence (word as cloze)": "Satz (Wort als Lückentext)",
  "Sentence audio": "Satz-Audio",
  "Word audio (local)": "Wort-Audio (lokal)",
  "Animated clip of the line (AVIF/WebP/GIF)": "Animierter Clip der Zeile (AVIF/WebP/GIF)",
  Frequency: "Häufigkeit",
  "Pitch accent": "Tonhöhenakzent",
  "Title / episode": "Titel / Folge",
  "Text selected in the popup (else first definition)":
    "Im Popup markierter Text (sonst erste Definition)",
  "Add to Anki": "Zu Anki hinzufügen",
  "Dictionary & Anki": "Wörterbuch & Anki",
  "Look up words in subtitles with your Yomitan dictionaries, hear them, get AI explanations and turn them into Anki cards.":
    "Schlage Wörter im Untertitel in deinen Yomitan-Wörterbüchern nach, höre sie dir an, lass sie dir per KI erklären und mach Anki-Karten daraus.",
  "Cards of the word": "Karten des Worts",
  "The Anki button shows how many notes the word already has. All decks also finds notes from other decks and note types, such as cards made with Yomitan, with a field that is exactly the word.":
    "Die Anki-Taste zeigt, wie viele Notizen das Wort schon hat. Alle Stapel findet auch Notizen aus anderen Stapeln und Notiztypen, etwa mit Yomitan erstellte Karten, mit einem Feld, das genau das Wort ist.",
  "This deck": "Dieser Stapel",
  "This deck and all decks": "Dieser Stapel und alle Stapel",
};

export default ankiMining;
