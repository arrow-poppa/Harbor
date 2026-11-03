// Immersion hotkeys, picking words in the subtitles and controller buttons in the hotkey list.
const immersionHotkeys: Record<string, string> = {
  "audio card": "thẻ âm thanh",
  "last card": "thẻ gần nhất",
  "new card": "thẻ mới",
  "Still adding the previous card…": "Vẫn đang thêm thẻ trước…",
  "Updated card in {deck}": "Đã cập nhật thẻ trong {deck}",
  "Added to {deck}": "Đã thêm vào {deck}",
  "{n}s recorded": "Đã ghi {n} giây",
  "Recording → {target}. Press again to stop.": "Đang ghi → {target}. Nhấn lần nữa để dừng.",
  "the video went back since the recording started": "video đã bị tua lùi từ lúc bắt đầu ghi",
  "too short": "quá ngắn",
  "longer than the {n}s limit": "dài hơn giới hạn {n} giây",
  "Recording discarded: {reason}": "Đã bỏ bản ghi: {reason}",
  "Stopped · {n}s recorded · adding card…": "Đã dừng · đã ghi {n} giây · đang thêm thẻ…",
  "Anki cards from the player need the mpv player in the desktop app.":
    "Tạo thẻ Anki từ trình phát cần trình phát mpv trong ứng dụng máy tính.",
  "No subtitle on screen. Use a Record shortcut for parts without subtitles.":
    "Không có phụ đề trên màn hình. Dùng phím tắt Ghi cho đoạn không có phụ đề.",
  Immersion: "Đắm chìm",
  "Cards straight from the player, without looking a word up: from the subtitle on screen, or from a stretch you record with two presses of the same key (works without subtitles). Set the keys in Settings → Hotkeys → Immersion. mpv only.":
    "Tạo thẻ ngay từ trình phát mà không cần tra từ: từ phụ đề trên màn hình, hoặc từ một đoạn bạn ghi bằng hai lần nhấn cùng một phím (dùng được khi không có phụ đề). Đặt phím trong Cài đặt → Phím tắt → Đắm chìm. Chỉ mpv.",
  "Sentence cards": "Thẻ câu",
  "Pick a deck and note type above": "Chọn bộ thẻ và loại ghi chú ở trên",
  "Map a field to Sentence audio above": "Gán một trường cho Âm thanh câu ở trên",
  "Audio cards": "Thẻ âm thanh",
  "Audio card deck": "Bộ thẻ cho thẻ âm thanh",
  "Audio card note type": "Loại ghi chú cho thẻ âm thanh",
  "Audio field": "Trường âm thanh",
  "Gets the audio of the line or of the recording.": "Nhận âm thanh của dòng hoặc bản ghi.",
  "Pick a note type first": "Hãy chọn loại ghi chú trước",
  "Sentence field (optional)": "Trường câu (tùy chọn)",
  "Gets the subtitle text, when there is one.": "Nhận chữ phụ đề, nếu có.",
  "Update last card window": "Khoảng thời gian của Cập nhật thẻ gần nhất",
  "Update last card only touches a card added this many minutes ago or less.":
    "Cập nhật thẻ gần nhất chỉ sửa thẻ được thêm cách đây không quá ngần ấy phút.",
  "Longest recording": "Bản ghi dài nhất",
  "A recording longer than this is discarded. Animated clips still stop after 12 seconds.":
    "Bản ghi dài hơn mức này sẽ bị bỏ. Đoạn hoạt ảnh vẫn dừng sau 12 giây.",
  "Long seek": "Tua dài",
  "The jump of the Long seek back and Long seek forward shortcuts.":
    "Bước nhảy của phím tắt Tua lùi dài và Tua tới dài.",
  "Slow speed": "Tốc độ chậm",
  "The speed the Toggle slow speed shortcut switches to from normal speed.":
    "Tốc độ mà phím tắt Bật/tắt tốc độ chậm chuyển sang từ tốc độ bình thường.",
  "Toggle subtitles on/off": "Bật/tắt phụ đề",
  "Hide every subtitle (primary and secondary), or show the primary again. Hidden subtitles still work for line seeking, replay and Anki cards.":
    "Ẩn mọi phụ đề (chính và phụ) hoặc hiện lại phụ đề chính. Khi bị ẩn, phụ đề vẫn dùng được để nhảy dòng, phát lại và tạo thẻ Anki.",
  "Next subtitle line": "Dòng phụ đề tiếp theo",
  "Jump to the start of the next subtitle line.": "Nhảy đến đầu dòng phụ đề tiếp theo.",
  "Previous subtitle line": "Dòng phụ đề trước",
  "Jump to the start of the previous subtitle line.": "Nhảy đến đầu dòng phụ đề trước.",
  "Toggle slow speed": "Bật/tắt tốc độ chậm",
  "Switch between normal speed and the slow speed set under Behavior (0.5x by default).":
    "Chuyển giữa tốc độ bình thường và tốc độ chậm đặt trong Hành vi (mặc định 0,5x).",
  "Anki: card from the subtitle": "Anki: thẻ từ phụ đề",
  "Anki: update last card": "Anki: cập nhật thẻ gần nhất",
  "Anki: audio card": "Anki: thẻ âm thanh",
  "Add an audio-only card from the line on screen, using the audio card deck. mpv only.":
    "Thêm thẻ chỉ có âm thanh từ dòng trên màn hình, dùng bộ thẻ cho thẻ âm thanh. Chỉ mpv.",
  "Record → new card": "Ghi → thẻ mới",
  "Record → update last card": "Ghi → cập nhật thẻ gần nhất",
  "Record → audio card": "Ghi → thẻ âm thanh",
  "Press once to start recording, again to stop and add an audio card with that stretch. Works without subtitles. mpv only.":
    "Nhấn một lần để bắt đầu ghi, nhấn lần nữa để dừng và thêm thẻ âm thanh với đoạn đó. Dùng được khi không có phụ đề. Chỉ mpv.",
  "Long seek back": "Tua lùi dài",
  "Jump back by the Long seek step set under Behavior (30 seconds by default).":
    "Lùi theo bước tua dài đặt trong Hành vi (mặc định 30 giây).",
  "Long seek forward": "Tua tới dài",
  "Jump forward by the Long seek step set under Behavior (30 seconds by default).":
    "Tới theo bước tua dài đặt trong Hành vi (mặc định 30 giây).",
  "Replay current subtitle": "Phát lại phụ đề hiện tại",
  "Go back to the start of the line on screen and play it again, or of the last line shown when there is none.":
    "Quay về đầu dòng trên màn hình và phát lại, hoặc dòng hiện gần nhất khi không có dòng nào.",
  "Card from the subtitle, Update last card and the Record → card keys use the deck, note type and fields of the Anki section above. With a word selected in the subtitles (highlighted while picking a word, or in an open popup) every mapped field is filled, word and definitions included; without one only the sentence, sentence audio, screenshot or clip and title fields are.":
    "Các phím Thẻ từ phụ đề, Cập nhật thẻ gần nhất và Ghi → thẻ dùng bộ thẻ, loại ghi chú và trường của mục Anki ở trên. Khi đang chọn một từ trong phụ đề (được tô sáng lúc chọn từ, hoặc trong cửa sổ bật lên đang mở), mọi trường đã gán đều được điền, gồm cả từ và định nghĩa; khi không chọn, chỉ điền câu, âm thanh câu, ảnh chụp hoặc đoạn hoạt ảnh và tiêu đề.",
  "Add a card from the line on screen with its sentence, audio and picture, using the deck and fields under Dictionary & Anki. With a word selected in the subtitles, the word and its definitions go on the card too. mpv only.":
    "Thêm thẻ từ dòng trên màn hình với câu, âm thanh và hình ảnh, dùng bộ thẻ và trường trong Từ điển & Anki. Khi đang chọn một từ trong phụ đề, từ và định nghĩa cũng được đưa vào thẻ. Chỉ mpv.",
  "Put the line on screen (sentence, audio, picture) into the newest card of the deck, if it was added in the last few minutes. With a word selected, the word and its definitions too. mpv only.":
    "Đưa dòng trên màn hình (câu, âm thanh, hình ảnh) vào thẻ mới nhất của bộ thẻ, nếu nó được thêm trong vài phút gần đây. Khi đang chọn một từ, cả từ và định nghĩa. Chỉ mpv.",
  "Press once to start recording, again to stop and add a card with that stretch. Works without subtitles. With a word selected when you stop, the word and its definitions go on the card too. mpv only.":
    "Nhấn một lần để bắt đầu ghi, nhấn lần nữa để dừng và thêm thẻ với đoạn đó. Dùng được khi không có phụ đề. Nếu đang chọn một từ lúc dừng, từ và định nghĩa cũng được đưa vào thẻ. Chỉ mpv.",
  "Press once to start recording, again to stop and put that stretch into the newest card. Works without subtitles. With a word selected when you stop, the word and its definitions too. mpv only.":
    "Nhấn một lần để bắt đầu ghi, nhấn lần nữa để dừng và đưa đoạn đó vào thẻ mới nhất. Dùng được khi không có phụ đề. Nếu đang chọn một từ lúc dừng, cả từ và định nghĩa. Chỉ mpv.",
  "Added {word} to {deck}": "Đã thêm {word} vào {deck}",
  "Updated card in {deck} with {word}": "Đã cập nhật thẻ trong {deck} với {word}",
  "Bigger dictionary popup": "Phóng to cửa sổ từ điển",
  "Make the subtitle dictionary popup 10% bigger. Saved as the Popup size setting.":
    "Phóng to cửa sổ từ điển phụ đề thêm 10%. Lưu vào cài đặt Kích thước cửa sổ.",
  "Smaller dictionary popup": "Thu nhỏ cửa sổ từ điển",
  "Make the subtitle dictionary popup 10% smaller. Saved as the Popup size setting.":
    "Thu nhỏ cửa sổ từ điển phụ đề 10%. Lưu vào cài đặt Kích thước cửa sổ.",
  "Dictionary popup size: {n}%": "Kích thước cửa sổ từ điển: {n}%",
  "Popup size": "Kích thước cửa sổ",
  "Scales the whole popup: text, buttons and width. Bigger sizes help on a TV. The Bigger/Smaller dictionary popup hotkeys change it too.":
    "Thay đổi tỉ lệ toàn bộ cửa sổ: chữ, nút và chiều rộng. Kích thước lớn hữu ích trên TV. Phím tắt Phóng to/Thu nhỏ cửa sổ từ điển cũng thay đổi nó.",
  "Speed step": "Bước tốc độ",
  "How much the Speed down and Speed up shortcuts change the speed per press.":
    "Mức thay đổi tốc độ mỗi lần nhấn phím tắt Giảm và Tăng tốc độ.",
  "Slow playback by the Speed step set under Behavior (0.25x by default).":
    "Giảm tốc độ phát theo Bước tốc độ trong phần Hành vi (mặc định 0,25x).",
  "Speed playback up by the Speed step set under Behavior (0.25x by default).":
    "Tăng tốc độ phát theo Bước tốc độ trong phần Hành vi (mặc định 0,25x).",
  "No subtitle on screen to pick a word from.": "Không có phụ đề trên màn hình để chọn từ.",
  "Turn on Look up words in subtitles under Dictionary & Anki to pick words.":
    "Bật Tra từ trong phụ đề trong Từ điển & Anki để chọn từ.",
  "Controller buttons go next to each key: press one, or hold LB, RB, LT or RT and press another for a combination. A shoulder or trigger used in a combination does its own job when you let go of it.":
    "Nút tay cầm nằm cạnh mỗi phím: nhấn một nút, hoặc giữ LB, RB, LT hay RT rồi nhấn nút khác để tạo tổ hợp. Nút vai hoặc cò dùng trong tổ hợp sẽ làm việc riêng của nó khi bạn thả ra.",
  "To bind controller buttons, connect a controller and turn on controller support under Controllers.":
    "Để gán nút tay cầm, hãy kết nối tay cầm và bật hỗ trợ tay cầm trong Tay cầm.",
  "Word lookup": "Tra từ",
  "While picking a word in the subtitles with the Pick a word in the subtitles shortcut. These keys take over only then, so they can reuse the player's.":
    "Trong lúc bạn chọn một từ trong phụ đề bằng phím tắt Chọn một từ trong phụ đề. Các phím này chỉ có tác dụng lúc đó, nên có thể trùng với phím của trình phát.",
  "{key} is used for {action}.": "{key} đã được dùng cho {action}.",
  "Remove {key} from {name}": "Gỡ {key} khỏi {name}",
  "Use it here": "Dùng ở đây",
  "Press a button…": "Nhấn một nút…",
  "Add a controller button for {name}": "Thêm nút tay cầm cho {name}",
  "Pick a word in the subtitles": "Chọn một từ trong phụ đề",
  "Pause and select the first word of the subtitle to look it up without the mouse. Move between words with the Word lookup keys; press again to leave.":
    "Tạm dừng và chọn từ đầu tiên của phụ đề để tra mà không cần chuột. Di chuyển giữa các từ bằng các phím Tra từ; nhấn lần nữa để thoát.",
  "Next word": "Từ tiếp theo",
  "Select and look up the next word.": "Chọn và tra từ tiếp theo.",
  "Previous word": "Từ trước",
  "Select and look up the previous word.": "Chọn và tra từ trước.",
  "Line above": "Dòng trên",
  "Go to the first word of the subtitle line above.": "Đến từ đầu tiên của dòng phụ đề phía trên.",
  "Line below": "Dòng dưới",
  "Go to the first word of the subtitle line below.": "Đến từ đầu tiên của dòng phụ đề phía dưới.",
  "Add the selected word to Anki, like the Anki button in the popup.":
    "Thêm từ đã chọn vào Anki, như nút Anki trong cửa sổ bật lên.",
  "Generate AI explanation": "Tạo giải thích bằng AI",
  "Generate the AI explanation of the word, or generate it again.":
    "Tạo giải thích bằng AI cho từ, hoặc tạo lại.",
  "Play word audio": "Phát âm thanh từ",
  "Play the word's local audio; press again for the next voice.":
    "Phát âm thanh cục bộ của từ; nhấn lần nữa để nghe giọng tiếp theo.",
  "Scroll popup down": "Cuộn cửa sổ bật lên xuống",
  "Scroll the definitions down. On a controller the right stick scrolls too.":
    "Cuộn các định nghĩa xuống. Trên tay cầm, cần phải cũng cuộn được.",
  "Scroll popup up": "Cuộn cửa sổ bật lên lên",
  "Scroll the definitions up.": "Cuộn các định nghĩa lên.",
  "Leave word lookup": "Thoát tra từ",
  Words: "Từ",
  Popup: "Cửa sổ bật lên",
  "Show the popup": "Hiện cửa sổ bật lên",
  "Open or close the dictionary popup for the selected word. Moving to another word closes it.":
    "Mở hoặc đóng cửa sổ từ điển cho từ đã chọn. Chuyển sang từ khác sẽ đóng nó.",
  "Clear the shortcut for {name}": "Xóa phím tắt của {name}",
  "Clear the shortcut": "Xóa phím tắt",
};

export default immersionHotkeys;
