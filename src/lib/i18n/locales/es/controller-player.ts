// Controller in the player: stick roles, pointer lookups and the PlayStation touchpad.
const controllerPlayer: Record<string, string> = {
  "Close the popup and resume playback if picking a word paused it. Also closes a popup opened with the mouse or the controller pointer.":
    "Cierra la ventana emergente y reanuda la reproducción si elegir la palabra la pausó. También cierra una ventana abierta con el ratón o con el puntero del mando.",
  "Touchpad moves the cursor": "El panel táctil mueve el cursor",
  "DualSense or DualShock 4: slide a finger on the touchpad to move this cursor, only inside Harbor. When off, the touchpad is left to the system.":
    "DualSense / DualShock 4: desliza un dedo por el panel táctil para mover este cursor, solo dentro de Harbor. Si está desactivado, el panel táctil queda para el sistema.",
};

export default controllerPlayer;
