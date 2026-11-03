// Controller in the player: stick roles, pointer lookups and the PlayStation touchpad.
const controllerPlayer: Record<string, string> = {
  "Close the popup and resume playback if picking a word paused it. Also closes a popup opened with the mouse or the controller pointer.":
    "팝업을 닫고, 단어를 고르느라 일시정지했다면 재생을 다시 시작합니다. 마우스나 컨트롤러 포인터로 연 팝업도 닫습니다.",
  "Touchpad moves the cursor": "터치패드로 커서 이동",
  "DualSense or DualShock 4: slide a finger on the touchpad to move this cursor, only inside Harbor. When off, the touchpad is left to the system.":
    "DualSense / DualShock 4: 터치패드를 손가락으로 밀어 Harbor 안에서만 이 커서를 움직입니다. 끄면 터치패드는 시스템이 사용합니다.",
};

export default controllerPlayer;
