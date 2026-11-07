// Word audio sources: recorded and synthesized voices for looked-up words.
const wordAudioSources: Record<string, string> = {
  "Plays the looked-up word and adds it to Anki cards. Sources are tried from top to bottom, and pressing the audio button again plays the next voice. Online sources send the word to their site.":
    "播放所查单词的发音并加入 Anki 卡片。音源按从上到下的顺序尝试，再次按下音频按钮会播放下一个声音。在线音源会把单词发送到其网站。",
  "Local audio database": "本地音频数据库",
  "Custom URL": "自定义 URL",
  "Custom URL (JSON)": "自定义 URL（JSON）",
  "Automatic picks a voice for the lookup language.": "“自动”会为查词语言选择一个语音。",
  "The reading (kana), when there is one": "读音（假名），如有",
  "The word as written": "书写形式的单词",
  URL: "URL",
  "A local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "local-audio-yomichan 数据库（Forvo、NHK16、Shinmeikai8、JPod101）。请选择 android.db，或位于 *_files 文件夹旁的 entries.db。Flatpak 版只能读取 android.db。",
  "Recorded Japanese words from JapanesePod101.": "来自 JapanesePod101 的日语单词录音。",
  "Recorded words from the LanguagePod101 sites, in about 35 languages.":
    "来自 LanguagePod101 各网站的单词录音，约 35 种语言。",
  "Recorded Japanese words from Jisho.org.": "来自 Jisho.org 的日语单词录音。",
  "Recordings shared on Wikimedia Commons by Lingua Libre speakers.":
    "Lingua Libre 发音者在维基共享资源上分享的录音。",
  "Wiktionary recordings on Wikimedia Commons.": "维基共享资源上的维基词典录音。",
  "Microsoft Edge's online neural voices, the same ones the eBook narration uses.":
    "Microsoft Edge 的在线神经语音，与电子书朗读使用的相同。",
  "An audio file at your own URL. {term}, {reading} and {language} are filled in.":
    "位于你自己 URL 的音频文件。{term}、{reading} 和 {language} 会被填入。",
  "A URL that answers with a list of audio files, such as a local audio server. {term}, {reading} and {language} are filled in.":
    "返回音频文件列表的 URL，例如本地音频服务器。{term}、{reading} 和 {language} 会被填入。",
  "Only when no other source has audio": "仅在其他来源都没有音频时使用",
  "Synthesized speech is used only if no recorded voice is found for the word.":
    "只有找不到该词的录音时才使用合成语音。",
};

export default wordAudioSources;
