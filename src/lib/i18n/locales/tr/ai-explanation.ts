// AI explanation of a looked-up word.
const aiExplanation: Record<string, string> = {
  "AI Explanation": "Yapay zekâ açıklaması",
  "Generate a contextual explanation of the looked-up word with your own AI provider. Requests go directly from this device to any OpenAI-compatible endpoint (OpenRouter, OpenAI, DeepSeek, Groq, a local server…).":
    "Aranan kelimenin bağlama göre açıklamasını kendi yapay zekâ sağlayıcınızla oluşturun. İstekler bu cihazdan doğrudan OpenAI uyumlu herhangi bir endpoint'e gider (OpenRouter, OpenAI, DeepSeek, Groq, yerel bir sunucu…).",
  "AI explanation in the popup": "Pencerede yapay zekâ açıklaması",
  "Shows the explanation above the dictionary entries.":
    "Açıklamayı sözlük girdilerinin üstünde gösterir.",
  "Custom endpoint": "Özel endpoint",
  "Full URL, used exactly as entered. No path is appended.":
    "Tam URL, girildiği gibi kullanılır. Yol eklenmez.",
  "Stored on this device only.": "Yalnızca bu cihazda saklanır.",
  "Model ID sent to the provider.": "Sağlayıcıya gönderilen model kimliği.",
  "OpenRouter provider routing": "OpenRouter sağlayıcı yönlendirmesi",
  "Prioritize listed providers": "Listelenen sağlayıcılara öncelik ver",
  "Only listed providers": "Yalnızca listelenen sağlayıcılar",
  "Ignore listed providers": "Listelenen sağlayıcıları yok say",
  "OpenRouter provider slugs": "OpenRouter sağlayıcı kısa adları",
  "Separated by commas or line breaks.": "Virgül veya satır sonuyla ayrılır.",
  "Allow OpenRouter fallbacks": "OpenRouter yedeklerine izin ver",
  "Thinking mode": "Düşünme modu",
  "Thinking intensity": "Düşünme yoğunluğu",
  "Custom thinking value": "Özel düşünme değeri",
  "A word, a token count, or a JSON object.": "Bir kelime, bir token sayısı veya bir JSON nesnesi.",
  "Custom request body JSON": "Özel istek gövdesi JSON'u",
  "A JSON object merged over the generated request.":
    "Oluşturulan isteğin üzerine birleştirilen bir JSON nesnesi.",
  "Auto generate on lookup": "Aramada otomatik oluştur",
  "When off, the box appears without sending a request and you generate it manually.":
    "Kapalıyken kutu istek göndermeden görünür ve açıklamayı elle oluşturursunuz.",
  "Real time response": "Gerçek zamanlı yanıt",
  "Stream the explanation into the popup as it is written.":
    "Açıklamayı yazıldıkça pencereye akıtır.",
  "Cancel unfinished requests": "Bitmemiş istekleri iptal et",
  "Drop an explanation still being generated when the popup closes or another word is looked up.":
    "Pencere kapandığında veya başka bir kelime arandığında hâlâ oluşturulan açıklamayı bırakır.",
  "Fallback for unknown words": "Bilinmeyen kelimeler için yedek",
  "Custom prompt": "Özel istem",
  "Use {target} for the word and {sentence} for its context.":
    "Kelime için {target}, bağlamı için {sentence} kullanın.",
  "System prompt": "Sistem istemi",
  "Optional instructions sent before the user prompt. Leave empty to send none.":
    "Kullanıcı isteminden önce gönderilen isteğe bağlı talimatlar. Hiç göndermemek için boş bırakın.",
  Temperature: "Sıcaklık",
  "Between 0 and 2. Lower is more deterministic.": "0 ile 2 arası. Düşük olan daha belirleyicidir.",
  "AI explanation": "Yapay zekâ açıklaması",
  "Not a valid JSON object.": "Geçerli bir JSON nesnesi değil.",
};

export default aiExplanation;
