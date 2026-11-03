// Immersion hotkeys, picking words in the subtitles and controller buttons in the hotkey list.
const immersionHotkeys: Record<string, string> = {
  "audio card": "tarjeta de audio",
  "last card": "última tarjeta",
  "new card": "tarjeta nueva",
  "Still adding the previous card…": "Todavía añadiendo la tarjeta anterior…",
  "Updated card in {deck}": "Tarjeta actualizada en {deck}",
  "Added to {deck}": "Añadida a {deck}",
  "{n}s recorded": "{n}s grabados",
  "Recording → {target}. Press again to stop.": "Grabando → {target}. Pulsa de nuevo para detener.",
  "the video went back since the recording started":
    "el vídeo retrocedió desde que empezó la grabación",
  "too short": "demasiado corta",
  "longer than the {n}s limit": "supera el límite de {n}s",
  "Recording discarded: {reason}": "Grabación descartada: {reason}",
  "Stopped · {n}s recorded · adding card…": "Detenida · {n}s grabados · añadiendo tarjeta…",
  "Anki cards from the player need the mpv player in the desktop app.":
    "Las tarjetas de Anki desde el reproductor necesitan el reproductor mpv en la app de escritorio.",
  "No subtitle on screen. Use a Record shortcut for parts without subtitles.":
    "No hay subtítulo en pantalla. Usa un atajo de Grabar para partes sin subtítulos.",
  Immersion: "Inmersión",
  "Cards straight from the player, without looking a word up: from the subtitle on screen, or from a stretch you record with two presses of the same key (works without subtitles). Set the keys in Settings → Hotkeys → Immersion. mpv only.":
    "Tarjetas directamente desde el reproductor, sin buscar una palabra: del subtítulo en pantalla, o de un fragmento que grabas con dos pulsaciones de la misma tecla (funciona sin subtítulos). Configura las teclas en Ajustes → Atajos → Inmersión. Solo mpv.",
  "Sentence cards": "Tarjetas de frase",
  "Pick a deck and note type above": "Elige un mazo y un tipo de nota arriba",
  "Map a field to Sentence audio above": "Asigna un campo a Audio de la frase arriba",
  "Audio cards": "Tarjetas de audio",
  "Audio card deck": "Mazo de la tarjeta de audio",
  "Audio card note type": "Tipo de nota de la tarjeta de audio",
  "Audio field": "Campo de audio",
  "Gets the audio of the line or of the recording.":
    "Recibe el audio de la línea o de la grabación.",
  "Pick a note type first": "Elige primero un tipo de nota",
  "Sentence field (optional)": "Campo de la frase (opcional)",
  "Gets the subtitle text, when there is one.": "Recibe el texto del subtítulo, cuando lo hay.",
  "Update last card window": "Ventana de Actualizar última tarjeta",
  "Update last card only touches a card added this many minutes ago or less.":
    "Actualizar última tarjeta solo modifica una tarjeta añadida hace este número de minutos o menos.",
  "Longest recording": "Grabación más larga",
  "A recording longer than this is discarded. Animated clips still stop after 12 seconds.":
    "Una grabación más larga que esto se descarta. Los clips animados siguen deteniéndose a los 12 segundos.",
  "Long seek": "Salto largo",
  "The jump of the Long seek back and Long seek forward shortcuts.":
    "El salto de los atajos Salto largo hacia atrás y Salto largo hacia delante.",
  "Slow speed": "Velocidad lenta",
  "The speed the Toggle slow speed shortcut switches to from normal speed.":
    "La velocidad a la que cambia el atajo Alternar velocidad lenta desde la velocidad normal.",
  "Toggle subtitles on/off": "Activar/desactivar subtítulos",
  "Hide every subtitle (primary and secondary), or show the primary again. Hidden subtitles still work for line seeking, replay and Anki cards.":
    "Oculta todos los subtítulos (principal y secundario) o vuelve a mostrar el principal. Ocultos, siguen sirviendo para saltar líneas, repetir y crear tarjetas de Anki.",
  "Next subtitle line": "Siguiente línea de subtítulo",
  "Jump to the start of the next subtitle line.":
    "Salta al inicio de la siguiente línea de subtítulo.",
  "Previous subtitle line": "Línea de subtítulo anterior",
  "Jump to the start of the previous subtitle line.":
    "Salta al inicio de la línea de subtítulo anterior.",
  "Toggle slow speed": "Alternar velocidad lenta",
  "Switch between normal speed and the slow speed set under Behavior (0.5x by default).":
    "Cambia entre la velocidad normal y la velocidad lenta configurada en Comportamiento (0,5x por defecto).",
  "Anki: card from the subtitle": "Anki: tarjeta del subtítulo",
  "Anki: update last card": "Anki: actualizar última tarjeta",
  "Anki: audio card": "Anki: tarjeta de audio",
  "Add an audio-only card from the line on screen, using the audio card deck. mpv only.":
    "Añade una tarjeta solo de audio de la línea en pantalla, usando el mazo de la tarjeta de audio. Solo mpv.",
  "Record → new card": "Grabar → tarjeta nueva",
  "Record → update last card": "Grabar → actualizar última tarjeta",
  "Record → audio card": "Grabar → tarjeta de audio",
  "Press once to start recording, again to stop and add an audio card with that stretch. Works without subtitles. mpv only.":
    "Pulsa una vez para empezar a grabar y otra para detener y añadir una tarjeta de audio con ese fragmento. Funciona sin subtítulos. Solo mpv.",
  "Long seek back": "Salto largo hacia atrás",
  "Jump back by the Long seek step set under Behavior (30 seconds by default).":
    "Retrocede según el paso de Salto largo configurado en Comportamiento (30 segundos por defecto).",
  "Long seek forward": "Salto largo hacia delante",
  "Jump forward by the Long seek step set under Behavior (30 seconds by default).":
    "Avanza según el paso de Salto largo configurado en Comportamiento (30 segundos por defecto).",
  "Replay current subtitle": "Repetir el subtítulo actual",
  "Go back to the start of the line on screen and play it again, or of the last line shown when there is none.":
    "Vuelve al inicio de la línea en pantalla y la reproduce de nuevo, o de la última mostrada si no hay ninguna.",
  "Card from the subtitle, Update last card and the Record → card keys use the deck, note type and fields of the Anki section above. With a word selected in the subtitles (highlighted while picking a word, or in an open popup) every mapped field is filled, word and definitions included; without one only the sentence, sentence audio, screenshot or clip and title fields are.":
    "Los atajos Tarjeta del subtítulo, Actualizar última tarjeta y Grabar → tarjeta usan el mazo, el tipo de nota y los campos de la sección Anki de arriba. Con una palabra seleccionada en el subtítulo (resaltada al elegir palabra, o en una ventana emergente abierta) se rellenan todos los campos asignados, palabra y definiciones incluidas; sin ella, solo los de frase, audio de la frase, captura o clip y título.",
  "Add a card from the line on screen with its sentence, audio and picture, using the deck and fields under Dictionary & Anki. With a word selected in the subtitles, the word and its definitions go on the card too. mpv only.":
    "Añade una tarjeta de la línea en pantalla con su frase, audio e imagen, usando el mazo y los campos de Diccionario y Anki. Con una palabra seleccionada en el subtítulo, la palabra y sus definiciones también van a la tarjeta. Solo mpv.",
  "Put the line on screen (sentence, audio, picture) into the newest card of the deck, if it was added in the last few minutes. With a word selected, the word and its definitions too. mpv only.":
    "Pone la línea en pantalla (frase, audio, imagen) en la tarjeta más reciente del mazo, si se añadió en los últimos minutos. Con una palabra seleccionada, también la palabra y sus definiciones. Solo mpv.",
  "Press once to start recording, again to stop and add a card with that stretch. Works without subtitles. With a word selected when you stop, the word and its definitions go on the card too. mpv only.":
    "Pulsa una vez para empezar a grabar y otra para detener y añadir una tarjeta con ese fragmento. Funciona sin subtítulos. Con una palabra seleccionada al detener, la palabra y sus definiciones también van a la tarjeta. Solo mpv.",
  "Press once to start recording, again to stop and put that stretch into the newest card. Works without subtitles. With a word selected when you stop, the word and its definitions too. mpv only.":
    "Pulsa una vez para empezar a grabar y otra para detener y poner ese fragmento en la tarjeta más reciente. Funciona sin subtítulos. Con una palabra seleccionada al detener, también la palabra y sus definiciones. Solo mpv.",
  "Added {word} to {deck}": "{word} añadida a {deck}",
  "Updated card in {deck} with {word}": "Tarjeta de {deck} actualizada con {word}",
  "Bigger dictionary popup": "Ventana del diccionario más grande",
  "Make the subtitle dictionary popup 10% bigger. Saved as the Popup size setting.":
    "Hace la ventana del diccionario de los subtítulos un 10% más grande. Se guarda en la opción Tamaño de la ventana.",
  "Smaller dictionary popup": "Ventana del diccionario más pequeña",
  "Make the subtitle dictionary popup 10% smaller. Saved as the Popup size setting.":
    "Hace la ventana del diccionario de los subtítulos un 10% más pequeña. Se guarda en la opción Tamaño de la ventana.",
  "Dictionary popup size: {n}%": "Tamaño de la ventana del diccionario: {n}%",
  "Popup size": "Tamaño de la ventana",
  "Scales the whole popup: text, buttons and width. Bigger sizes help on a TV. The Bigger/Smaller dictionary popup hotkeys change it too.":
    "Escala toda la ventana: texto, botones y ancho. Los tamaños grandes ayudan en una TV. Los atajos Ventana del diccionario más grande/más pequeña también lo cambian.",
  "Speed step": "Paso de velocidad",
  "How much the Speed down and Speed up shortcuts change the speed per press.":
    "Cuánto cambian la velocidad los atajos Reducir velocidad y Aumentar velocidad en cada pulsación.",
  "Slow playback by the Speed step set under Behavior (0.25x by default).":
    "Reduce la velocidad según el Paso de velocidad definido en Comportamiento (0,25x por defecto).",
  "Speed playback up by the Speed step set under Behavior (0.25x by default).":
    "Aumenta la velocidad según el Paso de velocidad definido en Comportamiento (0,25x por defecto).",
  "No subtitle on screen to pick a word from.":
    "No hay subtítulo en pantalla para elegir una palabra.",
  "Turn on Look up words in subtitles under Dictionary & Anki to pick words.":
    "Activa Buscar palabras en los subtítulos en Diccionario y Anki para elegir palabras.",
  "Controller buttons go next to each key: press one, or hold LB, RB, LT or RT and press another for a combination. A shoulder or trigger used in a combination does its own job when you let go of it.":
    "Los botones del mando van junto a cada tecla: pulsa uno, o mantén LB, RB, LT o RT y pulsa otro para una combinación. Un botón superior o gatillo usado en una combinación hace su propia función al soltarlo.",
  "To bind controller buttons, connect a controller and turn on controller support under Controllers.":
    "Para asignar botones del mando, conecta un mando y activa la compatibilidad con mandos en Mandos.",
  "Word lookup": "Búsqueda de palabras",
  "While picking a word in the subtitles with the Pick a word in the subtitles shortcut. These keys take over only then, so they can reuse the player's.":
    "Mientras eliges una palabra del subtítulo con el atajo Elegir una palabra del subtítulo. Estas teclas solo valen entonces, así que pueden repetir las del reproductor.",
  "{key} is used for {action}.": "{key} ya se usa para {action}.",
  "Remove {key} from {name}": "Quitar {key} de {name}",
  "Use it here": "Usar aquí",
  "Press a button…": "Pulsa un botón…",
  "Add a controller button for {name}": "Añadir un botón del mando para {name}",
  "Pick a word in the subtitles": "Elegir una palabra del subtítulo",
  "Pause and select the first word of the subtitle to look it up without the mouse. Move between words with the Word lookup keys; press again to leave.":
    "Pausa y selecciona la primera palabra del subtítulo para buscarla sin el ratón. Muévete entre palabras con las teclas de Búsqueda de palabras; pulsa de nuevo para salir.",
  "Next word": "Palabra siguiente",
  "Select and look up the next word.": "Selecciona y busca la palabra siguiente.",
  "Previous word": "Palabra anterior",
  "Select and look up the previous word.": "Selecciona y busca la palabra anterior.",
  "Line above": "Línea de arriba",
  "Go to the first word of the subtitle line above.":
    "Va a la primera palabra de la línea de arriba del subtítulo.",
  "Line below": "Línea de abajo",
  "Go to the first word of the subtitle line below.":
    "Va a la primera palabra de la línea de abajo del subtítulo.",
  "Add the selected word to Anki, like the Anki button in the popup.":
    "Añade la palabra seleccionada a Anki, como el botón Anki de la ventana emergente.",
  "Generate AI explanation": "Generar explicación con IA",
  "Generate the AI explanation of the word, or generate it again.":
    "Genera la explicación con IA de la palabra, o la genera de nuevo.",
  "Play word audio": "Reproducir audio de la palabra",
  "Play the word's local audio; press again for the next voice.":
    "Reproduce el audio local de la palabra; pulsa de nuevo para la siguiente voz.",
  "Scroll popup down": "Desplazar la ventana hacia abajo",
  "Scroll the definitions down. On a controller the right stick scrolls too.":
    "Desplaza las definiciones hacia abajo. En un mando, el stick derecho también desplaza.",
  "Scroll popup up": "Desplazar la ventana hacia arriba",
  "Scroll the definitions up.": "Desplaza las definiciones hacia arriba.",
  "Leave word lookup": "Salir de la búsqueda de palabras",
  Words: "Palabras",
  Popup: "Ventana emergente",
  "Show the popup": "Mostrar la ventana emergente",
  "Open or close the dictionary popup for the selected word. Moving to another word closes it.":
    "Abre o cierra la ventana del diccionario para la palabra seleccionada. Pasar a otra palabra la cierra.",
  "Clear the shortcut for {name}": "Borrar el atajo de {name}",
  "Clear the shortcut": "Borrar el atajo",
};

export default immersionHotkeys;
