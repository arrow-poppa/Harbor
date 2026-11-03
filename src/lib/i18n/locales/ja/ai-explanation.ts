// AI explanation of a looked-up word.
const aiExplanation: Record<string, string> = {
  "AI Explanation": "AI 解説",
  "Generate a contextual explanation of the looked-up word with your own AI provider. Requests go directly from this device to any OpenAI-compatible endpoint (OpenRouter, OpenAI, DeepSeek, Groq, a local server…).":
    "調べた単語の文脈に沿った解説を、自分の AI プロバイダーで生成します。リクエストはこのデバイスから OpenAI 互換のエンドポイント（OpenRouter、OpenAI、DeepSeek、Groq、ローカルサーバーなど）へ直接送られます。",
  "AI explanation in the popup": "ポップアップに AI 解説",
  "Shows the explanation above the dictionary entries.": "辞書の項目の上に解説を表示します。",
  "Custom endpoint": "カスタムエンドポイント",
  "Full URL, used exactly as entered. No path is appended.":
    "入力したとおりに使う完全な URL です。パスは追加されません。",
  "Stored on this device only.": "このデバイスにのみ保存されます。",
  "Model ID sent to the provider.": "プロバイダーに送るモデル ID です。",
  "OpenRouter provider routing": "OpenRouter のプロバイダールーティング",
  "Prioritize listed providers": "一覧のプロバイダーを優先",
  "Only listed providers": "一覧のプロバイダーのみ",
  "Ignore listed providers": "一覧のプロバイダーを除外",
  "OpenRouter provider slugs": "OpenRouter のプロバイダースラッグ",
  "Separated by commas or line breaks.": "カンマまたは改行で区切ります。",
  "Allow OpenRouter fallbacks": "OpenRouter のフォールバックを許可",
  "Thinking mode": "思考モード",
  "Thinking intensity": "思考の強さ",
  "Custom thinking value": "カスタム思考値",
  "A word, a token count, or a JSON object.": "単語、トークン数、または JSON オブジェクト。",
  "Custom request body JSON": "カスタムのリクエスト本文 JSON",
  "A JSON object merged over the generated request.":
    "生成されたリクエストに上書きでマージされる JSON オブジェクトです。",
  "Auto generate on lookup": "検索時に自動生成",
  "When off, the box appears without sending a request and you generate it manually.":
    "オフの場合、ボックスはリクエストを送らずに表示され、手動で生成します。",
  "Real time response": "リアルタイム応答",
  "Stream the explanation into the popup as it is written.":
    "書かれた順に解説をポップアップへストリーミングします。",
  "Cancel unfinished requests": "未完了のリクエストをキャンセル",
  "Drop an explanation still being generated when the popup closes or another word is looked up.":
    "ポップアップを閉じたときや別の単語を調べたときに、生成中の解説を破棄します。",
  "Fallback for unknown words": "未知の単語のフォールバック",
  "Custom prompt": "カスタムプロンプト",
  "Use {target} for the word and {sentence} for its context.":
    "単語には {target}、その文脈には {sentence} を使います。",
  "System prompt": "システムプロンプト",
  "Optional instructions sent before the user prompt. Leave empty to send none.":
    "ユーザープロンプトの前に送る任意の指示です。何も送らない場合は空のままにします。",
  Temperature: "温度",
  "Between 0 and 2. Lower is more deterministic.": "0〜2 の範囲。低いほど決定的になります。",
  "AI explanation": "AI 解説",
  "Not a valid JSON object.": "有効な JSON オブジェクトではありません。",
};

export default aiExplanation;
