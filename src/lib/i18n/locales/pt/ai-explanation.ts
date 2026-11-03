// AI explanation of a looked-up word.
const aiExplanation: Record<string, string> = {
  "AI Explanation": "Explicação por IA",
  "Generate a contextual explanation of the looked-up word with your own AI provider. Requests go directly from this device to any OpenAI-compatible endpoint (OpenRouter, OpenAI, DeepSeek, Groq, a local server…).":
    "Gere uma explicação contextual da palavra consultada com o seu próprio provedor de IA. As requisições vão direto deste dispositivo para qualquer endpoint compatível com OpenAI (OpenRouter, OpenAI, DeepSeek, Groq, um servidor local…).",
  "AI explanation in the popup": "Explicação por IA no popup",
  "Shows the explanation above the dictionary entries.":
    "Mostra a explicação acima das entradas do dicionário.",
  "Custom endpoint": "Endpoint personalizado",
  "Full URL, used exactly as entered. No path is appended.":
    "URL completa, usada exatamente como digitada. Nenhum caminho é acrescentado.",
  "Stored on this device only.": "Guardada só neste dispositivo.",
  "Model ID sent to the provider.": "ID do modelo enviado ao provedor.",
  "OpenRouter provider routing": "Roteamento de provedores do OpenRouter",
  "Prioritize listed providers": "Priorizar provedores listados",
  "Only listed providers": "Só provedores listados",
  "Ignore listed providers": "Ignorar provedores listados",
  "OpenRouter provider slugs": "Slugs de provedores do OpenRouter",
  "Separated by commas or line breaks.": "Separados por vírgulas ou quebras de linha.",
  "Allow OpenRouter fallbacks": "Permitir fallbacks do OpenRouter",
  "Thinking mode": "Modo de raciocínio",
  "Thinking intensity": "Intensidade do raciocínio",
  "Custom thinking value": "Valor de raciocínio personalizado",
  "A word, a token count, or a JSON object.":
    "Uma palavra, uma quantidade de tokens ou um objeto JSON.",
  "Custom request body JSON": "JSON personalizado do corpo da requisição",
  "A JSON object merged over the generated request.":
    "Um objeto JSON mesclado sobre a requisição gerada.",
  "Auto generate on lookup": "Gerar automaticamente ao consultar",
  "When off, the box appears without sending a request and you generate it manually.":
    "Desligado, a caixa aparece sem enviar requisição e você gera a explicação manualmente.",
  "Real time response": "Resposta em tempo real",
  "Stream the explanation into the popup as it is written.":
    "Transmite a explicação para o popup conforme ela é escrita.",
  "Cancel unfinished requests": "Cancelar requisições inacabadas",
  "Drop an explanation still being generated when the popup closes or another word is looked up.":
    "Descarta uma explicação ainda sendo gerada quando o popup fecha ou outra palavra é consultada.",
  "Fallback for unknown words": "Fallback para palavras desconhecidas",
  "Custom prompt": "Prompt personalizado",
  "Use {target} for the word and {sentence} for its context.":
    "Use {target} para a palavra e {sentence} para o contexto dela.",
  "System prompt": "Prompt de sistema",
  "Optional instructions sent before the user prompt. Leave empty to send none.":
    "Instruções opcionais enviadas antes do prompt do usuário. Deixe vazio para não enviar nenhuma.",
  Temperature: "Temperatura",
  "Between 0 and 2. Lower is more deterministic.": "Entre 0 e 2. Menor é mais determinístico.",
  "AI explanation": "Explicação por IA",
  "Not a valid JSON object.": "Não é um objeto JSON válido.",
};

export default aiExplanation;
