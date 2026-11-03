// Controller in the player: stick roles, pointer lookups and the PlayStation touchpad.
const controllerPlayer: Record<string, string> = {
  "Close the popup and resume playback if picking a word paused it. Also closes a popup opened with the mouse or the controller pointer.":
    "Chiude il popup e riprende la riproduzione se la scelta della parola l’aveva messa in pausa. Chiude anche un popup aperto con il mouse o con il puntatore del controller.",
  "Touchpad moves the cursor": "Il touchpad muove il cursore",
  "DualSense or DualShock 4: slide a finger on the touchpad to move this cursor, only inside Harbor. When off, the touchpad is left to the system.":
    "DualSense / DualShock 4: scorri un dito sul touchpad per muovere questo cursore, solo dentro Harbor. Se disattivato, il touchpad resta al sistema.",
};

export default controllerPlayer;
