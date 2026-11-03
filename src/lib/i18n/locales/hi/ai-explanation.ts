// AI explanation of a looked-up word.
const aiExplanation: Record<string, string> = {
  "AI Explanation": "AI व्याख्या",
  "Generate a contextual explanation of the looked-up word with your own AI provider. Requests go directly from this device to any OpenAI-compatible endpoint (OpenRouter, OpenAI, DeepSeek, Groq, a local server…).":
    "अपने AI प्रदाता से देखे गए शब्द की संदर्भ के अनुसार व्याख्या बनाएँ. अनुरोध इस डिवाइस से सीधे किसी भी OpenAI-संगत endpoint पर जाते हैं (OpenRouter, OpenAI, DeepSeek, Groq, कोई लोकल सर्वर…).",
  "AI explanation in the popup": "पॉपअप में AI व्याख्या",
  "Shows the explanation above the dictionary entries.": "शब्दकोश प्रविष्टियों के ऊपर व्याख्या दिखाता है.",
  "Custom endpoint": "कस्टम endpoint",
  "Full URL, used exactly as entered. No path is appended.":
    "पूरा URL, ठीक वैसे ही इस्तेमाल होता है जैसे लिखा गया. कोई पाथ नहीं जोड़ा जाता.",
  "Stored on this device only.": "केवल इसी डिवाइस पर सहेजा जाता है.",
  "Model ID sent to the provider.": "प्रदाता को भेजी जाने वाली मॉडल ID.",
  "OpenRouter provider routing": "OpenRouter प्रदाता रूटिंग",
  "Prioritize listed providers": "सूची वाले प्रदाताओं को प्राथमिकता दें",
  "Only listed providers": "केवल सूची वाले प्रदाता",
  "Ignore listed providers": "सूची वाले प्रदाताओं को अनदेखा करें",
  "OpenRouter provider slugs": "OpenRouter प्रदाता स्लग",
  "Separated by commas or line breaks.": "कॉमा या नई पंक्ति से अलग करें.",
  "Allow OpenRouter fallbacks": "OpenRouter फ़ॉलबैक की अनुमति दें",
  "Thinking mode": "सोचने का मोड",
  "Thinking intensity": "सोचने की तीव्रता",
  "Custom thinking value": "कस्टम सोचने का मान",
  "A word, a token count, or a JSON object.": "एक शब्द, टोकन की संख्या या एक JSON ऑब्जेक्ट.",
  "Custom request body JSON": "कस्टम अनुरोध बॉडी JSON",
  "A JSON object merged over the generated request.":
    "बनाए गए अनुरोध के ऊपर मिलाया जाने वाला JSON ऑब्जेक्ट.",
  "Auto generate on lookup": "खोज पर अपने-आप बनाएँ",
  "When off, the box appears without sending a request and you generate it manually.":
    "बंद होने पर बॉक्स बिना अनुरोध भेजे दिखता है और आप उसे ख़ुद बनाते हैं.",
  "Real time response": "रीयल टाइम जवाब",
  "Stream the explanation into the popup as it is written.":
    "व्याख्या लिखी जाते समय ही उसे पॉपअप में दिखाता है.",
  "Cancel unfinished requests": "अधूरे अनुरोध रद्द करें",
  "Drop an explanation still being generated when the popup closes or another word is looked up.":
    "पॉपअप बंद होने या दूसरा शब्द देखने पर अभी बन रही व्याख्या छोड़ देता है.",
  "Fallback for unknown words": "अनजान शब्दों के लिए फ़ॉलबैक",
  "Custom prompt": "कस्टम प्रॉम्प्ट",
  "Use {target} for the word and {sentence} for its context.":
    "शब्द के लिए {target} और उसके संदर्भ के लिए {sentence} इस्तेमाल करें.",
  "System prompt": "सिस्टम प्रॉम्प्ट",
  "Optional instructions sent before the user prompt. Leave empty to send none.":
    "उपयोगकर्ता प्रॉम्प्ट से पहले भेजे जाने वाले वैकल्पिक निर्देश. कुछ न भेजने के लिए खाली छोड़ें.",
  Temperature: "तापमान",
  "Between 0 and 2. Lower is more deterministic.": "0 और 2 के बीच. कम मान ज़्यादा निश्चित होता है.",
  "AI explanation": "AI व्याख्या",
  "Not a valid JSON object.": "मान्य JSON ऑब्जेक्ट नहीं है.",
  "Look up words in subtitles with your Yomitan dictionaries, hear them and get AI explanations.":
    "सबटाइटल के शब्द अपने Yomitan शब्दकोशों में देखें, सुनें और AI से उनकी व्याख्या पाएँ.",
  "Open the popup for words no dictionary contains, with only the AI explanation.":
    "जो शब्द किसी शब्दकोश में नहीं हैं उनके लिए भी सिर्फ़ AI व्याख्या के साथ पॉपअप खोलता है.",
};

export default aiExplanation;
