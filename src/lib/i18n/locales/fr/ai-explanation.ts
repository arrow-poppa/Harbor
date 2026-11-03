// AI explanation of a looked-up word.
const aiExplanation: Record<string, string> = {
  "AI Explanation": "Explication par IA",
  "Generate a contextual explanation of the looked-up word with your own AI provider. Requests go directly from this device to any OpenAI-compatible endpoint (OpenRouter, OpenAI, DeepSeek, Groq, a local server…).":
    "Générez une explication contextuelle du mot cherché avec votre propre fournisseur d’IA. Les requêtes partent directement de cet appareil vers n’importe quel endpoint compatible OpenAI (OpenRouter, OpenAI, DeepSeek, Groq, un serveur local…).",
  "AI explanation in the popup": "Explication par IA dans la fenêtre",
  "Shows the explanation above the dictionary entries.":
    "Affiche l’explication au-dessus des entrées du dictionnaire.",
  "Custom endpoint": "Endpoint personnalisé",
  "Full URL, used exactly as entered. No path is appended.":
    "URL complète, utilisée telle quelle. Aucun chemin n’est ajouté.",
  "Stored on this device only.": "Enregistrée uniquement sur cet appareil.",
  "Model ID sent to the provider.": "ID du modèle envoyé au fournisseur.",
  "OpenRouter provider routing": "Routage des fournisseurs OpenRouter",
  "Prioritize listed providers": "Prioriser les fournisseurs listés",
  "Only listed providers": "Seulement les fournisseurs listés",
  "Ignore listed providers": "Ignorer les fournisseurs listés",
  "OpenRouter provider slugs": "Slugs des fournisseurs OpenRouter",
  "Separated by commas or line breaks.": "Séparés par des virgules ou des retours à la ligne.",
  "Allow OpenRouter fallbacks": "Autoriser les solutions de repli OpenRouter",
  "Thinking mode": "Mode de réflexion",
  "Thinking intensity": "Intensité de réflexion",
  "Custom thinking value": "Valeur de réflexion personnalisée",
  "A word, a token count, or a JSON object.": "Un mot, un nombre de tokens ou un objet JSON.",
  "Custom request body JSON": "JSON personnalisé du corps de requête",
  "A JSON object merged over the generated request.":
    "Un objet JSON fusionné par-dessus la requête générée.",
  "Auto generate on lookup": "Générer automatiquement à la recherche",
  "When off, the box appears without sending a request and you generate it manually.":
    "Désactivé, la zone apparaît sans envoyer de requête et vous la générez manuellement.",
  "Real time response": "Réponse en temps réel",
  "Stream the explanation into the popup as it is written.":
    "Diffuse l’explication dans la fenêtre au fur et à mesure de son écriture.",
  "Cancel unfinished requests": "Annuler les requêtes inachevées",
  "Drop an explanation still being generated when the popup closes or another word is looked up.":
    "Abandonne une explication encore en cours quand la fenêtre se ferme ou qu’un autre mot est cherché.",
  "Fallback for unknown words": "Repli pour les mots inconnus",
  "Custom prompt": "Prompt personnalisé",
  "Use {target} for the word and {sentence} for its context.":
    "Utilisez {target} pour le mot et {sentence} pour son contexte.",
  "System prompt": "Prompt système",
  "Optional instructions sent before the user prompt. Leave empty to send none.":
    "Instructions facultatives envoyées avant le prompt de l’utilisateur. Laissez vide pour n’en envoyer aucune.",
  Temperature: "Température",
  "Between 0 and 2. Lower is more deterministic.": "Entre 0 et 2. Plus bas est plus déterministe.",
  "AI explanation": "Explication par IA",
  "Not a valid JSON object.": "Ce n’est pas un objet JSON valide.",
  "Look up words in subtitles with your Yomitan dictionaries, hear them and get AI explanations.":
    "Cherchez les mots des sous-titres dans vos dictionnaires Yomitan, écoutez-les et obtenez des explications par IA.",
  "Open the popup for words no dictionary contains, with only the AI explanation.":
    "Ouvre la fenêtre pour les mots qu’aucun dictionnaire ne contient, avec seulement l’explication par IA.",
};

export default aiExplanation;
