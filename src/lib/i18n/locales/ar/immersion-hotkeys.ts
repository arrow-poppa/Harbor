// Immersion hotkeys, picking words in the subtitles and controller buttons in the hotkey list.
const immersionHotkeys: Record<string, string> = {
  "audio card": "بطاقة صوتية",
  "last card": "آخر بطاقة",
  "new card": "بطاقة جديدة",
  "Still adding the previous card…": "ما زالت البطاقة السابقة قيد الإضافة…",
  "Updated card in {deck}": "تم تحديث البطاقة في {deck}",
  "Added to {deck}": "تمت الإضافة إلى {deck}",
  "{n}s recorded": "تم تسجيل {n} ث",
  "Recording → {target}. Press again to stop.": "جارٍ التسجيل ← {target}. اضغط مرة أخرى للإيقاف.",
  "the video went back since the recording started": "رجع الفيديو إلى الخلف منذ بدء التسجيل",
  "too short": "قصير جدًا",
  "longer than the {n}s limit": "أطول من الحد البالغ {n} ث",
  "Recording discarded: {reason}": "تم تجاهل التسجيل: {reason}",
  "Stopped · {n}s recorded · adding card…": "توقف · تم تسجيل {n} ث · جارٍ إضافة البطاقة…",
  "Anki cards from the player need the mpv player in the desktop app.":
    "تحتاج بطاقات Anki من المشغّل إلى مشغّل mpv في تطبيق سطح المكتب.",
  "No subtitle on screen. Use a Record shortcut for parts without subtitles.":
    "لا توجد ترجمة على الشاشة. استخدم اختصار التسجيل للأجزاء التي لا ترجمة لها.",
  Immersion: "الانغماس",
  "Cards straight from the player, without looking a word up: from the subtitle on screen, or from a stretch you record with two presses of the same key (works without subtitles). Set the keys in Settings → Hotkeys → Immersion. mpv only.":
    "بطاقات من المشغّل مباشرة دون البحث عن كلمة: من الترجمة على الشاشة، أو من مقطع تسجّله بضغطتين على المفتاح نفسه (يعمل دون ترجمة). اضبط المفاتيح من الإعدادات ← الاختصارات ← الانغماس. mpv فقط.",
  "Sentence cards": "بطاقات الجمل",
  "Pick a deck and note type above": "اختر رزمة ونوع ملاحظة أعلاه",
  "Map a field to Sentence audio above": "اربط حقلًا بصوت الجملة أعلاه",
  "Audio cards": "البطاقات الصوتية",
  "Audio card deck": "رزمة البطاقات الصوتية",
  "Audio card note type": "نوع ملاحظة البطاقات الصوتية",
  "Audio field": "حقل الصوت",
  "Gets the audio of the line or of the recording.": "يتلقى صوت السطر أو التسجيل.",
  "Pick a note type first": "اختر نوع ملاحظة أولًا",
  "Sentence field (optional)": "حقل الجملة (اختياري)",
  "Gets the subtitle text, when there is one.": "يتلقى نص الترجمة إن وُجد.",
  "Update last card window": "مهلة تحديث آخر بطاقة",
  "Update last card only touches a card added this many minutes ago or less.":
    "لا يغيّر تحديث آخر بطاقة إلا بطاقة أُضيفت منذ هذا العدد من الدقائق أو أقل.",
  "Longest recording": "أطول تسجيل",
  "A recording longer than this is discarded. Animated clips still stop after 12 seconds.":
    "يُتجاهل التسجيل الأطول من ذلك. وتظل المقاطع المتحركة تتوقف بعد 12 ثانية.",
  "Hide every subtitle (primary and secondary), or show the primary again. Hidden subtitles still work for line seeking, replay and Anki cards.":
    "يخفي كل الترجمات (الأساسية والثانوية) أو يعيد إظهار الأساسية. وهي مخفية تظل تعمل للتنقل بين السطور والإعادة وبطاقات Anki.",
  "Anki: card from the subtitle": "Anki: بطاقة من الترجمة",
  "Anki: update last card": "Anki: تحديث آخر بطاقة",
  "Anki: audio card": "Anki: بطاقة صوتية",
  "Add an audio-only card from the line on screen, using the audio card deck. mpv only.":
    "يضيف بطاقة صوتية فقط من السطر الظاهر على الشاشة، باستخدام رزمة البطاقات الصوتية. mpv فقط.",
  "Record → new card": "التسجيل ← بطاقة جديدة",
  "Record → update last card": "التسجيل ← تحديث آخر بطاقة",
  "Record → audio card": "التسجيل ← بطاقة صوتية",
  "Press once to start recording, again to stop and add an audio card with that stretch. Works without subtitles. mpv only.":
    "اضغط مرة لبدء التسجيل، ثم مرة أخرى لإيقافه وإضافة بطاقة صوتية بذلك المقطع. يعمل دون ترجمة. mpv فقط.",
  "Card from the subtitle, Update last card and the Record → card keys use the deck, note type and fields of the Anki section above. With a word selected in the subtitles (highlighted while picking a word, or in an open popup) every mapped field is filled, word and definitions included; without one only the sentence, sentence audio, screenshot or clip and title fields are.":
    "تستخدم مفاتيح بطاقة من الترجمة وتحديث آخر بطاقة والتسجيل ← بطاقة الرزمةَ ونوع الملاحظة والحقولَ من قسم Anki أعلاه. عند تحديد كلمة في الترجمة (مظلّلة أثناء اختيار كلمة، أو ظاهرة في نافذة منبثقة مفتوحة) تُملأ كل الحقول المربوطة بما فيها الكلمة والتعريفات؛ ومن دونها تُملأ حقول الجملة وصوت الجملة ولقطة الشاشة أو المقطع والعنوان فقط.",
  "Add a card from the line on screen with its sentence, audio and picture, using the deck and fields under Dictionary & Anki. With a word selected in the subtitles, the word and its definitions go on the card too. mpv only.":
    "يضيف بطاقة من السطر الظاهر على الشاشة مع جملته وصوته وصورته، باستخدام الرزمة والحقول في القاموس وAnki. عند تحديد كلمة في الترجمة تُضاف الكلمة وتعريفاتها إلى البطاقة أيضًا. mpv فقط.",
  "Put the line on screen (sentence, audio, picture) into the newest card of the deck, if it was added in the last few minutes. With a word selected, the word and its definitions too. mpv only.":
    "يضع السطر الظاهر على الشاشة (الجملة والصوت والصورة) في أحدث بطاقة في الرزمة إن أُضيفت في الدقائق الأخيرة. وعند تحديد كلمة، الكلمة وتعريفاتها أيضًا. mpv فقط.",
  "Press once to start recording, again to stop and add a card with that stretch. Works without subtitles. With a word selected when you stop, the word and its definitions go on the card too. mpv only.":
    "اضغط مرة لبدء التسجيل، ثم مرة أخرى لإيقافه وإضافة بطاقة بذلك المقطع. يعمل دون ترجمة. إن كانت هناك كلمة محددة عند الإيقاف تُضاف الكلمة وتعريفاتها إلى البطاقة أيضًا. mpv فقط.",
  "Press once to start recording, again to stop and put that stretch into the newest card. Works without subtitles. With a word selected when you stop, the word and its definitions too. mpv only.":
    "اضغط مرة لبدء التسجيل، ثم مرة أخرى لإيقافه ووضع المقطع في أحدث بطاقة. يعمل دون ترجمة. إن كانت هناك كلمة محددة عند الإيقاف، الكلمة وتعريفاتها أيضًا. mpv فقط.",
  "Added {word} to {deck}": "تمت إضافة {word} إلى {deck}",
  "Updated card in {deck} with {word}": "تم تحديث البطاقة في {deck} بـ {word}",
  "Bigger dictionary popup": "تكبير نافذة القاموس",
  "Make the subtitle dictionary popup 10% bigger. Saved as the Popup size setting.":
    "يكبّر نافذة قاموس الترجمة بنسبة 10%. يُحفظ في إعداد حجم النافذة.",
  "Smaller dictionary popup": "تصغير نافذة القاموس",
  "Make the subtitle dictionary popup 10% smaller. Saved as the Popup size setting.":
    "يصغّر نافذة قاموس الترجمة بنسبة 10%. يُحفظ في إعداد حجم النافذة.",
  "Dictionary popup size: {n}%": "حجم نافذة القاموس: {n}%",
  "Popup size": "حجم النافذة",
  "Scales the whole popup: text, buttons and width. Bigger sizes help on a TV. The Bigger/Smaller dictionary popup hotkeys change it too.":
    "يغيّر حجم النافذة كلها: النص والأزرار والعرض. الأحجام الكبيرة تفيد على التلفاز. اختصارا تكبير/تصغير نافذة القاموس يغيّرانه أيضًا.",
  "No subtitle on screen to pick a word from.": "لا توجد ترجمة على الشاشة لاختيار كلمة منها.",
  "Turn on Look up words in subtitles under Dictionary & Anki to pick words.":
    "فعّل البحث عن الكلمات في الترجمة من القاموس وAnki لاختيار الكلمات.",
  "Word lookup": "البحث عن الكلمات",
  "While picking a word in the subtitles with the Pick a word in the subtitles shortcut. These keys take over only then, so they can reuse the player's.":
    "أثناء اختيار كلمة من الترجمة باختصار اختيار كلمة من الترجمة. لا تعمل هذه المفاتيح إلا حينها، لذا يمكنها تكرار مفاتيح المشغّل.",
  "Pick a word in the subtitles": "اختيار كلمة من الترجمة",
  "Pause and select the first word of the subtitle to look it up without the mouse. Move between words with the Word lookup keys; press again to leave.":
    "يوقف التشغيل مؤقتًا ويحدد أول كلمة في الترجمة للبحث عنها دون الفأرة. تنقّل بين الكلمات بمفاتيح البحث عن الكلمات، واضغط مرة أخرى للخروج.",
  "Next word": "الكلمة التالية",
  "Select and look up the next word.": "يحدد الكلمة التالية ويبحث عنها.",
  "Previous word": "الكلمة السابقة",
  "Select and look up the previous word.": "يحدد الكلمة السابقة ويبحث عنها.",
  "Line above": "السطر الأعلى",
  "Go to the first word of the subtitle line above.": "ينتقل إلى أول كلمة في سطر الترجمة الأعلى.",
  "Line below": "السطر الأدنى",
  "Go to the first word of the subtitle line below.": "ينتقل إلى أول كلمة في سطر الترجمة الأدنى.",
  "Add the selected word to Anki, like the Anki button in the popup.":
    "يضيف الكلمة المحددة إلى Anki، مثل زر Anki في النافذة المنبثقة.",
  "Generate AI explanation": "إنشاء شرح بالذكاء الاصطناعي",
  "Generate the AI explanation of the word, or generate it again.":
    "ينشئ شرح الكلمة بالذكاء الاصطناعي، أو ينشئه من جديد.",
  "Play word audio": "تشغيل صوت الكلمة",
  "Play the word's local audio; press again for the next voice.":
    "يشغّل الصوت المحلي للكلمة، واضغط مرة أخرى للصوت التالي.",
  "Scroll popup down": "تمرير النافذة المنبثقة للأسفل",
  "Scroll the definitions down. On a controller the right stick scrolls too.":
    "يمرّر التعريفات للأسفل. وفي وحدة التحكم تمرّر العصا اليمنى أيضًا.",
  "Scroll popup up": "تمرير النافذة المنبثقة للأعلى",
  "Scroll the definitions up.": "يمرّر التعريفات للأعلى.",
  "Leave word lookup": "الخروج من البحث عن الكلمات",
  Words: "الكلمات",
  Popup: "النافذة المنبثقة",
  "Show the popup": "إظهار النافذة المنبثقة",
  "Open or close the dictionary popup for the selected word. Moving to another word closes it.":
    "يفتح نافذة القاموس المنبثقة للكلمة المحددة أو يغلقها. الانتقال إلى كلمة أخرى يغلقها.",
};

export default immersionHotkeys;
