// Immersion hotkeys, picking words in the subtitles and controller buttons in the hotkey list.
const immersionHotkeys: Record<string, string> = {
  "audio card": "音声カード",
  "last card": "最後のカード",
  "new card": "新しいカード",
  "Still adding the previous card…": "前のカードを追加中です…",
  "Updated card in {deck}": "{deck} のカードを更新しました",
  "Added to {deck}": "{deck} に追加しました",
  "{n}s recorded": "{n}秒を録音",
  "Recording → {target}. Press again to stop.": "録音中 → {target}。もう一度押すと停止します。",
  "the video went back since the recording started": "録音開始後に動画が巻き戻されました",
  "too short": "短すぎます",
  "longer than the {n}s limit": "上限の{n}秒を超えています",
  "Recording discarded: {reason}": "録音を破棄しました: {reason}",
  "Stopped · {n}s recorded · adding card…": "停止 · {n}秒を録音 · カードを追加中…",
  "Anki cards from the player need the mpv player in the desktop app.":
    "プレーヤーからの Anki カードには、デスクトップアプリの mpv プレーヤーが必要です。",
  "No subtitle on screen. Use a Record shortcut for parts without subtitles.":
    "画面に字幕がありません。字幕のない部分には録音のショートカットを使ってください。",
  Immersion: "イマージョン",
  "Cards straight from the player, without looking a word up: from the subtitle on screen, or from a stretch you record with two presses of the same key (works without subtitles). Set the keys in Settings → Hotkeys → Immersion. mpv only.":
    "単語を調べずにプレーヤーから直接カードを作ります。画面の字幕から、または同じキーを 2 回押して録音した区間から作れます（字幕なしでも可）。キーは 設定 → ショートカット → イマージョン で設定します。mpv のみ。",
  "Sentence cards": "例文カード",
  "Pick a deck and note type above": "上でデッキとノートタイプを選んでください",
  "Map a field to Sentence audio above": "上でフィールドを「例文の音声」に割り当ててください",
  "Audio cards": "音声カード",
  "Audio card deck": "音声カードのデッキ",
  "Audio card note type": "音声カードのノートタイプ",
  "Audio field": "音声フィールド",
  "Gets the audio of the line or of the recording.": "行または録音の音声が入ります。",
  "Pick a note type first": "先にノートタイプを選んでください",
  "Sentence field (optional)": "例文フィールド（任意）",
  "Gets the subtitle text, when there is one.": "字幕がある場合はそのテキストが入ります。",
  "Update last card window": "「最後のカードを更新」の対象期間",
  "Update last card only touches a card added this many minutes ago or less.":
    "「最後のカードを更新」は、この分数以内に追加されたカードだけを変更します。",
  "Longest recording": "録音の最大長",
  "A recording longer than this is discarded. Animated clips still stop after 12 seconds.":
    "これより長い録音は破棄されます。アニメーションクリップは引き続き 12 秒で止まります。",
  "Long seek": "長いシーク",
  "The jump of the Long seek back and Long seek forward shortcuts.":
    "「長く戻る」「長く進む」ショートカットのジャンプ幅です。",
  "Slow speed": "低速",
  "The speed the Toggle slow speed shortcut switches to from normal speed.":
    "「低速を切り替え」ショートカットが通常速度から切り替える速度です。",
  "Toggle subtitles on/off": "字幕のオン/オフ",
  "Hide every subtitle (primary and secondary), or show the primary again. Hidden subtitles still work for line seeking, replay and Anki cards.":
    "すべての字幕（メインとサブ）を隠すか、メイン字幕をもう一度表示します。隠している間も、行の移動・リプレイ・Anki カードには使えます。",
  "Next subtitle line": "次の字幕行",
  "Jump to the start of the next subtitle line.": "次の字幕行の先頭へ移動します。",
  "Previous subtitle line": "前の字幕行",
  "Jump to the start of the previous subtitle line.": "前の字幕行の先頭へ移動します。",
  "Toggle slow speed": "低速を切り替え",
  "Switch between normal speed and the slow speed set under Behavior (0.5x by default).":
    "通常速度と、動作で設定した低速（既定は 0.5x）を切り替えます。",
  "Anki: card from the subtitle": "Anki: 字幕からカード",
  "Anki: update last card": "Anki: 最後のカードを更新",
  "Anki: audio card": "Anki: 音声カード",
  "Add an audio-only card from the line on screen, using the audio card deck. mpv only.":
    "画面の行から音声だけのカードを、音声カードのデッキに追加します。mpv のみ。",
  "Record → new card": "録音 → 新しいカード",
  "Record → update last card": "録音 → 最後のカードを更新",
  "Record → audio card": "録音 → 音声カード",
  "Press once to start recording, again to stop and add an audio card with that stretch. Works without subtitles. mpv only.":
    "1 回押すと録音を開始し、もう一度押すと停止してその区間で音声カードを追加します。字幕なしでも使えます。mpv のみ。",
  "Long seek back": "長く戻る",
  "Jump back by the Long seek step set under Behavior (30 seconds by default).":
    "動作で設定した長いシークの幅だけ戻ります（既定は 30 秒）。",
  "Long seek forward": "長く進む",
  "Jump forward by the Long seek step set under Behavior (30 seconds by default).":
    "動作で設定した長いシークの幅だけ進みます（既定は 30 秒）。",
  "Replay current subtitle": "現在の字幕をもう一度再生",
  "Go back to the start of the line on screen and play it again, or of the last line shown when there is none.":
    "画面の行の先頭に戻ってもう一度再生します。行がない場合は最後に表示された行の先頭に戻ります。",
  "Card from the subtitle, Update last card and the Record → card keys use the deck, note type and fields of the Anki section above. With a word selected in the subtitles (highlighted while picking a word, or in an open popup) every mapped field is filled, word and definitions included; without one only the sentence, sentence audio, screenshot or clip and title fields are.":
    "「字幕からカード」「最後のカードを更新」「録音 → カード」のキーは、上の Anki セクションのデッキ、ノートタイプ、フィールドを使います。字幕で単語を選んでいる場合（単語を選ぶモードで強調表示中、または開いているポップアップ）は、単語と定義を含むすべての割り当て済みフィールドが入力されます。選んでいない場合は、例文、例文の音声、スクリーンショットまたはクリップ、タイトルだけです。",
  "Add a card from the line on screen with its sentence, audio and picture, using the deck and fields under Dictionary & Anki. With a word selected in the subtitles, the word and its definitions go on the card too. mpv only.":
    "画面の行から、例文・音声・画像付きのカードを、辞書と Anki のデッキとフィールドで追加します。字幕で単語を選んでいる場合は、単語と定義もカードに入ります。mpv のみ。",
  "Put the line on screen (sentence, audio, picture) into the newest card of the deck, if it was added in the last few minutes. With a word selected, the word and its definitions too. mpv only.":
    "画面の行（例文、音声、画像）を、数分以内に追加されたデッキの最新カードに入れます。単語を選んでいる場合は、単語と定義も入れます。mpv のみ。",
  "Press once to start recording, again to stop and add a card with that stretch. Works without subtitles. With a word selected when you stop, the word and its definitions go on the card too. mpv only.":
    "1 回押すと録音を開始し、もう一度押すと停止してその区間でカードを追加します。字幕なしでも使えます。停止時に単語を選んでいる場合は、単語と定義もカードに入ります。mpv のみ。",
  "Press once to start recording, again to stop and put that stretch into the newest card. Works without subtitles. With a word selected when you stop, the word and its definitions too. mpv only.":
    "1 回押すと録音を開始し、もう一度押すと停止してその区間を最新のカードに入れます。字幕なしでも使えます。停止時に単語を選んでいる場合は、単語と定義も入れます。mpv のみ。",
  "Added {word} to {deck}": "{word} を {deck} に追加しました",
  "Updated card in {deck} with {word}": "{deck} のカードを {word} で更新しました",
  "Bigger dictionary popup": "辞書ポップアップを大きく",
  "Make the subtitle dictionary popup 10% bigger. Saved as the Popup size setting.":
    "字幕の辞書ポップアップを 10% 大きくします。「ポップアップのサイズ」設定に保存されます。",
  "Smaller dictionary popup": "辞書ポップアップを小さく",
  "Make the subtitle dictionary popup 10% smaller. Saved as the Popup size setting.":
    "字幕の辞書ポップアップを 10% 小さくします。「ポップアップのサイズ」設定に保存されます。",
  "Dictionary popup size: {n}%": "辞書ポップアップのサイズ: {n}%",
  "Popup size": "ポップアップのサイズ",
  "Scales the whole popup: text, buttons and width. Bigger sizes help on a TV. The Bigger/Smaller dictionary popup hotkeys change it too.":
    "ポップアップ全体（文字・ボタン・幅）を拡大縮小します。テレビでは大きめが見やすくなります。「辞書ポップアップを大きく／小さく」のショートカットでも変更できます。",
  "Speed step": "速度の刻み",
  "How much the Speed down and Speed up shortcuts change the speed per press.":
    "「再生速度を下げる」「再生速度を上げる」ショートカットを 1 回押すごとに変わる速度の量です。",
  "Slow playback by the Speed step set under Behavior (0.25x by default).":
    "「動作」で設定した速度の刻みだけ再生を遅くします（既定は 0.25x）。",
  "Speed playback up by the Speed step set under Behavior (0.25x by default).":
    "「動作」で設定した速度の刻みだけ再生を速くします（既定は 0.25x）。",
  "No subtitle on screen to pick a word from.": "単語を選べる字幕が画面にありません。",
  "Turn on Look up words in subtitles under Dictionary & Anki to pick words.":
    "単語を選ぶには、辞書と Anki で「字幕の単語を調べる」をオンにしてください。",
  "Controller buttons go next to each key: press one, or hold LB, RB, LT or RT and press another for a combination. A shoulder or trigger used in a combination does its own job when you let go of it.":
    "コントローラーのボタンは各キーの横に並びます。1 つ押すか、LB・RB・LT・RT を押しながら別のボタンを押すと組み合わせになります。組み合わせに使う肩ボタンやトリガーは、離したときに本来の操作をします。",
  "To bind controller buttons, connect a controller and turn on controller support under Controllers.":
    "コントローラーのボタンを割り当てるには、コントローラーを接続し、コントローラーで対応をオンにしてください。",
  "Word lookup": "単語の検索",
  "While picking a word in the subtitles with the Pick a word in the subtitles shortcut. These keys take over only then, so they can reuse the player's.":
    "「字幕の単語を選ぶ」ショートカットで字幕の単語を選んでいる間だけ有効なキーです。そのため、プレーヤーのキーと重なっても問題ありません。",
  "{key} is used for {action}.": "{key} はすでに {action} に使われています。",
  "Remove {key} from {name}": "{name} から {key} を外す",
  "Use it here": "ここで使う",
  "Press a button…": "ボタンを押してください…",
  "Add a controller button for {name}": "{name} にコントローラーのボタンを追加",
  "Pick a word in the subtitles": "字幕の単語を選ぶ",
  "Pause and select the first word of the subtitle to look it up without the mouse. Move between words with the Word lookup keys; press again to leave.":
    "一時停止して字幕の最初の単語を選び、マウスなしで調べられるようにします。「単語の検索」のキーで単語間を移動し、もう一度押すと終了します。",
  "Next word": "次の単語",
  "Select and look up the next word.": "次の単語を選んで調べます。",
  "Previous word": "前の単語",
  "Select and look up the previous word.": "前の単語を選んで調べます。",
  "Line above": "上の行",
  "Go to the first word of the subtitle line above.": "上の字幕行の最初の単語へ移動します。",
  "Line below": "下の行",
  "Go to the first word of the subtitle line below.": "下の字幕行の最初の単語へ移動します。",
  "Add the selected word to Anki, like the Anki button in the popup.":
    "選んだ単語を、ポップアップの Anki ボタンと同じように Anki に追加します。",
  "Generate AI explanation": "AI 解説を生成",
  "Generate the AI explanation of the word, or generate it again.":
    "単語の AI 解説を生成、または再生成します。",
  "Play word audio": "単語の音声を再生",
  "Play the word's local audio; press again for the next voice.":
    "単語のローカル音声を再生します。もう一度押すと次の音声になります。",
  "Scroll popup down": "ポップアップを下にスクロール",
  "Scroll the definitions down. On a controller the right stick scrolls too.":
    "定義を下にスクロールします。コントローラーでは右スティックでもスクロールできます。",
  "Scroll popup up": "ポップアップを上にスクロール",
  "Scroll the definitions up.": "定義を上にスクロールします。",
  "Leave word lookup": "単語の検索を終了",
  Words: "単語",
  Popup: "ポップアップ",
  "Show the popup": "ポップアップを表示",
  "Open or close the dictionary popup for the selected word. Moving to another word closes it.":
    "選んだ単語の辞書ポップアップを開閉します。別の単語へ移動すると閉じます。",
  "Clear the shortcut for {name}": "{name} のショートカットを解除",
  "Clear the shortcut": "ショートカットを解除",
};

export default immersionHotkeys;
