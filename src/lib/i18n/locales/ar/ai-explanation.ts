// AI explanation of a looked-up word.
const aiExplanation: Record<string, string> = {
  "AI Explanation": "شرح بالذكاء الاصطناعي",
  "Generate a contextual explanation of the looked-up word with your own AI provider. Requests go directly from this device to any OpenAI-compatible endpoint (OpenRouter, OpenAI, DeepSeek, Groq, a local server…).":
    "أنشئ شرحًا للكلمة التي بحثت عنها حسب سياقها باستخدام مزوّد الذكاء الاصطناعي الخاص بك. تُرسَل الطلبات مباشرة من هذا الجهاز إلى أي endpoint متوافق مع OpenAI (OpenRouter وOpenAI وDeepSeek وGroq وخادم محلي…).",
  "AI explanation in the popup": "الشرح بالذكاء الاصطناعي في النافذة المنبثقة",
  "Shows the explanation above the dictionary entries.": "يعرض الشرح فوق مدخلات القاموس.",
  "Custom endpoint": "endpoint مخصّص",
  "Full URL, used exactly as entered. No path is appended.":
    "عنوان URL كامل يُستخدم كما كُتب تمامًا. لا يُضاف أي مسار.",
  "Stored on this device only.": "يُحفظ على هذا الجهاز فقط.",
  "Model ID sent to the provider.": "معرّف النموذج المرسَل إلى المزوّد.",
  "OpenRouter provider routing": "توجيه مزوّدي OpenRouter",
  "Prioritize listed providers": "إعطاء الأولوية للمزوّدين المدرجين",
  "Only listed providers": "المزوّدون المدرجون فقط",
  "Ignore listed providers": "تجاهل المزوّدين المدرجين",
  "OpenRouter provider slugs": "معرّفات مزوّدي OpenRouter",
  "Separated by commas or line breaks.": "مفصولة بفواصل أو بأسطر جديدة.",
  "Allow OpenRouter fallbacks": "السماح ببدائل OpenRouter",
  "Thinking mode": "وضع التفكير",
  "Thinking intensity": "شدة التفكير",
  "Custom thinking value": "قيمة تفكير مخصّصة",
  "A word, a token count, or a JSON object.": "كلمة أو عدد رموز أو كائن JSON.",
  "Custom request body JSON": "JSON مخصّص لمتن الطلب",
  "A JSON object merged over the generated request.": "كائن JSON يُدمج فوق الطلب المُنشأ.",
  "Auto generate on lookup": "الإنشاء تلقائيًا عند البحث",
  "When off, the box appears without sending a request and you generate it manually.":
    "عند إيقافه يظهر المربع دون إرسال طلب وتنشئ الشرح يدويًا.",
  "Real time response": "استجابة فورية",
  "Stream the explanation into the popup as it is written.":
    "يبث الشرح إلى النافذة المنبثقة أثناء كتابته.",
  "Cancel unfinished requests": "إلغاء الطلبات غير المكتملة",
  "Drop an explanation still being generated when the popup closes or another word is looked up.":
    "يتجاهل الشرح الذي ما زال قيد الإنشاء عند إغلاق النافذة المنبثقة أو البحث عن كلمة أخرى.",
  "Fallback for unknown words": "بديل للكلمات غير المعروفة",
  "Custom prompt": "موجّه مخصّص",
  "Use {target} for the word and {sentence} for its context.":
    "استخدم {target} للكلمة و{sentence} لسياقها.",
  "System prompt": "موجّه النظام",
  "Optional instructions sent before the user prompt. Leave empty to send none.":
    "تعليمات اختيارية تُرسَل قبل موجّه المستخدم. اتركه فارغًا لعدم إرسال شيء.",
  Temperature: "درجة الحرارة",
  "Between 0 and 2. Lower is more deterministic.": "بين 0 و2. الأقل أكثر حتمية.",
  "AI explanation": "شرح بالذكاء الاصطناعي",
  "Not a valid JSON object.": "ليس كائن JSON صالحًا.",
  "Look up words in subtitles with your Yomitan dictionaries, hear them and get AI explanations.":
    "ابحث عن كلمات الترجمة في قواميس Yomitan، واستمع إليها، واحصل على شروح بالذكاء الاصطناعي.",
  "Open the popup for words no dictionary contains, with only the AI explanation.":
    "يفتح النافذة المنبثقة للكلمات التي لا يحتويها أي قاموس، مع شرح الذكاء الاصطناعي فقط.",
};

export default aiExplanation;
