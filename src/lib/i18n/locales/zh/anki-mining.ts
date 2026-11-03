// Anki cards from the dictionary popup.
const ankiMining: Record<string, string> = {
  "Hover a word in the subtitles to look it up in your Yomitan dictionaries, hear it and add it to Anki. Uses Manatan's dictionary engine.":
    "将鼠标悬停在字幕中的单词上，即可在 Yomitan 词典中查询、收听发音并添加到 Anki。使用 Manatan 的词典引擎。",
  "Open the popup for words no dictionary contains, with only the AI explanation, so they can still go to Anki.":
    "对任何词典都没有的单词，也只用 AI 解释打开弹窗，以便仍能加入 Anki。",
  "Connected to Anki": "已连接到 Anki",
  Anki: "Anki",
  "Adds cards through AnkiConnect with the word, sentence, definitions, a screenshot, the sentence audio and the word audio. Anki must be open with the AnkiConnect add-on.":
    "通过 AnkiConnect 添加包含单词、句子、释义、截图、句子音频和单词音频的卡片。Anki 必须已打开并安装 AnkiConnect 插件。",
  "AnkiConnect address": "AnkiConnect 地址",
  Deck: "牌组",
  "Choose…": "选择…",
  "Connect first": "请先连接",
  "Note type": "笔记类型",
  Fields: "字段",
  "Auto-fill": "自动填写",
  "Separated by spaces.": "用空格分隔。",
  "Sentence audio padding": "句子音频留白",
  "Seconds added before and after the subtitle line.": "在字幕行前后添加的秒数。",
  "Animated clip format": "动态片段格式",
  "For fields set to the animated clip. AVIF is smallest; WebP and GIF play in older Anki versions. Falls back to WebP, then GIF, if an encoder is missing.":
    "用于设置为动态片段的字段。AVIF 最小；WebP 和 GIF 可在旧版 Anki 中播放。缺少编码器时依次改用 WebP、GIF。",
  "Animated clip size": "动态片段尺寸",
  "Width in pixels and frames per second. Clips stop after 12 seconds.":
    "宽度（像素）和每秒帧数。片段在 12 秒后停止。",
  "Allow duplicate cards": "允许重复卡片",
  "When off, words already in the deck are refused.": "关闭时，牌组中已有的单词会被拒绝。",
  "Subtitle dictionary lookups, word audio and Anki mining run in the Harbor desktop app.":
    "字幕词典查询、单词音频和 Anki 制卡需在 Harbor 桌面应用中使用。",
  Word: "单词",
  "Word with furigana": "带假名注音的单词",
  "Definitions (all)": "释义（全部）",
  "Definition (first dictionary)": "释义（第一个词典）",
  Sentence: "句子",
  "Sentence (word in bold)": "句子（单词加粗）",
  "Sentence (word as cloze)": "句子（单词挖空）",
  "Sentence audio": "句子音频",
  "Animated clip of the line (AVIF/WebP/GIF)": "该行的动态片段（AVIF/WebP/GIF）",
  Frequency: "词频",
  "Pitch accent": "音高重音",
  "Title / episode": "标题 / 剧集",
  "Text selected in the popup (else first definition)": "在弹窗中选中的文本（否则为第一条释义）",
  "Add to Anki": "添加到 Anki",
  "Dictionary & Anki": "词典与 Anki",
  "Look up words in subtitles with your Yomitan dictionaries, hear them, get AI explanations and turn them into Anki cards.":
    "在 Yomitan 词典中查询字幕里的单词、收听发音、获取 AI 解释，并制成 Anki 卡片。",
  "Cards of the word": "该单词的卡片",
  "The Anki button shows how many notes the word already has. All decks also finds notes from other decks and note types, such as cards made with Yomitan, with a field that is exactly the word.":
    "Anki 按钮显示该单词已有多少条笔记。“所有牌组”还会查找其他牌组和笔记类型中字段与该单词完全相同的笔记，例如用 Yomitan 制作的卡片。",
  "This deck": "此牌组",
  "This deck and all decks": "此牌组和所有牌组",
  "Definition (selected dictionary)": "释义（所选词典）",
};

export default ankiMining;
