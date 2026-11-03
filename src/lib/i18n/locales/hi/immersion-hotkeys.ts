// Immersion hotkeys, picking words in the subtitles and controller buttons in the hotkey list.
const immersionHotkeys: Record<string, string> = {
  "audio card": "ऑडियो कार्ड",
  "last card": "पिछला कार्ड",
  "new card": "नया कार्ड",
  "Still adding the previous card…": "पिछला कार्ड अभी भी जोड़ा जा रहा है…",
  "Updated card in {deck}": "{deck} में कार्ड अपडेट किया गया",
  "Added to {deck}": "{deck} में जोड़ा गया",
  "{n}s recorded": "{n}s रिकॉर्ड हुए",
  "Recording → {target}. Press again to stop.": "रिकॉर्डिंग → {target}. रोकने के लिए फिर दबाएँ.",
  "the video went back since the recording started": "रिकॉर्डिंग शुरू होने के बाद वीडियो पीछे चला गया",
  "too short": "बहुत छोटा",
  "longer than the {n}s limit": "{n}s की सीमा से लंबा",
  "Recording discarded: {reason}": "रिकॉर्डिंग हटा दी गई: {reason}",
  "Stopped · {n}s recorded · adding card…": "रुका · {n}s रिकॉर्ड हुए · कार्ड जोड़ा जा रहा है…",
  "Anki cards from the player need the mpv player in the desktop app.":
    "प्लेयर से Anki कार्ड के लिए डेस्कटॉप ऐप में mpv प्लेयर चाहिए.",
  "No subtitle on screen. Use a Record shortcut for parts without subtitles.":
    "स्क्रीन पर कोई सबटाइटल नहीं है. बिना सबटाइटल वाले हिस्सों के लिए रिकॉर्ड शॉर्टकट इस्तेमाल करें.",
  Immersion: "इमर्शन",
  "Cards straight from the player, without looking a word up: from the subtitle on screen, or from a stretch you record with two presses of the same key (works without subtitles). Set the keys in Settings → Hotkeys → Immersion. mpv only.":
    "शब्द देखे बिना सीधे प्लेयर से कार्ड: स्क्रीन के सबटाइटल से, या उस हिस्से से जिसे आप एक ही कुंजी दो बार दबाकर रिकॉर्ड करते हैं (बिना सबटाइटल के भी चलता है). कुंजियाँ सेटिंग → शॉर्टकट → इमर्शन में तय करें. केवल mpv.",
  "Sentence cards": "वाक्य कार्ड",
  "Pick a deck and note type above": "ऊपर डेक और नोट प्रकार चुनें",
  "Map a field to Sentence audio above": "ऊपर किसी फ़ील्ड को वाक्य ऑडियो से जोड़ें",
  "Audio cards": "ऑडियो कार्ड",
  "Audio card deck": "ऑडियो कार्ड का डेक",
  "Audio card note type": "ऑडियो कार्ड का नोट प्रकार",
  "Audio field": "ऑडियो फ़ील्ड",
  "Gets the audio of the line or of the recording.": "पंक्ति या रिकॉर्डिंग का ऑडियो पाता है.",
  "Pick a note type first": "पहले नोट प्रकार चुनें",
  "Sentence field (optional)": "वाक्य फ़ील्ड (वैकल्पिक)",
  "Gets the subtitle text, when there is one.": "सबटाइटल का टेक्स्ट पाता है, अगर हो.",
  "Update last card window": "पिछला कार्ड अपडेट करें की समय सीमा",
  "Update last card only touches a card added this many minutes ago or less.":
    "पिछला कार्ड अपडेट करें केवल उसी कार्ड को बदलता है जो इतने मिनट या उससे कम पहले जोड़ा गया हो.",
  "Longest recording": "सबसे लंबी रिकॉर्डिंग",
  "A recording longer than this is discarded. Animated clips still stop after 12 seconds.":
    "इससे लंबी रिकॉर्डिंग हटा दी जाती है. एनिमेटेड क्लिप फिर भी 12 सेकंड बाद रुकती हैं.",
  "Long seek": "लंबा सीक",
  "The jump of the Long seek back and Long seek forward shortcuts.":
    "लंबा पीछे सीक और लंबा आगे सीक शॉर्टकट की छलांग.",
  "Slow speed": "धीमी गति",
  "The speed the Toggle slow speed shortcut switches to from normal speed.":
    "वह गति जिस पर धीमी गति टॉगल शॉर्टकट सामान्य गति से जाता है.",
  "Toggle subtitles on/off": "सबटाइटल चालू/बंद करें",
  "Hide every subtitle (primary and secondary), or show the primary again. Hidden subtitles still work for line seeking, replay and Anki cards.":
    "सभी सबटाइटल (मुख्य और दूसरा) छिपाता है या मुख्य सबटाइटल फिर दिखाता है. छिपे होने पर भी वे पंक्ति बदलने, दोहराने और Anki कार्ड के लिए काम करते हैं.",
  "Next subtitle line": "अगली सबटाइटल पंक्ति",
  "Jump to the start of the next subtitle line.": "अगली सबटाइटल पंक्ति की शुरुआत पर जाता है.",
  "Previous subtitle line": "पिछली सबटाइटल पंक्ति",
  "Jump to the start of the previous subtitle line.": "पिछली सबटाइटल पंक्ति की शुरुआत पर जाता है.",
  "Toggle slow speed": "धीमी गति टॉगल करें",
  "Switch between normal speed and the slow speed set under Behavior (0.5x by default).":
    "सामान्य गति और व्यवहार में तय धीमी गति (डिफ़ॉल्ट 0.5x) के बीच बदलता है.",
  "Anki: card from the subtitle": "Anki: सबटाइटल से कार्ड",
  "Anki: update last card": "Anki: पिछला कार्ड अपडेट करें",
  "Anki: audio card": "Anki: ऑडियो कार्ड",
  "Add an audio-only card from the line on screen, using the audio card deck. mpv only.":
    "स्क्रीन की पंक्ति से केवल ऑडियो वाला कार्ड, ऑडियो कार्ड के डेक में जोड़ता है. केवल mpv.",
  "Record → new card": "रिकॉर्ड → नया कार्ड",
  "Record → update last card": "रिकॉर्ड → पिछला कार्ड अपडेट करें",
  "Record → audio card": "रिकॉर्ड → ऑडियो कार्ड",
  "Press once to start recording, again to stop and add an audio card with that stretch. Works without subtitles. mpv only.":
    "रिकॉर्डिंग शुरू करने के लिए एक बार दबाएँ, फिर रोककर उस हिस्से से ऑडियो कार्ड जोड़ने के लिए दोबारा दबाएँ. बिना सबटाइटल के भी चलता है. केवल mpv.",
  "Long seek back": "लंबा पीछे सीक",
  "Jump back by the Long seek step set under Behavior (30 seconds by default).":
    "व्यवहार में तय लंबे सीक जितना पीछे जाता है (डिफ़ॉल्ट 30 सेकंड).",
  "Long seek forward": "लंबा आगे सीक",
  "Jump forward by the Long seek step set under Behavior (30 seconds by default).":
    "व्यवहार में तय लंबे सीक जितना आगे जाता है (डिफ़ॉल्ट 30 सेकंड).",
  "Replay current subtitle": "मौजूदा सबटाइटल दोबारा चलाएँ",
  "Go back to the start of the line on screen and play it again, or of the last line shown when there is none.":
    "स्क्रीन की पंक्ति की शुरुआत पर लौटकर उसे फिर चलाता है, या कोई पंक्ति न हो तो आख़िरी दिखी पंक्ति की.",
  "Card from the subtitle, Update last card and the Record → card keys use the deck, note type and fields of the Anki section above. With a word selected in the subtitles (highlighted while picking a word, or in an open popup) every mapped field is filled, word and definitions included; without one only the sentence, sentence audio, screenshot or clip and title fields are.":
    "सबटाइटल से कार्ड, पिछला कार्ड अपडेट करें और रिकॉर्ड → कार्ड कुंजियाँ ऊपर के Anki हिस्से का डेक, नोट प्रकार और फ़ील्ड इस्तेमाल करती हैं. सबटाइटल में कोई शब्द चुना हो (शब्द चुनते समय हाइलाइट हुआ, या खुले पॉपअप में दिखा) तो शब्द और परिभाषाओं समेत सभी जुड़े फ़ील्ड भरे जाते हैं; न चुना हो तो केवल वाक्य, वाक्य ऑडियो, स्क्रीनशॉट या क्लिप और शीर्षक.",
  "Add a card from the line on screen with its sentence, audio and picture, using the deck and fields under Dictionary & Anki. With a word selected in the subtitles, the word and its definitions go on the card too. mpv only.":
    "स्क्रीन की पंक्ति से वाक्य, ऑडियो और तस्वीर वाला कार्ड, शब्दकोश और Anki के डेक और फ़ील्ड से जोड़ता है. सबटाइटल में कोई शब्द चुना हो तो शब्द और उसकी परिभाषाएँ भी कार्ड में जाती हैं. केवल mpv.",
  "Put the line on screen (sentence, audio, picture) into the newest card of the deck, if it was added in the last few minutes. With a word selected, the word and its definitions too. mpv only.":
    "स्क्रीन की पंक्ति (वाक्य, ऑडियो, तस्वीर) डेक के सबसे नए कार्ड में डालता है, अगर वह पिछले कुछ मिनटों में जोड़ा गया हो. कोई शब्द चुना हो तो शब्द और परिभाषाएँ भी. केवल mpv.",
  "Press once to start recording, again to stop and add a card with that stretch. Works without subtitles. With a word selected when you stop, the word and its definitions go on the card too. mpv only.":
    "रिकॉर्डिंग शुरू करने के लिए एक बार दबाएँ, फिर रोककर उस हिस्से से कार्ड जोड़ने के लिए दोबारा दबाएँ. बिना सबटाइटल के भी चलता है. रोकते समय कोई शब्द चुना हो तो शब्द और परिभाषाएँ भी कार्ड में जाती हैं. केवल mpv.",
  "Press once to start recording, again to stop and put that stretch into the newest card. Works without subtitles. With a word selected when you stop, the word and its definitions too. mpv only.":
    "रिकॉर्डिंग शुरू करने के लिए एक बार दबाएँ, फिर रोककर वह हिस्सा सबसे नए कार्ड में डालने के लिए दोबारा दबाएँ. बिना सबटाइटल के भी चलता है. रोकते समय कोई शब्द चुना हो तो शब्द और परिभाषाएँ भी. केवल mpv.",
  "Added {word} to {deck}": "{word} को {deck} में जोड़ा गया",
  "Updated card in {deck} with {word}": "{deck} का कार्ड {word} के साथ अपडेट किया गया",
  "Bigger dictionary popup": "बड़ा डिक्शनरी पॉपअप",
  "Make the subtitle dictionary popup 10% bigger. Saved as the Popup size setting.":
    "सबटाइटल डिक्शनरी पॉपअप को 10% बड़ा करता है. पॉपअप साइज़ सेटिंग में सेव होता है.",
  "Smaller dictionary popup": "छोटा डिक्शनरी पॉपअप",
  "Make the subtitle dictionary popup 10% smaller. Saved as the Popup size setting.":
    "सबटाइटल डिक्शनरी पॉपअप को 10% छोटा करता है. पॉपअप साइज़ सेटिंग में सेव होता है.",
  "Dictionary popup size: {n}%": "डिक्शनरी पॉपअप साइज़: {n}%",
  "Popup size": "पॉपअप साइज़",
  "Scales the whole popup: text, buttons and width. Bigger sizes help on a TV. The Bigger/Smaller dictionary popup hotkeys change it too.":
    "पूरे पॉपअप का स्केल बदलता है: टेक्स्ट, बटन और चौड़ाई. बड़े साइज़ TV पर मदद करते हैं. बड़ा/छोटा डिक्शनरी पॉपअप हॉटकी भी इसे बदलते हैं.",
  "Speed step": "स्पीड स्टेप",
  "How much the Speed down and Speed up shortcuts change the speed per press.":
    "स्पीड घटाएँ और बढ़ाएँ शॉर्टकट हर बार दबाने पर स्पीड कितनी बदलते हैं.",
  "Slow playback by the Speed step set under Behavior (0.25x by default).":
    "व्यवहार में तय स्पीड स्टेप जितना प्लेबैक धीमा करता है (डिफ़ॉल्ट 0.25x).",
  "Speed playback up by the Speed step set under Behavior (0.25x by default).":
    "व्यवहार में तय स्पीड स्टेप जितना प्लेबैक तेज़ करता है (डिफ़ॉल्ट 0.25x).",
  "No subtitle on screen to pick a word from.": "स्क्रीन पर कोई सबटाइटल नहीं है जिससे शब्द चुना जा सके.",
  "Turn on Look up words in subtitles under Dictionary & Anki to pick words.":
    "शब्द चुनने के लिए शब्दकोश और Anki में सबटाइटल में शब्द देखें चालू करें.",
  "Controller buttons go next to each key: press one, or hold LB, RB, LT or RT and press another for a combination. A shoulder or trigger used in a combination does its own job when you let go of it.":
    "कंट्रोलर बटन हर कुंजी के बगल में होते हैं: एक दबाएँ, या कॉम्बिनेशन के लिए LB, RB, LT या RT दबाए रखकर दूसरा दबाएँ. कॉम्बिनेशन में इस्तेमाल होने वाला शोल्डर या ट्रिगर छोड़ने पर अपना काम करता है.",
  "To bind controller buttons, connect a controller and turn on controller support under Controllers.":
    "कंट्रोलर बटन तय करने के लिए कंट्रोलर जोड़ें और कंट्रोलर में कंट्रोलर सपोर्ट चालू करें.",
  "Word lookup": "शब्द खोज",
  "While picking a word in the subtitles with the Pick a word in the subtitles shortcut. These keys take over only then, so they can reuse the player's.":
    "जब आप सबटाइटल में शब्द चुनें शॉर्टकट से सबटाइटल का शब्द चुन रहे हों. ये कुंजियाँ सिर्फ़ तभी लागू होती हैं, इसलिए प्लेयर की कुंजियाँ दोबारा इस्तेमाल कर सकती हैं.",
  "{key} is used for {action}.": "{key} पहले से {action} के लिए इस्तेमाल हो रहा है.",
  "Remove {key} from {name}": "{name} से {key} हटाएँ",
  "Use it here": "यहाँ इस्तेमाल करें",
  "Press a button…": "कोई बटन दबाएँ…",
  "Add a controller button for {name}": "{name} के लिए कंट्रोलर बटन जोड़ें",
  "Pick a word in the subtitles": "सबटाइटल में शब्द चुनें",
  "Pause and select the first word of the subtitle to look it up without the mouse. Move between words with the Word lookup keys; press again to leave.":
    "रोककर सबटाइटल का पहला शब्द चुनता है ताकि बिना माउस के उसे देखा जा सके. शब्द खोज की कुंजियों से शब्दों के बीच चलें; बाहर निकलने के लिए फिर दबाएँ.",
  "Next word": "अगला शब्द",
  "Select and look up the next word.": "अगला शब्द चुनकर देखता है.",
  "Previous word": "पिछला शब्द",
  "Select and look up the previous word.": "पिछला शब्द चुनकर देखता है.",
  "Line above": "ऊपर की पंक्ति",
  "Go to the first word of the subtitle line above.": "ऊपर वाली सबटाइटल पंक्ति के पहले शब्द पर जाता है.",
  "Line below": "नीचे की पंक्ति",
  "Go to the first word of the subtitle line below.": "नीचे वाली सबटाइटल पंक्ति के पहले शब्द पर जाता है.",
  "Add the selected word to Anki, like the Anki button in the popup.":
    "चुना गया शब्द पॉपअप के Anki बटन की तरह Anki में जोड़ता है.",
  "Generate AI explanation": "AI व्याख्या बनाएँ",
  "Generate the AI explanation of the word, or generate it again.":
    "शब्द की AI व्याख्या बनाता है, या फिर से बनाता है.",
  "Play word audio": "शब्द का ऑडियो चलाएँ",
  "Play the word's local audio; press again for the next voice.":
    "शब्द का लोकल ऑडियो चलाता है; अगली आवाज़ के लिए फिर दबाएँ.",
  "Scroll popup down": "पॉपअप नीचे स्क्रॉल करें",
  "Scroll the definitions down. On a controller the right stick scrolls too.":
    "परिभाषाएँ नीचे स्क्रॉल करता है. कंट्रोलर पर दायाँ स्टिक भी स्क्रॉल करता है.",
  "Scroll popup up": "पॉपअप ऊपर स्क्रॉल करें",
  "Scroll the definitions up.": "परिभाषाएँ ऊपर स्क्रॉल करता है.",
  "Leave word lookup": "शब्द खोज से बाहर निकलें",
  Words: "शब्द",
  Popup: "पॉपअप",
  "Show the popup": "पॉपअप दिखाएँ",
  "Open or close the dictionary popup for the selected word. Moving to another word closes it.":
    "चुने गए शब्द का शब्दकोश पॉपअप खोलता या बंद करता है. दूसरे शब्द पर जाने से यह बंद हो जाता है.",
  "Clear the shortcut for {name}": "{name} का शॉर्टकट हटाएँ",
  "Clear the shortcut": "शॉर्टकट हटाएँ",
};

export default immersionHotkeys;
