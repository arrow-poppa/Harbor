// Controller in the player: stick roles, pointer lookups and the PlayStation touchpad.
const controllerPlayer: Record<string, string> = {
  "Close the popup and resume playback if picking a word paused it. Also closes a popup opened with the mouse or the controller pointer.":
    "يغلق النافذة المنبثقة ويستأنف التشغيل إن كان اختيار الكلمة قد أوقفه مؤقتًا. يغلق أيضًا النافذة التي فُتحت بالفأرة أو بمؤشر وحدة التحكم.",
  "Touchpad moves the cursor": "لوحة اللمس تحرّك المؤشر",
  "DualSense or DualShock 4: slide a finger on the touchpad to move this cursor, only inside Harbor. When off, the touchpad is left to the system.":
    "DualSense / DualShock 4: مرّر إصبعك على لوحة اللمس لتحريك هذا المؤشر داخل Harbor فقط. عند الإيقاف تبقى لوحة اللمس للنظام.",
};

export default controllerPlayer;
