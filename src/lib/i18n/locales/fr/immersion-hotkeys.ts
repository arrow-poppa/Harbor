// Immersion hotkeys, picking words in the subtitles and controller buttons in the hotkey list.
const immersionHotkeys: Record<string, string> = {
  "audio card": "carte audio",
  "last card": "dernière carte",
  "new card": "nouvelle carte",
  "Still adding the previous card…": "Ajout de la carte précédente en cours…",
  "Updated card in {deck}": "Carte mise à jour dans {deck}",
  "Added to {deck}": "Ajoutée à {deck}",
  "{n}s recorded": "{n}s enregistrées",
  "Recording → {target}. Press again to stop.":
    "Enregistrement → {target}. Appuyez à nouveau pour arrêter.",
  "the video went back since the recording started":
    "la vidéo a reculé depuis le début de l’enregistrement",
  "too short": "trop court",
  "longer than the {n}s limit": "dépasse la limite de {n}s",
  "Recording discarded: {reason}": "Enregistrement abandonné : {reason}",
  "Stopped · {n}s recorded · adding card…": "Arrêté · {n}s enregistrées · ajout de la carte…",
  "Anki cards from the player need the mpv player in the desktop app.":
    "Les cartes Anki depuis le lecteur nécessitent le lecteur mpv dans l’application de bureau.",
  "No subtitle on screen. Use a Record shortcut for parts without subtitles.":
    "Aucun sous-titre à l’écran. Utilisez un raccourci Enregistrer pour les passages sans sous-titres.",
  Immersion: "Immersion",
  "Cards straight from the player, without looking a word up: from the subtitle on screen, or from a stretch you record with two presses of the same key (works without subtitles). Set the keys in Settings → Hotkeys → Immersion. mpv only.":
    "Des cartes directement depuis le lecteur, sans chercher de mot : depuis le sous-titre à l’écran, ou depuis un passage enregistré avec deux appuis sur la même touche (fonctionne sans sous-titres). Choisissez les touches dans Paramètres → Raccourcis → Immersion. mpv uniquement.",
  "Sentence cards": "Cartes de phrase",
  "Pick a deck and note type above": "Choisissez un paquet et un type de note ci-dessus",
  "Map a field to Sentence audio above": "Associez un champ à Audio de la phrase ci-dessus",
  "Audio cards": "Cartes audio",
  "Audio card deck": "Paquet des cartes audio",
  "Audio card note type": "Type de note des cartes audio",
  "Audio field": "Champ audio",
  "Gets the audio of the line or of the recording.":
    "Reçoit l’audio de la ligne ou de l’enregistrement.",
  "Pick a note type first": "Choisissez d’abord un type de note",
  "Sentence field (optional)": "Champ de la phrase (facultatif)",
  "Gets the subtitle text, when there is one.": "Reçoit le texte du sous-titre, s’il y en a un.",
  "Update last card window": "Fenêtre de Mettre à jour la dernière carte",
  "Update last card only touches a card added this many minutes ago or less.":
    "Mettre à jour la dernière carte ne touche qu’une carte ajoutée il y a ce nombre de minutes ou moins.",
  "Longest recording": "Enregistrement le plus long",
  "A recording longer than this is discarded. Animated clips still stop after 12 seconds.":
    "Un enregistrement plus long est abandonné. Les clips animés s’arrêtent toujours après 12 secondes.",
  "Long seek": "Saut long",
  "The jump of the Long seek back and Long seek forward shortcuts.":
    "Le saut des raccourcis Saut long en arrière et Saut long en avant.",
  "Slow speed": "Vitesse lente",
  "The speed the Toggle slow speed shortcut switches to from normal speed.":
    "La vitesse vers laquelle le raccourci Basculer la vitesse lente passe depuis la vitesse normale.",
  "Toggle subtitles on/off": "Activer/désactiver les sous-titres",
  "Hide every subtitle (primary and secondary), or show the primary again. Hidden subtitles still work for line seeking, replay and Anki cards.":
    "Masque tous les sous-titres (principal et secondaire) ou réaffiche le principal. Masqués, ils servent toujours à sauter de ligne, à répéter et aux cartes Anki.",
  "Next subtitle line": "Ligne de sous-titre suivante",
  "Jump to the start of the next subtitle line.":
    "Saute au début de la ligne de sous-titre suivante.",
  "Previous subtitle line": "Ligne de sous-titre précédente",
  "Jump to the start of the previous subtitle line.":
    "Saute au début de la ligne de sous-titre précédente.",
  "Toggle slow speed": "Basculer la vitesse lente",
  "Switch between normal speed and the slow speed set under Behavior (0.5x by default).":
    "Alterne entre la vitesse normale et la vitesse lente définie dans Comportement (0,5x par défaut).",
  "Anki: card from the subtitle": "Anki : carte depuis le sous-titre",
  "Anki: update last card": "Anki : mettre à jour la dernière carte",
  "Anki: audio card": "Anki : carte audio",
  "Add an audio-only card from the line on screen, using the audio card deck. mpv only.":
    "Ajoute une carte uniquement audio depuis la ligne à l’écran, avec le paquet des cartes audio. mpv uniquement.",
  "Record → new card": "Enregistrer → nouvelle carte",
  "Record → update last card": "Enregistrer → mettre à jour la dernière carte",
  "Record → audio card": "Enregistrer → carte audio",
  "Press once to start recording, again to stop and add an audio card with that stretch. Works without subtitles. mpv only.":
    "Appuyez une fois pour commencer l’enregistrement, puis à nouveau pour l’arrêter et ajouter une carte audio avec ce passage. Fonctionne sans sous-titres. mpv uniquement.",
  "Long seek back": "Saut long en arrière",
  "Jump back by the Long seek step set under Behavior (30 seconds by default).":
    "Recule du pas de Saut long défini dans Comportement (30 secondes par défaut).",
  "Long seek forward": "Saut long en avant",
  "Jump forward by the Long seek step set under Behavior (30 seconds by default).":
    "Avance du pas de Saut long défini dans Comportement (30 secondes par défaut).",
  "Replay current subtitle": "Rejouer le sous-titre actuel",
  "Go back to the start of the line on screen and play it again, or of the last line shown when there is none.":
    "Revient au début de la ligne à l’écran et la rejoue, ou de la dernière affichée s’il n’y en a aucune.",
  "Card from the subtitle, Update last card and the Record → card keys use the deck, note type and fields of the Anki section above. With a word selected in the subtitles (highlighted while picking a word, or in an open popup) every mapped field is filled, word and definitions included; without one only the sentence, sentence audio, screenshot or clip and title fields are.":
    "Les raccourcis Carte depuis le sous-titre, Mettre à jour la dernière carte et Enregistrer → carte utilisent le paquet, le type de note et les champs de la section Anki ci-dessus. Avec un mot sélectionné dans le sous-titre (surligné en choisissant un mot, ou dans une fenêtre ouverte), tous les champs associés sont remplis, mot et définitions compris ; sinon seuls les champs phrase, audio de la phrase, capture ou clip et titre le sont.",
  "Add a card from the line on screen with its sentence, audio and picture, using the deck and fields under Dictionary & Anki. With a word selected in the subtitles, the word and its definitions go on the card too. mpv only.":
    "Ajoute une carte depuis la ligne à l’écran avec sa phrase, son audio et une image, en utilisant le paquet et les champs de Dictionnaire et Anki. Avec un mot sélectionné dans le sous-titre, le mot et ses définitions vont aussi sur la carte. mpv uniquement.",
  "Put the line on screen (sentence, audio, picture) into the newest card of the deck, if it was added in the last few minutes. With a word selected, the word and its definitions too. mpv only.":
    "Place la ligne à l’écran (phrase, audio, image) dans la carte la plus récente du paquet, si elle a été ajoutée ces dernières minutes. Avec un mot sélectionné, le mot et ses définitions aussi. mpv uniquement.",
  "Press once to start recording, again to stop and add a card with that stretch. Works without subtitles. With a word selected when you stop, the word and its definitions go on the card too. mpv only.":
    "Appuyez une fois pour commencer l’enregistrement, puis à nouveau pour l’arrêter et ajouter une carte avec ce passage. Fonctionne sans sous-titres. Avec un mot sélectionné à l’arrêt, le mot et ses définitions vont aussi sur la carte. mpv uniquement.",
  "Press once to start recording, again to stop and put that stretch into the newest card. Works without subtitles. With a word selected when you stop, the word and its definitions too. mpv only.":
    "Appuyez une fois pour commencer l’enregistrement, puis à nouveau pour l’arrêter et placer ce passage dans la carte la plus récente. Fonctionne sans sous-titres. Avec un mot sélectionné à l’arrêt, le mot et ses définitions aussi. mpv uniquement.",
  "Added {word} to {deck}": "{word} ajouté à {deck}",
  "Updated card in {deck} with {word}": "Carte de {deck} mise à jour avec {word}",
  "Bigger dictionary popup": "Agrandir la fenêtre du dictionnaire",
  "Make the subtitle dictionary popup 10% bigger. Saved as the Popup size setting.":
    "Agrandit de 10 % la fenêtre du dictionnaire des sous-titres. Enregistré dans le réglage Taille de la fenêtre.",
  "Smaller dictionary popup": "Réduire la fenêtre du dictionnaire",
  "Make the subtitle dictionary popup 10% smaller. Saved as the Popup size setting.":
    "Réduit de 10 % la fenêtre du dictionnaire des sous-titres. Enregistré dans le réglage Taille de la fenêtre.",
  "Dictionary popup size: {n}%": "Taille de la fenêtre du dictionnaire : {n} %",
  "Popup size": "Taille de la fenêtre",
  "Scales the whole popup: text, buttons and width. Bigger sizes help on a TV. The Bigger/Smaller dictionary popup hotkeys change it too.":
    "Met à l’échelle toute la fenêtre : texte, boutons et largeur. Les grandes tailles aident sur une TV. Les raccourcis Agrandir/Réduire la fenêtre du dictionnaire la changent aussi.",
  "Speed step": "Pas de vitesse",
  "How much the Speed down and Speed up shortcuts change the speed per press.":
    "De combien les raccourcis Réduire la vitesse et Accélérer changent la vitesse à chaque appui.",
  "Slow playback by the Speed step set under Behavior (0.25x by default).":
    "Ralentit la lecture du Pas de vitesse défini dans Comportement (0,25x par défaut).",
  "Speed playback up by the Speed step set under Behavior (0.25x by default).":
    "Accélère la lecture du Pas de vitesse défini dans Comportement (0,25x par défaut).",
  "No subtitle on screen to pick a word from.": "Aucun sous-titre à l’écran où choisir un mot.",
  "Turn on Look up words in subtitles under Dictionary & Anki to pick words.":
    "Activez Chercher les mots dans les sous-titres dans Dictionnaire et Anki pour choisir des mots.",
  "Controller buttons go next to each key: press one, or hold LB, RB, LT or RT and press another for a combination. A shoulder or trigger used in a combination does its own job when you let go of it.":
    "Les boutons de la manette se placent à côté de chaque touche : appuyez sur l’un, ou maintenez LB, RB, LT ou RT et appuyez sur un autre pour une combinaison. Une gâchette ou un bouton de tranche utilisé dans une combinaison fait sa propre action quand vous le relâchez.",
  "To bind controller buttons, connect a controller and turn on controller support under Controllers.":
    "Pour associer des boutons de manette, branchez une manette et activez la prise en charge des manettes dans Manettes.",
  "Word lookup": "Recherche de mots",
  "While picking a word in the subtitles with the Pick a word in the subtitles shortcut. These keys take over only then, so they can reuse the player's.":
    "Pendant que vous choisissez un mot du sous-titre avec le raccourci Choisir un mot du sous-titre. Ces touches ne s’appliquent qu’à ce moment-là, elles peuvent donc reprendre celles du lecteur.",
  "{key} is used for {action}.": "{key} est déjà utilisé pour {action}.",
  "Remove {key} from {name}": "Retirer {key} de {name}",
  "Use it here": "L’utiliser ici",
  "Press a button…": "Appuyez sur un bouton…",
  "Add a controller button for {name}": "Ajouter un bouton de manette pour {name}",
  "Pick a word in the subtitles": "Choisir un mot du sous-titre",
  "Pause and select the first word of the subtitle to look it up without the mouse. Move between words with the Word lookup keys; press again to leave.":
    "Met en pause et sélectionne le premier mot du sous-titre pour le chercher sans la souris. Passez d’un mot à l’autre avec les touches de Recherche de mots ; appuyez à nouveau pour sortir.",
  "Next word": "Mot suivant",
  "Select and look up the next word.": "Sélectionne et cherche le mot suivant.",
  "Previous word": "Mot précédent",
  "Select and look up the previous word.": "Sélectionne et cherche le mot précédent.",
  "Line above": "Ligne du dessus",
  "Go to the first word of the subtitle line above.":
    "Va au premier mot de la ligne de sous-titre du dessus.",
  "Line below": "Ligne du dessous",
  "Go to the first word of the subtitle line below.":
    "Va au premier mot de la ligne de sous-titre du dessous.",
  "Add the selected word to Anki, like the Anki button in the popup.":
    "Ajoute le mot sélectionné à Anki, comme le bouton Anki de la fenêtre.",
  "Generate AI explanation": "Générer l’explication par IA",
  "Generate the AI explanation of the word, or generate it again.":
    "Génère l’explication par IA du mot, ou la génère à nouveau.",
  "Play word audio": "Écouter l’audio du mot",
  "Play the word's local audio; press again for the next voice.":
    "Lit l’audio local du mot ; appuyez à nouveau pour la voix suivante.",
  "Scroll popup down": "Faire défiler la fenêtre vers le bas",
  "Scroll the definitions down. On a controller the right stick scrolls too.":
    "Fait défiler les définitions vers le bas. Sur une manette, le stick droit fait aussi défiler.",
  "Scroll popup up": "Faire défiler la fenêtre vers le haut",
  "Scroll the definitions up.": "Fait défiler les définitions vers le haut.",
  "Leave word lookup": "Quitter la recherche de mots",
  Words: "Mots",
  Popup: "Fenêtre",
  "Show the popup": "Afficher la fenêtre",
  "Open or close the dictionary popup for the selected word. Moving to another word closes it.":
    "Ouvre ou ferme la fenêtre du dictionnaire pour le mot sélectionné. Passer à un autre mot la ferme.",
  "Clear the shortcut for {name}": "Effacer le raccourci de {name}",
  "Clear the shortcut": "Effacer le raccourci",
};

export default immersionHotkeys;
