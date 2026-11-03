// Immersion hotkeys, picking words in the subtitles and controller buttons in the hotkey list.
const immersionHotkeys: Record<string, string> = {
  "audio card": "cartão de áudio",
  "last card": "último cartão",
  "new card": "cartão novo",
  "Still adding the previous card…": "Ainda adicionando o cartão anterior…",
  "Updated card in {deck}": "Cartão atualizado em {deck}",
  "Added to {deck}": "Adicionado a {deck}",
  "{n}s recorded": "{n}s gravados",
  "Recording → {target}. Press again to stop.": "Gravando → {target}. Aperte de novo para parar.",
  "the video went back since the recording started": "o vídeo voltou desde o início da gravação",
  "too short": "curta demais",
  "longer than the {n}s limit": "maior que o limite de {n}s",
  "Recording discarded: {reason}": "Gravação descartada: {reason}",
  "Stopped · {n}s recorded · adding card…": "Parou · {n}s gravados · adicionando cartão…",
  "Anki cards from the player need the mpv player in the desktop app.":
    "Cartões do Anki pelo player precisam do player mpv no app para desktop.",
  "No subtitle on screen. Use a Record shortcut for parts without subtitles.":
    "Nenhuma legenda na tela. Use um atalho de Gravar para trechos sem legenda.",
  Immersion: "Imersão",
  "Cards straight from the player, without looking a word up: from the subtitle on screen, or from a stretch you record with two presses of the same key (works without subtitles). Set the keys in Settings → Hotkeys → Immersion. mpv only.":
    "Cartões direto do player, sem consultar uma palavra: da legenda na tela, ou de um trecho que você grava com dois toques na mesma tecla (funciona sem legendas). Defina as teclas em Configurações → Atalhos → Imersão. Só no mpv.",
  "Sentence cards": "Cartões de frase",
  "Pick a deck and note type above": "Escolha um baralho e um tipo de nota acima",
  "Map a field to Sentence audio above": "Mapeie um campo para Áudio da frase acima",
  "Audio cards": "Cartões de áudio",
  "Audio card deck": "Baralho do cartão de áudio",
  "Audio card note type": "Tipo de nota do cartão de áudio",
  "Audio field": "Campo de áudio",
  "Gets the audio of the line or of the recording.": "Recebe o áudio da linha ou da gravação.",
  "Pick a note type first": "Escolha um tipo de nota primeiro",
  "Sentence field (optional)": "Campo da frase (opcional)",
  "Gets the subtitle text, when there is one.": "Recebe o texto da legenda, quando houver.",
  "Update last card window": "Janela do Atualizar último cartão",
  "Update last card only touches a card added this many minutes ago or less.":
    "Atualizar último cartão só mexe num cartão adicionado há esta quantidade de minutos ou menos.",
  "Longest recording": "Gravação mais longa",
  "A recording longer than this is discarded. Animated clips still stop after 12 seconds.":
    "Uma gravação maior que isto é descartada. Os clipes animados continuam parando depois de 12 segundos.",
  "Long seek": "Salto longo",
  "The jump of the Long seek back and Long seek forward shortcuts.":
    "O salto dos atalhos Salto longo para trás e Salto longo para frente.",
  "Slow speed": "Velocidade lenta",
  "The speed the Toggle slow speed shortcut switches to from normal speed.":
    "A velocidade para a qual o atalho Alternar velocidade lenta muda a partir da velocidade normal.",
  "Toggle subtitles on/off": "Ligar/desligar legendas",
  "Hide every subtitle (primary and secondary), or show the primary again. Hidden subtitles still work for line seeking, replay and Anki cards.":
    "Esconde todas as legendas (primária e secundária) ou mostra a primária de novo. Escondidas, elas continuam funcionando para pular falas, repetir e criar cartões do Anki.",
  "Next subtitle line": "Próxima linha da legenda",
  "Jump to the start of the next subtitle line.": "Pula para o início da próxima linha da legenda.",
  "Previous subtitle line": "Linha anterior da legenda",
  "Jump to the start of the previous subtitle line.":
    "Pula para o início da linha anterior da legenda.",
  "Toggle slow speed": "Alternar velocidade lenta",
  "Switch between normal speed and the slow speed set under Behavior (0.5x by default).":
    "Alterna entre a velocidade normal e a velocidade lenta definida em Comportamento (0,5x por padrão).",
  "Anki: card from the subtitle": "Anki: cartão da legenda",
  "Anki: update last card": "Anki: atualizar último cartão",
  "Anki: audio card": "Anki: cartão de áudio",
  "Add an audio-only card from the line on screen, using the audio card deck. mpv only.":
    "Adiciona um cartão só de áudio da linha na tela, usando o baralho do cartão de áudio. Só no mpv.",
  "Record → new card": "Gravar → cartão novo",
  "Record → update last card": "Gravar → atualizar último cartão",
  "Record → audio card": "Gravar → cartão de áudio",
  "Press once to start recording, again to stop and add an audio card with that stretch. Works without subtitles. mpv only.":
    "Aperte uma vez para começar a gravar e de novo para parar e adicionar um cartão de áudio com esse trecho. Funciona sem legendas. Só no mpv.",
  "Long seek back": "Salto longo para trás",
  "Jump back by the Long seek step set under Behavior (30 seconds by default).":
    "Volta pelo passo de Salto longo definido em Comportamento (30 segundos por padrão).",
  "Long seek forward": "Salto longo para frente",
  "Jump forward by the Long seek step set under Behavior (30 seconds by default).":
    "Avança pelo passo de Salto longo definido em Comportamento (30 segundos por padrão).",
  "Replay current subtitle": "Repetir a legenda atual",
  "Go back to the start of the line on screen and play it again, or of the last line shown when there is none.":
    "Volta ao início da fala na tela e toca de novo, ou da última fala mostrada quando não há nenhuma.",
  "Card from the subtitle, Update last card and the Record → card keys use the deck, note type and fields of the Anki section above. With a word selected in the subtitles (highlighted while picking a word, or in an open popup) every mapped field is filled, word and definitions included; without one only the sentence, sentence audio, screenshot or clip and title fields are.":
    "Os atalhos Cartão da legenda, Atualizar último cartão e Gravar → cartão usam o baralho, o tipo de nota e os campos da seção Anki acima. Com uma palavra selecionada na legenda (destacada ao escolher palavra, ou num popup aberto) todos os campos mapeados são preenchidos, inclusive palavra e definições; sem ela, só os campos de frase, áudio da frase, captura de tela ou clipe e título.",
  "Add a card from the line on screen with its sentence, audio and picture, using the deck and fields under Dictionary & Anki. With a word selected in the subtitles, the word and its definitions go on the card too. mpv only.":
    "Adiciona um cartão da linha na tela com a frase, o áudio e a imagem, usando o baralho e os campos de Dicionário & Anki. Com uma palavra selecionada na legenda, a palavra e as definições também vão para o cartão. Só no mpv.",
  "Put the line on screen (sentence, audio, picture) into the newest card of the deck, if it was added in the last few minutes. With a word selected, the word and its definitions too. mpv only.":
    "Coloca a linha na tela (frase, áudio, imagem) no cartão mais novo do baralho, se ele foi adicionado nos últimos minutos. Com uma palavra selecionada, também a palavra e as definições. Só no mpv.",
  "Press once to start recording, again to stop and add a card with that stretch. Works without subtitles. With a word selected when you stop, the word and its definitions go on the card too. mpv only.":
    "Aperte uma vez para começar a gravar e de novo para parar e adicionar um cartão com esse trecho. Funciona sem legendas. Com uma palavra selecionada ao parar, a palavra e as definições também vão para o cartão. Só no mpv.",
  "Press once to start recording, again to stop and put that stretch into the newest card. Works without subtitles. With a word selected when you stop, the word and its definitions too. mpv only.":
    "Aperte uma vez para começar a gravar e de novo para parar e colocar esse trecho no cartão mais novo. Funciona sem legendas. Com uma palavra selecionada ao parar, também a palavra e as definições. Só no mpv.",
  "Added {word} to {deck}": "{word} adicionada a {deck}",
  "Updated card in {deck} with {word}": "Cartão em {deck} atualizado com {word}",
  "Bigger dictionary popup": "Popup do dicionário maior",
  "Make the subtitle dictionary popup 10% bigger. Saved as the Popup size setting.":
    "Deixa o popup do dicionário das legendas 10% maior. Fica salvo na opção Tamanho do popup.",
  "Smaller dictionary popup": "Popup do dicionário menor",
  "Make the subtitle dictionary popup 10% smaller. Saved as the Popup size setting.":
    "Deixa o popup do dicionário das legendas 10% menor. Fica salvo na opção Tamanho do popup.",
  "Dictionary popup size: {n}%": "Tamanho do popup do dicionário: {n}%",
  "Popup size": "Tamanho do popup",
  "Scales the whole popup: text, buttons and width. Bigger sizes help on a TV. The Bigger/Smaller dictionary popup hotkeys change it too.":
    "Aumenta ou diminui o popup inteiro: texto, botões e largura. Tamanhos maiores ajudam numa TV. Os atalhos Popup do dicionário maior/menor também mudam isso.",
  "Speed step": "Passo da velocidade",
  "How much the Speed down and Speed up shortcuts change the speed per press.":
    "Quanto os atalhos Diminuir e Aumentar velocidade mudam a velocidade a cada toque.",
  "Slow playback by the Speed step set under Behavior (0.25x by default).":
    "Reduz a velocidade pelo Passo da velocidade definido em Comportamento (0,25x por padrão).",
  "Speed playback up by the Speed step set under Behavior (0.25x by default).":
    "Aumenta a velocidade pelo Passo da velocidade definido em Comportamento (0,25x por padrão).",
  "No subtitle on screen to pick a word from.":
    "Nenhuma legenda na tela para escolher uma palavra.",
  "Turn on Look up words in subtitles under Dictionary & Anki to pick words.":
    "Ative Consultar palavras nas legendas em Dicionário & Anki para escolher palavras.",
  "Controller buttons go next to each key: press one, or hold LB, RB, LT or RT and press another for a combination. A shoulder or trigger used in a combination does its own job when you let go of it.":
    "Os botões do controle ficam ao lado de cada tecla: aperte um, ou segure LB, RB, LT ou RT e aperte outro para uma combinação. Um ombro ou gatilho usado numa combinação faz a função dele quando você o solta.",
  "To bind controller buttons, connect a controller and turn on controller support under Controllers.":
    "Para definir botões do controle, conecte um controle e ative o suporte a controles em Controles.",
  "Word lookup": "Consulta de palavras",
  "While picking a word in the subtitles with the Pick a word in the subtitles shortcut. These keys take over only then, so they can reuse the player's.":
    "Enquanto você escolhe uma palavra na legenda com o atalho Escolher uma palavra na legenda. Estas teclas só valem nesse momento, então podem repetir as do player.",
  "{key} is used for {action}.": "{key} já é usado para {action}.",
  "Remove {key} from {name}": "Remover {key} de {name}",
  "Use it here": "Usar aqui",
  "Press a button…": "Aperte um botão…",
  "Add a controller button for {name}": "Adicionar um botão do controle para {name}",
  "Pick a word in the subtitles": "Escolher uma palavra na legenda",
  "Pause and select the first word of the subtitle to look it up without the mouse. Move between words with the Word lookup keys; press again to leave.":
    "Pausa e seleciona a primeira palavra da legenda para consultá-la sem o mouse. Ande entre as palavras com as teclas de Consulta de palavras; aperte de novo para sair.",
  "Next word": "Próxima palavra",
  "Select and look up the next word.": "Seleciona e consulta a próxima palavra.",
  "Previous word": "Palavra anterior",
  "Select and look up the previous word.": "Seleciona e consulta a palavra anterior.",
  "Line above": "Linha de cima",
  "Go to the first word of the subtitle line above.":
    "Vai para a primeira palavra da linha de cima da legenda.",
  "Line below": "Linha de baixo",
  "Go to the first word of the subtitle line below.":
    "Vai para a primeira palavra da linha de baixo da legenda.",
  "Add the selected word to Anki, like the Anki button in the popup.":
    "Adiciona a palavra selecionada ao Anki, como o botão Anki do popup.",
  "Generate AI explanation": "Gerar explicação por IA",
  "Generate the AI explanation of the word, or generate it again.":
    "Gera a explicação por IA da palavra, ou gera de novo.",
  "Play word audio": "Tocar áudio da palavra",
  "Play the word's local audio; press again for the next voice.":
    "Toca o áudio local da palavra; aperte de novo para a próxima voz.",
  "Scroll popup down": "Rolar o popup para baixo",
  "Scroll the definitions down. On a controller the right stick scrolls too.":
    "Rola as definições para baixo. No controle, o analógico direito também rola.",
  "Scroll popup up": "Rolar o popup para cima",
  "Scroll the definitions up.": "Rola as definições para cima.",
  "Leave word lookup": "Sair da consulta de palavras",
  Words: "Palavras",
  Popup: "Popup",
  "Show the popup": "Mostrar o popup",
  "Open or close the dictionary popup for the selected word. Moving to another word closes it.":
    "Abre ou fecha o popup do dicionário para a palavra selecionada. Ir para outra palavra o fecha.",
  "Clear the shortcut for {name}": "Limpar o atalho de {name}",
  "Clear the shortcut": "Limpar o atalho",
};

export default immersionHotkeys;
