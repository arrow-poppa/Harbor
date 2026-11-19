// Immersion hotkeys, picking words in the subtitles and controller buttons in the hotkey list.
const immersionHotkeys: Record<string, string> = {
  "audio card": "scheda audio",
  "last card": "ultima scheda",
  "new card": "nuova scheda",
  "Still adding the previous card…": "Sto ancora aggiungendo la scheda precedente…",
  "Updated card in {deck}": "Scheda aggiornata in {deck}",
  "Added to {deck}": "Aggiunta a {deck}",
  "{n}s recorded": "{n}s registrati",
  "Recording → {target}. Press again to stop.":
    "Registrazione → {target}. Premi di nuovo per fermare.",
  "the video went back since the recording started":
    "il video è tornato indietro dall’inizio della registrazione",
  "too short": "troppo breve",
  "longer than the {n}s limit": "supera il limite di {n}s",
  "Recording discarded: {reason}": "Registrazione scartata: {reason}",
  "Stopped · {n}s recorded · adding card…": "Fermata · {n}s registrati · aggiungo la scheda…",
  "Anki cards from the player need the mpv player in the desktop app.":
    "Le schede Anki dal player richiedono il player mpv nell’app desktop.",
  "No subtitle on screen. Use a Record shortcut for parts without subtitles.":
    "Nessun sottotitolo sullo schermo. Usa una scorciatoia Registra per le parti senza sottotitoli.",
  Immersion: "Immersione",
  "Cards straight from the player, without looking a word up: from the subtitle on screen, or from a stretch you record with two presses of the same key (works without subtitles). Set the keys in Settings → Hotkeys → Immersion. mpv only.":
    "Schede direttamente dal player, senza cercare una parola: dal sottotitolo sullo schermo, o da un tratto che registri con due pressioni dello stesso tasto (funziona senza sottotitoli). Imposta i tasti in Impostazioni → Scorciatoie → Immersione. Solo mpv.",
  "Sentence cards": "Schede di frase",
  "Pick a deck and note type above": "Scegli sopra un mazzo e un tipo di nota",
  "Map a field to Sentence audio above": "Associa sopra un campo all’Audio della frase",
  "Audio cards": "Schede audio",
  "Audio card deck": "Mazzo delle schede audio",
  "Audio card note type": "Tipo di nota delle schede audio",
  "Audio field": "Campo audio",
  "Gets the audio of the line or of the recording.":
    "Riceve l’audio della riga o della registrazione.",
  "Pick a note type first": "Scegli prima un tipo di nota",
  "Sentence field (optional)": "Campo della frase (facoltativo)",
  "Gets the subtitle text, when there is one.": "Riceve il testo del sottotitolo, se c’è.",
  "Update last card window": "Finestra di Aggiorna l’ultima scheda",
  "Update last card only touches a card added this many minutes ago or less.":
    "Aggiorna l’ultima scheda modifica solo una scheda aggiunta al massimo questo numero di minuti fa.",
  "Longest recording": "Registrazione più lunga",
  "A recording longer than this is discarded. Animated clips still stop after 12 seconds.":
    "Una registrazione più lunga di così viene scartata. Le clip animate si fermano comunque dopo 12 secondi.",
  "Hide every subtitle (primary and secondary), or show the primary again. Hidden subtitles still work for line seeking, replay and Anki cards.":
    "Nasconde tutti i sottotitoli (principale e secondario) o mostra di nuovo il principale. Nascosti, funzionano ancora per saltare le righe, ripetere e creare carte Anki.",
  "Anki: card from the subtitle": "Anki: scheda dal sottotitolo",
  "Anki: update last card": "Anki: aggiorna l’ultima scheda",
  "Anki: audio card": "Anki: scheda audio",
  "Add an audio-only card from the line on screen, using the audio card deck. mpv only.":
    "Aggiunge una scheda solo audio dalla riga sullo schermo, usando il mazzo delle schede audio. Solo mpv.",
  "Record → new card": "Registra → nuova scheda",
  "Record → update last card": "Registra → aggiorna l’ultima scheda",
  "Record → audio card": "Registra → scheda audio",
  "Press once to start recording, again to stop and add an audio card with that stretch. Works without subtitles. mpv only.":
    "Premi una volta per iniziare a registrare e di nuovo per fermare e aggiungere una scheda audio con quel tratto. Funziona senza sottotitoli. Solo mpv.",
  "Card from the subtitle, Update last card and the Record → card keys use the deck, note type and fields of the Anki section above. With a word selected in the subtitles (highlighted while picking a word, or in an open popup) every mapped field is filled, word and definitions included; without one only the sentence, sentence audio, screenshot or clip and title fields are.":
    "Le scorciatoie Scheda dal sottotitolo, Aggiorna l’ultima scheda e Registra → scheda usano il mazzo, il tipo di nota e i campi della sezione Anki sopra. Con una parola selezionata nel sottotitolo (evidenziata scegliendo una parola, o in un popup aperto) vengono compilati tutti i campi associati, parola e definizioni comprese; senza, solo frase, audio della frase, screenshot o clip e titolo.",
  "Add a card from the line on screen with its sentence, audio and picture, using the deck and fields under Dictionary & Anki. With a word selected in the subtitles, the word and its definitions go on the card too. mpv only.":
    "Aggiunge una scheda dalla riga sullo schermo con frase, audio e immagine, usando il mazzo e i campi di Dizionario e Anki. Con una parola selezionata nel sottotitolo, anche la parola e le sue definizioni vanno nella scheda. Solo mpv.",
  "Put the line on screen (sentence, audio, picture) into the newest card of the deck, if it was added in the last few minutes. With a word selected, the word and its definitions too. mpv only.":
    "Inserisce la riga sullo schermo (frase, audio, immagine) nella scheda più recente del mazzo, se è stata aggiunta negli ultimi minuti. Con una parola selezionata, anche la parola e le definizioni. Solo mpv.",
  "Press once to start recording, again to stop and add a card with that stretch. Works without subtitles. With a word selected when you stop, the word and its definitions go on the card too. mpv only.":
    "Premi una volta per iniziare a registrare e di nuovo per fermare e aggiungere una scheda con quel tratto. Funziona senza sottotitoli. Con una parola selezionata quando fermi, anche la parola e le definizioni vanno nella scheda. Solo mpv.",
  "Press once to start recording, again to stop and put that stretch into the newest card. Works without subtitles. With a word selected when you stop, the word and its definitions too. mpv only.":
    "Premi una volta per iniziare a registrare e di nuovo per fermare e inserire quel tratto nella scheda più recente. Funziona senza sottotitoli. Con una parola selezionata quando fermi, anche la parola e le definizioni. Solo mpv.",
  "Added {word} to {deck}": "{word} aggiunta a {deck}",
  "Updated card in {deck} with {word}": "Scheda in {deck} aggiornata con {word}",
  "Bigger dictionary popup": "Popup del dizionario più grande",
  "Make the subtitle dictionary popup 10% bigger. Saved as the Popup size setting.":
    "Rende il popup del dizionario dei sottotitoli più grande del 10%. Salvato nell’opzione Dimensione del popup.",
  "Smaller dictionary popup": "Popup del dizionario più piccolo",
  "Make the subtitle dictionary popup 10% smaller. Saved as the Popup size setting.":
    "Rende il popup del dizionario dei sottotitoli più piccolo del 10%. Salvato nell’opzione Dimensione del popup.",
  "Dictionary popup size: {n}%": "Dimensione del popup del dizionario: {n}%",
  "Popup size": "Dimensione del popup",
  "Scales the whole popup: text, buttons and width. Bigger sizes help on a TV. The Bigger/Smaller dictionary popup hotkeys change it too.":
    "Ridimensiona tutto il popup: testo, pulsanti e larghezza. Le dimensioni grandi aiutano su una TV. Anche le scorciatoie Popup del dizionario più grande/più piccolo la cambiano.",
  "No subtitle on screen to pick a word from.":
    "Nessun sottotitolo sullo schermo da cui scegliere una parola.",
  "Turn on Look up words in subtitles under Dictionary & Anki to pick words.":
    "Attiva Cerca parole nei sottotitoli in Dizionario e Anki per scegliere le parole.",
  "Word lookup": "Ricerca di parole",
  "While picking a word in the subtitles with the Pick a word in the subtitles shortcut. These keys take over only then, so they can reuse the player's.":
    "Mentre scegli una parola del sottotitolo con la scorciatoia Scegli una parola del sottotitolo. Questi tasti valgono solo in quel momento, quindi possono riusare quelli del player.",
  "Pick a word in the subtitles": "Scegli una parola del sottotitolo",
  "Pause and select the first word of the subtitle to look it up without the mouse. Move between words with the Word lookup keys; press again to leave.":
    "Mette in pausa e seleziona la prima parola del sottotitolo per cercarla senza mouse. Spostati tra le parole con i tasti di Ricerca di parole; premi di nuovo per uscire.",
  "Next word": "Parola successiva",
  "Select and look up the next word.": "Seleziona e cerca la parola successiva.",
  "Previous word": "Parola precedente",
  "Select and look up the previous word.": "Seleziona e cerca la parola precedente.",
  "Line above": "Riga sopra",
  "Go to the first word of the subtitle line above.":
    "Va alla prima parola della riga di sottotitolo sopra.",
  "Line below": "Riga sotto",
  "Go to the first word of the subtitle line below.":
    "Va alla prima parola della riga di sottotitolo sotto.",
  "Add the selected word to Anki, like the Anki button in the popup.":
    "Aggiunge la parola selezionata ad Anki, come il pulsante Anki del popup.",
  "Generate AI explanation": "Genera spiegazione IA",
  "Generate the AI explanation of the word, or generate it again.":
    "Genera la spiegazione IA della parola, o la genera di nuovo.",
  "Play word audio": "Riproduci audio della parola",
  "Play the word's local audio; press again for the next voice.":
    "Riproduce l’audio locale della parola; premi di nuovo per la voce successiva.",
  "Scroll popup down": "Scorri il popup in basso",
  "Scroll the definitions down. On a controller the right stick scrolls too.":
    "Scorre le definizioni verso il basso. Sul controller scorre anche lo stick destro.",
  "Scroll popup up": "Scorri il popup in alto",
  "Scroll the definitions up.": "Scorre le definizioni verso l’alto.",
  "Leave word lookup": "Esci dalla ricerca di parole",
  "Enter and leave": "Entra ed esci",
  Words: "Parole",
  Popup: "Popup",
  "Show the popup": "Mostra il popup",
  "Open or close the dictionary popup for the selected word. Moving to another word closes it.":
    "Apre o chiude il popup del dizionario per la parola selezionata. Passare a un’altra parola lo chiude.",
};

export default immersionHotkeys;
