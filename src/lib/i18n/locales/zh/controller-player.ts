// Controller in the player: stick roles, pointer lookups and the PlayStation touchpad.
const controllerPlayer: Record<string, string> = {
  "Close the popup and resume playback if picking a word paused it. Also closes a popup opened with the mouse or the controller pointer.":
    "关闭弹窗，如果选词时暂停了播放，则继续播放。也会关闭用鼠标或手柄指针打开的弹窗。",
  "Touchpad moves the cursor": "触控板移动光标",
  "DualSense or DualShock 4: slide a finger on the touchpad to move this cursor, only inside Harbor. When off, the touchpad is left to the system.":
    "DualSense / DualShock 4：在触控板上滑动手指即可移动此光标，仅在 Harbor 内。关闭时，触控板交还给系统。",
};

export default controllerPlayer;
