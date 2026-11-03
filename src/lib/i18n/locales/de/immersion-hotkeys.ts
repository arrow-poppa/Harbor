// Immersion hotkeys, picking words in the subtitles and controller buttons in the hotkey list.
const immersionHotkeys: Record<string, string> = {
  "audio card": "Audiokarte",
  "last card": "letzte Karte",
  "new card": "neue Karte",
  "Still adding the previous card…": "Die vorige Karte wird noch hinzugefügt …",
  "Updated card in {deck}": "Karte in {deck} aktualisiert",
  "Added to {deck}": "Zu {deck} hinzugefügt",
  "{n}s recorded": "{n} s aufgenommen",
  "Recording → {target}. Press again to stop.": "Aufnahme → {target}. Zum Beenden erneut drücken.",
  "the video went back since the recording started":
    "das Video ist seit Aufnahmebeginn zurückgesprungen",
  "too short": "zu kurz",
  "longer than the {n}s limit": "länger als das Limit von {n} s",
  "Recording discarded: {reason}": "Aufnahme verworfen: {reason}",
  "Stopped · {n}s recorded · adding card…":
    "Beendet · {n} s aufgenommen · Karte wird hinzugefügt …",
  "Anki cards from the player need the mpv player in the desktop app.":
    "Anki-Karten aus dem Player brauchen den mpv-Player in der Desktop-App.",
  "No subtitle on screen. Use a Record shortcut for parts without subtitles.":
    "Kein Untertitel auf dem Bildschirm. Nutze für Stellen ohne Untertitel ein Aufnahme-Kürzel.",
  Immersion: "Immersion",
  "Cards straight from the player, without looking a word up: from the subtitle on screen, or from a stretch you record with two presses of the same key (works without subtitles). Set the keys in Settings → Hotkeys → Immersion. mpv only.":
    "Karten direkt aus dem Player, ohne ein Wort nachzuschlagen: aus dem Untertitel auf dem Bildschirm oder aus einem Abschnitt, den du mit zwei Drücken derselben Taste aufnimmst (geht ohne Untertitel). Lege die Tasten unter Einstellungen → Tastenkürzel → Immersion fest. Nur mpv.",
  "Sentence cards": "Satzkarten",
  "Pick a deck and note type above": "Wähle oben einen Stapel und einen Notiztyp",
  "Map a field to Sentence audio above": "Ordne oben ein Feld dem Satz-Audio zu",
  "Audio cards": "Audiokarten",
  "Audio card deck": "Stapel für Audiokarten",
  "Audio card note type": "Notiztyp für Audiokarten",
  "Audio field": "Audiofeld",
  "Gets the audio of the line or of the recording.":
    "Erhält das Audio der Zeile oder der Aufnahme.",
  "Pick a note type first": "Erst einen Notiztyp wählen",
  "Sentence field (optional)": "Satzfeld (optional)",
  "Gets the subtitle text, when there is one.": "Erhält den Untertiteltext, falls vorhanden.",
  "Update last card window": "Zeitfenster für Letzte Karte aktualisieren",
  "Update last card only touches a card added this many minutes ago or less.":
    "Letzte Karte aktualisieren ändert nur eine Karte, die vor höchstens so vielen Minuten hinzugefügt wurde.",
  "Longest recording": "Längste Aufnahme",
  "A recording longer than this is discarded. Animated clips still stop after 12 seconds.":
    "Eine längere Aufnahme wird verworfen. Animierte Clips enden weiterhin nach 12 Sekunden.",
  "Long seek": "Langer Sprung",
  "The jump of the Long seek back and Long seek forward shortcuts.":
    "Der Sprung der Kürzel Langer Sprung zurück und Langer Sprung vorwärts.",
  "Slow speed": "Langsames Tempo",
  "The speed the Toggle slow speed shortcut switches to from normal speed.":
    "Das Tempo, zu dem das Kürzel Langsames Tempo umschalten von normalem Tempo wechselt.",
  "Toggle subtitles on/off": "Untertitel ein/aus",
  "Hide every subtitle (primary and secondary), or show the primary again. Hidden subtitles still work for line seeking, replay and Anki cards.":
    "Blendet alle Untertitel aus (Haupt- und Zweituntertitel) oder zeigt den Hauptuntertitel wieder an. Ausgeblendet funktionieren sie weiter für Zeilensprünge, Wiederholen und Anki-Karten.",
  "Next subtitle line": "Nächste Untertitelzeile",
  "Jump to the start of the next subtitle line.":
    "Springt zum Anfang der nächsten Untertitelzeile.",
  "Previous subtitle line": "Vorige Untertitelzeile",
  "Jump to the start of the previous subtitle line.":
    "Springt zum Anfang der vorigen Untertitelzeile.",
  "Toggle slow speed": "Langsames Tempo umschalten",
  "Switch between normal speed and the slow speed set under Behavior (0.5x by default).":
    "Wechselt zwischen normalem Tempo und dem unter Verhalten festgelegten langsamen Tempo (standardmäßig 0,5x).",
  "Anki: card from the subtitle": "Anki: Karte aus dem Untertitel",
  "Anki: update last card": "Anki: letzte Karte aktualisieren",
  "Anki: audio card": "Anki: Audiokarte",
  "Add an audio-only card from the line on screen, using the audio card deck. mpv only.":
    "Fügt eine reine Audiokarte aus der Zeile auf dem Bildschirm hinzu, mit dem Stapel für Audiokarten. Nur mpv.",
  "Record → new card": "Aufnahme → neue Karte",
  "Record → update last card": "Aufnahme → letzte Karte aktualisieren",
  "Record → audio card": "Aufnahme → Audiokarte",
  "Press once to start recording, again to stop and add an audio card with that stretch. Works without subtitles. mpv only.":
    "Einmal drücken startet die Aufnahme, erneutes Drücken beendet sie und fügt eine Audiokarte mit diesem Abschnitt hinzu. Geht ohne Untertitel. Nur mpv.",
  "Long seek back": "Langer Sprung zurück",
  "Jump back by the Long seek step set under Behavior (30 seconds by default).":
    "Springt um den unter Verhalten festgelegten langen Sprung zurück (standardmäßig 30 Sekunden).",
  "Long seek forward": "Langer Sprung vorwärts",
  "Jump forward by the Long seek step set under Behavior (30 seconds by default).":
    "Springt um den unter Verhalten festgelegten langen Sprung vorwärts (standardmäßig 30 Sekunden).",
  "Replay current subtitle": "Aktuellen Untertitel wiederholen",
  "Go back to the start of the line on screen and play it again, or of the last line shown when there is none.":
    "Springt zum Anfang der Zeile auf dem Bildschirm und spielt sie erneut ab, oder der zuletzt gezeigten, wenn keine da ist.",
  "Card from the subtitle, Update last card and the Record → card keys use the deck, note type and fields of the Anki section above. With a word selected in the subtitles (highlighted while picking a word, or in an open popup) every mapped field is filled, word and definitions included; without one only the sentence, sentence audio, screenshot or clip and title fields are.":
    "Die Kürzel Karte aus dem Untertitel, Letzte Karte aktualisieren und Aufnahme → Karte nutzen Stapel, Notiztyp und Felder des Anki-Abschnitts oben. Mit einem gewählten Wort im Untertitel (beim Wortwählen hervorgehoben oder in einem offenen Popup) werden alle zugeordneten Felder gefüllt, Wort und Definitionen eingeschlossen; ohne Wort nur Satz, Satz-Audio, Screenshot oder Clip und Titel.",
  "Add a card from the line on screen with its sentence, audio and picture, using the deck and fields under Dictionary & Anki. With a word selected in the subtitles, the word and its definitions go on the card too. mpv only.":
    "Fügt eine Karte aus der Zeile auf dem Bildschirm mit Satz, Audio und Bild hinzu, mit Stapel und Feldern aus Wörterbuch & Anki. Mit einem gewählten Wort im Untertitel kommen Wort und Definitionen ebenfalls auf die Karte. Nur mpv.",
  "Put the line on screen (sentence, audio, picture) into the newest card of the deck, if it was added in the last few minutes. With a word selected, the word and its definitions too. mpv only.":
    "Legt die Zeile auf dem Bildschirm (Satz, Audio, Bild) in die neueste Karte des Stapels, wenn sie in den letzten Minuten hinzugefügt wurde. Mit einem gewählten Wort auch Wort und Definitionen. Nur mpv.",
  "Press once to start recording, again to stop and add a card with that stretch. Works without subtitles. With a word selected when you stop, the word and its definitions go on the card too. mpv only.":
    "Einmal drücken startet die Aufnahme, erneutes Drücken beendet sie und fügt eine Karte mit diesem Abschnitt hinzu. Geht ohne Untertitel. Ist beim Beenden ein Wort gewählt, kommen Wort und Definitionen ebenfalls auf die Karte. Nur mpv.",
  "Press once to start recording, again to stop and put that stretch into the newest card. Works without subtitles. With a word selected when you stop, the word and its definitions too. mpv only.":
    "Einmal drücken startet die Aufnahme, erneutes Drücken beendet sie und legt den Abschnitt in die neueste Karte. Geht ohne Untertitel. Ist beim Beenden ein Wort gewählt, auch Wort und Definitionen. Nur mpv.",
  "Added {word} to {deck}": "{word} zu {deck} hinzugefügt",
  "Updated card in {deck} with {word}": "Karte in {deck} mit {word} aktualisiert",
  "Bigger dictionary popup": "Wörterbuch-Popup größer",
  "Make the subtitle dictionary popup 10% bigger. Saved as the Popup size setting.":
    "Macht das Wörterbuch-Popup der Untertitel 10 % größer. Wird als Einstellung Popup-Größe gespeichert.",
  "Smaller dictionary popup": "Wörterbuch-Popup kleiner",
  "Make the subtitle dictionary popup 10% smaller. Saved as the Popup size setting.":
    "Macht das Wörterbuch-Popup der Untertitel 10 % kleiner. Wird als Einstellung Popup-Größe gespeichert.",
  "Dictionary popup size: {n}%": "Größe des Wörterbuch-Popups: {n} %",
  "Popup size": "Popup-Größe",
  "Scales the whole popup: text, buttons and width. Bigger sizes help on a TV. The Bigger/Smaller dictionary popup hotkeys change it too.":
    "Skaliert das ganze Popup: Text, Schaltflächen und Breite. Größere Werte helfen auf einem Fernseher. Die Tastenkürzel Wörterbuch-Popup größer/kleiner ändern sie ebenfalls.",
  "Speed step": "Tempo-Schritt",
  "How much the Speed down and Speed up shortcuts change the speed per press.":
    "Wie stark die Kürzel Verlangsamen und Beschleunigen das Tempo pro Druck ändern.",
  "Slow playback by the Speed step set under Behavior (0.25x by default).":
    "Verlangsamt die Wiedergabe um den unter Verhalten festgelegten Tempo-Schritt (standardmäßig 0,25x).",
  "Speed playback up by the Speed step set under Behavior (0.25x by default).":
    "Beschleunigt die Wiedergabe um den unter Verhalten festgelegten Tempo-Schritt (standardmäßig 0,25x).",
  "No subtitle on screen to pick a word from.":
    "Kein Untertitel auf dem Bildschirm, aus dem ein Wort gewählt werden kann.",
  "Turn on Look up words in subtitles under Dictionary & Anki to pick words.":
    "Schalte Wörter in Untertiteln nachschlagen unter Wörterbuch & Anki ein, um Wörter zu wählen.",
  "Controller buttons go next to each key: press one, or hold LB, RB, LT or RT and press another for a combination. A shoulder or trigger used in a combination does its own job when you let go of it.":
    "Controller-Tasten stehen neben jeder Taste: Drücke eine, oder halte LB, RB, LT oder RT und drücke eine weitere für eine Kombination. Eine Schulter- oder Triggertaste in einer Kombination erledigt ihre eigene Aufgabe, wenn du sie loslässt.",
  "To bind controller buttons, connect a controller and turn on controller support under Controllers.":
    "Um Controller-Tasten zuzuweisen, schließe einen Controller an und aktiviere die Controller-Unterstützung unter Controller.",
  "Word lookup": "Wörter nachschlagen",
  "While picking a word in the subtitles with the Pick a word in the subtitles shortcut. These keys take over only then, so they can reuse the player's.":
    "Während du mit dem Kürzel Wort im Untertitel wählen ein Wort auswählst. Diese Tasten gelten nur dann und dürfen daher die des Players wiederverwenden.",
  "{key} is used for {action}.": "{key} wird schon für {action} verwendet.",
  "Remove {key} from {name}": "{key} von {name} entfernen",
  "Use it here": "Hier verwenden",
  "Press a button…": "Drücke eine Taste …",
  "Add a controller button for {name}": "Controller-Taste für {name} hinzufügen",
  "Pick a word in the subtitles": "Wort im Untertitel wählen",
  "Pause and select the first word of the subtitle to look it up without the mouse. Move between words with the Word lookup keys; press again to leave.":
    "Pausiert und wählt das erste Wort des Untertitels, um es ohne Maus nachzuschlagen. Wechsle mit den Tasten von Wörter nachschlagen zwischen den Wörtern; erneut drücken zum Verlassen.",
  "Next word": "Nächstes Wort",
  "Select and look up the next word.": "Wählt das nächste Wort aus und schlägt es nach.",
  "Previous word": "Vorheriges Wort",
  "Select and look up the previous word.": "Wählt das vorherige Wort aus und schlägt es nach.",
  "Line above": "Zeile darüber",
  "Go to the first word of the subtitle line above.":
    "Springt zum ersten Wort der Untertitelzeile darüber.",
  "Line below": "Zeile darunter",
  "Go to the first word of the subtitle line below.":
    "Springt zum ersten Wort der Untertitelzeile darunter.",
  "Add the selected word to Anki, like the Anki button in the popup.":
    "Fügt das gewählte Wort zu Anki hinzu, wie die Anki-Schaltfläche im Popup.",
  "Generate AI explanation": "KI-Erklärung erzeugen",
  "Generate the AI explanation of the word, or generate it again.":
    "Erzeugt die KI-Erklärung des Worts oder erzeugt sie neu.",
  "Play word audio": "Wort-Audio abspielen",
  "Play the word's local audio; press again for the next voice.":
    "Spielt das lokale Audio des Worts ab; erneut drücken für die nächste Stimme.",
  "Scroll popup down": "Popup nach unten scrollen",
  "Scroll the definitions down. On a controller the right stick scrolls too.":
    "Scrollt die Definitionen nach unten. Am Controller scrollt auch der rechte Stick.",
  "Scroll popup up": "Popup nach oben scrollen",
  "Scroll the definitions up.": "Scrollt die Definitionen nach oben.",
  "Leave word lookup": "Wörter nachschlagen beenden",
  Words: "Wörter",
  Popup: "Popup",
  "Show the popup": "Popup anzeigen",
  "Open or close the dictionary popup for the selected word. Moving to another word closes it.":
    "Öffnet oder schließt das Wörterbuch-Popup für das gewählte Wort. Der Wechsel zu einem anderen Wort schließt es.",
  "Clear the shortcut for {name}": "Tastenkürzel für {name} entfernen",
  "Clear the shortcut": "Tastenkürzel entfernen",
};

export default immersionHotkeys;
