// AI explanation of a looked-up word.
const aiExplanation: Record<string, string> = {
  "AI Explanation": "AI 설명",
  "Generate a contextual explanation of the looked-up word with your own AI provider. Requests go directly from this device to any OpenAI-compatible endpoint (OpenRouter, OpenAI, DeepSeek, Groq, a local server…).":
    "찾은 단어의 문맥 설명을 직접 쓰는 AI 제공자로 생성합니다. 요청은 이 기기에서 OpenAI 호환 엔드포인트(OpenRouter, OpenAI, DeepSeek, Groq, 로컬 서버…)로 바로 전송됩니다.",
  "AI explanation in the popup": "팝업의 AI 설명",
  "Shows the explanation above the dictionary entries.": "사전 항목 위에 설명을 표시합니다.",
  "Custom endpoint": "사용자 지정 엔드포인트",
  "Full URL, used exactly as entered. No path is appended.":
    "입력한 그대로 사용하는 전체 URL입니다. 경로를 덧붙이지 않습니다.",
  "Stored on this device only.": "이 기기에만 저장됩니다.",
  "Model ID sent to the provider.": "제공자에게 보내는 모델 ID입니다.",
  "OpenRouter provider routing": "OpenRouter 제공자 라우팅",
  "Prioritize listed providers": "목록의 제공자 우선",
  "Only listed providers": "목록의 제공자만",
  "Ignore listed providers": "목록의 제공자 제외",
  "OpenRouter provider slugs": "OpenRouter 제공자 슬러그",
  "Separated by commas or line breaks.": "쉼표나 줄바꿈으로 구분합니다.",
  "Allow OpenRouter fallbacks": "OpenRouter 대체 허용",
  "Thinking mode": "사고 모드",
  "Thinking intensity": "사고 강도",
  "Custom thinking value": "사용자 지정 사고 값",
  "A word, a token count, or a JSON object.": "단어, 토큰 수 또는 JSON 객체.",
  "Custom request body JSON": "사용자 지정 요청 본문 JSON",
  "A JSON object merged over the generated request.": "생성된 요청 위에 병합되는 JSON 객체입니다.",
  "Auto generate on lookup": "찾을 때 자동 생성",
  "When off, the box appears without sending a request and you generate it manually.":
    "끄면 요청을 보내지 않은 채 상자가 나타나고 직접 생성합니다.",
  "Real time response": "실시간 응답",
  "Stream the explanation into the popup as it is written.":
    "설명이 작성되는 대로 팝업에 스트리밍합니다.",
  "Cancel unfinished requests": "끝나지 않은 요청 취소",
  "Drop an explanation still being generated when the popup closes or another word is looked up.":
    "팝업이 닫히거나 다른 단어를 찾을 때 생성 중인 설명을 버립니다.",
  "Fallback for unknown words": "모르는 단어 대체",
  "Custom prompt": "사용자 지정 프롬프트",
  "Use {target} for the word and {sentence} for its context.":
    "단어에는 {target}, 문맥에는 {sentence}를 사용하세요.",
  "System prompt": "시스템 프롬프트",
  "Optional instructions sent before the user prompt. Leave empty to send none.":
    "사용자 프롬프트 앞에 보내는 선택 지시입니다. 보내지 않으려면 비워 두세요.",
  Temperature: "온도",
  "Between 0 and 2. Lower is more deterministic.": "0에서 2 사이. 낮을수록 더 결정적입니다.",
  "AI explanation": "AI 설명",
  "Not a valid JSON object.": "올바른 JSON 객체가 아닙니다.",
};

export default aiExplanation;
