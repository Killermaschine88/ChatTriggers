import Settings from "../data/Settings";
import * as Const from "../utils/constants";

register("chat", (message, event) => {
  //Filter Unwanted Phrases Filter
  if (Settings.phraseFilter) {
    console.log(`msg: ${message}, word: ${word}, list: ${lists.toString()}`)
    lists.wordFilter.forEach((word) => {
      if (message.toLowerCase().includes(word.toLowerCase())) {
        cancel(event);
      }
    });
  }

  //Vanquisher Message
  if (Settings.vanquisherMessage && message.includes("A Vanquisher is spawning")) {
    ChatLib.command(`pc Vanquisher spawning at: X: ${Player.getX().toFixed(2)} Y: ${Player.getY().toFixed(2)} Z: ${Player.getZ().toFixed(2)}`);
  }

  //Auto Waypoint Pickup
  if (Settings.autoPickupWaypoints && !message.includes("!")) {
    const matches = message.match(/X: (-?\d*\.\d*) Y: (-?\d*\.\d*) Z: (-?\d*\.\d*)/);
    let x = matches[1];
    let y = matches[2];
    let z = matches[3];
    waypoints.push({ x: x, y: y, z: z });
    ChatLib.chat(`${Const.prefix} Added a Waypoint at X: ${x}, Y: ${y}, Z: ${z}!`)
  }
}).setCriteria("${message}");
