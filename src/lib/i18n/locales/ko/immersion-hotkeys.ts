// Immersion hotkeys, picking words in the subtitles and controller buttons in the hotkey list.
const immersionHotkeys: Record<string, string> = {
  "audio card": "오디오 카드",
  "last card": "마지막 카드",
  "new card": "새 카드",
  "Still adding the previous card…": "이전 카드를 아직 추가하는 중…",
  "Updated card in {deck}": "{deck}의 카드를 업데이트했습니다",
  "Added to {deck}": "{deck}에 추가했습니다",
  "{n}s recorded": "{n}초 녹음됨",
  "Recording → {target}. Press again to stop.": "녹음 중 → {target}. 다시 누르면 멈춥니다.",
  "the video went back since the recording started": "녹음이 시작된 뒤 영상이 뒤로 이동했습니다",
  "too short": "너무 짧음",
  "longer than the {n}s limit": "{n}초 제한보다 김",
  "Recording discarded: {reason}": "녹음을 버렸습니다: {reason}",
  "Stopped · {n}s recorded · adding card…": "멈춤 · {n}초 녹음됨 · 카드 추가 중…",
  "Anki cards from the player need the mpv player in the desktop app.":
    "플레이어에서 Anki 카드를 만들려면 데스크톱 앱의 mpv 플레이어가 필요합니다.",
  "No subtitle on screen. Use a Record shortcut for parts without subtitles.":
    "화면에 자막이 없습니다. 자막 없는 구간에는 녹음 단축키를 사용하세요.",
  Immersion: "몰입",
  "Cards straight from the player, without looking a word up: from the subtitle on screen, or from a stretch you record with two presses of the same key (works without subtitles). Set the keys in Settings → Hotkeys → Immersion. mpv only.":
    "단어를 찾지 않고 플레이어에서 바로 카드를 만듭니다. 화면의 자막에서, 또는 같은 키를 두 번 눌러 녹음한 구간에서 만들 수 있습니다(자막 없이도 가능). 키는 설정 → 단축키 → 몰입에서 정하세요. mpv 전용.",
  "Sentence cards": "문장 카드",
  "Pick a deck and note type above": "위에서 덱과 노트 유형을 고르세요",
  "Map a field to Sentence audio above": "위에서 필드를 문장 오디오에 연결하세요",
  "Audio cards": "오디오 카드",
  "Audio card deck": "오디오 카드 덱",
  "Audio card note type": "오디오 카드 노트 유형",
  "Audio field": "오디오 필드",
  "Gets the audio of the line or of the recording.": "줄이나 녹음의 오디오가 들어갑니다.",
  "Pick a note type first": "먼저 노트 유형을 고르세요",
  "Sentence field (optional)": "문장 필드(선택)",
  "Gets the subtitle text, when there is one.": "자막이 있으면 그 텍스트가 들어갑니다.",
  "Update last card window": "마지막 카드 업데이트 기간",
  "Update last card only touches a card added this many minutes ago or less.":
    "마지막 카드 업데이트는 이 분 이내에 추가된 카드만 바꿉니다.",
  "Longest recording": "최대 녹음 길이",
  "A recording longer than this is discarded. Animated clips still stop after 12 seconds.":
    "이보다 긴 녹음은 버립니다. 애니메이션 클립은 여전히 12초 후에 멈춥니다.",
  "Hide every subtitle (primary and secondary), or show the primary again. Hidden subtitles still work for line seeking, replay and Anki cards.":
    "모든 자막(기본 및 보조)을 숨기거나 기본 자막을 다시 표시합니다. 숨겨도 줄 이동, 다시 재생, Anki 카드에는 계속 쓰입니다.",
  "Anki: card from the subtitle": "Anki: 자막에서 카드",
  "Anki: update last card": "Anki: 마지막 카드 업데이트",
  "Anki: audio card": "Anki: 오디오 카드",
  "Add an audio-only card from the line on screen, using the audio card deck. mpv only.":
    "화면의 줄로 오디오만 담긴 카드를 오디오 카드 덱에 추가합니다. mpv 전용.",
  "Record → new card": "녹음 → 새 카드",
  "Record → update last card": "녹음 → 마지막 카드 업데이트",
  "Record → audio card": "녹음 → 오디오 카드",
  "Press once to start recording, again to stop and add an audio card with that stretch. Works without subtitles. mpv only.":
    "한 번 누르면 녹음을 시작하고, 다시 누르면 멈추고 그 구간으로 오디오 카드를 추가합니다. 자막 없이도 됩니다. mpv 전용.",
  "Card from the subtitle, Update last card and the Record → card keys use the deck, note type and fields of the Anki section above. With a word selected in the subtitles (highlighted while picking a word, or in an open popup) every mapped field is filled, word and definitions included; without one only the sentence, sentence audio, screenshot or clip and title fields are.":
    "자막에서 카드, 마지막 카드 업데이트, 녹음 → 카드 키는 위 Anki 섹션의 덱, 노트 유형, 필드를 사용합니다. 자막에서 단어를 선택했을 때(단어 고르기에서 강조되었거나 열린 팝업에 표시된 단어) 단어와 정의를 포함한 모든 연결된 필드를 채우고, 선택하지 않았을 때는 문장, 문장 오디오, 스크린샷 또는 클립, 제목만 채웁니다.",
  "Add a card from the line on screen with its sentence, audio and picture, using the deck and fields under Dictionary & Anki. With a word selected in the subtitles, the word and its definitions go on the card too. mpv only.":
    "화면의 줄로 문장, 오디오, 이미지가 담긴 카드를 사전 및 Anki의 덱과 필드로 추가합니다. 자막에서 단어를 선택했다면 단어와 정의도 카드에 들어갑니다. mpv 전용.",
  "Put the line on screen (sentence, audio, picture) into the newest card of the deck, if it was added in the last few minutes. With a word selected, the word and its definitions too. mpv only.":
    "화면의 줄(문장, 오디오, 이미지)을 몇 분 안에 추가된 덱의 최신 카드에 넣습니다. 단어를 선택했다면 단어와 정의도 넣습니다. mpv 전용.",
  "Press once to start recording, again to stop and add a card with that stretch. Works without subtitles. With a word selected when you stop, the word and its definitions go on the card too. mpv only.":
    "한 번 누르면 녹음을 시작하고, 다시 누르면 멈추고 그 구간으로 카드를 추가합니다. 자막 없이도 됩니다. 멈출 때 단어를 선택했다면 단어와 정의도 카드에 들어갑니다. mpv 전용.",
  "Press once to start recording, again to stop and put that stretch into the newest card. Works without subtitles. With a word selected when you stop, the word and its definitions too. mpv only.":
    "한 번 누르면 녹음을 시작하고, 다시 누르면 멈추고 그 구간을 최신 카드에 넣습니다. 자막 없이도 됩니다. 멈출 때 단어를 선택했다면 단어와 정의도 넣습니다. mpv 전용.",
  "Added {word} to {deck}": "{word}을(를) {deck}에 추가했습니다",
  "Updated card in {deck} with {word}": "{deck}의 카드를 {word}(으)로 업데이트했습니다",
  "Bigger dictionary popup": "사전 팝업 크게",
  "Make the subtitle dictionary popup 10% bigger. Saved as the Popup size setting.":
    "자막 사전 팝업을 10% 크게 합니다. 팝업 크기 설정에 저장됩니다.",
  "Smaller dictionary popup": "사전 팝업 작게",
  "Make the subtitle dictionary popup 10% smaller. Saved as the Popup size setting.":
    "자막 사전 팝업을 10% 작게 합니다. 팝업 크기 설정에 저장됩니다.",
  "Dictionary popup size: {n}%": "사전 팝업 크기: {n}%",
  "Popup size": "팝업 크기",
  "Scales the whole popup: text, buttons and width. Bigger sizes help on a TV. The Bigger/Smaller dictionary popup hotkeys change it too.":
    "팝업 전체(글자, 버튼, 너비)의 크기를 조절합니다. TV에서는 크게 하면 보기 좋습니다. 사전 팝업 크게/작게 단축키로도 바꿀 수 있습니다.",
  "No subtitle on screen to pick a word from.": "단어를 고를 자막이 화면에 없습니다.",
  "Turn on Look up words in subtitles under Dictionary & Anki to pick words.":
    "단어를 고르려면 사전 및 Anki에서 자막에서 단어 찾기를 켜세요.",
  "Word lookup": "단어 찾기",
  "While picking a word in the subtitles with the Pick a word in the subtitles shortcut. These keys take over only then, so they can reuse the player's.":
    "자막에서 단어 고르기 단축키로 자막의 단어를 고르는 동안에만 쓰는 키입니다. 그래서 플레이어 키와 겹쳐도 됩니다.",
  "Pick a word in the subtitles": "자막에서 단어 고르기",
  "Pause and select the first word of the subtitle to look it up without the mouse. Move between words with the Word lookup keys; press again to leave.":
    "일시정지하고 자막의 첫 단어를 선택해 마우스 없이 찾을 수 있게 합니다. 단어 찾기 키로 단어 사이를 이동하고, 다시 누르면 나갑니다.",
  "Next word": "다음 단어",
  "Select and look up the next word.": "다음 단어를 선택해 찾습니다.",
  "Previous word": "이전 단어",
  "Select and look up the previous word.": "이전 단어를 선택해 찾습니다.",
  "Line above": "윗줄",
  "Go to the first word of the subtitle line above.": "위 자막 줄의 첫 단어로 이동합니다.",
  "Line below": "아랫줄",
  "Go to the first word of the subtitle line below.": "아래 자막 줄의 첫 단어로 이동합니다.",
  "Add the selected word to Anki, like the Anki button in the popup.":
    "선택한 단어를 팝업의 Anki 버튼처럼 Anki에 추가합니다.",
  "Generate AI explanation": "AI 설명 생성",
  "Generate the AI explanation of the word, or generate it again.":
    "단어의 AI 설명을 생성하거나 다시 생성합니다.",
  "Play word audio": "단어 오디오 재생",
  "Play the word's local audio; press again for the next voice.":
    "단어의 로컬 오디오를 재생합니다. 다시 누르면 다음 음성입니다.",
  "Scroll popup down": "팝업 아래로 스크롤",
  "Scroll the definitions down. On a controller the right stick scrolls too.":
    "정의를 아래로 스크롤합니다. 컨트롤러에서는 오른쪽 스틱으로도 스크롤합니다.",
  "Scroll popup up": "팝업 위로 스크롤",
  "Scroll the definitions up.": "정의를 위로 스크롤합니다.",
  "Leave word lookup": "단어 찾기 끝내기",
  "Enter and leave": "시작과 종료",
  Words: "단어",
  Popup: "팝업",
  "Show the popup": "팝업 표시",
  "Open or close the dictionary popup for the selected word. Moving to another word closes it.":
    "선택한 단어의 사전 팝업을 열거나 닫습니다. 다른 단어로 이동하면 닫힙니다.",
};

export default immersionHotkeys;
