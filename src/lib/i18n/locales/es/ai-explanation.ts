// AI explanation of a looked-up word.
const aiExplanation: Record<string, string> = {
  "AI Explanation": "Explicación con IA",
  "Generate a contextual explanation of the looked-up word with your own AI provider. Requests go directly from this device to any OpenAI-compatible endpoint (OpenRouter, OpenAI, DeepSeek, Groq, a local server…).":
    "Genera una explicación contextual de la palabra buscada con tu propio proveedor de IA. Las solicitudes van directamente de este dispositivo a cualquier endpoint compatible con OpenAI (OpenRouter, OpenAI, DeepSeek, Groq, un servidor local…).",
  "AI explanation in the popup": "Explicación con IA en la ventana emergente",
  "Shows the explanation above the dictionary entries.":
    "Muestra la explicación sobre las entradas del diccionario.",
  "Custom endpoint": "Endpoint personalizado",
  "Full URL, used exactly as entered. No path is appended.":
    "URL completa, usada tal cual se escribe. No se añade ninguna ruta.",
  "Stored on this device only.": "Guardada solo en este dispositivo.",
  "Model ID sent to the provider.": "ID del modelo enviado al proveedor.",
  "OpenRouter provider routing": "Enrutamiento de proveedores de OpenRouter",
  "Prioritize listed providers": "Priorizar los proveedores de la lista",
  "Only listed providers": "Solo los proveedores de la lista",
  "Ignore listed providers": "Ignorar los proveedores de la lista",
  "OpenRouter provider slugs": "Slugs de proveedores de OpenRouter",
  "Separated by commas or line breaks.": "Separados por comas o saltos de línea.",
  "Allow OpenRouter fallbacks": "Permitir alternativas de OpenRouter",
  "Thinking mode": "Modo de razonamiento",
  "Thinking intensity": "Intensidad del razonamiento",
  "Custom thinking value": "Valor de razonamiento personalizado",
  "A word, a token count, or a JSON object.": "Una palabra, un número de tokens o un objeto JSON.",
  "Custom request body JSON": "JSON personalizado del cuerpo de la solicitud",
  "A JSON object merged over the generated request.":
    "Un objeto JSON combinado sobre la solicitud generada.",
  "Auto generate on lookup": "Generar automáticamente al buscar",
  "When off, the box appears without sending a request and you generate it manually.":
    "Desactivado, el cuadro aparece sin enviar ninguna solicitud y la generas manualmente.",
  "Real time response": "Respuesta en tiempo real",
  "Stream the explanation into the popup as it is written.":
    "Transmite la explicación a la ventana emergente mientras se escribe.",
  "Cancel unfinished requests": "Cancelar solicitudes sin terminar",
  "Drop an explanation still being generated when the popup closes or another word is looked up.":
    "Descarta una explicación que aún se está generando cuando se cierra la ventana emergente o se busca otra palabra.",
  "Fallback for unknown words": "Alternativa para palabras desconocidas",
  "Custom prompt": "Prompt personalizado",
  "Use {target} for the word and {sentence} for its context.":
    "Usa {target} para la palabra y {sentence} para su contexto.",
  "System prompt": "Prompt del sistema",
  "Optional instructions sent before the user prompt. Leave empty to send none.":
    "Instrucciones opcionales enviadas antes del prompt del usuario. Déjalo vacío para no enviar ninguna.",
  Temperature: "Temperatura",
  "Between 0 and 2. Lower is more deterministic.": "Entre 0 y 2. Más bajo es más determinista.",
  "AI explanation": "Explicación con IA",
  "Not a valid JSON object.": "No es un objeto JSON válido.",
  "Look up words in subtitles with your Yomitan dictionaries, hear them and get AI explanations.":
    "Busca palabras de los subtítulos en tus diccionarios de Yomitan, escúchalas y obtén explicaciones con IA.",
  "Open the popup for words no dictionary contains, with only the AI explanation.":
    "Abre la ventana emergente para palabras que ningún diccionario contiene, solo con la explicación con IA.",
};

export default aiExplanation;
