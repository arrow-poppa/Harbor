// AI explanation of a looked-up word.
const aiExplanation: Record<string, string> = {
  "AI Explanation": "Wyjaśnienie AI",
  "Generate a contextual explanation of the looked-up word with your own AI provider. Requests go directly from this device to any OpenAI-compatible endpoint (OpenRouter, OpenAI, DeepSeek, Groq, a local server…).":
    "Generuj wyjaśnienie sprawdzonego słowa w kontekście u własnego dostawcy AI. Zapytania idą z tego urządzenia prosto do dowolnego endpointu zgodnego z OpenAI (OpenRouter, OpenAI, DeepSeek, Groq, lokalny serwer…).",
  "AI explanation in the popup": "Wyjaśnienie AI w okienku",
  "Shows the explanation above the dictionary entries.":
    "Pokazuje wyjaśnienie nad hasłami ze słownika.",
  "Custom endpoint": "Własny endpoint",
  "Full URL, used exactly as entered. No path is appended.":
    "Pełny URL, używany dokładnie tak, jak wpisano. Nie jest dodawana żadna ścieżka.",
  "Stored on this device only.": "Przechowywany tylko na tym urządzeniu.",
  "Model ID sent to the provider.": "ID modelu wysyłane do dostawcy.",
  "OpenRouter provider routing": "Routing dostawców OpenRouter",
  "Prioritize listed providers": "Preferuj wymienionych dostawców",
  "Only listed providers": "Tylko wymienieni dostawcy",
  "Ignore listed providers": "Pomijaj wymienionych dostawców",
  "OpenRouter provider slugs": "Slugi dostawców OpenRouter",
  "Separated by commas or line breaks.": "Oddzielone przecinkami lub nowymi wierszami.",
  "Allow OpenRouter fallbacks": "Zezwalaj na zapasowych dostawców OpenRouter",
  "Thinking mode": "Tryb myślenia",
  "Thinking intensity": "Intensywność myślenia",
  "Custom thinking value": "Własna wartość myślenia",
  "A word, a token count, or a JSON object.": "Słowo, liczba tokenów lub obiekt JSON.",
  "Custom request body JSON": "Własny JSON treści zapytania",
  "A JSON object merged over the generated request.":
    "Obiekt JSON scalany z wygenerowanym zapytaniem.",
  "Auto generate on lookup": "Generuj automatycznie przy wyszukiwaniu",
  "When off, the box appears without sending a request and you generate it manually.":
    "Gdy wyłączone, pole pojawia się bez wysyłania zapytania, a wyjaśnienie generujesz ręcznie.",
  "Real time response": "Odpowiedź w czasie rzeczywistym",
  "Stream the explanation into the popup as it is written.":
    "Przesyła wyjaśnienie do okienka w trakcie pisania.",
  "Cancel unfinished requests": "Anuluj niedokończone zapytania",
  "Drop an explanation still being generated when the popup closes or another word is looked up.":
    "Odrzuca wciąż generowane wyjaśnienie, gdy okienko się zamyka lub sprawdzane jest inne słowo.",
  "Fallback for unknown words": "Zapas dla nieznanych słów",
  "Custom prompt": "Własny prompt",
  "Use {target} for the word and {sentence} for its context.":
    "Użyj {target} dla słowa i {sentence} dla jego kontekstu.",
  "System prompt": "Prompt systemowy",
  "Optional instructions sent before the user prompt. Leave empty to send none.":
    "Opcjonalne instrukcje wysyłane przed promptem użytkownika. Zostaw puste, aby nie wysyłać żadnych.",
  Temperature: "Temperatura",
  "Between 0 and 2. Lower is more deterministic.":
    "Od 0 do 2. Niżej znaczy bardziej deterministycznie.",
  "AI explanation": "Wyjaśnienie AI",
  "Not a valid JSON object.": "To nie jest poprawny obiekt JSON.",
};

export default aiExplanation;
