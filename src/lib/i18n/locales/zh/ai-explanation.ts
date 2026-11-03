// AI explanation of a looked-up word.
const aiExplanation: Record<string, string> = {
  "AI Explanation": "AI 解释",
  "Generate a contextual explanation of the looked-up word with your own AI provider. Requests go directly from this device to any OpenAI-compatible endpoint (OpenRouter, OpenAI, DeepSeek, Groq, a local server…).":
    "用你自己的 AI 服务商为所查单词生成结合上下文的解释。请求从本设备直接发送到任何兼容 OpenAI 的端点（OpenRouter、OpenAI、DeepSeek、Groq、本地服务器…）。",
  "AI explanation in the popup": "在弹窗中显示 AI 解释",
  "Shows the explanation above the dictionary entries.": "在词典条目上方显示解释。",
  "Custom endpoint": "自定义端点",
  "Full URL, used exactly as entered. No path is appended.":
    "完整 URL，按输入原样使用，不追加任何路径。",
  "Stored on this device only.": "仅保存在本设备上。",
  "Model ID sent to the provider.": "发送给服务商的模型 ID。",
  "OpenRouter provider routing": "OpenRouter 服务商路由",
  "Prioritize listed providers": "优先使用列出的服务商",
  "Only listed providers": "仅使用列出的服务商",
  "Ignore listed providers": "忽略列出的服务商",
  "OpenRouter provider slugs": "OpenRouter 服务商标识",
  "Separated by commas or line breaks.": "用逗号或换行分隔。",
  "Allow OpenRouter fallbacks": "允许 OpenRouter 备用",
  "Thinking mode": "思考模式",
  "Thinking intensity": "思考强度",
  "Custom thinking value": "自定义思考值",
  "A word, a token count, or a JSON object.": "一个词、一个 token 数或一个 JSON 对象。",
  "Custom request body JSON": "自定义请求体 JSON",
  "A JSON object merged over the generated request.": "合并到生成请求之上的 JSON 对象。",
  "Auto generate on lookup": "查词时自动生成",
  "When off, the box appears without sending a request and you generate it manually.":
    "关闭后，方框出现时不会发送请求，需要你手动生成。",
  "Real time response": "实时响应",
  "Stream the explanation into the popup as it is written.": "边生成边把解释流式显示到弹窗中。",
  "Cancel unfinished requests": "取消未完成的请求",
  "Drop an explanation still being generated when the popup closes or another word is looked up.":
    "弹窗关闭或查询其他单词时，丢弃仍在生成的解释。",
  "Fallback for unknown words": "未知单词的备用方案",
  "Custom prompt": "自定义提示词",
  "Use {target} for the word and {sentence} for its context.":
    "用 {target} 表示单词，用 {sentence} 表示其上下文。",
  "System prompt": "系统提示词",
  "Optional instructions sent before the user prompt. Leave empty to send none.":
    "在用户提示词之前发送的可选指令。留空则不发送。",
  Temperature: "温度",
  "Between 0 and 2. Lower is more deterministic.": "介于 0 到 2 之间。越低越确定。",
  "AI explanation": "AI 解释",
  "Not a valid JSON object.": "不是有效的 JSON 对象。",
  "Look up words in subtitles with your Yomitan dictionaries, hear them and get AI explanations.":
    "在 Yomitan 词典中查询字幕里的单词、收听发音并获取 AI 解释。",
  "Open the popup for words no dictionary contains, with only the AI explanation.":
    "对任何词典都没有的单词，也只用 AI 解释打开弹窗。",
};

export default aiExplanation;
