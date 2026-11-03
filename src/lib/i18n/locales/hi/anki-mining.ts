// Anki cards from the dictionary popup.
const ankiMining: Record<string, string> = {
  "Hover a word in the subtitles to look it up in your Yomitan dictionaries, hear it and add it to Anki. Uses Manatan's dictionary engine.":
    "सबटाइटल के किसी शब्द पर माउस ले जाएँ ताकि उसे अपने Yomitan शब्दकोशों में देख सकें, सुन सकें और Anki में जोड़ सकें. Manatan का शब्दकोश इंजन इस्तेमाल करता है.",
  "Open the popup for words no dictionary contains, with only the AI explanation, so they can still go to Anki.":
    "जो शब्द किसी शब्दकोश में नहीं हैं उनके लिए भी सिर्फ़ AI व्याख्या के साथ पॉपअप खोलता है, ताकि वे फिर भी Anki में जा सकें.",
  "Connected to Anki": "Anki से जुड़ गया",
  Anki: "Anki",
  "Adds cards through AnkiConnect with the word, sentence, definitions, a screenshot, the sentence audio and the word audio. Anki must be open with the AnkiConnect add-on.":
    "AnkiConnect के ज़रिए शब्द, वाक्य, परिभाषाएँ, स्क्रीनशॉट, वाक्य का ऑडियो और शब्द का ऑडियो वाले कार्ड जोड़ता है. Anki, AnkiConnect ऐड-ऑन के साथ खुला होना चाहिए.",
  "AnkiConnect address": "AnkiConnect पता",
  Deck: "डेक",
  "Choose…": "चुनें…",
  "Connect first": "पहले कनेक्ट करें",
  "Note type": "नोट प्रकार",
  Fields: "फ़ील्ड",
  "Auto-fill": "अपने-आप भरें",
  "Separated by spaces.": "स्पेस से अलग करें.",
  "Sentence audio padding": "वाक्य ऑडियो की पैडिंग",
  "Seconds added before and after the subtitle line.":
    "सबटाइटल पंक्ति से पहले और बाद में जोड़े जाने वाले सेकंड.",
  "Animated clip format": "एनिमेटेड क्लिप का फ़ॉर्मैट",
  "For fields set to the animated clip. AVIF is smallest; WebP and GIF play in older Anki versions. Falls back to WebP, then GIF, if an encoder is missing.":
    "एनिमेटेड क्लिप पर सेट फ़ील्ड के लिए. AVIF सबसे छोटा है; WebP और GIF पुराने Anki संस्करणों में चलते हैं. एन्कोडर न होने पर WebP, फिर GIF पर जाता है.",
  "Animated clip size": "एनिमेटेड क्लिप का आकार",
  "Width in pixels and frames per second. Clips stop after 12 seconds.":
    "पिक्सल में चौड़ाई और प्रति सेकंड फ़्रेम. क्लिप 12 सेकंड बाद रुक जाती हैं.",
  "Allow duplicate cards": "डुप्लिकेट कार्ड की अनुमति दें",
  "When off, words already in the deck are refused.":
    "बंद होने पर डेक में पहले से मौजूद शब्द अस्वीकार हो जाते हैं.",
  "Subtitle dictionary lookups, word audio and Anki mining run in the Harbor desktop app.":
    "सबटाइटल शब्दकोश खोज, शब्द ऑडियो और Anki माइनिंग Harbor डेस्कटॉप ऐप में चलते हैं.",
  Word: "शब्द",
  "Word with furigana": "फ़ुरिगाना वाला शब्द",
  "Definitions (all)": "परिभाषाएँ (सभी)",
  "Definition (first dictionary)": "परिभाषा (पहला शब्दकोश)",
  Sentence: "वाक्य",
  "Sentence (word in bold)": "वाक्य (शब्द बोल्ड में)",
  "Sentence (word as cloze)": "वाक्य (शब्द क्लोज़ के रूप में)",
  "Sentence audio": "वाक्य का ऑडियो",
  "Animated clip of the line (AVIF/WebP/GIF)": "पंक्ति की एनिमेटेड क्लिप (AVIF/WebP/GIF)",
  Frequency: "आवृत्ति",
  "Pitch accent": "पिच एक्सेंट",
  "Title / episode": "शीर्षक / एपिसोड",
  "Text selected in the popup (else first definition)":
    "पॉपअप में चुना गया टेक्स्ट (नहीं तो पहली परिभाषा)",
  "Add to Anki": "Anki में जोड़ें",
  "Dictionary & Anki": "शब्दकोश और Anki",
  "Look up words in subtitles with your Yomitan dictionaries, hear them, get AI explanations and turn them into Anki cards.":
    "सबटाइटल के शब्द अपने Yomitan शब्दकोशों में देखें, सुनें, AI से उनकी व्याख्या पाएँ और उन्हें Anki कार्ड बनाएँ.",
  "Cards of the word": "शब्द के कार्ड",
  "The Anki button shows how many notes the word already has. All decks also finds notes from other decks and note types, such as cards made with Yomitan, with a field that is exactly the word.":
    "Anki बटन दिखाता है कि शब्द के कितने नोट पहले से हैं. सभी डेक दूसरे डेक और नोट प्रकारों के नोट भी ढूँढता है, जैसे Yomitan से बने कार्ड, जिनका कोई फ़ील्ड ठीक यही शब्द हो.",
  "This deck": "यह डेक",
  "This deck and all decks": "यह डेक और सभी डेक",
  "Definition (selected dictionary)": "परिभाषा (चुना हुआ शब्दकोश)",
};

export default ankiMining;
