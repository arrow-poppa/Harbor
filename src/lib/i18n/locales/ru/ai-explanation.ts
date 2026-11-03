// AI explanation of a looked-up word.
const aiExplanation: Record<string, string> = {
  "AI Explanation": "Объяснение ИИ",
  "Generate a contextual explanation of the looked-up word with your own AI provider. Requests go directly from this device to any OpenAI-compatible endpoint (OpenRouter, OpenAI, DeepSeek, Groq, a local server…).":
    "Создавайте объяснение найденного слова в контексте через своего поставщика ИИ. Запросы идут прямо с этого устройства на любой OpenAI-совместимый endpoint (OpenRouter, OpenAI, DeepSeek, Groq, локальный сервер…).",
  "AI explanation in the popup": "Объяснение ИИ в окне",
  "Shows the explanation above the dictionary entries.":
    "Показывает объяснение над словарными статьями.",
  "Custom endpoint": "Свой endpoint",
  "Full URL, used exactly as entered. No path is appended.":
    "Полный URL, используется в точности как введён. Путь не добавляется.",
  "Stored on this device only.": "Хранится только на этом устройстве.",
  "Model ID sent to the provider.": "ID модели, отправляемый поставщику.",
  "OpenRouter provider routing": "Маршрутизация поставщиков OpenRouter",
  "Prioritize listed providers": "Предпочитать перечисленных поставщиков",
  "Only listed providers": "Только перечисленные поставщики",
  "Ignore listed providers": "Игнорировать перечисленных поставщиков",
  "OpenRouter provider slugs": "Слаги поставщиков OpenRouter",
  "Separated by commas or line breaks.": "Через запятую или с новой строки.",
  "Allow OpenRouter fallbacks": "Разрешить запасные варианты OpenRouter",
  "Thinking mode": "Режим рассуждения",
  "Thinking intensity": "Интенсивность рассуждения",
  "Custom thinking value": "Своё значение рассуждения",
  "A word, a token count, or a JSON object.": "Слово, число токенов или объект JSON.",
  "Custom request body JSON": "Свой JSON тела запроса",
  "A JSON object merged over the generated request.":
    "Объект JSON, накладываемый поверх созданного запроса.",
  "Auto generate on lookup": "Создавать автоматически при поиске",
  "When off, the box appears without sending a request and you generate it manually.":
    "Если выключено, блок появляется без отправки запроса, и вы создаёте объяснение вручную.",
  "Real time response": "Ответ в реальном времени",
  "Stream the explanation into the popup as it is written.":
    "Выводит объяснение в окно по мере написания.",
  "Cancel unfinished requests": "Отменять незавершённые запросы",
  "Drop an explanation still being generated when the popup closes or another word is looked up.":
    "Отбрасывает ещё создаваемое объяснение, когда окно закрывается или ищется другое слово.",
  "Fallback for unknown words": "Запасной вариант для неизвестных слов",
  "Custom prompt": "Свой промпт",
  "Use {target} for the word and {sentence} for its context.":
    "Используйте {target} для слова и {sentence} для его контекста.",
  "System prompt": "Системный промпт",
  "Optional instructions sent before the user prompt. Leave empty to send none.":
    "Необязательные инструкции, отправляемые перед промптом пользователя. Оставьте пустым, чтобы ничего не отправлять.",
  Temperature: "Температура",
  "Between 0 and 2. Lower is more deterministic.": "От 0 до 2. Ниже — более детерминированно.",
  "AI explanation": "Объяснение ИИ",
  "Not a valid JSON object.": "Это не корректный объект JSON.",
};

export default aiExplanation;
