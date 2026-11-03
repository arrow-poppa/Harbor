// Word audio sources: recorded and synthesized voices for looked-up words.
const wordAudioSources: Record<string, string> = {
  "Plays the looked-up word and adds it to Anki cards. Sources are tried from top to bottom, and pressing the audio button again plays the next voice. Online sources send the word to their site.":
    "Toca a palavra consultada e a adiciona aos cartões do Anki. As fontes são tentadas de cima para baixo, e apertar o botão de áudio de novo toca a próxima voz. As fontes online enviam a palavra para o site delas.",
  "Local audio database": "Banco de áudio local",
  "Custom URL": "URL personalizada",
  "Custom URL (JSON)": "URL personalizada (JSON)",
  "Automatic picks a voice for the lookup language.":
    '"Automático" escolhe uma voz do idioma da consulta.',
  "The reading (kana), when there is one": "A leitura (kana), quando houver",
  "The word as written": "A palavra como está escrita",
  URL: "URL",
  "A local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.":
    "Um banco local-audio-yomichan (Forvo, NHK16, Shinmeikai8, JPod101). Escolha o android.db, ou o entries.db ao lado das pastas *_files. A versão Flatpak só lê o android.db.",
  "Recorded Japanese words from JapanesePod101.":
    "Palavras em japonês gravadas, do JapanesePod101.",
  "Recorded words from the LanguagePod101 sites, in about 35 languages.":
    "Palavras gravadas dos sites LanguagePod101, em cerca de 35 idiomas.",
  "Recorded Japanese words from Jisho.org.": "Palavras em japonês gravadas, do Jisho.org.",
  "Recordings shared on Wikimedia Commons by Lingua Libre speakers.":
    "Gravações compartilhadas no Wikimedia Commons por falantes do Lingua Libre.",
  "Wiktionary recordings on Wikimedia Commons.": "Gravações do Wikcionário no Wikimedia Commons.",
  "Microsoft Edge's online neural voices, the same ones the eBook narration uses.":
    "As vozes neurais online do Microsoft Edge, as mesmas da narração de eBooks.",
  "An audio file at your own URL. {term}, {reading} and {language} are filled in.":
    "Um arquivo de áudio na sua própria URL. {term}, {reading} e {language} são preenchidos.",
  "A URL that answers with a list of audio files, such as a local audio server. {term}, {reading} and {language} are filled in.":
    "Uma URL que responde com uma lista de arquivos de áudio, como um servidor de áudio local. {term}, {reading} e {language} são preenchidos.",
};

export default wordAudioSources;
