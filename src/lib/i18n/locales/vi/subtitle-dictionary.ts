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
  "Detect from the subtitle track": "Nhận diện từ rãnh phụ đề",
  "Lookups and word audio use the selected subtitle's language when it has one; otherwise the language above.":
    "Tra từ và âm thanh của từ dùng ngôn ngữ của phụ đề đang chọn nếu có; nếu không thì dùng ngôn ngữ ở trên.",
};

export default subtitleDictionary;
