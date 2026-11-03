// Subtitle dictionary: word lookups in the subtitles and word audio.
const subtitleDictionary: Record<string, string> = {
  "Subtitle dictionary": "Словарь субтитров",
  "Look up words in subtitles": "Искать слова в субтитрах",
  "Works with Harbor's subtitles and with styled (ASS) subtitles drawn by mpv. Image subtitles (PGS) have no text to look up.":
    "Работает с субтитрами Harbor и со стилизованными субтитрами (ASS), которые рисует mpv. У графических субтитров (PGS) нет текста для поиска.",
  "Pause while the popup is open": "Пауза, пока открыто окно",
  "Resumes when the popup closes.": "Воспроизведение продолжится, когда окно закроется.",
  "Keep the popup open when the mouse leaves": "Не закрывать окно, когда уходит мышь",
  "The popup (and the pause) stays until you click outside it or press Escape.":
    "Окно (и пауза) остаётся, пока вы не щёлкнете вне его или не нажмёте Escape.",
  "Look up with": "Искать по",
  "Hover looks words up as the mouse passes over them. With a key, hold it while hovering (or press it on a word) and plain hovering does nothing. Clicking a word always looks it up.":
    "При наведении слова ищутся, когда над ними проходит мышь. С клавишей удерживайте её при наведении (или нажмите её на слове), и простое наведение ничего не делает. Щелчок по слову всегда запускает поиск.",
  Hover: "Наведению",
  "Hold Shift": "Удержанию Shift",
  "Hold Ctrl": "Удержанию Ctrl",
  "Hold Alt": "Удержанию Alt",
  "Scan delay (in milliseconds)": "Задержка поиска (в миллисекундах)",
  "Wait before looking up the word under the mouse when no key is required. Lower is faster; higher avoids lookups while the mouse just passes over the subtitle.":
    "Ожидание перед поиском слова под мышью, когда клавиша не нужна. Меньше — быстрее; больше — меньше лишних поисков, когда мышь просто проходит над субтитрами.",
  "Keep subtitles above the seek bar": "Держать субтитры над полосой перемотки",
  "The seek bar covers the lowest subtitle line, so lift the subtitles above it while you look words up.":
    "Полоса перемотки закрывает нижнюю строку субтитров, поэтому поднимайте субтитры над ней, пока ищете слова.",
  "Same setting as Player → Subtitles.": "Та же настройка, что Плеер → Субтитры.",
  "Subtitle height": "Высота субтитров",
  "Distance from the bottom of the video.": "Расстояние от нижнего края видео.",
  "Subtitle language": "Язык субтитров",
  "Picks the deinflection rules used for lookups.":
    "Выбирает правила снятия словоизменения при поиске.",
  "Loading dictionaries…": "Загрузка словарей…",
  "No dictionaries yet. Import Yomitan .zip files such as JMdict or Jitendex.":
    "Словарей пока нет. Импортируйте файлы .zip Yomitan, например JMdict или Jitendex.",
  "Importing {name}…": "Импорт {name}…",
  "Import dictionary (.zip)": "Импортировать словарь (.zip)",
  "Word audio": "Аудио слова",
  "No database selected": "База не выбрана",
  "Choose database": "Выбрать базу",
  "(empty)": "(пусто)",
  "Download the desktop app to look up words while you watch.":
    "Скачайте настольное приложение, чтобы искать слова во время просмотра.",
  Greek: "Греческий",
  Latin: "Латынь",
  Controller: "Контроллер",
  Dictionary: "Словарь",
  "Hover a word in the subtitles to look it up in your Yomitan dictionaries and hear it. Uses Manatan's dictionary engine.":
    "Наведите на слово в субтитрах, чтобы найти его в словарях Yomitan и прослушать. Использует словарный движок Manatan.",
  "Plays pronunciations from a local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Воспроизводит произношения из базы local-audio-yomichan (Forvo, NHK16, Shinmeikai8, JPod101). Выберите android.db или entries.db рядом с папками *_files. Версия Flatpak умеет читать только android.db.",
  "Subtitle dictionary lookups and word audio run in the Harbor desktop app.":
    "Поиск в словаре субтитров и аудио слов работают в настольном приложении Harbor.",
};

export default subtitleDictionary;
