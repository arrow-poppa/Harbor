// Word audio sources: recorded and synthesized voices for looked-up words.
const wordAudioSources: Record<string, string> = {
  "Plays the looked-up word and adds it to Anki cards. Sources are tried from top to bottom, and pressing the audio button again plays the next voice. Online sources send the word to their site.":
    "Phát từ đã tra và thêm vào thẻ Anki. Các nguồn được thử từ trên xuống dưới, và bấm lại nút âm thanh sẽ phát giọng tiếp theo. Các nguồn trực tuyến gửi từ đó đến trang của họ.",
  "Local audio database": "Cơ sở dữ liệu âm thanh cục bộ",
  "Custom URL": "URL tùy chỉnh",
  "Custom URL (JSON)": "URL tùy chỉnh (JSON)",
  "Automatic picks a voice for the lookup language.":
    "Tự động chọn một giọng cho ngôn ngữ tra cứu.",
  "The reading (kana), when there is one": "Cách đọc (kana), nếu có",
  "The word as written": "Từ như được viết",
  URL: "URL",
  "A local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Cơ sở dữ liệu local-audio-yomichan (Forvo, NHK16, Shinmeikai8, JPod101). Chọn android.db, hoặc entries.db cạnh các thư mục *_files. Bản Flatpak chỉ đọc được android.db.",
  "Recorded Japanese words from JapanesePod101.": "Bản ghi âm từ tiếng Nhật từ JapanesePod101.",
  "Recorded words from the LanguagePod101 sites, in about 35 languages.":
    "Bản ghi âm từ các trang LanguagePod101, khoảng 35 ngôn ngữ.",
  "Recorded Japanese words from Jisho.org.": "Bản ghi âm từ tiếng Nhật từ Jisho.org.",
  "Recordings shared on Wikimedia Commons by Lingua Libre speakers.":
    "Bản ghi âm do người nói của Lingua Libre chia sẻ trên Wikimedia Commons.",
  "Wiktionary recordings on Wikimedia Commons.":
    "Bản ghi âm của Wiktionary trên Wikimedia Commons.",
  "Microsoft Edge's online neural voices, the same ones the eBook narration uses.":
    "Các giọng nơ-ron trực tuyến của Microsoft Edge, giống giọng đọc sách điện tử.",
  "An audio file at your own URL. {term}, {reading} and {language} are filled in.":
    "Một tệp âm thanh tại URL của bạn. {term}, {reading} và {language} sẽ được điền vào.",
  "A URL that answers with a list of audio files, such as a local audio server. {term}, {reading} and {language} are filled in.":
    "URL trả về danh sách tệp âm thanh, chẳng hạn máy chủ âm thanh cục bộ. {term}, {reading} và {language} sẽ được điền vào.",
  "Only when no other source has audio": "Chỉ khi không nguồn nào khác có âm thanh",
  "Synthesized speech is used only if no recorded voice is found for the word.":
    "Giọng tổng hợp chỉ được dùng khi không tìm thấy bản ghi âm nào của từ.",
};

export default wordAudioSources;
