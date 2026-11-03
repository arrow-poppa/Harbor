// Controller in the player: stick roles, pointer lookups and the PlayStation touchpad.
const controllerPlayer: Record<string, string> = {
  "Close the popup and resume playback if picking a word paused it. Also closes a popup opened with the mouse or the controller pointer.":
    "Ferme la fenêtre et reprend la lecture si le choix du mot l’avait mise en pause. Ferme aussi une fenêtre ouverte avec la souris ou le pointeur de la manette.",
  "Touchpad moves the cursor": "Le pavé tactile déplace le curseur",
  "DualSense or DualShock 4: slide a finger on the touchpad to move this cursor, only inside Harbor. When off, the touchpad is left to the system.":
    "DualSense / DualShock 4 : glissez un doigt sur le pavé tactile pour déplacer ce curseur, seulement dans Harbor. Désactivé, le pavé tactile reste au système.",
};

export default controllerPlayer;
