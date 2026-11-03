// Controller in the player: stick roles, pointer lookups and the PlayStation touchpad.
const controllerPlayer: Record<string, string> = {
  "Close the popup and resume playback if picking a word paused it. Also closes a popup opened with the mouse or the controller pointer.":
    "ポップアップを閉じ、単語を選ぶために一時停止していた場合は再生を再開します。 マウスやコントローラーのポインターで開いたポップアップも閉じます。",
  "Touchpad moves the cursor": "タッチパッドでカーソルを動かす",
  "DualSense or DualShock 4: slide a finger on the touchpad to move this cursor, only inside Harbor. When off, the touchpad is left to the system.":
    "DualSense / DualShock 4: タッチパッドを指でなぞると、Harbor の中だけでこのカーソルが動きます。オフにするとタッチパッドはシステムに任せます。",
};

export default controllerPlayer;
