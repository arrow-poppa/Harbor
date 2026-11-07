// Word audio sources: recorded and synthesized voices for looked-up words.
const wordAudioSources: Record<string, string> = {
  "Plays the looked-up word and adds it to Anki cards. Sources are tried from top to bottom, and pressing the audio button again plays the next voice. Online sources send the word to their site.":
    "調べた単語の音声を再生し、Anki カードに追加します。ソースは上から順に試され、音声ボタンをもう一度押すと次の音声を再生します。オンラインのソースは単語をそのサイトに送信します。",
  "Local audio database": "ローカル音声データベース",
  "Custom URL": "カスタム URL",
  "Custom URL (JSON)": "カスタム URL（JSON）",
  "Automatic picks a voice for the lookup language.": "「自動」では、検索言語の音声が選ばれます。",
  "The reading (kana), when there is one": "読み（かな）がある場合は読み",
  "The word as written": "表記どおりの単語",
  URL: "URL",
  "A local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "local-audio-yomichan データベース（Forvo、NHK16、Shinmeikai8、JPod101）。android.db、または *_files フォルダーの隣にある entries.db を選んでください。Flatpak 版は android.db のみ読めます。",
  "Recorded Japanese words from JapanesePod101.": "JapanesePod101 の日本語単語の録音です。",
  "Recorded words from the LanguagePod101 sites, in about 35 languages.":
    "LanguagePod101 各サイトの単語の録音です（約 35 言語）。",
  "Recorded Japanese words from Jisho.org.": "Jisho.org の日本語単語の録音です。",
  "Recordings shared on Wikimedia Commons by Lingua Libre speakers.":
    "Lingua Libre の話者が Wikimedia Commons で共有した録音です。",
  "Wiktionary recordings on Wikimedia Commons.":
    "Wikimedia Commons にあるウィクショナリーの録音です。",
  "Microsoft Edge's online neural voices, the same ones the eBook narration uses.":
    "Microsoft Edge のオンライン ニューラル音声で、電子書籍の読み上げと同じものです。",
  "An audio file at your own URL. {term}, {reading} and {language} are filled in.":
    "独自の URL にある音声ファイルです。{term}、{reading}、{language} が埋め込まれます。",
  "A URL that answers with a list of audio files, such as a local audio server. {term}, {reading} and {language} are filled in.":
    "ローカル音声サーバーのように、音声ファイルの一覧を返す URL です。{term}、{reading}、{language} が埋め込まれます。",
  "Only when no other source has audio": "他のソースに音声がない場合のみ",
  "Synthesized speech is used only if no recorded voice is found for the word.":
    "単語の録音が見つからない場合にのみ合成音声を使います。",
};

export default wordAudioSources;
