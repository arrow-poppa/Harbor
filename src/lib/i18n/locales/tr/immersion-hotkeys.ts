// Immersion hotkeys, picking words in the subtitles and controller buttons in the hotkey list.
const immersionHotkeys: Record<string, string> = {
  "audio card": "ses kartı",
  "last card": "son kart",
  "new card": "yeni kart",
  "Still adding the previous card…": "Önceki kart hâlâ ekleniyor…",
  "Updated card in {deck}": "{deck} içindeki kart güncellendi",
  "Added to {deck}": "{deck} destesine eklendi",
  "{n}s recorded": "{n} sn kaydedildi",
  "Recording → {target}. Press again to stop.":
    "Kaydediliyor → {target}. Durdurmak için tekrar basın.",
  "the video went back since the recording started": "kayıt başladığından beri video geri sarıldı",
  "too short": "çok kısa",
  "longer than the {n}s limit": "{n} sn sınırından uzun",
  "Recording discarded: {reason}": "Kayıt iptal edildi: {reason}",
  "Stopped · {n}s recorded · adding card…": "Durdu · {n} sn kaydedildi · kart ekleniyor…",
  "Anki cards from the player need the mpv player in the desktop app.":
    "Oynatıcıdan Anki kartları için masaüstü uygulamasında mpv oynatıcı gerekir.",
  "No subtitle on screen. Use a Record shortcut for parts without subtitles.":
    "Ekranda altyazı yok. Altyazısız bölümler için bir Kaydet kısayolu kullanın.",
  Immersion: "Dalma",
  "Cards straight from the player, without looking a word up: from the subtitle on screen, or from a stretch you record with two presses of the same key (works without subtitles). Set the keys in Settings → Hotkeys → Immersion. mpv only.":
    "Kelime aramadan doğrudan oynatıcıdan kartlar: ekrandaki altyazıdan ya da aynı tuşa iki kez basarak kaydettiğiniz bir bölümden (altyazısız çalışır). Tuşları Ayarlar → Kısayollar → Dalma bölümünden belirleyin. Yalnızca mpv.",
  "Sentence cards": "Cümle kartları",
  "Pick a deck and note type above": "Yukarıda bir deste ve not türü seçin",
  "Map a field to Sentence audio above": "Yukarıda bir alanı Cümle sesi ile eşleyin",
  "Audio cards": "Ses kartları",
  "Audio card deck": "Ses kartı destesi",
  "Audio card note type": "Ses kartı not türü",
  "Audio field": "Ses alanı",
  "Gets the audio of the line or of the recording.": "Satırın veya kaydın sesini alır.",
  "Pick a note type first": "Önce bir not türü seçin",
  "Sentence field (optional)": "Cümle alanı (isteğe bağlı)",
  "Gets the subtitle text, when there is one.": "Varsa altyazı metnini alır.",
  "Update last card window": "Son kartı güncelle süresi",
  "Update last card only touches a card added this many minutes ago or less.":
    "Son kartı güncelle yalnızca en fazla bu kadar dakika önce eklenmiş bir kartı değiştirir.",
  "Longest recording": "En uzun kayıt",
  "A recording longer than this is discarded. Animated clips still stop after 12 seconds.":
    "Bundan uzun bir kayıt iptal edilir. Animasyonlu klipler yine 12 saniyede durur.",
  "Long seek": "Uzun atlama",
  "The jump of the Long seek back and Long seek forward shortcuts.":
    "Uzun geri atlama ve Uzun ileri atlama kısayollarının atlama miktarı.",
  "Slow speed": "Yavaş hız",
  "The speed the Toggle slow speed shortcut switches to from normal speed.":
    "Yavaş hızı aç/kapat kısayolunun normal hızdan geçtiği hız.",
  "Toggle subtitles on/off": "Altyazıları aç/kapat",
  "Hide every subtitle (primary and secondary), or show the primary again. Hidden subtitles still work for line seeking, replay and Anki cards.":
    "Tüm altyazıları (birincil ve ikincil) gizler ya da birincili yeniden gösterir. Gizliyken de satır atlama, tekrar ve Anki kartları için çalışmaya devam eder.",
  "Next subtitle line": "Sonraki altyazı satırı",
  "Jump to the start of the next subtitle line.": "Sonraki altyazı satırının başına atlar.",
  "Previous subtitle line": "Önceki altyazı satırı",
  "Jump to the start of the previous subtitle line.": "Önceki altyazı satırının başına atlar.",
  "Toggle slow speed": "Yavaş hızı aç/kapat",
  "Switch between normal speed and the slow speed set under Behavior (0.5x by default).":
    "Normal hız ile Davranış altında ayarlanan yavaş hız arasında geçiş yapar (varsayılan 0,5x).",
  "Anki: card from the subtitle": "Anki: altyazıdan kart",
  "Anki: update last card": "Anki: son kartı güncelle",
  "Anki: audio card": "Anki: ses kartı",
  "Add an audio-only card from the line on screen, using the audio card deck. mpv only.":
    "Ekrandaki satırdan yalnızca sesli bir kart ekler; ses kartı destesini kullanır. Yalnızca mpv.",
  "Record → new card": "Kaydet → yeni kart",
  "Record → update last card": "Kaydet → son kartı güncelle",
  "Record → audio card": "Kaydet → ses kartı",
  "Press once to start recording, again to stop and add an audio card with that stretch. Works without subtitles. mpv only.":
    "Kaydı başlatmak için bir kez, durdurup o bölümle bir ses kartı eklemek için tekrar basın. Altyazısız çalışır. Yalnızca mpv.",
  "Long seek back": "Uzun geri atlama",
  "Jump back by the Long seek step set under Behavior (30 seconds by default).":
    "Davranış altında ayarlanan uzun atlama kadar geri gider (varsayılan 30 saniye).",
  "Long seek forward": "Uzun ileri atlama",
  "Jump forward by the Long seek step set under Behavior (30 seconds by default).":
    "Davranış altında ayarlanan uzun atlama kadar ileri gider (varsayılan 30 saniye).",
  "Replay current subtitle": "Geçerli altyazıyı tekrarla",
  "Go back to the start of the line on screen and play it again, or of the last line shown when there is none.":
    "Ekrandaki satırın başına döner ve yeniden oynatır; yoksa son gösterilen satırın başına döner.",
  "Card from the subtitle, Update last card and the Record → card keys use the deck, note type and fields of the Anki section above. With a word selected in the subtitles (highlighted while picking a word, or in an open popup) every mapped field is filled, word and definitions included; without one only the sentence, sentence audio, screenshot or clip and title fields are.":
    "Altyazıdan kart, Son kartı güncelle ve Kaydet → kart kısayolları, yukarıdaki Anki bölümünün destesini, not türünü ve alanlarını kullanır. Altyazıda bir kelime seçiliyken (kelime seçerken vurgulanan ya da açık bir pencerede gösterilen) kelime ve tanımlar dahil tüm eşlenmiş alanlar doldurulur; seçili değilken yalnızca cümle, cümle sesi, ekran görüntüsü veya klip ve başlık.",
  "Add a card from the line on screen with its sentence, audio and picture, using the deck and fields under Dictionary & Anki. With a word selected in the subtitles, the word and its definitions go on the card too. mpv only.":
    "Ekrandaki satırdan cümlesi, sesi ve görüntüsüyle bir kart ekler; Sözlük ve Anki'deki deste ve alanları kullanır. Altyazıda bir kelime seçiliyse kelime ve tanımları da karta eklenir. Yalnızca mpv.",
  "Put the line on screen (sentence, audio, picture) into the newest card of the deck, if it was added in the last few minutes. With a word selected, the word and its definitions too. mpv only.":
    "Ekrandaki satırı (cümle, ses, görüntü), son birkaç dakikada eklendiyse destenin en yeni kartına koyar. Bir kelime seçiliyse kelime ve tanımları da. Yalnızca mpv.",
  "Press once to start recording, again to stop and add a card with that stretch. Works without subtitles. With a word selected when you stop, the word and its definitions go on the card too. mpv only.":
    "Kaydı başlatmak için bir kez, durdurup o bölümle kart eklemek için tekrar basın. Altyazısız çalışır. Durdururken bir kelime seçiliyse kelime ve tanımları da karta eklenir. Yalnızca mpv.",
  "Press once to start recording, again to stop and put that stretch into the newest card. Works without subtitles. With a word selected when you stop, the word and its definitions too. mpv only.":
    "Kaydı başlatmak için bir kez, durdurup o bölümü en yeni karta koymak için tekrar basın. Altyazısız çalışır. Durdururken bir kelime seçiliyse kelime ve tanımları da. Yalnızca mpv.",
  "Added {word} to {deck}": "{word}, {deck} destesine eklendi",
  "Updated card in {deck} with {word}": "{deck} içindeki kart {word} ile güncellendi",
  "Bigger dictionary popup": "Sözlük penceresini büyüt",
  "Make the subtitle dictionary popup 10% bigger. Saved as the Popup size setting.":
    "Altyazı sözlük penceresini %10 büyütür. Pencere boyutu ayarına kaydedilir.",
  "Smaller dictionary popup": "Sözlük penceresini küçült",
  "Make the subtitle dictionary popup 10% smaller. Saved as the Popup size setting.":
    "Altyazı sözlük penceresini %10 küçültür. Pencere boyutu ayarına kaydedilir.",
  "Dictionary popup size: {n}%": "Sözlük penceresi boyutu: %{n}",
  "Popup size": "Pencere boyutu",
  "Scales the whole popup: text, buttons and width. Bigger sizes help on a TV. The Bigger/Smaller dictionary popup hotkeys change it too.":
    "Tüm pencereyi ölçekler: metin, düğmeler ve genişlik. Büyük boyutlar TV'de işe yarar. Sözlük penceresini büyüt/küçült kısayolları da bunu değiştirir.",
  "Speed step": "Hız adımı",
  "How much the Speed down and Speed up shortcuts change the speed per press.":
    "Hızı azalt ve hızı artır kısayollarının her basışta hızı ne kadar değiştireceği.",
  "Slow playback by the Speed step set under Behavior (0.25x by default).":
    "Oynatmayı Davranış altında ayarlanan hız adımı kadar yavaşlatır (varsayılan 0,25x).",
  "Speed playback up by the Speed step set under Behavior (0.25x by default).":
    "Oynatmayı Davranış altında ayarlanan hız adımı kadar hızlandırır (varsayılan 0,25x).",
  "No subtitle on screen to pick a word from.": "Ekranda kelime seçilecek altyazı yok.",
  "Turn on Look up words in subtitles under Dictionary & Anki to pick words.":
    "Kelime seçmek için Sözlük ve Anki altında Altyazılarda kelime ara'yı açın.",
  "Controller buttons go next to each key: press one, or hold LB, RB, LT or RT and press another for a combination. A shoulder or trigger used in a combination does its own job when you let go of it.":
    "Kontrolcü tuşları her klavye tuşunun yanında durur: birine basın ya da bir kombinasyon için LB, RB, LT veya RT'yi basılı tutup başka birine basın. Kombinasyonda kullanılan bir omuz tuşu veya tetik, bıraktığınızda kendi işini yapar.",
  "To bind controller buttons, connect a controller and turn on controller support under Controllers.":
    "Kontrolcü tuşu atamak için bir kontrolcü bağlayın ve Kontrolcüler altında kontrolcü desteğini açın.",
  "Word lookup": "Kelime arama",
  "While picking a word in the subtitles with the Pick a word in the subtitles shortcut. These keys take over only then, so they can reuse the player's.":
    "Altyazıda bir kelime seç kısayoluyla altyazıdan kelime seçerken. Bu tuşlar yalnızca o sırada geçerlidir, bu yüzden oynatıcınınkileri tekrar kullanabilir.",
  "{key} is used for {action}.": "{key} zaten {action} için kullanılıyor.",
  "Remove {key} from {name}": "{key} tuşunu {name} eyleminden kaldır",
  "Use it here": "Burada kullan",
  "Press a button…": "Bir tuşa basın…",
  "Add a controller button for {name}": "{name} için kontrolcü tuşu ekle",
  "Pick a word in the subtitles": "Altyazıda bir kelime seç",
  "Pause and select the first word of the subtitle to look it up without the mouse. Move between words with the Word lookup keys; press again to leave.":
    "Duraklatır ve altyazının ilk kelimesini seçer; böylece fare olmadan aranabilir. Kelimeler arasında Kelime arama tuşlarıyla gezin; çıkmak için tekrar basın.",
  "Next word": "Sonraki kelime",
  "Select and look up the next word.": "Sonraki kelimeyi seçer ve arar.",
  "Previous word": "Önceki kelime",
  "Select and look up the previous word.": "Önceki kelimeyi seçer ve arar.",
  "Line above": "Üst satır",
  "Go to the first word of the subtitle line above.":
    "Üstteki altyazı satırının ilk kelimesine gider.",
  "Line below": "Alt satır",
  "Go to the first word of the subtitle line below.":
    "Alttaki altyazı satırının ilk kelimesine gider.",
  "Add the selected word to Anki, like the Anki button in the popup.":
    "Seçili kelimeyi, penceredeki Anki düğmesi gibi Anki'ye ekler.",
  "Generate AI explanation": "Yapay zekâ açıklaması oluştur",
  "Generate the AI explanation of the word, or generate it again.":
    "Kelimenin yapay zekâ açıklamasını oluşturur ya da yeniden oluşturur.",
  "Play word audio": "Kelime sesini çal",
  "Play the word's local audio; press again for the next voice.":
    "Kelimenin yerel sesini çalar; sonraki ses için tekrar basın.",
  "Scroll popup down": "Pencereyi aşağı kaydır",
  "Scroll the definitions down. On a controller the right stick scrolls too.":
    "Tanımları aşağı kaydırır. Kontrolcüde sağ çubuk da kaydırır.",
  "Scroll popup up": "Pencereyi yukarı kaydır",
  "Scroll the definitions up.": "Tanımları yukarı kaydırır.",
  "Leave word lookup": "Kelime aramadan çık",
  Words: "Kelimeler",
  Popup: "Pencere",
  "Show the popup": "Pencereyi göster",
  "Open or close the dictionary popup for the selected word. Moving to another word closes it.":
    "Seçili kelimenin sözlük penceresini açar veya kapatır. Başka bir kelimeye geçmek onu kapatır.",
  "Clear the shortcut for {name}": "{name} kısayolunu temizle",
  "Clear the shortcut": "Kısayolu temizle",
};

export default immersionHotkeys;
