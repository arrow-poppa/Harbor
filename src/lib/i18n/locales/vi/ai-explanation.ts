// AI explanation of a looked-up word.
const aiExplanation: Record<string, string> = {
  "AI Explanation": "Giải thích bằng AI",
  "Generate a contextual explanation of the looked-up word with your own AI provider. Requests go directly from this device to any OpenAI-compatible endpoint (OpenRouter, OpenAI, DeepSeek, Groq, a local server…).":
    "Tạo lời giải thích theo ngữ cảnh cho từ đã tra bằng nhà cung cấp AI của riêng bạn. Yêu cầu đi thẳng từ thiết bị này đến bất kỳ endpoint tương thích OpenAI nào (OpenRouter, OpenAI, DeepSeek, Groq, máy chủ cục bộ…).",
  "AI explanation in the popup": "Giải thích bằng AI trong cửa sổ bật lên",
  "Shows the explanation above the dictionary entries.":
    "Hiện lời giải thích phía trên các mục từ điển.",
  "Custom endpoint": "Endpoint tùy chỉnh",
  "Full URL, used exactly as entered. No path is appended.":
    "URL đầy đủ, dùng đúng như đã nhập. Không thêm đường dẫn nào.",
  "Stored on this device only.": "Chỉ lưu trên thiết bị này.",
  "Model ID sent to the provider.": "ID mô hình gửi đến nhà cung cấp.",
  "OpenRouter provider routing": "Định tuyến nhà cung cấp OpenRouter",
  "Prioritize listed providers": "Ưu tiên nhà cung cấp trong danh sách",
  "Only listed providers": "Chỉ nhà cung cấp trong danh sách",
  "Ignore listed providers": "Bỏ qua nhà cung cấp trong danh sách",
  "OpenRouter provider slugs": "Slug nhà cung cấp OpenRouter",
  "Separated by commas or line breaks.": "Phân tách bằng dấu phẩy hoặc xuống dòng.",
  "Allow OpenRouter fallbacks": "Cho phép phương án dự phòng của OpenRouter",
  "Thinking mode": "Chế độ suy nghĩ",
  "Thinking intensity": "Mức độ suy nghĩ",
  "Custom thinking value": "Giá trị suy nghĩ tùy chỉnh",
  "A word, a token count, or a JSON object.": "Một từ, một số token hoặc một đối tượng JSON.",
  "Custom request body JSON": "JSON thân yêu cầu tùy chỉnh",
  "A JSON object merged over the generated request.":
    "Một đối tượng JSON được gộp đè lên yêu cầu đã tạo.",
  "Auto generate on lookup": "Tự tạo khi tra",
  "When off, the box appears without sending a request and you generate it manually.":
    "Khi tắt, hộp xuất hiện mà không gửi yêu cầu và bạn tự tạo lời giải thích.",
  "Real time response": "Phản hồi theo thời gian thực",
  "Stream the explanation into the popup as it is written.":
    "Truyền lời giải thích vào cửa sổ bật lên trong lúc nó được viết.",
  "Cancel unfinished requests": "Hủy yêu cầu chưa xong",
  "Drop an explanation still being generated when the popup closes or another word is looked up.":
    "Bỏ lời giải thích đang tạo khi cửa sổ bật lên đóng hoặc tra một từ khác.",
  "Fallback for unknown words": "Dự phòng cho từ không xác định",
  "Custom prompt": "Prompt tùy chỉnh",
  "Use {target} for the word and {sentence} for its context.":
    "Dùng {target} cho từ và {sentence} cho ngữ cảnh của nó.",
  "System prompt": "Prompt hệ thống",
  "Optional instructions sent before the user prompt. Leave empty to send none.":
    "Chỉ dẫn tùy chọn gửi trước prompt của người dùng. Để trống nếu không gửi gì.",
  Temperature: "Nhiệt độ",
  "Between 0 and 2. Lower is more deterministic.": "Từ 0 đến 2. Thấp hơn thì ổn định hơn.",
  "AI explanation": "Giải thích bằng AI",
  "Not a valid JSON object.": "Không phải đối tượng JSON hợp lệ.",
  "Look up words in subtitles with your Yomitan dictionaries, hear them and get AI explanations.":
    "Tra các từ trong phụ đề bằng từ điển Yomitan, nghe phát âm và nhận lời giải thích AI.",
  "Open the popup for words no dictionary contains, with only the AI explanation.":
    "Mở cửa sổ bật lên cho các từ không có trong từ điển nào, chỉ với lời giải thích AI.",
};

export default aiExplanation;
