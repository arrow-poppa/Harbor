// Subtitle dictionary: word lookups in the subtitles and word audio.
const subtitleDictionary: Record<string, string> = {
  "Subtitle dictionary": "字幕辞書",
  "Look up words in subtitles": "字幕の単語を調べる",
  "Works with Harbor's subtitles and with styled (ASS) subtitles drawn by mpv. Image subtitles (PGS) have no text to look up.":
    "Harbor の字幕と、mpv が描画するスタイル付き字幕（ASS）で使えます。画像字幕（PGS）には調べるテキストがありません。",
  "Pause while the popup is open": "ポップアップ表示中は一時停止",
  "Resumes when the popup closes.": "ポップアップを閉じると再開します。",
  "Keep the popup open when the mouse leaves": "マウスが離れてもポップアップを開いたままにする",
  "The popup (and the pause) stays until you click outside it or press Escape.":
    "ポップアップ（と一時停止）は、外側をクリックするか Escape を押すまで続きます。",
  "Look up with": "調べ方",
  "Hover looks words up as the mouse passes over them. With a key, hold it while hovering (or press it on a word) and plain hovering does nothing. Clicking a word always looks it up.":
    "ホバーでは、マウスが通過した単語を調べます。キーを使う場合は、ホバー中にキーを押し続ける（または単語の上で押す）必要があり、ホバーだけでは何も起きません。単語をクリックすると常に調べます。",
  Hover: "ホバー",
  "Hold Shift": "Shift を押しながら",
  "Hold Ctrl": "Ctrl を押しながら",
  "Hold Alt": "Alt を押しながら",
  "Scan delay (in milliseconds)": "検索の遅延（ミリ秒）",
  "Wait before looking up the word under the mouse when no key is required. Lower is faster; higher avoids lookups while the mouse just passes over the subtitle.":
    "キーが不要なとき、マウスの下の単語を調べるまでの待ち時間です。短いほど速く、長いほどマウスが字幕を通過するだけのときの検索を防ぎます。",
  "Same setting as Player → Subtitles.": "プレーヤー → 字幕 と同じ設定です。",
  "Subtitle height": "字幕の高さ",
  "Distance from the bottom of the video.": "動画の下端からの距離です。",
  "Subtitle language": "字幕の言語",
  "Picks the deinflection rules used for lookups.": "検索に使う活用解除のルールを選びます。",
  "Loading dictionaries…": "辞書を読み込み中…",
  "No dictionaries yet. Import Yomitan .zip files such as JMdict or Jitendex.":
    "辞書はまだありません。JMdict や Jitendex などの Yomitan .zip ファイルをインポートしてください。",
  "Importing {name}…": "{name} をインポート中…",
  "Import dictionary (.zip)": "辞書をインポート（.zip）",
  "Word audio": "単語の音声",
  "No database selected": "データベースが選択されていません",
  "Choose database": "データベースを選択",
  "(empty)": "（空）",
  "Download the desktop app to look up words while you watch.":
    "視聴中に単語を調べるにはデスクトップアプリをダウンロードしてください。",
  Greek: "ギリシャ語",
  Latin: "ラテン語",
  Controller: "コントローラー",
  Dictionary: "辞書",
};

export default subtitleDictionary;
