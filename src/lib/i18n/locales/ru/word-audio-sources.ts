// Word audio sources: recorded and synthesized voices for looked-up words.
const wordAudioSources: Record<string, string> = {
  "Plays the looked-up word and adds it to Anki cards. Sources are tried from top to bottom, and pressing the audio button again plays the next voice. Online sources send the word to their site.":
    "Воспроизводит найденное слово и добавляет его в карточки Anki. Источники перебираются сверху вниз, а повторное нажатие кнопки звука включает следующий голос. Онлайн-источники отправляют слово на свой сайт.",
  "Local audio database": "Локальная база аудио",
  "Custom URL": "Свой URL",
  "Custom URL (JSON)": "Свой URL (JSON)",
  "Automatic picks a voice for the lookup language.":
    "«Автоматически» выбирает голос для языка поиска.",
  "The reading (kana), when there is one": "Чтение (кана), если оно есть",
  "The word as written": "Слово в написании",
  URL: "URL",
  "A local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "База local-audio-yomichan (Forvo, NHK16, Shinmeikai8, JPod101). Выберите android.db или entries.db рядом с папками *_files. Версия Flatpak умеет читать только android.db.",
  "Recorded Japanese words from JapanesePod101.": "Записи японских слов с JapanesePod101.",
  "Recorded words from the LanguagePod101 sites, in about 35 languages.":
    "Записи слов с сайтов LanguagePod101, примерно на 35 языках.",
  "Recorded Japanese words from Jisho.org.": "Записи японских слов с Jisho.org.",
  "Recordings shared on Wikimedia Commons by Lingua Libre speakers.":
    "Записи, которыми дикторы Lingua Libre поделились на Викискладе.",
  "Wiktionary recordings on Wikimedia Commons.": "Записи Викисловаря на Викискладе.",
  "Microsoft Edge's online neural voices, the same ones the eBook narration uses.":
    "Онлайн-нейроголоса Microsoft Edge — те же, что использует озвучка электронных книг.",
  "An audio file at your own URL. {term}, {reading} and {language} are filled in.":
    "Аудиофайл по вашему URL. {term}, {reading} и {language} подставляются.",
  "A URL that answers with a list of audio files, such as a local audio server. {term}, {reading} and {language} are filled in.":
    "URL, который возвращает список аудиофайлов, например локальный аудиосервер. {term}, {reading} и {language} подставляются.",
  "Only when no other source has audio": "Только если в других источниках нет аудио",
  "Synthesized speech is used only if no recorded voice is found for the word.":
    "Синтезированная речь используется, только если запись слова не найдена.",
};

export default wordAudioSources;
