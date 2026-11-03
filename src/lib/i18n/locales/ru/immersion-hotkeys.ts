// Immersion hotkeys, picking words in the subtitles and controller buttons in the hotkey list.
const immersionHotkeys: Record<string, string> = {
  "audio card": "аудиокарточка",
  "last card": "последняя карточка",
  "new card": "новая карточка",
  "Still adding the previous card…": "Предыдущая карточка ещё добавляется…",
  "Updated card in {deck}": "Карточка обновлена в {deck}",
  "Added to {deck}": "Добавлено в {deck}",
  "{n}s recorded": "Записано {n} с",
  "Recording → {target}. Press again to stop.":
    "Запись → {target}. Нажмите ещё раз, чтобы остановить.",
  "the video went back since the recording started": "видео перемотали назад после начала записи",
  "too short": "слишком коротко",
  "longer than the {n}s limit": "длиннее лимита в {n} с",
  "Recording discarded: {reason}": "Запись отменена: {reason}",
  "Stopped · {n}s recorded · adding card…": "Остановлено · записано {n} с · добавляю карточку…",
  "Anki cards from the player need the mpv player in the desktop app.":
    "Для карточек Anki из плеера нужен плеер mpv в настольном приложении.",
  "No subtitle on screen. Use a Record shortcut for parts without subtitles.":
    "На экране нет субтитров. Для фрагментов без субтитров используйте сочетание «Запись».",
  Immersion: "Погружение",
  "Cards straight from the player, without looking a word up: from the subtitle on screen, or from a stretch you record with two presses of the same key (works without subtitles). Set the keys in Settings → Hotkeys → Immersion. mpv only.":
    "Карточки прямо из плеера, без поиска слова: из субтитров на экране или из фрагмента, записанного двумя нажатиями одной клавиши (работает без субтитров). Назначьте клавиши в Настройки → Горячие клавиши → Погружение. Только mpv.",
  "Sentence cards": "Карточки с предложением",
  "Pick a deck and note type above": "Выберите колоду и тип записи выше",
  "Map a field to Sentence audio above": "Назначьте выше поле для аудио предложения",
  "Audio cards": "Аудиокарточки",
  "Audio card deck": "Колода аудиокарточек",
  "Audio card note type": "Тип записи аудиокарточек",
  "Audio field": "Поле аудио",
  "Gets the audio of the line or of the recording.": "Получает аудио строки или записи.",
  "Pick a note type first": "Сначала выберите тип записи",
  "Sentence field (optional)": "Поле предложения (необязательно)",
  "Gets the subtitle text, when there is one.": "Получает текст субтитров, если он есть.",
  "Update last card window": "Окно для «Обновить последнюю карточку»",
  "Update last card only touches a card added this many minutes ago or less.":
    "«Обновить последнюю карточку» меняет только карточку, добавленную не больше этого числа минут назад.",
  "Longest recording": "Самая длинная запись",
  "A recording longer than this is discarded. Animated clips still stop after 12 seconds.":
    "Более длинная запись отменяется. Анимированные клипы всё равно обрываются через 12 секунд.",
  "Long seek": "Длинный переход",
  "The jump of the Long seek back and Long seek forward shortcuts.":
    "Шаг сочетаний «Длинный переход назад» и «Длинный переход вперёд».",
  "Slow speed": "Медленная скорость",
  "The speed the Toggle slow speed shortcut switches to from normal speed.":
    "Скорость, на которую сочетание «Переключить медленную скорость» переходит с обычной.",
  "Toggle subtitles on/off": "Включить/выключить субтитры",
  "Hide every subtitle (primary and secondary), or show the primary again. Hidden subtitles still work for line seeking, replay and Anki cards.":
    "Скрывает все субтитры (основные и дополнительные) или снова показывает основные. Скрытые субтитры по-прежнему работают для перехода по строкам, повтора и карточек Anki.",
  "Next subtitle line": "Следующая строка субтитров",
  "Jump to the start of the next subtitle line.": "Переходит к началу следующей строки субтитров.",
  "Previous subtitle line": "Предыдущая строка субтитров",
  "Jump to the start of the previous subtitle line.":
    "Переходит к началу предыдущей строки субтитров.",
  "Toggle slow speed": "Переключить медленную скорость",
  "Switch between normal speed and the slow speed set under Behavior (0.5x by default).":
    "Переключает между обычной скоростью и медленной, заданной в разделе «Поведение» (по умолчанию 0,5x).",
  "Anki: card from the subtitle": "Anki: карточка из субтитров",
  "Anki: update last card": "Anki: обновить последнюю карточку",
  "Anki: audio card": "Anki: аудиокарточка",
  "Add an audio-only card from the line on screen, using the audio card deck. mpv only.":
    "Добавляет карточку только с аудио из строки на экране, используя колоду аудиокарточек. Только mpv.",
  "Record → new card": "Запись → новая карточка",
  "Record → update last card": "Запись → обновить последнюю карточку",
  "Record → audio card": "Запись → аудиокарточка",
  "Press once to start recording, again to stop and add an audio card with that stretch. Works without subtitles. mpv only.":
    "Нажмите один раз, чтобы начать запись, и ещё раз, чтобы остановить и добавить аудиокарточку с этим фрагментом. Работает без субтитров. Только mpv.",
  "Long seek back": "Длинный переход назад",
  "Jump back by the Long seek step set under Behavior (30 seconds by default).":
    "Перематывает назад на длинный шаг, заданный в разделе «Поведение» (по умолчанию 30 секунд).",
  "Long seek forward": "Длинный переход вперёд",
  "Jump forward by the Long seek step set under Behavior (30 seconds by default).":
    "Перематывает вперёд на длинный шаг, заданный в разделе «Поведение» (по умолчанию 30 секунд).",
  "Replay current subtitle": "Повторить текущие субтитры",
  "Go back to the start of the line on screen and play it again, or of the last line shown when there is none.":
    "Возвращается к началу строки на экране и проигрывает её снова, а если её нет — последней показанной.",
  "Card from the subtitle, Update last card and the Record → card keys use the deck, note type and fields of the Anki section above. With a word selected in the subtitles (highlighted while picking a word, or in an open popup) every mapped field is filled, word and definitions included; without one only the sentence, sentence audio, screenshot or clip and title fields are.":
    "Сочетания «Карточка из субтитров», «Обновить последнюю карточку» и «Запись → карточка» используют колоду, тип записи и поля из раздела Anki выше. Если в субтитрах выбрано слово (выделено при выборе слова или показано в открытом окне), заполняются все назначенные поля, включая слово и определения; без него — только предложение, аудио предложения, снимок или клип и название.",
  "Add a card from the line on screen with its sentence, audio and picture, using the deck and fields under Dictionary & Anki. With a word selected in the subtitles, the word and its definitions go on the card too. mpv only.":
    "Добавляет карточку из строки на экране с предложением, аудио и изображением, используя колоду и поля из раздела «Словарь и Anki». Если в субтитрах выбрано слово, в карточку попадают и слово с определениями. Только mpv.",
  "Put the line on screen (sentence, audio, picture) into the newest card of the deck, if it was added in the last few minutes. With a word selected, the word and its definitions too. mpv only.":
    "Помещает строку с экрана (предложение, аудио, изображение) в самую новую карточку колоды, если она добавлена в последние минуты. Если выбрано слово — также слово и определения. Только mpv.",
  "Press once to start recording, again to stop and add a card with that stretch. Works without subtitles. With a word selected when you stop, the word and its definitions go on the card too. mpv only.":
    "Нажмите один раз, чтобы начать запись, и ещё раз, чтобы остановить и добавить карточку с этим фрагментом. Работает без субтитров. Если при остановке выбрано слово, в карточку попадают и слово с определениями. Только mpv.",
  "Press once to start recording, again to stop and put that stretch into the newest card. Works without subtitles. With a word selected when you stop, the word and its definitions too. mpv only.":
    "Нажмите один раз, чтобы начать запись, и ещё раз, чтобы остановить и поместить фрагмент в самую новую карточку. Работает без субтитров. Если при остановке выбрано слово — также слово и определения. Только mpv.",
  "Added {word} to {deck}": "{word} добавлено в {deck}",
  "Updated card in {deck} with {word}": "Карточка в {deck} обновлена словом {word}",
  "Bigger dictionary popup": "Увеличить окно словаря",
  "Make the subtitle dictionary popup 10% bigger. Saved as the Popup size setting.":
    "Увеличивает окно словаря субтитров на 10%. Сохраняется в настройке «Размер окна».",
  "Smaller dictionary popup": "Уменьшить окно словаря",
  "Make the subtitle dictionary popup 10% smaller. Saved as the Popup size setting.":
    "Уменьшает окно словаря субтитров на 10%. Сохраняется в настройке «Размер окна».",
  "Dictionary popup size: {n}%": "Размер окна словаря: {n}%",
  "Popup size": "Размер окна",
  "Scales the whole popup: text, buttons and width. Bigger sizes help on a TV. The Bigger/Smaller dictionary popup hotkeys change it too.":
    "Масштабирует всё окно: текст, кнопки и ширину. Крупный размер удобен на телевизоре. Горячие клавиши «Увеличить/Уменьшить окно словаря» тоже его меняют.",
  "Speed step": "Шаг скорости",
  "How much the Speed down and Speed up shortcuts change the speed per press.":
    "Насколько горячие клавиши «Медленнее» и «Быстрее» меняют скорость за одно нажатие.",
  "Slow playback by the Speed step set under Behavior (0.25x by default).":
    "Замедляет воспроизведение на шаг скорости из раздела «Поведение» (по умолчанию 0,25x).",
  "Speed playback up by the Speed step set under Behavior (0.25x by default).":
    "Ускоряет воспроизведение на шаг скорости из раздела «Поведение» (по умолчанию 0,25x).",
  "No subtitle on screen to pick a word from.":
    "На экране нет субтитров, из которых можно выбрать слово.",
  "Turn on Look up words in subtitles under Dictionary & Anki to pick words.":
    "Включите «Искать слова в субтитрах» в разделе «Словарь и Anki», чтобы выбирать слова.",
  "Controller buttons go next to each key: press one, or hold LB, RB, LT or RT and press another for a combination. A shoulder or trigger used in a combination does its own job when you let go of it.":
    "Кнопки контроллера стоят рядом с каждой клавишей: нажмите одну или удерживайте LB, RB, LT или RT и нажмите другую для сочетания. Бампер или курок, используемый в сочетании, выполняет свою функцию, когда вы его отпускаете.",
  "To bind controller buttons, connect a controller and turn on controller support under Controllers.":
    "Чтобы назначить кнопки контроллера, подключите контроллер и включите поддержку контроллеров в разделе «Контроллеры».",
  "Word lookup": "Выбор слов",
  "While picking a word in the subtitles with the Pick a word in the subtitles shortcut. These keys take over only then, so they can reuse the player's.":
    "Пока вы выбираете слово в субтитрах сочетанием «Выбрать слово в субтитрах». Эти клавиши действуют только в это время, поэтому могут повторять клавиши плеера.",
  "{key} is used for {action}.": "{key} уже используется для «{action}».",
  "Remove {key} from {name}": "Убрать {key} из «{name}»",
  "Use it here": "Использовать здесь",
  "Press a button…": "Нажмите кнопку…",
  "Add a controller button for {name}": "Добавить кнопку контроллера для «{name}»",
  "Pick a word in the subtitles": "Выбрать слово в субтитрах",
  "Pause and select the first word of the subtitle to look it up without the mouse. Move between words with the Word lookup keys; press again to leave.":
    "Ставит на паузу и выделяет первое слово субтитров, чтобы найти его без мыши. Переходите между словами клавишами «Выбора слов»; нажмите ещё раз, чтобы выйти.",
  "Next word": "Следующее слово",
  "Select and look up the next word.": "Выделяет и ищет следующее слово.",
  "Previous word": "Предыдущее слово",
  "Select and look up the previous word.": "Выделяет и ищет предыдущее слово.",
  "Line above": "Строка выше",
  "Go to the first word of the subtitle line above.":
    "Переходит к первому слову строки субтитров выше.",
  "Line below": "Строка ниже",
  "Go to the first word of the subtitle line below.":
    "Переходит к первому слову строки субтитров ниже.",
  "Add the selected word to Anki, like the Anki button in the popup.":
    "Добавляет выделенное слово в Anki, как кнопка Anki в окне.",
  "Generate AI explanation": "Создать объяснение ИИ",
  "Generate the AI explanation of the word, or generate it again.":
    "Создаёт объяснение слова с помощью ИИ или создаёт его заново.",
  "Play word audio": "Воспроизвести аудио слова",
  "Play the word's local audio; press again for the next voice.":
    "Воспроизводит локальное аудио слова; нажмите ещё раз для следующего голоса.",
  "Scroll popup down": "Прокрутить окно вниз",
  "Scroll the definitions down. On a controller the right stick scrolls too.":
    "Прокручивает определения вниз. На контроллере прокручивает и правый стик.",
  "Scroll popup up": "Прокрутить окно вверх",
  "Scroll the definitions up.": "Прокручивает определения вверх.",
  "Leave word lookup": "Выйти из выбора слов",
  Words: "Слова",
  Popup: "Окно",
  "Show the popup": "Показать окно",
  "Open or close the dictionary popup for the selected word. Moving to another word closes it.":
    "Открывает или закрывает окно словаря для выделенного слова. Переход к другому слову закрывает его.",
  "Clear the shortcut for {name}": "Очистить сочетание для «{name}»",
  "Clear the shortcut": "Очистить сочетание",
};

export default immersionHotkeys;
