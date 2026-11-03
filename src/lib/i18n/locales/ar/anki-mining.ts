// Anki cards from the dictionary popup.
const ankiMining: Record<string, string> = {
  "Hover a word in the subtitles to look it up in your Yomitan dictionaries, hear it and add it to Anki. Uses Manatan's dictionary engine.":
    "مرّر المؤشر فوق كلمة في الترجمة للبحث عنها في قواميس Yomitan، والاستماع إليها، وإضافتها إلى Anki. يستخدم محرك القواميس الخاص بـ Manatan.",
  "Open the popup for words no dictionary contains, with only the AI explanation, so they can still go to Anki.":
    "يفتح النافذة المنبثقة للكلمات التي لا يحتويها أي قاموس، مع شرح الذكاء الاصطناعي فقط، ليظل بالإمكان إرسالها إلى Anki.",
  "Plays and mines pronunciations from a local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "يشغّل النطق ويضيفه من قاعدة بيانات local-audio-yomichan (Forvo وNHK16 وShinmeikai8 وJPod101). اختر android.db، أو entries.db الموجود بجانب مجلدات *_files. لا يقرأ إصدار Flatpak إلا android.db.",
  "Connected to Anki": "تم الاتصال بـ Anki",
  Anki: "Anki",
  "Adds cards through AnkiConnect with the word, sentence, definitions, a screenshot, the sentence audio and the word audio. Anki must be open with the AnkiConnect add-on.":
    "يضيف بطاقات عبر AnkiConnect تحتوي على الكلمة والجملة والتعريفات ولقطة شاشة وصوت الجملة وصوت الكلمة. يجب أن يكون Anki مفتوحًا مع إضافة AnkiConnect.",
  "AnkiConnect address": "عنوان AnkiConnect",
  Deck: "الرزمة",
  "Choose…": "اختر…",
  "Connect first": "اتصل أولًا",
  "Note type": "نوع الملاحظة",
  Fields: "الحقول",
  "Auto-fill": "تعبئة تلقائية",
  "Separated by spaces.": "مفصولة بمسافات.",
  "Sentence audio padding": "هامش صوت الجملة",
  "Seconds added before and after the subtitle line.": "الثواني المضافة قبل سطر الترجمة وبعده.",
  "Animated clip format": "تنسيق المقطع المتحرك",
  "For fields set to the animated clip. AVIF is smallest; WebP and GIF play in older Anki versions. Falls back to WebP, then GIF, if an encoder is missing.":
    "للحقول المضبوطة على المقطع المتحرك. AVIF هو الأصغر، ويعمل WebP وGIF في إصدارات Anki الأقدم. يتحوّل إلى WebP ثم GIF إذا غاب أحد المرمّزات.",
  "Animated clip size": "حجم المقطع المتحرك",
  "Width in pixels and frames per second. Clips stop after 12 seconds.":
    "العرض بالبكسل والإطارات في الثانية. تتوقف المقاطع بعد 12 ثانية.",
  "Allow duplicate cards": "السماح بالبطاقات المكررة",
  "When off, words already in the deck are refused.":
    "عند إيقافه تُرفض الكلمات الموجودة في الرزمة بالفعل.",
  "Subtitle dictionary lookups, word audio and Anki mining run in the Harbor desktop app.":
    "يعمل البحث في قاموس الترجمة وصوت الكلمات والتصدير إلى Anki في تطبيق Harbor لسطح المكتب.",
  Word: "الكلمة",
  "Word with furigana": "الكلمة مع الفوريغانا",
  "Definitions (all)": "التعريفات (الكل)",
  "Definition (first dictionary)": "التعريف (القاموس الأول)",
  Sentence: "الجملة",
  "Sentence (word in bold)": "الجملة (الكلمة بخط عريض)",
  "Sentence (word as cloze)": "الجملة (الكلمة كفراغ)",
  "Sentence audio": "صوت الجملة",
  "Word audio (local)": "صوت الكلمة (محلي)",
  "Animated clip of the line (AVIF/WebP/GIF)": "مقطع متحرك للسطر (AVIF/WebP/GIF)",
  Frequency: "التكرار",
  "Pitch accent": "النبر الصوتي",
  "Title / episode": "العنوان / الحلقة",
  "Text selected in the popup (else first definition)":
    "النص المحدد في النافذة المنبثقة (وإلا فالتعريف الأول)",
  "Add to Anki": "إضافة إلى Anki",
  "Dictionary & Anki": "القاموس وAnki",
  "Look up words in subtitles with your Yomitan dictionaries, hear them, get AI explanations and turn them into Anki cards.":
    "ابحث عن كلمات الترجمة في قواميس Yomitan، واستمع إليها، واحصل على شروح بالذكاء الاصطناعي، وحوّلها إلى بطاقات Anki.",
  "Cards of the word": "بطاقات الكلمة",
  "The Anki button shows how many notes the word already has. All decks also finds notes from other decks and note types, such as cards made with Yomitan, with a field that is exactly the word.":
    "يعرض زر Anki عدد الملاحظات الموجودة للكلمة. خيار كل الحزم يجد أيضًا ملاحظات من حزم وأنواع ملاحظات أخرى، مثل البطاقات المصنوعة بـ Yomitan، فيها حقل يساوي الكلمة تمامًا.",
  "This deck": "هذه الحزمة",
  "This deck and all decks": "هذه الحزمة وكل الحزم",
};

export default ankiMining;
