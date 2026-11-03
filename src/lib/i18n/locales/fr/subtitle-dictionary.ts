// Subtitle dictionary: word lookups in the subtitles and word audio.
const subtitleDictionary: Record<string, string> = {
  "Subtitle dictionary": "Dictionnaire des sous-titres",
  "Look up words in subtitles": "Chercher les mots dans les sous-titres",
  "Works with Harbor's subtitles and with styled (ASS) subtitles drawn by mpv. Image subtitles (PGS) have no text to look up.":
    "Fonctionne avec les sous-titres de Harbor et avec les sous-titres stylés (ASS) affichés par mpv. Les sous-titres image (PGS) n’ont pas de texte à chercher.",
  "Pause while the popup is open": "Mettre en pause tant que la fenêtre est ouverte",
  "Resumes when the popup closes.": "Reprend à la fermeture de la fenêtre.",
  "Keep the popup open when the mouse leaves": "Garder la fenêtre ouverte quand la souris s’en va",
  "The popup (and the pause) stays until you click outside it or press Escape.":
    "La fenêtre (et la pause) reste jusqu’à un clic à l’extérieur ou un appui sur Échap.",
  "Look up with": "Chercher avec",
  "Hover looks words up as the mouse passes over them. With a key, hold it while hovering (or press it on a word) and plain hovering does nothing. Clicking a word always looks it up.":
    "Le survol cherche les mots au passage de la souris. Avec une touche, maintenez-la pendant le survol (ou appuyez dessus sur un mot) et le simple survol ne fait rien. Cliquer sur un mot le cherche toujours.",
  Hover: "Survol",
  "Hold Shift": "Maintenir Maj",
  "Hold Ctrl": "Maintenir Ctrl",
  "Hold Alt": "Maintenir Alt",
  "Scan delay (in milliseconds)": "Délai de recherche (en millisecondes)",
  "Wait before looking up the word under the mouse when no key is required. Lower is faster; higher avoids lookups while the mouse just passes over the subtitle.":
    "Attente avant de chercher le mot sous la souris quand aucune touche n’est requise. Plus bas est plus rapide ; plus haut évite les recherches quand la souris ne fait que passer sur le sous-titre.",
  "Keep subtitles above the seek bar": "Garder les sous-titres au-dessus de la barre de lecture",
  "The seek bar covers the lowest subtitle line, so lift the subtitles above it while you look words up.":
    "La barre de lecture couvre la ligne la plus basse du sous-titre ; remontez donc les sous-titres au-dessus pendant que vous cherchez des mots.",
  "Same setting as Player → Subtitles.": "Même réglage que Lecteur → Sous-titres.",
  "Subtitle height": "Hauteur des sous-titres",
  "Distance from the bottom of the video.": "Distance depuis le bas de la vidéo.",
  "Subtitle language": "Langue des sous-titres",
  "Picks the deinflection rules used for lookups.":
    "Choisit les règles de déflexion utilisées pour les recherches.",
  "Loading dictionaries…": "Chargement des dictionnaires…",
  "No dictionaries yet. Import Yomitan .zip files such as JMdict or Jitendex.":
    "Aucun dictionnaire pour l’instant. Importez des fichiers .zip Yomitan comme JMdict ou Jitendex.",
  "Importing {name}…": "Importation de {name}…",
  "Import dictionary (.zip)": "Importer un dictionnaire (.zip)",
  "Word audio": "Audio du mot",
  "No database selected": "Aucune base sélectionnée",
  "Choose database": "Choisir la base",
  "(empty)": "(vide)",
  "Download the desktop app to look up words while you watch.":
    "Téléchargez l’application de bureau pour chercher des mots pendant que vous regardez.",
  Greek: "Grec",
  Latin: "Latin",
  Controller: "Manette",
  Dictionary: "Dictionnaire",
  "Hover a word in the subtitles to look it up in your Yomitan dictionaries and hear it. Uses Manatan's dictionary engine.":
    "Survolez un mot des sous-titres pour le chercher dans vos dictionnaires Yomitan et l’écouter. Utilise le moteur de dictionnaire de Manatan.",
  "Plays pronunciations from a local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Lit des prononciations depuis une base local-audio-yomichan (Forvo, NHK16, Shinmeikai8, JPod101). Choisissez android.db, ou entries.db à côté de ses dossiers *_files. La version Flatpak ne peut lire que android.db.",
  "Subtitle dictionary lookups and word audio run in the Harbor desktop app.":
    "La recherche dans le dictionnaire des sous-titres et l’audio des mots fonctionnent dans l’application de bureau Harbor.",
};

export default subtitleDictionary;
