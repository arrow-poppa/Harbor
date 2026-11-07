// Subtitle dictionary: word lookups in the subtitles and word audio.
const subtitleDictionary: Record<string, string> = {
  "Subtitle dictionary": "Dicionário de legendas",
  "Look up words in subtitles": "Consultar palavras nas legendas",
  "Works with Harbor's subtitles and with styled (ASS) subtitles drawn by mpv. Image subtitles (PGS) have no text to look up.":
    "Funciona com as legendas do Harbor e com legendas estilizadas (ASS) desenhadas pelo mpv. Legendas de imagem (PGS) não têm texto para consultar.",
  "Pause while the popup is open": "Pausar enquanto o popup estiver aberto",
  "Resumes when the popup closes.": "Retoma quando o popup fecha.",
  "Keep the popup open when the mouse leaves": "Manter o popup aberto quando o mouse sair",
  "The popup (and the pause) stays until you click outside it or press Escape.":
    "O popup (e a pausa) continua até você clicar fora dele ou apertar Esc.",
  "Look up with": "Consultar com",
  "Hover looks words up as the mouse passes over them. With a key, hold it while hovering (or press it on a word) and plain hovering does nothing. Clicking a word always looks it up.":
    "Passar o mouse consulta as palavras conforme ele passa por elas. Com uma tecla, segure-a enquanto passa o mouse (ou aperte-a sobre uma palavra) e só passar o mouse não faz nada. Clicar numa palavra sempre a consulta.",
  Hover: "Passar o mouse",
  "Hold Shift": "Segurar Shift",
  "Hold Ctrl": "Segurar Ctrl",
  "Hold Alt": "Segurar Alt",
  "Scan delay (in milliseconds)": "Atraso da busca (em milissegundos)",
  "Wait before looking up the word under the mouse when no key is required. Lower is faster; higher avoids lookups while the mouse just passes over the subtitle.":
    "Espera antes de consultar a palavra sob o mouse quando nenhuma tecla é exigida. Menor é mais rápido; maior evita consultas quando o mouse só passa pela legenda.",
  "Same setting as Player → Subtitles.": "Mesma configuração de Player → Legendas.",
  "Subtitle height": "Altura da legenda",
  "Distance from the bottom of the video.": "Distância da parte de baixo do vídeo.",
  "Subtitle language": "Idioma da legenda",
  "Picks the deinflection rules used for lookups.":
    "Escolhe as regras de deflexão usadas nas consultas.",
  "Loading dictionaries…": "Carregando dicionários…",
  "No dictionaries yet. Import Yomitan .zip files such as JMdict or Jitendex.":
    "Nenhum dicionário ainda. Importe arquivos .zip do Yomitan, como JMdict ou Jitendex.",
  "Importing {name}…": "Importando {name}…",
  "Import dictionary (.zip)": "Importar dicionário (.zip)",
  "Word audio": "Áudio da palavra",
  "No database selected": "Nenhum banco selecionado",
  "Choose database": "Escolher banco",
  "(empty)": "(vazio)",
  "Download the desktop app to look up words while you watch.":
    "Baixe o app para desktop para consultar palavras enquanto assiste.",
  Greek: "Grego",
  Latin: "Latim",
  Controller: "Controle",
  Dictionary: "Dicionário",
  "Detect from the subtitle track": "Detectar pela faixa de legenda",
  "Lookups and word audio use the selected subtitle's language when it has one; otherwise the language above.":
    "A consulta e o áudio da palavra usam o idioma da legenda escolhida quando ela informa um; senão, o idioma acima.",
};

export default subtitleDictionary;
