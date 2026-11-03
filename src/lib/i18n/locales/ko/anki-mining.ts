// Anki cards from the dictionary popup.
const ankiMining: Record<string, string> = {
  "Hover a word in the subtitles to look it up in your Yomitan dictionaries, hear it and add it to Anki. Uses Manatan's dictionary engine.":
    "자막의 단어에 마우스를 올리면 Yomitan 사전에서 찾아보고, 들어 보고, Anki에 추가할 수 있습니다. Manatan의 사전 엔진을 사용합니다.",
  "Open the popup for words no dictionary contains, with only the AI explanation, so they can still go to Anki.":
    "어느 사전에도 없는 단어도 AI 설명만으로 팝업을 열어 Anki에 보낼 수 있게 합니다.",
  "Connected to Anki": "Anki에 연결됨",
  Anki: "Anki",
  "Adds cards through AnkiConnect with the word, sentence, definitions, a screenshot, the sentence audio and the word audio. Anki must be open with the AnkiConnect add-on.":
    "AnkiConnect로 단어, 문장, 정의, 스크린샷, 문장 오디오, 단어 오디오가 담긴 카드를 추가합니다. AnkiConnect 애드온과 함께 Anki가 열려 있어야 합니다.",
  "AnkiConnect address": "AnkiConnect 주소",
  Deck: "덱",
  "Choose…": "선택…",
  "Connect first": "먼저 연결하세요",
  "Note type": "노트 유형",
  Fields: "필드",
  "Auto-fill": "자동 채우기",
  "Separated by spaces.": "공백으로 구분합니다.",
  "Sentence audio padding": "문장 오디오 여백",
  "Seconds added before and after the subtitle line.": "자막 줄 앞뒤에 더하는 초입니다.",
  "Animated clip format": "애니메이션 클립 형식",
  "For fields set to the animated clip. AVIF is smallest; WebP and GIF play in older Anki versions. Falls back to WebP, then GIF, if an encoder is missing.":
    "애니메이션 클립으로 설정한 필드용입니다. AVIF가 가장 작고, WebP와 GIF는 이전 Anki에서도 재생됩니다. 인코더가 없으면 WebP, 그다음 GIF로 바꿉니다.",
  "Animated clip size": "애니메이션 클립 크기",
  "Width in pixels and frames per second. Clips stop after 12 seconds.":
    "픽셀 단위 너비와 초당 프레임. 클립은 12초 후에 멈춥니다.",
  "Allow duplicate cards": "중복 카드 허용",
  "When off, words already in the deck are refused.": "끄면 덱에 이미 있는 단어는 거부됩니다.",
  "Subtitle dictionary lookups, word audio and Anki mining run in the Harbor desktop app.":
    "자막 사전 찾기, 단어 오디오, Anki 마이닝은 Harbor 데스크톱 앱에서 작동합니다.",
  Word: "단어",
  "Word with furigana": "후리가나가 있는 단어",
  "Definitions (all)": "정의(전체)",
  "Definition (first dictionary)": "정의(첫 번째 사전)",
  Sentence: "문장",
  "Sentence (word in bold)": "문장(단어 굵게)",
  "Sentence (word as cloze)": "문장(단어를 빈칸으로)",
  "Sentence audio": "문장 오디오",
  "Animated clip of the line (AVIF/WebP/GIF)": "줄의 애니메이션 클립(AVIF/WebP/GIF)",
  Frequency: "빈도",
  "Pitch accent": "고저 악센트",
  "Title / episode": "제목 / 에피소드",
  "Text selected in the popup (else first definition)": "팝업에서 선택한 텍스트(없으면 첫 정의)",
  "Add to Anki": "Anki에 추가",
  "Dictionary & Anki": "사전 및 Anki",
  "Look up words in subtitles with your Yomitan dictionaries, hear them, get AI explanations and turn them into Anki cards.":
    "자막의 단어를 Yomitan 사전에서 찾아보고, 들어 보고, AI 설명을 받고, Anki 카드로 만드세요.",
  "Cards of the word": "단어의 카드",
  "The Anki button shows how many notes the word already has. All decks also finds notes from other decks and note types, such as cards made with Yomitan, with a field that is exactly the word.":
    "Anki 버튼에 단어의 노트가 이미 몇 개 있는지 표시합니다. 모든 덱은 Yomitan으로 만든 카드처럼 다른 덱과 노트 유형에서 필드가 단어와 정확히 같은 노트도 찾습니다.",
  "This deck": "이 덱",
  "This deck and all decks": "이 덱과 모든 덱",
};

export default ankiMining;
