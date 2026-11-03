// Subtitle dictionary: word lookups in the subtitles and word audio.
const subtitleDictionary: Record<string, string> = {
  "Subtitle dictionary": "قاموس الترجمة",
  "Look up words in subtitles": "البحث عن الكلمات في الترجمة",
  "Works with Harbor's subtitles and with styled (ASS) subtitles drawn by mpv. Image subtitles (PGS) have no text to look up.":
    "يعمل مع ترجمات Harbor ومع الترجمات المنسّقة (ASS) التي يرسمها mpv. الترجمات المصوّرة (PGS) لا تحتوي على نص للبحث.",
  "Pause while the popup is open": "إيقاف مؤقت أثناء فتح النافذة المنبثقة",
  "Resumes when the popup closes.": "يستأنف التشغيل عند إغلاق النافذة المنبثقة.",
  "Keep the popup open when the mouse leaves": "إبقاء النافذة المنبثقة مفتوحة عند ابتعاد المؤشر",
  "The popup (and the pause) stays until you click outside it or press Escape.":
    "تبقى النافذة المنبثقة (والإيقاف المؤقت) حتى تنقر خارجها أو تضغط Escape.",
  "Look up with": "البحث بواسطة",
  "Hover looks words up as the mouse passes over them. With a key, hold it while hovering (or press it on a word) and plain hovering does nothing. Clicking a word always looks it up.":
    "التمرير يبحث عن الكلمات عند مرور المؤشر فوقها. مع مفتاح، اضغط عليه مطوّلًا أثناء التمرير (أو اضغطه فوق كلمة)، ولا يفعل التمرير وحده شيئًا. النقر على كلمة يبحث عنها دائمًا.",
  Hover: "التمرير",
  "Hold Shift": "الضغط مطوّلًا على Shift",
  "Hold Ctrl": "الضغط مطوّلًا على Ctrl",
  "Hold Alt": "الضغط مطوّلًا على Alt",
  "Scan delay (in milliseconds)": "تأخير البحث (بالملّي ثانية)",
  "Wait before looking up the word under the mouse when no key is required. Lower is faster; higher avoids lookups while the mouse just passes over the subtitle.":
    "الانتظار قبل البحث عن الكلمة تحت المؤشر عندما لا يلزم مفتاح. الأقل أسرع، والأعلى يتجنب البحث عندما يمر المؤشر فوق الترجمة فقط.",
  "Keep subtitles above the seek bar": "إبقاء الترجمة فوق شريط التقدّم",
  "The seek bar covers the lowest subtitle line, so lift the subtitles above it while you look words up.":
    "يغطي شريط التقدّم أدنى سطر في الترجمة، لذا ارفع الترجمة فوقه أثناء البحث عن الكلمات.",
  "Same setting as Player → Subtitles.": "الإعداد نفسه في المشغّل ← الترجمة.",
  "Subtitle height": "ارتفاع الترجمة",
  "Distance from the bottom of the video.": "المسافة من أسفل الفيديو.",
  "Subtitle language": "لغة الترجمة",
  "Picks the deinflection rules used for lookups.": "يختار قواعد إزالة التصريف المستخدمة في البحث.",
  "Loading dictionaries…": "جارٍ تحميل القواميس…",
  "No dictionaries yet. Import Yomitan .zip files such as JMdict or Jitendex.":
    "لا توجد قواميس بعد. استورد ملفات Yomitan بصيغة .zip مثل JMdict أو Jitendex.",
  "Importing {name}…": "جارٍ استيراد {name}…",
  "Import dictionary (.zip)": "استيراد قاموس (.zip)",
  "Word audio": "صوت الكلمة",
  "No database selected": "لم تُحدَّد قاعدة بيانات",
  "Choose database": "اختيار قاعدة البيانات",
  "(empty)": "(فارغ)",
  "Download the desktop app to look up words while you watch.":
    "نزّل تطبيق سطح المكتب للبحث عن الكلمات أثناء المشاهدة.",
  Greek: "اليونانية",
  Latin: "اللاتينية",
  Controller: "وحدة التحكم",
  Dictionary: "القاموس",
};

export default subtitleDictionary;
