// Word audio sources: recorded and synthesized voices for looked-up words.
const wordAudioSources: Record<string, string> = {
  "Plays the looked-up word and adds it to Anki cards. Sources are tried from top to bottom, and pressing the audio button again plays the next voice. Online sources send the word to their site.":
    "Lit le mot recherché et l’ajoute aux cartes Anki. Les sources sont essayées de haut en bas, et un nouvel appui sur le bouton audio lit la voix suivante. Les sources en ligne envoient le mot à leur site.",
  "Local audio database": "Base audio locale",
  "Custom URL": "URL personnalisée",
  "Custom URL (JSON)": "URL personnalisée (JSON)",
  "Automatic picks a voice for the lookup language.":
    "« Automatique » choisit une voix pour la langue de recherche.",
  "The reading (kana), when there is one": "La lecture (kana), s’il y en a une",
  "The word as written": "Le mot tel qu’il s’écrit",
  URL: "URL",
  "A local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Une base local-audio-yomichan (Forvo, NHK16, Shinmeikai8, JPod101). Choisissez android.db, ou entries.db à côté de ses dossiers *_files. La version Flatpak ne peut lire que android.db.",
  "Recorded Japanese words from JapanesePod101.": "Mots japonais enregistrés de JapanesePod101.",
  "Recorded words from the LanguagePod101 sites, in about 35 languages.":
    "Mots enregistrés des sites LanguagePod101, dans environ 35 langues.",
  "Recorded Japanese words from Jisho.org.": "Mots japonais enregistrés de Jisho.org.",
  "Recordings shared on Wikimedia Commons by Lingua Libre speakers.":
    "Enregistrements partagés sur Wikimedia Commons par les locuteurs de Lingua Libre.",
  "Wiktionary recordings on Wikimedia Commons.":
    "Enregistrements du Wiktionnaire sur Wikimedia Commons.",
  "Microsoft Edge's online neural voices, the same ones the eBook narration uses.":
    "Les voix neuronales en ligne de Microsoft Edge, les mêmes que la narration des eBooks.",
  "An audio file at your own URL. {term}, {reading} and {language} are filled in.":
    "Un fichier audio à votre propre URL. {term}, {reading} et {language} sont remplis.",
  "A URL that answers with a list of audio files, such as a local audio server. {term}, {reading} and {language} are filled in.":
    "Une URL qui répond par une liste de fichiers audio, comme un serveur audio local. {term}, {reading} et {language} sont remplis.",
  "Only when no other source has audio": "Seulement si aucune autre source n’a d’audio",
  "Synthesized speech is used only if no recorded voice is found for the word.":
    "La voix de synthèse n’est utilisée que si aucun enregistrement du mot n’est trouvé.",
};

export default wordAudioSources;
