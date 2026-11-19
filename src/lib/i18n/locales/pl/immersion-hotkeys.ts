// Immersion hotkeys, picking words in the subtitles and controller buttons in the hotkey list.
const immersionHotkeys: Record<string, string> = {
  "audio card": "karta audio",
  "last card": "ostatnia karta",
  "new card": "nowa karta",
  "Still adding the previous card…": "Nadal dodaję poprzednią kartę…",
  "Updated card in {deck}": "Zaktualizowano kartę w {deck}",
  "Added to {deck}": "Dodano do {deck}",
  "{n}s recorded": "Nagrano {n} s",
  "Recording → {target}. Press again to stop.":
    "Nagrywanie → {target}. Naciśnij ponownie, aby zatrzymać.",
  "the video went back since the recording started": "wideo cofnęło się od początku nagrywania",
  "too short": "za krótkie",
  "longer than the {n}s limit": "dłuższe niż limit {n} s",
  "Recording discarded: {reason}": "Nagranie odrzucone: {reason}",
  "Stopped · {n}s recorded · adding card…": "Zatrzymano · nagrano {n} s · dodaję kartę…",
  "Anki cards from the player need the mpv player in the desktop app.":
    "Karty Anki z odtwarzacza wymagają odtwarzacza mpv w aplikacji na komputer.",
  "No subtitle on screen. Use a Record shortcut for parts without subtitles.":
    "Brak napisów na ekranie. Dla fragmentów bez napisów użyj skrótu Nagraj.",
  Immersion: "Immersja",
  "Cards straight from the player, without looking a word up: from the subtitle on screen, or from a stretch you record with two presses of the same key (works without subtitles). Set the keys in Settings → Hotkeys → Immersion. mpv only.":
    "Karty prosto z odtwarzacza, bez sprawdzania słowa: z napisów na ekranie albo z fragmentu nagranego dwoma naciśnięciami tego samego klawisza (działa bez napisów). Ustaw klawisze w Ustawienia → Skróty → Immersja. Tylko mpv.",
  "Sentence cards": "Karty ze zdaniem",
  "Pick a deck and note type above": "Wybierz powyżej talię i typ notatki",
  "Map a field to Sentence audio above": "Przypisz powyżej pole do Audio zdania",
  "Audio cards": "Karty audio",
  "Audio card deck": "Talia kart audio",
  "Audio card note type": "Typ notatki kart audio",
  "Audio field": "Pole audio",
  "Gets the audio of the line or of the recording.": "Otrzymuje audio wiersza lub nagrania.",
  "Pick a note type first": "Najpierw wybierz typ notatki",
  "Sentence field (optional)": "Pole zdania (opcjonalne)",
  "Gets the subtitle text, when there is one.": "Otrzymuje tekst napisów, jeśli jest.",
  "Update last card window": "Okno dla Zaktualizuj ostatnią kartę",
  "Update last card only touches a card added this many minutes ago or less.":
    "Zaktualizuj ostatnią kartę zmienia tylko kartę dodaną co najwyżej tyle minut temu.",
  "Longest recording": "Najdłuższe nagranie",
  "A recording longer than this is discarded. Animated clips still stop after 12 seconds.":
    "Dłuższe nagranie jest odrzucane. Animowane klipy i tak kończą się po 12 sekundach.",
  "Hide every subtitle (primary and secondary), or show the primary again. Hidden subtitles still work for line seeking, replay and Anki cards.":
    "Ukrywa wszystkie napisy (główne i dodatkowe) albo znów pokazuje główne. Ukryte nadal działają przy przeskakiwaniu wierszy, powtarzaniu i kartach Anki.",
  "Anki: card from the subtitle": "Anki: karta z napisów",
  "Anki: update last card": "Anki: zaktualizuj ostatnią kartę",
  "Anki: audio card": "Anki: karta audio",
  "Add an audio-only card from the line on screen, using the audio card deck. mpv only.":
    "Dodaje kartę tylko z audio z wiersza na ekranie, korzystając z talii kart audio. Tylko mpv.",
  "Record → new card": "Nagraj → nowa karta",
  "Record → update last card": "Nagraj → zaktualizuj ostatnią kartę",
  "Record → audio card": "Nagraj → karta audio",
  "Press once to start recording, again to stop and add an audio card with that stretch. Works without subtitles. mpv only.":
    "Naciśnij raz, aby zacząć nagrywać, i ponownie, aby zatrzymać i dodać kartę audio z tym fragmentem. Działa bez napisów. Tylko mpv.",
  "Card from the subtitle, Update last card and the Record → card keys use the deck, note type and fields of the Anki section above. With a word selected in the subtitles (highlighted while picking a word, or in an open popup) every mapped field is filled, word and definitions included; without one only the sentence, sentence audio, screenshot or clip and title fields are.":
    "Skróty Karta z napisów, Zaktualizuj ostatnią kartę i Nagraj → karta korzystają z talii, typu notatki i pól z sekcji Anki powyżej. Gdy w napisach jest zaznaczone słowo (podświetlone przy wybieraniu słowa lub w otwartym okienku), wypełniane są wszystkie przypisane pola, łącznie ze słowem i definicjami; bez niego tylko zdanie, audio zdania, zrzut ekranu lub klip i tytuł.",
  "Add a card from the line on screen with its sentence, audio and picture, using the deck and fields under Dictionary & Anki. With a word selected in the subtitles, the word and its definitions go on the card too. mpv only.":
    "Dodaje kartę z wiersza na ekranie ze zdaniem, audio i obrazem, korzystając z talii i pól z Słownik i Anki. Gdy w napisach jest zaznaczone słowo, na kartę trafiają też słowo i jego definicje. Tylko mpv.",
  "Put the line on screen (sentence, audio, picture) into the newest card of the deck, if it was added in the last few minutes. With a word selected, the word and its definitions too. mpv only.":
    "Wstawia wiersz z ekranu (zdanie, audio, obraz) do najnowszej karty w talii, jeśli dodano ją w ciągu ostatnich minut. Gdy słowo jest zaznaczone, także słowo i definicje. Tylko mpv.",
  "Press once to start recording, again to stop and add a card with that stretch. Works without subtitles. With a word selected when you stop, the word and its definitions go on the card too. mpv only.":
    "Naciśnij raz, aby zacząć nagrywać, i ponownie, aby zatrzymać i dodać kartę z tym fragmentem. Działa bez napisów. Gdy przy zatrzymaniu słowo jest zaznaczone, na kartę trafiają też słowo i definicje. Tylko mpv.",
  "Press once to start recording, again to stop and put that stretch into the newest card. Works without subtitles. With a word selected when you stop, the word and its definitions too. mpv only.":
    "Naciśnij raz, aby zacząć nagrywać, i ponownie, aby zatrzymać i wstawić ten fragment do najnowszej karty. Działa bez napisów. Gdy przy zatrzymaniu słowo jest zaznaczone, także słowo i definicje. Tylko mpv.",
  "Added {word} to {deck}": "Dodano {word} do {deck}",
  "Updated card in {deck} with {word}": "Zaktualizowano kartę w {deck} o {word}",
  "Bigger dictionary popup": "Większe okienko słownika",
  "Make the subtitle dictionary popup 10% bigger. Saved as the Popup size setting.":
    "Powiększa okienko słownika napisów o 10%. Zapisywane w ustawieniu Rozmiar okienka.",
  "Smaller dictionary popup": "Mniejsze okienko słownika",
  "Make the subtitle dictionary popup 10% smaller. Saved as the Popup size setting.":
    "Pomniejsza okienko słownika napisów o 10%. Zapisywane w ustawieniu Rozmiar okienka.",
  "Dictionary popup size: {n}%": "Rozmiar okienka słownika: {n}%",
  "Popup size": "Rozmiar okienka",
  "Scales the whole popup: text, buttons and width. Bigger sizes help on a TV. The Bigger/Smaller dictionary popup hotkeys change it too.":
    "Skaluje całe okienko: tekst, przyciski i szerokość. Większe rozmiary pomagają na telewizorze. Skróty Większe/Mniejsze okienko słownika też go zmieniają.",
  "No subtitle on screen to pick a word from.":
    "Brak napisów na ekranie, z których można wybrać słowo.",
  "Turn on Look up words in subtitles under Dictionary & Anki to pick words.":
    "Włącz Sprawdzaj słowa w napisach w Słownik i Anki, aby wybierać słowa.",
  "Word lookup": "Wybieranie słów",
  "While picking a word in the subtitles with the Pick a word in the subtitles shortcut. These keys take over only then, so they can reuse the player's.":
    "Podczas wybierania słowa w napisach skrótem Wybierz słowo w napisach. Te klawisze działają tylko wtedy, więc mogą powtarzać klawisze odtwarzacza.",
  "Pick a word in the subtitles": "Wybierz słowo w napisach",
  "Pause and select the first word of the subtitle to look it up without the mouse. Move between words with the Word lookup keys; press again to leave.":
    "Wstrzymuje i zaznacza pierwsze słowo napisów, aby sprawdzić je bez myszy. Przechodź między słowami klawiszami z Wybierania słów; naciśnij ponownie, aby wyjść.",
  "Next word": "Następne słowo",
  "Select and look up the next word.": "Zaznacza i sprawdza następne słowo.",
  "Previous word": "Poprzednie słowo",
  "Select and look up the previous word.": "Zaznacza i sprawdza poprzednie słowo.",
  "Line above": "Wiersz wyżej",
  "Go to the first word of the subtitle line above.":
    "Przechodzi do pierwszego słowa wiersza napisów powyżej.",
  "Line below": "Wiersz niżej",
  "Go to the first word of the subtitle line below.":
    "Przechodzi do pierwszego słowa wiersza napisów poniżej.",
  "Add the selected word to Anki, like the Anki button in the popup.":
    "Dodaje zaznaczone słowo do Anki, jak przycisk Anki w okienku.",
  "Generate AI explanation": "Generuj wyjaśnienie AI",
  "Generate the AI explanation of the word, or generate it again.":
    "Generuje wyjaśnienie AI słowa albo generuje je ponownie.",
  "Play word audio": "Odtwórz audio słowa",
  "Play the word's local audio; press again for the next voice.":
    "Odtwarza lokalne audio słowa; naciśnij ponownie, aby usłyszeć następny głos.",
  "Scroll popup down": "Przewiń okienko w dół",
  "Scroll the definitions down. On a controller the right stick scrolls too.":
    "Przewija definicje w dół. Na kontrolerze przewija też prawa gałka.",
  "Scroll popup up": "Przewiń okienko w górę",
  "Scroll the definitions up.": "Przewija definicje w górę.",
  "Leave word lookup": "Zakończ wybieranie słów",
  Words: "Słowa",
  Popup: "Okienko",
  "Show the popup": "Pokaż okienko",
  "Open or close the dictionary popup for the selected word. Moving to another word closes it.":
    "Otwiera lub zamyka okienko słownika dla zaznaczonego słowa. Przejście do innego słowa je zamyka.",
};

export default immersionHotkeys;
