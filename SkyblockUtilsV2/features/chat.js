import Settings from "../data/Settings";

register("chat", (message, event) => {
  //Filter Unwanted Phrases Filter
  if (Settings.phraseFilter) {
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
  if (Settings.autoPickupWaypoints) {
  const matches = message.match(/X: (-?\d*\.\d*) Y: (-?\d*\.\d*) Z: (-?\d*\.\d*)/)
    let x = matches[0]
    let y = matches[1]
    let z = matches[2]
    waypoints.push({x: x, y: y, z: z})
  }
}).setCriteria("${message}");
