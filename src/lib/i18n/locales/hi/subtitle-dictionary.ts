// Subtitle dictionary: word lookups in the subtitles and word audio.
const subtitleDictionary: Record<string, string> = {
  "Subtitle dictionary": "सबटाइटल शब्दकोश",
  "Look up words in subtitles": "सबटाइटल में शब्द देखें",
  "Works with Harbor's subtitles and with styled (ASS) subtitles drawn by mpv. Image subtitles (PGS) have no text to look up.":
    "Harbor के सबटाइटल और mpv द्वारा बनाए गए स्टाइल वाले (ASS) सबटाइटल के साथ काम करता है. इमेज सबटाइटल (PGS) में देखने के लिए टेक्स्ट नहीं होता.",
  "Pause while the popup is open": "पॉपअप खुला रहने तक रोकें",
  "Resumes when the popup closes.": "पॉपअप बंद होने पर फिर चलता है.",
  "Keep the popup open when the mouse leaves": "माउस हटने पर भी पॉपअप खुला रखें",
  "The popup (and the pause) stays until you click outside it or press Escape.":
    "पॉपअप (और रुकावट) तब तक रहता है जब तक आप उसके बाहर क्लिक न करें या Escape न दबाएँ.",
  "Look up with": "इससे देखें",
  "Hover looks words up as the mouse passes over them. With a key, hold it while hovering (or press it on a word) and plain hovering does nothing. Clicking a word always looks it up.":
    "होवर करने पर माउस जिन शब्दों से गुज़रता है वे देखे जाते हैं. किसी कुंजी के साथ, होवर करते समय उसे दबाए रखें (या किसी शब्द पर दबाएँ); सिर्फ़ होवर करने से कुछ नहीं होता. किसी शब्द पर क्लिक करने से वह हमेशा देखा जाता है.",
  Hover: "होवर",
  "Hold Shift": "Shift दबाए रखें",
  "Hold Ctrl": "Ctrl दबाए रखें",
  "Hold Alt": "Alt दबाए रखें",
  "Scan delay (in milliseconds)": "खोज में देरी (मिलीसेकंड में)",
  "Wait before looking up the word under the mouse when no key is required. Lower is faster; higher avoids lookups while the mouse just passes over the subtitle.":
    "जब कोई कुंजी ज़रूरी न हो, तब माउस के नीचे के शब्द को देखने से पहले का इंतज़ार. कम होने पर तेज़; ज़्यादा होने पर माउस के सिर्फ़ सबटाइटल पर से गुज़रने पर खोज नहीं होती.",
  "Keep subtitles above the seek bar": "सबटाइटल को सीक बार के ऊपर रखें",
  "The seek bar covers the lowest subtitle line, so lift the subtitles above it while you look words up.":
    "सीक बार सबसे नीचे की सबटाइटल पंक्ति को ढक देता है, इसलिए शब्द देखते समय सबटाइटल उसके ऊपर उठाएँ.",
  "Same setting as Player → Subtitles.": "प्लेयर → सबटाइटल वाली ही सेटिंग.",
  "Subtitle height": "सबटाइटल की ऊँचाई",
  "Distance from the bottom of the video.": "वीडियो के निचले किनारे से दूरी.",
  "Subtitle language": "सबटाइटल की भाषा",
  "Picks the deinflection rules used for lookups.":
    "खोज के लिए इस्तेमाल होने वाले रूप-परिवर्तन हटाने के नियम चुनता है.",
  "Loading dictionaries…": "शब्दकोश लोड हो रहे हैं…",
  "No dictionaries yet. Import Yomitan .zip files such as JMdict or Jitendex.":
    "अभी कोई शब्दकोश नहीं है. JMdict या Jitendex जैसी Yomitan .zip फ़ाइलें इम्पोर्ट करें.",
  "Importing {name}…": "{name} इम्पोर्ट हो रहा है…",
  "Import dictionary (.zip)": "शब्दकोश इम्पोर्ट करें (.zip)",
  "Word audio": "शब्द का ऑडियो",
  "No database selected": "कोई डेटाबेस नहीं चुना गया",
  "Choose database": "डेटाबेस चुनें",
  "(empty)": "(खाली)",
  "Download the desktop app to look up words while you watch.":
    "देखते हुए शब्द खोजने के लिए डेस्कटॉप ऐप डाउनलोड करें.",
  Greek: "यूनानी",
  Latin: "लैटिन",
  Controller: "कंट्रोलर",
  Dictionary: "शब्दकोश",
  "Hover a word in the subtitles to look it up in your Yomitan dictionaries and hear it. Uses Manatan's dictionary engine.":
    "सबटाइटल के किसी शब्द पर माउस ले जाएँ ताकि उसे अपने Yomitan शब्दकोशों में देख और सुन सकें. Manatan का शब्दकोश इंजन इस्तेमाल करता है.",
  "Plays pronunciations from a local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "local-audio-yomichan डेटाबेस (Forvo, NHK16, Shinmeikai8, JPod101) से उच्चारण चलाता है. android.db चुनें, या *_files फ़ोल्डरों के पास वाला entries.db. Flatpak संस्करण केवल android.db पढ़ सकता है.",
  "Subtitle dictionary lookups and word audio run in the Harbor desktop app.":
    "सबटाइटल शब्दकोश खोज और शब्द ऑडियो Harbor डेस्कटॉप ऐप में चलते हैं.",
};

export default subtitleDictionary;
