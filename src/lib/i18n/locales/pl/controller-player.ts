// Controller in the player: stick roles, pointer lookups and the PlayStation touchpad.
const controllerPlayer: Record<string, string> = {
  "Close the popup and resume playback if picking a word paused it. Also closes a popup opened with the mouse or the controller pointer.":
    "Zamyka okienko i wznawia odtwarzanie, jeśli wybieranie słowa je wstrzymało. Zamyka też okienko otwarte myszą lub wskaźnikiem kontrolera.",
  "Touchpad moves the cursor": "Touchpad porusza kursorem",
  "DualSense or DualShock 4: slide a finger on the touchpad to move this cursor, only inside Harbor. When off, the touchpad is left to the system.":
    "DualSense / DualShock 4: przesuń palcem po touchpadzie, aby poruszać tym kursorem, tylko w Harbor. Po wyłączeniu touchpad zostaje dla systemu.",
};

export default controllerPlayer;
