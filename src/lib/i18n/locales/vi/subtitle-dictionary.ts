// Subtitle dictionary: word lookups in the subtitles and word audio.
const subtitleDictionary: Record<string, string> = {
  "Subtitle dictionary": "Từ điển phụ đề",
  "Look up words in subtitles": "Tra từ trong phụ đề",
  "Works with Harbor's subtitles and with styled (ASS) subtitles drawn by mpv. Image subtitles (PGS) have no text to look up.":
    "Hoạt động với phụ đề của Harbor và phụ đề có kiểu (ASS) do mpv vẽ. Phụ đề dạng ảnh (PGS) không có chữ để tra.",
  "Pause while the popup is open": "Tạm dừng khi cửa sổ bật lên đang mở",
  "Resumes when the popup closes.": "Phát tiếp khi cửa sổ bật lên đóng.",
  "Keep the popup open when the mouse leaves": "Giữ cửa sổ bật lên khi chuột rời đi",
  "The popup (and the pause) stays until you click outside it or press Escape.":
    "Cửa sổ bật lên (và việc tạm dừng) vẫn giữ cho đến khi bạn nhấp ra ngoài hoặc nhấn Escape.",
  "Look up with": "Tra bằng",
  "Hover looks words up as the mouse passes over them. With a key, hold it while hovering (or press it on a word) and plain hovering does nothing. Clicking a word always looks it up.":
    "Di chuột sẽ tra từ khi chuột đi qua. Khi dùng phím, giữ phím trong lúc di chuột (hoặc nhấn phím trên một từ), còn chỉ di chuột thì không làm gì. Nhấp vào một từ luôn tra từ đó.",
  Hover: "Di chuột",
  "Hold Shift": "Giữ Shift",
  "Hold Ctrl": "Giữ Ctrl",
  "Hold Alt": "Giữ Alt",
  "Scan delay (in milliseconds)": "Độ trễ tra (mili giây)",
  "Wait before looking up the word under the mouse when no key is required. Lower is faster; higher avoids lookups while the mouse just passes over the subtitle.":
    "Thời gian chờ trước khi tra từ dưới con trỏ khi không cần phím. Thấp hơn thì nhanh hơn; cao hơn tránh tra khi chuột chỉ lướt qua phụ đề.",
  "Keep subtitles above the seek bar": "Giữ phụ đề phía trên thanh tua",
  "The seek bar covers the lowest subtitle line, so lift the subtitles above it while you look words up.":
    "Thanh tua che dòng phụ đề thấp nhất, nên hãy nâng phụ đề lên trên nó khi bạn tra từ.",
  "Same setting as Player → Subtitles.": "Cùng thiết lập với Trình phát → Phụ đề.",
  "Subtitle height": "Độ cao phụ đề",
  "Distance from the bottom of the video.": "Khoảng cách từ đáy video.",
  "Subtitle language": "Ngôn ngữ phụ đề",
  "Picks the deinflection rules used for lookups.": "Chọn quy tắc bỏ biến tố dùng khi tra.",
  "Loading dictionaries…": "Đang tải từ điển…",
  "No dictionaries yet. Import Yomitan .zip files such as JMdict or Jitendex.":
    "Chưa có từ điển. Hãy nhập tệp .zip Yomitan như JMdict hoặc Jitendex.",
  "Importing {name}…": "Đang nhập {name}…",
  "Import dictionary (.zip)": "Nhập từ điển (.zip)",
  "Word audio": "Âm thanh từ",
  "No database selected": "Chưa chọn cơ sở dữ liệu",
  "Choose database": "Chọn cơ sở dữ liệu",
  "(empty)": "(trống)",
  "Download the desktop app to look up words while you watch.":
    "Tải ứng dụng máy tính để tra từ trong lúc xem.",
  Greek: "Tiếng Hy Lạp",
  Latin: "Tiếng Latinh",
  Controller: "Tay cầm",
  Dictionary: "Từ điển",
  "Look up words in subtitles with your Yomitan dictionaries and hear them.":
    "Tra các từ trong phụ đề bằng từ điển Yomitan và nghe phát âm.",
  "Hover a word in the subtitles to look it up in your Yomitan dictionaries and hear it. Uses Manatan's dictionary engine.":
    "Di chuột lên một từ trong phụ đề để tra trong từ điển Yomitan và nghe phát âm. Dùng công cụ từ điển của Manatan.",
  "Plays pronunciations from a local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Phát cách phát âm từ cơ sở dữ liệu local-audio-yomichan (Forvo, NHK16, Shinmeikai8, JPod101). Chọn android.db, hoặc entries.db cạnh các thư mục *_files. Bản Flatpak chỉ đọc được android.db.",
  "Subtitle dictionary lookups and word audio run in the Harbor desktop app.":
    "Tra từ điển phụ đề và âm thanh từ chạy trong ứng dụng Harbor trên máy tính.",
};

export default subtitleDictionary;
