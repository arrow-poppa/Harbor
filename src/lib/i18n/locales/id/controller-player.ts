// Controller in the player: stick roles, pointer lookups and the PlayStation touchpad.
const controllerPlayer: Record<string, string> = {
  "Close the popup and resume playback if picking a word paused it. Also closes a popup opened with the mouse or the controller pointer.":
    "Menutup popup dan melanjutkan pemutaran jika memilih kata tadi menjedanya. Juga menutup popup yang dibuka dengan mouse atau penunjuk controller.",
  "Touchpad moves the cursor": "Touchpad menggerakkan kursor",
  "DualSense or DualShock 4: slide a finger on the touchpad to move this cursor, only inside Harbor. When off, the touchpad is left to the system.":
    "DualSense / DualShock 4: geser jari di touchpad untuk menggerakkan kursor ini, hanya di dalam Harbor. Saat mati, touchpad dibiarkan untuk sistem.",
};

export default controllerPlayer;
