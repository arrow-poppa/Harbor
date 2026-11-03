// Controller in the player: stick roles, pointer lookups and the PlayStation touchpad.
const controllerPlayer: Record<string, string> = {
  "Close the popup and resume playback if picking a word paused it. Also closes a popup opened with the mouse or the controller pointer.":
    "Pencereyi kapatır ve kelime seçmek oynatmayı duraklattıysa devam ettirir. Fareyle veya kumanda işaretçisiyle açılan pencereyi de kapatır.",
  "Touchpad moves the cursor": "Dokunmatik yüzey imleci hareket ettirir",
  "DualSense or DualShock 4: slide a finger on the touchpad to move this cursor, only inside Harbor. When off, the touchpad is left to the system.":
    "DualSense / DualShock 4: bu imleci yalnızca Harbor içinde hareket ettirmek için dokunmatik yüzeyde parmağınızı kaydırın. Kapalıyken dokunmatik yüzey sisteme kalır.",
};

export default controllerPlayer;
