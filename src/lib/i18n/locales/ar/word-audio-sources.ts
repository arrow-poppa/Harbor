// Word audio sources: recorded and synthesized voices for looked-up words.
const wordAudioSources: Record<string, string> = {
  "Plays the looked-up word and adds it to Anki cards. Sources are tried from top to bottom, and pressing the audio button again plays the next voice. Online sources send the word to their site.":
    "يشغّل نطق الكلمة التي بحثت عنها ويضيفه إلى بطاقات Anki. تُجرَّب المصادر من الأعلى إلى الأسفل، والضغط على زر الصوت مرة أخرى يشغّل الصوت التالي. المصادر عبر الإنترنت ترسل الكلمة إلى مواقعها.",
  "Local audio database": "قاعدة بيانات الصوت المحلية",
  "Custom URL": "رابط مخصص",
  "Custom URL (JSON)": "رابط مخصص (JSON)",
  "Automatic picks a voice for the lookup language.": "«تلقائي» يختار صوتًا للغة البحث.",
  "The reading (kana), when there is one": "القراءة (كانا)، إن وُجدت",
  "The word as written": "الكلمة كما تُكتب",
  URL: "الرابط",
  "A local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "قاعدة بيانات local-audio-yomichan (Forvo وNHK16 وShinmeikai8 وJPod101). اختر android.db، أو entries.db الموجود بجانب مجلدات *_files. لا يقرأ إصدار Flatpak إلا android.db.",
  "Recorded Japanese words from JapanesePod101.": "كلمات يابانية مسجّلة من JapanesePod101.",
  "Recorded words from the LanguagePod101 sites, in about 35 languages.":
    "كلمات مسجّلة من مواقع LanguagePod101، بنحو 35 لغة.",
  "Recorded Japanese words from Jisho.org.": "كلمات يابانية مسجّلة من Jisho.org.",
  "Recordings shared on Wikimedia Commons by Lingua Libre speakers.":
    "تسجيلات شاركها متحدثو Lingua Libre على ويكيميديا كومنز.",
  "Wiktionary recordings on Wikimedia Commons.": "تسجيلات ويكاموس على ويكيميديا كومنز.",
  "Microsoft Edge's online neural voices, the same ones the eBook narration uses.":
    "أصوات Microsoft Edge العصبية عبر الإنترنت، وهي نفسها التي تستخدمها قراءة الكتب الإلكترونية.",
  "An audio file at your own URL. {term}, {reading} and {language} are filled in.":
    "ملف صوتي على رابطك الخاص. تُملأ {term} و{reading} و{language} تلقائيًا.",
  "A URL that answers with a list of audio files, such as a local audio server. {term}, {reading} and {language} are filled in.":
    "رابط يردّ بقائمة ملفات صوتية، مثل خادم صوت محلي. تُملأ {term} و{reading} و{language} تلقائيًا.",
  "Only when no other source has audio": "فقط عندما لا يوجد صوت في المصادر الأخرى",
  "Synthesized speech is used only if no recorded voice is found for the word.":
    "يُستخدم الكلام المُركَّب فقط إذا لم يُعثر على تسجيل صوتي للكلمة.",
};

export default wordAudioSources;
