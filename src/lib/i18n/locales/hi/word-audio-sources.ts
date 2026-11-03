// Word audio sources: recorded and synthesized voices for looked-up words.
const wordAudioSources: Record<string, string> = {
  "Plays the looked-up word and adds it to Anki cards. Sources are tried from top to bottom, and pressing the audio button again plays the next voice. Online sources send the word to their site.":
    "खोजे गए शब्द को चलाता है और Anki कार्ड में जोड़ता है. स्रोत ऊपर से नीचे आज़माए जाते हैं, और ऑडियो बटन फिर दबाने पर अगली आवाज़ चलती है. ऑनलाइन स्रोत शब्द को अपनी साइट पर भेजते हैं.",
  "Local audio database": "लोकल ऑडियो डेटाबेस",
  "Custom URL": "कस्टम URL",
  "Custom URL (JSON)": "कस्टम URL (JSON)",
  "Voices for the lookup language.": "खोज की भाषा की आवाज़ें.",
  "The reading (kana), when there is one": "उच्चारण (काना), अगर हो",
  "The word as written": "शब्द जैसा लिखा है",
  URL: "URL",
  "A local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "local-audio-yomichan डेटाबेस (Forvo, NHK16, Shinmeikai8, JPod101). android.db चुनें, या *_files फ़ोल्डरों के पास वाला entries.db. Flatpak संस्करण केवल android.db पढ़ सकता है.",
  "Recorded Japanese words from JapanesePod101.": "JapanesePod101 से रिकॉर्ड किए गए जापानी शब्द.",
  "Recorded words from the LanguagePod101 sites, in about 35 languages.":
    "LanguagePod101 साइटों से रिकॉर्ड किए गए शब्द, लगभग 35 भाषाओं में.",
  "Recorded Japanese words from Jisho.org.": "Jisho.org से रिकॉर्ड किए गए जापानी शब्द.",
  "Recordings shared on Wikimedia Commons by Lingua Libre speakers.":
    "Lingua Libre वक्ताओं द्वारा Wikimedia Commons पर साझा की गई रिकॉर्डिंग.",
  "Wiktionary recordings on Wikimedia Commons.": "Wikimedia Commons पर विक्षनरी की रिकॉर्डिंग.",
  "Microsoft Edge's online neural voices, the same ones the eBook narration uses.":
    "Microsoft Edge की ऑनलाइन न्यूरल आवाज़ें, वही जो ई-बुक नैरेशन इस्तेमाल करता है.",
  "An audio file at your own URL. {term}, {reading} and {language} are filled in.":
    "आपके अपने URL पर एक ऑडियो फ़ाइल. {term}, {reading} और {language} भरे जाते हैं.",
  "A URL that answers with a list of audio files, such as a local audio server. {term}, {reading} and {language} are filled in.":
    "ऐसा URL जो ऑडियो फ़ाइलों की सूची लौटाता है, जैसे लोकल ऑडियो सर्वर. {term}, {reading} और {language} भरे जाते हैं.",
};

export default wordAudioSources;
