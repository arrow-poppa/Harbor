// Controller in the player: stick roles, pointer lookups and the PlayStation touchpad.
const controllerPlayer: Record<string, string> = {
  "Close the popup and resume playback if picking a word paused it. Also closes a popup opened with the mouse or the controller pointer.":
    "Đóng cửa sổ bật lên và phát tiếp nếu việc chọn từ đã tạm dừng video. Cũng đóng cửa sổ bật lên đã mở bằng chuột hoặc con trỏ tay cầm.",
  "Touchpad moves the cursor": "Bàn di chuột di chuyển con trỏ",
  "DualSense or DualShock 4: slide a finger on the touchpad to move this cursor, only inside Harbor. When off, the touchpad is left to the system.":
    "DualSense / DualShock 4: lướt ngón tay trên bàn di chuột để di chuyển con trỏ này, chỉ trong Harbor. Khi tắt, bàn di chuột để lại cho hệ thống.",
};

export default controllerPlayer;
