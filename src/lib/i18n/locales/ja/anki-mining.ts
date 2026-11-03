// Anki cards from the dictionary popup.
const ankiMining: Record<string, string> = {
  "Hover a word in the subtitles to look it up in your Yomitan dictionaries, hear it and add it to Anki. Uses Manatan's dictionary engine.":
    "字幕の単語にカーソルを合わせると、Yomitan 辞書で調べたり、発音を聞いたり、Anki に追加したりできます。Manatan の辞書エンジンを使用します。",
  "Open the popup for words no dictionary contains, with only the AI explanation, so they can still go to Anki.":
    "どの辞書にもない単語でも AI 解説だけでポップアップを開き、Anki に送れるようにします。",
  "Plays and mines pronunciations from a local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "local-audio-yomichan データベース（Forvo、NHK16、Shinmeikai8、JPod101）から発音を再生・追加します。android.db、または *_files フォルダーの隣にある entries.db を選んでください。Flatpak 版は android.db のみ読めます。",
  "Connected to Anki": "Anki に接続しました",
  Anki: "Anki",
  "Adds cards through AnkiConnect with the word, sentence, definitions, a screenshot, the sentence audio and the word audio. Anki must be open with the AnkiConnect add-on.":
    "AnkiConnect を通じて、単語、例文、定義、スクリーンショット、例文の音声、単語の音声を含むカードを追加します。AnkiConnect アドオンを入れた Anki を開いておく必要があります。",
  "AnkiConnect address": "AnkiConnect のアドレス",
  Deck: "デッキ",
  "Choose…": "選択…",
  "Connect first": "先に接続してください",
  "Note type": "ノートタイプ",
  Fields: "フィールド",
  "Auto-fill": "自動入力",
  "Separated by spaces.": "スペースで区切ります。",
  "Sentence audio padding": "例文音声の余白",
  "Seconds added before and after the subtitle line.": "字幕の行の前後に追加する秒数です。",
  "Animated clip format": "アニメーションクリップの形式",
  "For fields set to the animated clip. AVIF is smallest; WebP and GIF play in older Anki versions. Falls back to WebP, then GIF, if an encoder is missing.":
    "アニメーションクリップを設定したフィールド用です。AVIF が最も小さく、WebP と GIF は古い Anki でも再生できます。エンコーダーがない場合は WebP、次に GIF に切り替えます。",
  "Animated clip size": "アニメーションクリップのサイズ",
  "Width in pixels and frames per second. Clips stop after 12 seconds.":
    "幅（ピクセル）とフレームレート。クリップは 12 秒で止まります。",
  "Allow duplicate cards": "重複カードを許可",
  "When off, words already in the deck are refused.":
    "オフの場合、デッキにすでにある単語は拒否されます。",
  "Subtitle dictionary lookups, word audio and Anki mining run in the Harbor desktop app.":
    "字幕辞書の検索、単語の音声、Anki への追加は Harbor デスクトップアプリで動作します。",
  Word: "単語",
  "Word with furigana": "ふりがな付きの単語",
  "Definitions (all)": "定義（すべて）",
  "Definition (first dictionary)": "定義（最初の辞書）",
  Sentence: "例文",
  "Sentence (word in bold)": "例文（単語を太字）",
  "Sentence (word as cloze)": "例文（単語を穴埋め）",
  "Sentence audio": "例文の音声",
  "Word audio (local)": "単語の音声（ローカル）",
  "Animated clip of the line (AVIF/WebP/GIF)": "行のアニメーションクリップ（AVIF/WebP/GIF）",
  Frequency: "頻度",
  "Pitch accent": "ピッチアクセント",
  "Title / episode": "タイトル / エピソード",
  "Text selected in the popup (else first definition)":
    "ポップアップで選択したテキスト（なければ最初の定義）",
  "Add to Anki": "Anki に追加",
  "Dictionary & Anki": "辞書と Anki",
  "Look up words in subtitles with your Yomitan dictionaries, hear them, get AI explanations and turn them into Anki cards.":
    "字幕の単語を Yomitan 辞書で調べ、発音を聞き、AI 解説を表示して、Anki カードにできます。",
  "Cards of the word": "単語のカード",
  "The Anki button shows how many notes the word already has. All decks also finds notes from other decks and note types, such as cards made with Yomitan, with a field that is exactly the word.":
    "Anki ボタンに、その単語のノートがすでに何件あるかを表示します。「すべてのデッキ」では、Yomitan で作ったカードなど、ほかのデッキやノートタイプでフィールドが単語と完全に一致するノートも数えます。",
  "This deck": "このデッキ",
  "This deck and all decks": "このデッキとすべてのデッキ",
};

export default ankiMining;
