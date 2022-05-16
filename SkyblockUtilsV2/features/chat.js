import Settings from "../data/Settings";
import * as Const from "../utils/constants";

register("chat", (message, event) => {
  //EZ Bypass
  if (Settings.ezBypass) {
    message.replace("ez", "e​z"); //Add a ZWS to bypass
  }

  //Filter Unwanted Phrases Filter
  if (Settings.phraseFilter) {
    JSON.parse(FileLib.read(Const.moduleName, `constants/filter.json`)).forEach((word) => {
      if (message.toLowerCase().includes(word.toLowerCase())) {
        cancel(event);
      }
    });
  }

  //Vanquisher Message
  if (Settings.vanquisherMessage && message.includes("A Vanquisher is spawning")) {
    ChatLib.command(`${Settings.vanquisherMessageChat === 1 ? "pc" : "ac"} Vanquisher spawning at: X: ${Player.getX().toFixed(2)} Y: ${Player.getY().toFixed(2)} Z: ${Player.getZ().toFixed(2)}`);
  }

  //Auto Waypoint Pickup
  if (Settings.autoDetectWaypoints && !message.includes("!")) {
    const matches = message.match(/X: (-?\d*\.?\d*?) Y: (-?\d*\.?\d*?) Z: (-?\d*\.?\d*?)/);

    if (!matches[0] || !matches[1] || !matches[2] || !matches[3]) return;

    let x = matches[1],
      y = matches[2],
      z = matches[3];

    if (!x || !y || !z) return;

    waypoints.push({x: x, y: y, z: z});
    ChatLib.chat(`${Const.prefix} Added a Waypoint at X: ${x}, Y: ${y}, Z: ${z}!`);
  }
}).setCriteria("${message}");
