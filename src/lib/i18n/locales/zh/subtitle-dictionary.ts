// Subtitle dictionary: word lookups in the subtitles and word audio.
const subtitleDictionary: Record<string, string> = {
  "Subtitle dictionary": "字幕词典",
  "Look up words in subtitles": "在字幕中查词",
  "Works with Harbor's subtitles and with styled (ASS) subtitles drawn by mpv. Image subtitles (PGS) have no text to look up.":
    "适用于 Harbor 的字幕和 mpv 绘制的样式字幕（ASS）。图像字幕（PGS）没有可查询的文本。",
  "Pause while the popup is open": "弹窗打开时暂停",
  "Resumes when the popup closes.": "弹窗关闭后继续播放。",
  "Keep the popup open when the mouse leaves": "鼠标移开时保持弹窗打开",
  "The popup (and the pause) stays until you click outside it or press Escape.":
    "弹窗（以及暂停）会一直保留，直到你点击外部或按 Escape。",
  "Look up with": "查词方式",
  "Hover looks words up as the mouse passes over them. With a key, hold it while hovering (or press it on a word) and plain hovering does nothing. Clicking a word always looks it up.":
    "悬停会在鼠标经过单词时查询。使用按键时，需在悬停时按住它（或在单词上按下），仅悬停不会有任何作用。点击单词始终会查询。",
  Hover: "悬停",
  "Hold Shift": "按住 Shift",
  "Hold Ctrl": "按住 Ctrl",
  "Hold Alt": "按住 Alt",
  "Scan delay (in milliseconds)": "查词延迟（毫秒）",
  "Wait before looking up the word under the mouse when no key is required. Lower is faster; higher avoids lookups while the mouse just passes over the subtitle.":
    "不需要按键时，查询鼠标下单词前的等待时间。越低越快；越高越能避免鼠标只是经过字幕时触发查询。",
  "Keep subtitles above the seek bar": "让字幕保持在进度条上方",
  "The seek bar covers the lowest subtitle line, so lift the subtitles above it while you look words up.":
    "进度条会遮住最下面一行字幕，因此在查词时把字幕抬到它上方。",
  "Same setting as Player → Subtitles.": "与 播放器 → 字幕 的设置相同。",
  "Subtitle height": "字幕高度",
  "Distance from the bottom of the video.": "距视频底部的距离。",
  "Subtitle language": "字幕语言",
  "Picks the deinflection rules used for lookups.": "选择查词时使用的词形还原规则。",
  "Loading dictionaries…": "正在加载词典…",
  "No dictionaries yet. Import Yomitan .zip files such as JMdict or Jitendex.":
    "还没有词典。请导入 JMdict 或 Jitendex 等 Yomitan .zip 文件。",
  "Importing {name}…": "正在导入 {name}…",
  "Import dictionary (.zip)": "导入词典（.zip）",
  "Word audio": "单词音频",
  "No database selected": "未选择数据库",
  "Choose database": "选择数据库",
  "(empty)": "（空）",
  "Download the desktop app to look up words while you watch.": "下载桌面应用，即可边看边查词。",
  Greek: "希腊语",
  Latin: "拉丁语",
  Controller: "手柄",
  Dictionary: "词典",
};

export default subtitleDictionary;
