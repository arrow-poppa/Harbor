// Anki cards from the dictionary popup.
const ankiMining: Record<string, string> = {
  "Hover a word in the subtitles to look it up in your Yomitan dictionaries, hear it and add it to Anki. Uses Manatan's dictionary engine.":
    "Najedź na słowo w napisach, aby sprawdzić je w słownikach Yomitan, odsłuchać i dodać do Anki. Korzysta z silnika słowników Manatan.",
  "Open the popup for words no dictionary contains, with only the AI explanation, so they can still go to Anki.":
    "Otwiera okienko dla słów, których nie ma w żadnym słowniku, tylko z wyjaśnieniem AI, aby nadal mogły trafić do Anki.",
  "Plays and mines pronunciations from a local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Odtwarza i pobiera wymowy z bazy local-audio-yomichan (Forvo, NHK16, Shinmeikai8, JPod101). Wybierz android.db albo entries.db obok folderów *_files. Wersja Flatpak potrafi czytać tylko android.db.",
  "Connected to Anki": "Połączono z Anki",
  Anki: "Anki",
  "Adds cards through AnkiConnect with the word, sentence, definitions, a screenshot, the sentence audio and the word audio. Anki must be open with the AnkiConnect add-on.":
    "Dodaje karty przez AnkiConnect ze słowem, zdaniem, definicjami, zrzutem ekranu, audio zdania i audio słowa. Anki musi być otwarte z dodatkiem AnkiConnect.",
  "AnkiConnect address": "Adres AnkiConnect",
  Deck: "Talia",
  "Choose…": "Wybierz…",
  "Connect first": "Najpierw się połącz",
  "Note type": "Typ notatki",
  Fields: "Pola",
  "Auto-fill": "Wypełnij automatycznie",
  "Separated by spaces.": "Oddzielone spacjami.",
  "Sentence audio padding": "Margines audio zdania",
  "Seconds added before and after the subtitle line.":
    "Sekundy dodawane przed i po wierszu napisów.",
  "Animated clip format": "Format animowanego klipu",
  "For fields set to the animated clip. AVIF is smallest; WebP and GIF play in older Anki versions. Falls back to WebP, then GIF, if an encoder is missing.":
    "Dla pól ustawionych na animowany klip. AVIF jest najmniejszy; WebP i GIF działają w starszych wersjach Anki. Przechodzi na WebP, a potem GIF, gdy brakuje kodera.",
  "Animated clip size": "Rozmiar animowanego klipu",
  "Width in pixels and frames per second. Clips stop after 12 seconds.":
    "Szerokość w pikselach i klatki na sekundę. Klipy kończą się po 12 sekundach.",
  "Allow duplicate cards": "Zezwalaj na duplikaty kart",
  "When off, words already in the deck are refused.":
    "Gdy wyłączone, słowa już obecne w talii są odrzucane.",
  "Subtitle dictionary lookups, word audio and Anki mining run in the Harbor desktop app.":
    "Sprawdzanie w słowniku napisów, audio słów i eksport do Anki działają w aplikacji Harbor na komputer.",
  Word: "Słowo",
  "Word with furigana": "Słowo z furiganą",
  "Definitions (all)": "Definicje (wszystkie)",
  "Definition (first dictionary)": "Definicja (pierwszy słownik)",
  Sentence: "Zdanie",
  "Sentence (word in bold)": "Zdanie (słowo pogrubione)",
  "Sentence (word as cloze)": "Zdanie (słowo jako luka)",
  "Sentence audio": "Audio zdania",
  "Word audio (local)": "Audio słowa (lokalne)",
  "Animated clip of the line (AVIF/WebP/GIF)": "Animowany klip wiersza (AVIF/WebP/GIF)",
  Frequency: "Częstość",
  "Pitch accent": "Akcent tonalny",
  "Title / episode": "Tytuł / odcinek",
  "Text selected in the popup (else first definition)":
    "Tekst zaznaczony w okienku (inaczej pierwsza definicja)",
  "Add to Anki": "Dodaj do Anki",
  "Dictionary & Anki": "Słownik i Anki",
  "Look up words in subtitles with your Yomitan dictionaries, hear them, get AI explanations and turn them into Anki cards.":
    "Sprawdzaj słowa z napisów w słownikach Yomitan, odsłuchuj je, otrzymuj wyjaśnienia AI i zamieniaj je w karty Anki.",
  "Cards of the word": "Karty słowa",
  "The Anki button shows how many notes the word already has. All decks also finds notes from other decks and note types, such as cards made with Yomitan, with a field that is exactly the word.":
    "Przycisk Anki pokazuje, ile notatek ma już to słowo. Wszystkie talie znajduje też notatki z innych talii i typów notatek, np. karty z Yomitan, z polem dokładnie równym słowu.",
  "This deck": "Ta talia",
  "This deck and all decks": "Ta talia i wszystkie talie",
};

export default ankiMining;
