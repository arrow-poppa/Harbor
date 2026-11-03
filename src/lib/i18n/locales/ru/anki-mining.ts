// Anki cards from the dictionary popup.
const ankiMining: Record<string, string> = {
  "Hover a word in the subtitles to look it up in your Yomitan dictionaries, hear it and add it to Anki. Uses Manatan's dictionary engine.":
    "Наведите на слово в субтитрах, чтобы найти его в словарях Yomitan, прослушать и добавить в Anki. Использует словарный движок Manatan.",
  "Open the popup for words no dictionary contains, with only the AI explanation, so they can still go to Anki.":
    "Открывает окно для слов, которых нет ни в одном словаре, только с объяснением ИИ, чтобы их всё равно можно было добавить в Anki.",
  "Plays and mines pronunciations from a local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Воспроизводит и добавляет произношения из базы local-audio-yomichan (Forvo, NHK16, Shinmeikai8, JPod101). Выберите android.db или entries.db рядом с папками *_files. Версия Flatpak умеет читать только android.db.",
  "Connected to Anki": "Подключено к Anki",
  Anki: "Anki",
  "Adds cards through AnkiConnect with the word, sentence, definitions, a screenshot, the sentence audio and the word audio. Anki must be open with the AnkiConnect add-on.":
    "Добавляет карточки через AnkiConnect со словом, предложением, определениями, снимком экрана, аудио предложения и аудио слова. Anki должно быть открыто с дополнением AnkiConnect.",
  "AnkiConnect address": "Адрес AnkiConnect",
  Deck: "Колода",
  "Choose…": "Выберите…",
  "Connect first": "Сначала подключитесь",
  "Note type": "Тип записи",
  Fields: "Поля",
  "Auto-fill": "Заполнить автоматически",
  "Separated by spaces.": "Через пробел.",
  "Sentence audio padding": "Запас для аудио предложения",
  "Seconds added before and after the subtitle line.":
    "Секунды, добавляемые до и после строки субтитров.",
  "Animated clip format": "Формат анимированного клипа",
  "For fields set to the animated clip. AVIF is smallest; WebP and GIF play in older Anki versions. Falls back to WebP, then GIF, if an encoder is missing.":
    "Для полей с анимированным клипом. AVIF самый компактный; WebP и GIF воспроизводятся в старых версиях Anki. Если кодека нет, используется WebP, затем GIF.",
  "Animated clip size": "Размер анимированного клипа",
  "Width in pixels and frames per second. Clips stop after 12 seconds.":
    "Ширина в пикселях и кадры в секунду. Клипы обрываются через 12 секунд.",
  "Allow duplicate cards": "Разрешить дубликаты карточек",
  "When off, words already in the deck are refused.":
    "Если выключено, слова, уже имеющиеся в колоде, отклоняются.",
  "Subtitle dictionary lookups, word audio and Anki mining run in the Harbor desktop app.":
    "Поиск в словаре субтитров, аудио слов и добавление в Anki работают в настольном приложении Harbor.",
  Word: "Слово",
  "Word with furigana": "Слово с фуриганой",
  "Definitions (all)": "Определения (все)",
  "Definition (first dictionary)": "Определение (первый словарь)",
  Sentence: "Предложение",
  "Sentence (word in bold)": "Предложение (слово жирным)",
  "Sentence (word as cloze)": "Предложение (слово как пропуск)",
  "Sentence audio": "Аудио предложения",
  "Word audio (local)": "Аудио слова (локальное)",
  "Animated clip of the line (AVIF/WebP/GIF)": "Анимированный клип строки (AVIF/WebP/GIF)",
  Frequency: "Частотность",
  "Pitch accent": "Тональное ударение",
  "Title / episode": "Название / эпизод",
  "Text selected in the popup (else first definition)":
    "Текст, выделенный в окне (иначе первое определение)",
  "Add to Anki": "Добавить в Anki",
  "Dictionary & Anki": "Словарь и Anki",
  "Look up words in subtitles with your Yomitan dictionaries, hear them, get AI explanations and turn them into Anki cards.":
    "Ищите слова из субтитров в словарях Yomitan, слушайте их, получайте объяснения от ИИ и превращайте их в карточки Anki.",
  "Cards of the word": "Карточки слова",
  "The Anki button shows how many notes the word already has. All decks also finds notes from other decks and note types, such as cards made with Yomitan, with a field that is exactly the word.":
    "Кнопка Anki показывает, сколько заметок уже есть у слова. «Все колоды» находит и заметки из других колод и типов заметок, например карточки из Yomitan, с полем, в точности равным слову.",
  "This deck": "Эта колода",
  "This deck and all decks": "Эта колода и все колоды",
  "Definition (selected dictionary)": "Определение (выбранный словарь)",
};

export default ankiMining;
