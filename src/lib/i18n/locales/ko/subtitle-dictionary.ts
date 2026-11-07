// Subtitle dictionary: word lookups in the subtitles and word audio.
const subtitleDictionary: Record<string, string> = {
  "Subtitle dictionary": "자막 사전",
  "Look up words in subtitles": "자막에서 단어 찾기",
  "Works with Harbor's subtitles and with styled (ASS) subtitles drawn by mpv. Image subtitles (PGS) have no text to look up.":
    "Harbor 자막과 mpv가 그리는 스타일 자막(ASS)에서 작동합니다. 이미지 자막(PGS)에는 찾을 텍스트가 없습니다.",
  "Pause while the popup is open": "팝업이 열려 있는 동안 일시정지",
  "Resumes when the popup closes.": "팝업이 닫히면 다시 재생합니다.",
  "Keep the popup open when the mouse leaves": "마우스가 벗어나도 팝업 유지",
  "The popup (and the pause) stays until you click outside it or press Escape.":
    "팝업(과 일시정지)은 바깥을 클릭하거나 Escape를 누를 때까지 유지됩니다.",
  "Look up with": "찾기 방식",
  "Hover looks words up as the mouse passes over them. With a key, hold it while hovering (or press it on a word) and plain hovering does nothing. Clicking a word always looks it up.":
    "마우스 올리기는 마우스가 지나가는 단어를 찾습니다. 키를 쓰면 마우스를 올린 채 키를 누르고 있어야 하며(또는 단어 위에서 누르기), 그냥 올리기만 해서는 아무 일도 일어나지 않습니다. 단어를 클릭하면 항상 찾습니다.",
  Hover: "마우스 올리기",
  "Hold Shift": "Shift 누르기",
  "Hold Ctrl": "Ctrl 누르기",
  "Hold Alt": "Alt 누르기",
  "Scan delay (in milliseconds)": "찾기 지연(밀리초)",
  "Wait before looking up the word under the mouse when no key is required. Lower is faster; higher avoids lookups while the mouse just passes over the subtitle.":
    "키가 필요 없을 때 마우스 아래 단어를 찾기 전 기다리는 시간입니다. 낮을수록 빠르고, 높을수록 마우스가 자막 위를 지나가기만 할 때 찾지 않습니다.",
  "Same setting as Player → Subtitles.": "플레이어 → 자막과 같은 설정입니다.",
  "Subtitle height": "자막 높이",
  "Distance from the bottom of the video.": "영상 아래쪽에서의 거리입니다.",
  "Subtitle language": "자막 언어",
  "Picks the deinflection rules used for lookups.": "찾기에 쓰는 활용 해제 규칙을 고릅니다.",
  "Loading dictionaries…": "사전을 불러오는 중…",
  "No dictionaries yet. Import Yomitan .zip files such as JMdict or Jitendex.":
    "아직 사전이 없습니다. JMdict나 Jitendex 같은 Yomitan .zip 파일을 가져오세요.",
  "Importing {name}…": "{name} 가져오는 중…",
  "Import dictionary (.zip)": "사전 가져오기(.zip)",
  "Word audio": "단어 오디오",
  "No database selected": "선택한 데이터베이스 없음",
  "Choose database": "데이터베이스 선택",
  "(empty)": "(비어 있음)",
  "Download the desktop app to look up words while you watch.":
    "보면서 단어를 찾으려면 데스크톱 앱을 내려받으세요.",
  Greek: "그리스어",
  Latin: "라틴어",
  Controller: "컨트롤러",
  Dictionary: "사전",
};

export default subtitleDictionary;
