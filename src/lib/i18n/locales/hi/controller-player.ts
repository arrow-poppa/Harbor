// Controller in the player: stick roles, pointer lookups and the PlayStation touchpad.
const controllerPlayer: Record<string, string> = {
  "Close the popup and resume playback if picking a word paused it. Also closes a popup opened with the mouse or the controller pointer.":
    "पॉपअप बंद करता है और अगर शब्द चुनने से वीडियो रुका था तो उसे फिर चलाता है. माउस या कंट्रोलर पॉइंटर से खुला पॉपअप भी बंद करता है.",
  "Touchpad moves the cursor": "टचपैड से कर्सर चलाएं",
  "DualSense or DualShock 4: slide a finger on the touchpad to move this cursor, only inside Harbor. When off, the touchpad is left to the system.":
    "DualSense / DualShock 4: टचपैड पर उंगली सरकाकर यह कर्सर चलाएं, सिर्फ Harbor के अंदर. बंद होने पर टचपैड सिस्टम के पास रहता है.",
};

export default controllerPlayer;
