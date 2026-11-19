// Immersion hotkeys, picking words in the subtitles and controller buttons in the hotkey list.
const immersionHotkeys: Record<string, string> = {
  "audio card": "音频卡片",
  "last card": "上一张卡片",
  "new card": "新卡片",
  "Still adding the previous card…": "仍在添加上一张卡片…",
  "Updated card in {deck}": "已更新 {deck} 中的卡片",
  "Added to {deck}": "已添加到 {deck}",
  "{n}s recorded": "已录制 {n} 秒",
  "Recording → {target}. Press again to stop.": "正在录制 → {target}。再按一次停止。",
  "the video went back since the recording started": "录制开始后视频被倒回",
  "too short": "太短",
  "longer than the {n}s limit": "超过 {n} 秒的上限",
  "Recording discarded: {reason}": "已放弃录制：{reason}",
  "Stopped · {n}s recorded · adding card…": "已停止 · 已录制 {n} 秒 · 正在添加卡片…",
  "Anki cards from the player need the mpv player in the desktop app.":
    "在播放器中制作 Anki 卡片需要桌面应用中的 mpv 播放器。",
  "No subtitle on screen. Use a Record shortcut for parts without subtitles.":
    "屏幕上没有字幕。没有字幕的部分请使用录制快捷键。",
  Immersion: "沉浸",
  "Cards straight from the player, without looking a word up: from the subtitle on screen, or from a stretch you record with two presses of the same key (works without subtitles). Set the keys in Settings → Hotkeys → Immersion. mpv only.":
    "无需查词，直接从播放器制作卡片：来自屏幕上的字幕，或来自你按两次同一按键录制的片段（没有字幕也可以）。在 设置 → 快捷键 → 沉浸 中设置按键。仅限 mpv。",
  "Sentence cards": "句子卡片",
  "Pick a deck and note type above": "请在上方选择牌组和笔记类型",
  "Map a field to Sentence audio above": "请在上方把一个字段映射到句子音频",
  "Audio cards": "音频卡片",
  "Audio card deck": "音频卡片牌组",
  "Audio card note type": "音频卡片笔记类型",
  "Audio field": "音频字段",
  "Gets the audio of the line or of the recording.": "接收这一行或录制内容的音频。",
  "Pick a note type first": "请先选择笔记类型",
  "Sentence field (optional)": "句子字段（可选）",
  "Gets the subtitle text, when there is one.": "有字幕时接收字幕文本。",
  "Update last card window": "“更新上一张卡片”的时间范围",
  "Update last card only touches a card added this many minutes ago or less.":
    "“更新上一张卡片”只会修改在这么多分钟内添加的卡片。",
  "Longest recording": "最长录制",
  "A recording longer than this is discarded. Animated clips still stop after 12 seconds.":
    "超过此长度的录制会被放弃。动态片段仍会在 12 秒后停止。",
  "Hide every subtitle (primary and secondary), or show the primary again. Hidden subtitles still work for line seeking, replay and Anki cards.":
    "隐藏所有字幕（主字幕和副字幕），或重新显示主字幕。隐藏时仍可用于跳转字幕行、重播和制作 Anki 卡片。",
  "Anki: card from the subtitle": "Anki：从字幕制卡",
  "Anki: update last card": "Anki：更新上一张卡片",
  "Anki: audio card": "Anki：音频卡片",
  "Add an audio-only card from the line on screen, using the audio card deck. mpv only.":
    "用屏幕上的这一行添加只有音频的卡片，使用音频卡片牌组。仅限 mpv。",
  "Record → new card": "录制 → 新卡片",
  "Record → update last card": "录制 → 更新上一张卡片",
  "Record → audio card": "录制 → 音频卡片",
  "Press once to start recording, again to stop and add an audio card with that stretch. Works without subtitles. mpv only.":
    "按一次开始录制，再按一次停止并用该片段添加音频卡片。没有字幕也可以。仅限 mpv。",
  "Card from the subtitle, Update last card and the Record → card keys use the deck, note type and fields of the Anki section above. With a word selected in the subtitles (highlighted while picking a word, or in an open popup) every mapped field is filled, word and definitions included; without one only the sentence, sentence audio, screenshot or clip and title fields are.":
    "“从字幕制卡”“更新上一张卡片”和“录制 → 卡片”按键使用上方 Anki 部分的牌组、笔记类型和字段。在字幕中选中单词时（选词时高亮，或显示在已打开的弹窗中），会填写所有已映射的字段，包括单词和释义；未选中时只填写句子、句子音频、截图或片段以及标题。",
  "Add a card from the line on screen with its sentence, audio and picture, using the deck and fields under Dictionary & Anki. With a word selected in the subtitles, the word and its definitions go on the card too. mpv only.":
    "用屏幕上的这一行添加带句子、音频和图片的卡片，使用“词典与 Anki”中的牌组和字段。在字幕中选中单词时，单词及其释义也会加入卡片。仅限 mpv。",
  "Put the line on screen (sentence, audio, picture) into the newest card of the deck, if it was added in the last few minutes. With a word selected, the word and its definitions too. mpv only.":
    "把屏幕上的这一行（句子、音频、图片）放入牌组中最新的卡片（需在最近几分钟内添加）。选中单词时，也会加入单词及其释义。仅限 mpv。",
  "Press once to start recording, again to stop and add a card with that stretch. Works without subtitles. With a word selected when you stop, the word and its definitions go on the card too. mpv only.":
    "按一次开始录制，再按一次停止并用该片段添加卡片。没有字幕也可以。停止时若选中了单词，单词及其释义也会加入卡片。仅限 mpv。",
  "Press once to start recording, again to stop and put that stretch into the newest card. Works without subtitles. With a word selected when you stop, the word and its definitions too. mpv only.":
    "按一次开始录制，再按一次停止并把该片段放入最新的卡片。没有字幕也可以。停止时若选中了单词，也会加入单词及其释义。仅限 mpv。",
  "Added {word} to {deck}": "已将 {word} 添加到 {deck}",
  "Updated card in {deck} with {word}": "已用 {word} 更新 {deck} 中的卡片",
  "Bigger dictionary popup": "放大词典弹窗",
  "Make the subtitle dictionary popup 10% bigger. Saved as the Popup size setting.":
    "将字幕词典弹窗放大 10%。保存为“弹窗大小”设置。",
  "Smaller dictionary popup": "缩小词典弹窗",
  "Make the subtitle dictionary popup 10% smaller. Saved as the Popup size setting.":
    "将字幕词典弹窗缩小 10%。保存为“弹窗大小”设置。",
  "Dictionary popup size: {n}%": "词典弹窗大小：{n}%",
  "Popup size": "弹窗大小",
  "Scales the whole popup: text, buttons and width. Bigger sizes help on a TV. The Bigger/Smaller dictionary popup hotkeys change it too.":
    "缩放整个弹窗：文字、按钮和宽度。在电视上用较大的尺寸更清楚。“放大/缩小词典弹窗”快捷键也会改变它。",
  "No subtitle on screen to pick a word from.": "屏幕上没有可选词的字幕。",
  "Turn on Look up words in subtitles under Dictionary & Anki to pick words.":
    "要选词，请在“词典与 Anki”中开启“在字幕中查词”。",
  "Word lookup": "查词",
  "While picking a word in the subtitles with the Pick a word in the subtitles shortcut. These keys take over only then, so they can reuse the player's.":
    "仅在用“在字幕中选词”快捷键挑选字幕中的单词时生效，因此可以与播放器的按键重复。",
  "Pick a word in the subtitles": "在字幕中选词",
  "Pause and select the first word of the subtitle to look it up without the mouse. Move between words with the Word lookup keys; press again to leave.":
    "暂停并选中字幕的第一个单词，无需鼠标即可查询。用“查词”按键在单词间移动；再按一次退出。",
  "Next word": "下一个单词",
  "Select and look up the next word.": "选中并查询下一个单词。",
  "Previous word": "上一个单词",
  "Select and look up the previous word.": "选中并查询上一个单词。",
  "Line above": "上一行",
  "Go to the first word of the subtitle line above.": "转到上一行字幕的第一个单词。",
  "Line below": "下一行",
  "Go to the first word of the subtitle line below.": "转到下一行字幕的第一个单词。",
  "Add the selected word to Anki, like the Anki button in the popup.":
    "像弹窗中的 Anki 按钮一样，把选中的单词添加到 Anki。",
  "Generate AI explanation": "生成 AI 解释",
  "Generate the AI explanation of the word, or generate it again.":
    "生成该单词的 AI 解释，或重新生成。",
  "Play word audio": "播放单词音频",
  "Play the word's local audio; press again for the next voice.":
    "播放该单词的本地音频；再按一次切换到下一个发音。",
  "Scroll popup down": "弹窗向下滚动",
  "Scroll the definitions down. On a controller the right stick scrolls too.":
    "向下滚动释义。在手柄上，右摇杆也可以滚动。",
  "Scroll popup up": "弹窗向上滚动",
  "Scroll the definitions up.": "向上滚动释义。",
  "Leave word lookup": "退出查词",
  Words: "单词",
  Popup: "弹窗",
  "Show the popup": "显示弹窗",
  "Open or close the dictionary popup for the selected word. Moving to another word closes it.":
    "打开或关闭所选单词的词典弹窗。移到其他单词时会关闭。",
};

export default immersionHotkeys;
