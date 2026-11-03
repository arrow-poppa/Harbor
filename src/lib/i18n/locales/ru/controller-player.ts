// Controller in the player: stick roles, pointer lookups and the PlayStation touchpad.
const controllerPlayer: Record<string, string> = {
  "Close the popup and resume playback if picking a word paused it. Also closes a popup opened with the mouse or the controller pointer.":
    "Закрывает окно и продолжает воспроизведение, если выбор слова его приостановил. Также закрывает окно, открытое мышью или указателем контроллера.",
  "Touchpad moves the cursor": "Тачпад двигает курсор",
  "DualSense or DualShock 4: slide a finger on the touchpad to move this cursor, only inside Harbor. When off, the touchpad is left to the system.":
    "DualSense / DualShock 4: проведите пальцем по тачпаду, чтобы двигать этот курсор, только внутри Harbor. Когда выключено, тачпад остаётся системе.",
};

export default controllerPlayer;
