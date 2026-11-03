// Controller in the player: stick roles, pointer lookups and the PlayStation touchpad.
const controllerPlayer: Record<string, string> = {
  "Close the popup and resume playback if picking a word paused it. Also closes a popup opened with the mouse or the controller pointer.":
    "Schließt das Popup und setzt die Wiedergabe fort, falls das Wählen sie pausiert hat. Schließt auch ein Popup, das mit der Maus oder dem Controller-Zeiger geöffnet wurde.",
  "Touchpad moves the cursor": "Touchpad bewegt den Zeiger",
  "DualSense or DualShock 4: slide a finger on the touchpad to move this cursor, only inside Harbor. When off, the touchpad is left to the system.":
    "DualSense / DualShock 4: Wische über das Touchpad, um diesen Zeiger zu bewegen, nur in Harbor. Aus bleibt das Touchpad beim System.",
};

export default controllerPlayer;
