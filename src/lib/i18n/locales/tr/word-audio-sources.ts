// Word audio sources: recorded and synthesized voices for looked-up words.
const wordAudioSources: Record<string, string> = {
  "Plays the looked-up word and adds it to Anki cards. Sources are tried from top to bottom, and pressing the audio button again plays the next voice. Online sources send the word to their site.":
    "Aranan kelimeyi çalar ve Anki kartlarına ekler. Kaynaklar yukarıdan aşağıya denenir; ses düğmesine yeniden basmak sonraki sesi çalar. Çevrim içi kaynaklar kelimeyi kendi sitelerine gönderir.",
  "Local audio database": "Yerel ses veritabanı",
  "Custom URL": "Özel URL",
  "Custom URL (JSON)": "Özel URL (JSON)",
  "Automatic picks a voice for the lookup language.": "Otomatik, arama dili için bir ses seçer.",
  "The reading (kana), when there is one": "Varsa okunuş (kana)",
  "The word as written": "Kelimenin yazılışı",
  URL: "URL",
  "A local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Bir local-audio-yomichan veritabanı (Forvo, NHK16, Shinmeikai8, JPod101). android.db'yi ya da *_files klasörlerinin yanındaki entries.db'yi seçin. Flatpak sürümü yalnızca android.db'yi okuyabilir.",
  "Recorded Japanese words from JapanesePod101.":
    "JapanesePod101'den kaydedilmiş Japonca kelimeler.",
  "Recorded words from the LanguagePod101 sites, in about 35 languages.":
    "LanguagePod101 sitelerinden kaydedilmiş kelimeler, yaklaşık 35 dilde.",
  "Recorded Japanese words from Jisho.org.": "Jisho.org'dan kaydedilmiş Japonca kelimeler.",
  "Recordings shared on Wikimedia Commons by Lingua Libre speakers.":
    "Lingua Libre konuşmacılarının Wikimedia Commons'ta paylaştığı kayıtlar.",
  "Wiktionary recordings on Wikimedia Commons.": "Wikimedia Commons'taki Vikisözlük kayıtları.",
  "Microsoft Edge's online neural voices, the same ones the eBook narration uses.":
    "Microsoft Edge'in çevrim içi nöral sesleri; e-kitap seslendirmesinin kullandıklarının aynısı.",
  "An audio file at your own URL. {term}, {reading} and {language} are filled in.":
    "Kendi URL'nizdeki bir ses dosyası. {term}, {reading} ve {language} doldurulur.",
  "A URL that answers with a list of audio files, such as a local audio server. {term}, {reading} and {language} are filled in.":
    "Yerel bir ses sunucusu gibi, ses dosyalarının listesiyle yanıt veren bir URL. {term}, {reading} ve {language} doldurulur.",
  "Only when no other source has audio": "Yalnızca başka kaynakta ses yoksa",
  "Synthesized speech is used only if no recorded voice is found for the word.":
    "Sentezlenmiş ses yalnızca kelimenin kaydı bulunamazsa kullanılır.",
};

export default wordAudioSources;
