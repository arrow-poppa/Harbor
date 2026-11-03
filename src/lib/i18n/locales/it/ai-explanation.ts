// AI explanation of a looked-up word.
const aiExplanation: Record<string, string> = {
  "AI Explanation": "Spiegazione IA",
  "Generate a contextual explanation of the looked-up word with your own AI provider. Requests go directly from this device to any OpenAI-compatible endpoint (OpenRouter, OpenAI, DeepSeek, Groq, a local server…).":
    "Genera una spiegazione contestuale della parola cercata con il tuo provider di IA. Le richieste vanno direttamente da questo dispositivo a qualsiasi endpoint compatibile con OpenAI (OpenRouter, OpenAI, DeepSeek, Groq, un server locale…).",
  "AI explanation in the popup": "Spiegazione IA nel popup",
  "Shows the explanation above the dictionary entries.":
    "Mostra la spiegazione sopra le voci del dizionario.",
  "Custom endpoint": "Endpoint personalizzato",
  "Full URL, used exactly as entered. No path is appended.":
    "URL completo, usato esattamente come scritto. Non viene aggiunto alcun percorso.",
  "Stored on this device only.": "Salvata solo su questo dispositivo.",
  "Model ID sent to the provider.": "ID del modello inviato al provider.",
  "OpenRouter provider routing": "Instradamento dei provider OpenRouter",
  "Prioritize listed providers": "Dai priorità ai provider elencati",
  "Only listed providers": "Solo i provider elencati",
  "Ignore listed providers": "Ignora i provider elencati",
  "OpenRouter provider slugs": "Slug dei provider OpenRouter",
  "Separated by commas or line breaks.": "Separati da virgole o a capo.",
  "Allow OpenRouter fallbacks": "Consenti i fallback di OpenRouter",
  "Thinking mode": "Modalità di ragionamento",
  "Thinking intensity": "Intensità del ragionamento",
  "Custom thinking value": "Valore di ragionamento personalizzato",
  "A word, a token count, or a JSON object.": "Una parola, un numero di token o un oggetto JSON.",
  "Custom request body JSON": "JSON personalizzato del corpo della richiesta",
  "A JSON object merged over the generated request.":
    "Un oggetto JSON unito sopra la richiesta generata.",
  "Auto generate on lookup": "Genera automaticamente alla ricerca",
  "When off, the box appears without sending a request and you generate it manually.":
    "Se disattivato, il riquadro appare senza inviare richieste e la generi manualmente.",
  "Real time response": "Risposta in tempo reale",
  "Stream the explanation into the popup as it is written.":
    "Trasmette la spiegazione nel popup mentre viene scritta.",
  "Cancel unfinished requests": "Annulla le richieste non concluse",
  "Drop an explanation still being generated when the popup closes or another word is looked up.":
    "Scarta una spiegazione ancora in generazione quando il popup si chiude o si cerca un’altra parola.",
  "Fallback for unknown words": "Ripiego per parole sconosciute",
  "Custom prompt": "Prompt personalizzato",
  "Use {target} for the word and {sentence} for its context.":
    "Usa {target} per la parola e {sentence} per il suo contesto.",
  "System prompt": "Prompt di sistema",
  "Optional instructions sent before the user prompt. Leave empty to send none.":
    "Istruzioni facoltative inviate prima del prompt dell’utente. Lascia vuoto per non inviarne.",
  Temperature: "Temperatura",
  "Between 0 and 2. Lower is more deterministic.": "Tra 0 e 2. Più basso è più deterministico.",
  "AI explanation": "Spiegazione IA",
  "Not a valid JSON object.": "Non è un oggetto JSON valido.",
  "Look up words in subtitles with your Yomitan dictionaries, hear them and get AI explanations.":
    "Cerca le parole dei sottotitoli nei tuoi dizionari Yomitan, ascoltale e ottieni spiegazioni IA.",
  "Open the popup for words no dictionary contains, with only the AI explanation.":
    "Apre il popup per le parole che nessun dizionario contiene, con la sola spiegazione IA.",
};

export default aiExplanation;
