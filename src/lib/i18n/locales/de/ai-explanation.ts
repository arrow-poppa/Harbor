// AI explanation of a looked-up word.
const aiExplanation: Record<string, string> = {
  "AI Explanation": "KI-Erklärung",
  "Generate a contextual explanation of the looked-up word with your own AI provider. Requests go directly from this device to any OpenAI-compatible endpoint (OpenRouter, OpenAI, DeepSeek, Groq, a local server…).":
    "Erzeuge mit deinem eigenen KI-Anbieter eine Erklärung des nachgeschlagenen Worts im Kontext. Anfragen gehen direkt von diesem Gerät an einen beliebigen OpenAI-kompatiblen Endpunkt (OpenRouter, OpenAI, DeepSeek, Groq, ein lokaler Server …).",
  "AI explanation in the popup": "KI-Erklärung im Popup",
  "Shows the explanation above the dictionary entries.":
    "Zeigt die Erklärung über den Wörterbucheinträgen.",
  "Custom endpoint": "Eigener Endpunkt",
  "Full URL, used exactly as entered. No path is appended.":
    "Vollständige URL, genau wie eingegeben verwendet. Es wird kein Pfad angehängt.",
  "Stored on this device only.": "Nur auf diesem Gerät gespeichert.",
  "Model ID sent to the provider.": "An den Anbieter gesendete Modell-ID.",
  "OpenRouter provider routing": "OpenRouter-Anbieterrouting",
  "Prioritize listed providers": "Gelistete Anbieter bevorzugen",
  "Only listed providers": "Nur gelistete Anbieter",
  "Ignore listed providers": "Gelistete Anbieter ignorieren",
  "OpenRouter provider slugs": "OpenRouter-Anbieter-Slugs",
  "Separated by commas or line breaks.": "Durch Kommas oder Zeilenumbrüche getrennt.",
  "Allow OpenRouter fallbacks": "OpenRouter-Ausweichanbieter erlauben",
  "Thinking mode": "Denkmodus",
  "Thinking intensity": "Denkintensität",
  "Custom thinking value": "Eigener Denkwert",
  "A word, a token count, or a JSON object.": "Ein Wort, eine Token-Anzahl oder ein JSON-Objekt.",
  "Custom request body JSON": "Eigenes JSON für den Anfragetext",
  "A JSON object merged over the generated request.":
    "Ein JSON-Objekt, das über die erzeugte Anfrage gelegt wird.",
  "Auto generate on lookup": "Beim Nachschlagen automatisch erzeugen",
  "When off, the box appears without sending a request and you generate it manually.":
    "Aus: Das Feld erscheint, ohne eine Anfrage zu senden, und du erzeugst die Erklärung manuell.",
  "Real time response": "Antwort in Echtzeit",
  "Stream the explanation into the popup as it is written.":
    "Streamt die Erklärung ins Popup, während sie geschrieben wird.",
  "Cancel unfinished requests": "Unfertige Anfragen abbrechen",
  "Drop an explanation still being generated when the popup closes or another word is looked up.":
    "Verwirft eine noch entstehende Erklärung, wenn das Popup schließt oder ein anderes Wort nachgeschlagen wird.",
  "Fallback for unknown words": "Ausweichlösung für unbekannte Wörter",
  "Custom prompt": "Eigener Prompt",
  "Use {target} for the word and {sentence} for its context.":
    "Nutze {target} für das Wort und {sentence} für seinen Kontext.",
  "System prompt": "System-Prompt",
  "Optional instructions sent before the user prompt. Leave empty to send none.":
    "Optionale Anweisungen, die vor dem Nutzer-Prompt gesendet werden. Leer lassen, um keine zu senden.",
  Temperature: "Temperatur",
  "Between 0 and 2. Lower is more deterministic.":
    "Zwischen 0 und 2. Niedriger ist deterministischer.",
  "AI explanation": "KI-Erklärung",
  "Not a valid JSON object.": "Kein gültiges JSON-Objekt.",
};

export default aiExplanation;
