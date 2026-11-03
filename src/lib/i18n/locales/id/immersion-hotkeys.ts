// Immersion hotkeys, picking words in the subtitles and controller buttons in the hotkey list.
const immersionHotkeys: Record<string, string> = {
  "audio card": "kartu audio",
  "last card": "kartu terakhir",
  "new card": "kartu baru",
  "Still adding the previous card…": "Masih menambahkan kartu sebelumnya…",
  "Updated card in {deck}": "Kartu di {deck} diperbarui",
  "Added to {deck}": "Ditambahkan ke {deck}",
  "{n}s recorded": "{n} dtk direkam",
  "Recording → {target}. Press again to stop.": "Merekam → {target}. Tekan lagi untuk berhenti.",
  "the video went back since the recording started": "video mundur sejak perekaman dimulai",
  "too short": "terlalu pendek",
  "longer than the {n}s limit": "lebih panjang dari batas {n} dtk",
  "Recording discarded: {reason}": "Rekaman dibuang: {reason}",
  "Stopped · {n}s recorded · adding card…": "Berhenti · {n} dtk direkam · menambahkan kartu…",
  "Anki cards from the player need the mpv player in the desktop app.":
    "Kartu Anki dari pemutar memerlukan pemutar mpv di aplikasi desktop.",
  "No subtitle on screen. Use a Record shortcut for parts without subtitles.":
    "Tidak ada subtitel di layar. Gunakan pintasan Rekam untuk bagian tanpa subtitel.",
  Immersion: "Imersi",
  "Cards straight from the player, without looking a word up: from the subtitle on screen, or from a stretch you record with two presses of the same key (works without subtitles). Set the keys in Settings → Hotkeys → Immersion. mpv only.":
    "Kartu langsung dari pemutar, tanpa mencari kata: dari subtitel di layar, atau dari potongan yang Anda rekam dengan dua kali menekan tombol yang sama (berfungsi tanpa subtitel). Atur tombolnya di Pengaturan → Pintasan → Imersi. Hanya mpv.",
  "Sentence cards": "Kartu kalimat",
  "Pick a deck and note type above": "Pilih dek dan jenis catatan di atas",
  "Map a field to Sentence audio above": "Petakan sebuah bidang ke Audio kalimat di atas",
  "Audio cards": "Kartu audio",
  "Audio card deck": "Dek kartu audio",
  "Audio card note type": "Jenis catatan kartu audio",
  "Audio field": "Bidang audio",
  "Gets the audio of the line or of the recording.": "Menerima audio baris atau rekaman.",
  "Pick a note type first": "Pilih jenis catatan dulu",
  "Sentence field (optional)": "Bidang kalimat (opsional)",
  "Gets the subtitle text, when there is one.": "Menerima teks subtitel, jika ada.",
  "Update last card window": "Rentang Perbarui kartu terakhir",
  "Update last card only touches a card added this many minutes ago or less.":
    "Perbarui kartu terakhir hanya mengubah kartu yang ditambahkan paling lama sekian menit lalu.",
  "Longest recording": "Rekaman terpanjang",
  "A recording longer than this is discarded. Animated clips still stop after 12 seconds.":
    "Rekaman yang lebih panjang dari ini dibuang. Klip animasi tetap berhenti setelah 12 detik.",
  "Long seek": "Lompatan panjang",
  "The jump of the Long seek back and Long seek forward shortcuts.":
    "Jarak lompatan pintasan Lompat mundur panjang dan Lompat maju panjang.",
  "Slow speed": "Kecepatan lambat",
  "The speed the Toggle slow speed shortcut switches to from normal speed.":
    "Kecepatan tujuan pintasan Alihkan kecepatan lambat dari kecepatan normal.",
  "Toggle subtitles on/off": "Aktifkan/matikan subtitel",
  "Hide every subtitle (primary and secondary), or show the primary again. Hidden subtitles still work for line seeking, replay and Anki cards.":
    "Menyembunyikan semua subtitel (utama dan sekunder) atau menampilkan subtitel utama lagi. Saat tersembunyi, subtitel tetap berfungsi untuk lompat baris, ulang, dan kartu Anki.",
  "Next subtitle line": "Baris subtitel berikutnya",
  "Jump to the start of the next subtitle line.": "Lompat ke awal baris subtitel berikutnya.",
  "Previous subtitle line": "Baris subtitel sebelumnya",
  "Jump to the start of the previous subtitle line.": "Lompat ke awal baris subtitel sebelumnya.",
  "Toggle slow speed": "Alihkan kecepatan lambat",
  "Switch between normal speed and the slow speed set under Behavior (0.5x by default).":
    "Beralih antara kecepatan normal dan kecepatan lambat yang diatur di Perilaku (bawaan 0,5x).",
  "Anki: card from the subtitle": "Anki: kartu dari subtitel",
  "Anki: update last card": "Anki: perbarui kartu terakhir",
  "Anki: audio card": "Anki: kartu audio",
  "Add an audio-only card from the line on screen, using the audio card deck. mpv only.":
    "Menambahkan kartu khusus audio dari baris di layar, memakai dek kartu audio. Hanya mpv.",
  "Record → new card": "Rekam → kartu baru",
  "Record → update last card": "Rekam → perbarui kartu terakhir",
  "Record → audio card": "Rekam → kartu audio",
  "Press once to start recording, again to stop and add an audio card with that stretch. Works without subtitles. mpv only.":
    "Tekan sekali untuk mulai merekam, lalu lagi untuk berhenti dan menambahkan kartu audio dengan potongan itu. Berfungsi tanpa subtitel. Hanya mpv.",
  "Long seek back": "Lompat mundur panjang",
  "Jump back by the Long seek step set under Behavior (30 seconds by default).":
    "Mundur sejauh lompatan panjang yang diatur di Perilaku (bawaan 30 detik).",
  "Long seek forward": "Lompat maju panjang",
  "Jump forward by the Long seek step set under Behavior (30 seconds by default).":
    "Maju sejauh lompatan panjang yang diatur di Perilaku (bawaan 30 detik).",
  "Replay current subtitle": "Ulangi subtitel saat ini",
  "Go back to the start of the line on screen and play it again, or of the last line shown when there is none.":
    "Kembali ke awal baris di layar dan memutarnya lagi, atau baris terakhir yang tampil jika tidak ada.",
  "Card from the subtitle, Update last card and the Record → card keys use the deck, note type and fields of the Anki section above. With a word selected in the subtitles (highlighted while picking a word, or in an open popup) every mapped field is filled, word and definitions included; without one only the sentence, sentence audio, screenshot or clip and title fields are.":
    "Pintasan Kartu dari subtitel, Perbarui kartu terakhir, dan Rekam → kartu memakai dek, jenis catatan, dan bidang dari bagian Anki di atas. Jika ada kata yang dipilih di subtitel (disorot saat memilih kata, atau di popup yang terbuka), semua bidang yang dipetakan diisi, termasuk kata dan definisinya; jika tidak, hanya kalimat, audio kalimat, tangkapan layar atau klip, dan judul.",
  "Add a card from the line on screen with its sentence, audio and picture, using the deck and fields under Dictionary & Anki. With a word selected in the subtitles, the word and its definitions go on the card too. mpv only.":
    "Menambahkan kartu dari baris di layar dengan kalimat, audio, dan gambarnya, memakai dek dan bidang di Kamus & Anki. Jika ada kata yang dipilih di subtitel, kata dan definisinya juga masuk ke kartu. Hanya mpv.",
  "Put the line on screen (sentence, audio, picture) into the newest card of the deck, if it was added in the last few minutes. With a word selected, the word and its definitions too. mpv only.":
    "Memasukkan baris di layar (kalimat, audio, gambar) ke kartu terbaru di dek, jika ditambahkan dalam beberapa menit terakhir. Jika ada kata yang dipilih, kata dan definisinya juga. Hanya mpv.",
  "Press once to start recording, again to stop and add a card with that stretch. Works without subtitles. With a word selected when you stop, the word and its definitions go on the card too. mpv only.":
    "Tekan sekali untuk mulai merekam, lalu lagi untuk berhenti dan menambahkan kartu dengan potongan itu. Berfungsi tanpa subtitel. Jika ada kata yang dipilih saat berhenti, kata dan definisinya juga masuk ke kartu. Hanya mpv.",
  "Press once to start recording, again to stop and put that stretch into the newest card. Works without subtitles. With a word selected when you stop, the word and its definitions too. mpv only.":
    "Tekan sekali untuk mulai merekam, lalu lagi untuk berhenti dan memasukkan potongan itu ke kartu terbaru. Berfungsi tanpa subtitel. Jika ada kata yang dipilih saat berhenti, kata dan definisinya juga. Hanya mpv.",
  "Added {word} to {deck}": "{word} ditambahkan ke {deck}",
  "Updated card in {deck} with {word}": "Kartu di {deck} diperbarui dengan {word}",
  "Bigger dictionary popup": "Popup kamus lebih besar",
  "Make the subtitle dictionary popup 10% bigger. Saved as the Popup size setting.":
    "Membuat popup kamus subtitel 10% lebih besar. Disimpan sebagai setelan Ukuran popup.",
  "Smaller dictionary popup": "Popup kamus lebih kecil",
  "Make the subtitle dictionary popup 10% smaller. Saved as the Popup size setting.":
    "Membuat popup kamus subtitel 10% lebih kecil. Disimpan sebagai setelan Ukuran popup.",
  "Dictionary popup size: {n}%": "Ukuran popup kamus: {n}%",
  "Popup size": "Ukuran popup",
  "Scales the whole popup: text, buttons and width. Bigger sizes help on a TV. The Bigger/Smaller dictionary popup hotkeys change it too.":
    "Menskalakan seluruh popup: teks, tombol, dan lebar. Ukuran besar membantu di TV. Pintasan Popup kamus lebih besar/lebih kecil juga mengubahnya.",
  "Speed step": "Langkah kecepatan",
  "How much the Speed down and Speed up shortcuts change the speed per press.":
    "Seberapa besar pintasan Perlambat dan Percepat mengubah kecepatan setiap ditekan.",
  "Slow playback by the Speed step set under Behavior (0.25x by default).":
    "Memperlambat pemutaran sebesar Langkah kecepatan di Perilaku (bawaan 0,25x).",
  "Speed playback up by the Speed step set under Behavior (0.25x by default).":
    "Mempercepat pemutaran sebesar Langkah kecepatan di Perilaku (bawaan 0,25x).",
  "No subtitle on screen to pick a word from.":
    "Tidak ada subtitel di layar untuk dipilih katanya.",
  "Turn on Look up words in subtitles under Dictionary & Anki to pick words.":
    "Aktifkan Cari kata di subtitel di Kamus & Anki untuk memilih kata.",
  "Controller buttons go next to each key: press one, or hold LB, RB, LT or RT and press another for a combination. A shoulder or trigger used in a combination does its own job when you let go of it.":
    "Tombol kontroler berada di samping setiap tombol keyboard: tekan satu, atau tahan LB, RB, LT, atau RT lalu tekan yang lain untuk kombinasi. Tombol bahu atau pemicu yang dipakai dalam kombinasi menjalankan fungsinya sendiri saat dilepas.",
  "To bind controller buttons, connect a controller and turn on controller support under Controllers.":
    "Untuk mengatur tombol kontroler, hubungkan kontroler dan aktifkan dukungan kontroler di Kontroler.",
  "Word lookup": "Pencarian kata",
  "While picking a word in the subtitles with the Pick a word in the subtitles shortcut. These keys take over only then, so they can reuse the player's.":
    "Saat Anda memilih kata di subtitel dengan pintasan Pilih kata di subtitel. Tombol ini hanya berlaku saat itu, jadi boleh memakai ulang tombol pemutar.",
  "{key} is used for {action}.": "{key} sudah dipakai untuk {action}.",
  "Remove {key} from {name}": "Hapus {key} dari {name}",
  "Use it here": "Pakai di sini",
  "Press a button…": "Tekan sebuah tombol…",
  "Add a controller button for {name}": "Tambahkan tombol kontroler untuk {name}",
  "Pick a word in the subtitles": "Pilih kata di subtitel",
  "Pause and select the first word of the subtitle to look it up without the mouse. Move between words with the Word lookup keys; press again to leave.":
    "Menjeda dan memilih kata pertama subtitel untuk dicari tanpa mouse. Berpindah antarkata dengan tombol Pencarian kata; tekan lagi untuk keluar.",
  "Next word": "Kata berikutnya",
  "Select and look up the next word.": "Memilih dan mencari kata berikutnya.",
  "Previous word": "Kata sebelumnya",
  "Select and look up the previous word.": "Memilih dan mencari kata sebelumnya.",
  "Line above": "Baris atas",
  "Go to the first word of the subtitle line above.":
    "Pergi ke kata pertama di baris subtitel atas.",
  "Line below": "Baris bawah",
  "Go to the first word of the subtitle line below.":
    "Pergi ke kata pertama di baris subtitel bawah.",
  "Add the selected word to Anki, like the Anki button in the popup.":
    "Menambahkan kata yang dipilih ke Anki, seperti tombol Anki di popup.",
  "Generate AI explanation": "Buat penjelasan AI",
  "Generate the AI explanation of the word, or generate it again.":
    "Membuat penjelasan AI untuk kata, atau membuatnya lagi.",
  "Play word audio": "Putar audio kata",
  "Play the word's local audio; press again for the next voice.":
    "Memutar audio lokal kata; tekan lagi untuk suara berikutnya.",
  "Scroll popup down": "Gulir popup ke bawah",
  "Scroll the definitions down. On a controller the right stick scrolls too.":
    "Menggulir definisi ke bawah. Di kontroler, stik kanan juga menggulir.",
  "Scroll popup up": "Gulir popup ke atas",
  "Scroll the definitions up.": "Menggulir definisi ke atas.",
  "Leave word lookup": "Keluar dari pencarian kata",
  Words: "Kata",
  Popup: "Popup",
  "Show the popup": "Tampilkan popup",
  "Open or close the dictionary popup for the selected word. Moving to another word closes it.":
    "Membuka atau menutup popup kamus untuk kata yang dipilih. Berpindah ke kata lain akan menutupnya.",
  "Clear the shortcut for {name}": "Hapus pintasan untuk {name}",
  "Clear the shortcut": "Hapus pintasan",
};

export default immersionHotkeys;
