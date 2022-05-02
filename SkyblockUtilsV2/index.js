import Settings from "./data/Settings";

import * as Const from "./utils/constants";

import * as FileUtils from "./utils/fileUtils";

import debug from "./features/Debug";

let lists = FileUtils.getLists();

//Waypoints
let waypoints = [];

register("renderWorld", () => {
  if(!Settings.waypointShown) return
  waypoints.forEach((waypoint) => {
    Tessellator.drawString("Vanquisher", waypoint.x, waypoint.y, waypoint.z, 0xffffff, true, 0.7, true);
  })
});
/*
  //Vanquisher Message
  if (Settings.vanquisherMessage && message.includes("A Vanquisher is spawning")) {
    ChatLib.command(`pc Vanquisher spawning at: X: ${Player.getX().toFixed(2)} Y: ${Player.getY().toFixed(2)} Z: ${Player.getZ().toFixed(2)}`);
  }

  //Waypoints
  if(Settings.autoPickupWaypoints) {
    //Example msg: Vanquisher spawning at: X: -578.39 Y: 12.06 Z: -357.65
    //if it detects the coords then waypoints.push({x, y, z}) ya know how it works
    
  }
*/

register("chat", (message, event) => {
  //Filter Unwanted Phrases Filter
  if (Settings.phraseFilter) {
    lists.wordFilter.forEach(word => {
      if (message.toLowerCase().includes(word.toLowerCase())) {
        cancel(event);
      }
    })
  }
}).setCriteria("${message}");

//new command System
//TODO: Port old commands to Settings and implement them in code
register("command", (...args) => {
  if (args === undefined) {
    return Settings.openGUI();
  }
  if (args[0] === "help") {
    ChatLib.chat(`&9&m${ChatLib.getChatBreak()}§r`);
    ChatLib.chat(`${Const.prefix} Help Menu\n/su flipper <add:remove:list> [Item]\n/su filter <add:remove:list> [Message]\n/su waypoint clear\n/su waypoint <X> <Y> <Z>\n\nA Word is only required when using add or remove.`);
    ChatLib.chat(`&9&m${ChatLib.getChatBreak()}§r`);
    return;
  }
  if (!["flipper", "filter", "waypoint"].includes(args[0])) {
    return ChatLib.chat(`Invalid Usage.\nRefer to /su help`);
  }
  let args2 = args.join(" ").replace("add ", "").replace("remove ", "").replace("list ", "").replace("waypoint ", "").split(" ");

  if ("add".includes(args[1])) {
    try {
      FileUtils.add(args2, args[0]);
    } catch (e) {
      ChatLib.chat(`§4Uncaught Error occured during adding §b${args[1]} §4to the list. Check the console for more Information`);
      console.log(`${ChatLib.getChatBreak()}\nCommand: "add"\nError: "${e.name}"\nMessage: "${e.message}"\nFileName: "${e.fileName}"\nLineNumber: "${e.lineNumber}"`);
    }
    lists = FileUtils.getLists();
  }
  if ("remove".includes(args[1])) {
    try {
      FileUtils.remove(args2, args[0]);
    } catch (e) {
      ChatLib.chat(`§4Uncaught Error occured during removing §b${args[1]} §4to the list. Check the console for more Information`);
      console.log(`${ChatLib.getChatBreak()}\nCommand: "remove"\nError: "${e.name}"\nMessage: "${e.message}"\nFileName: "${e.fileName}"\nLineNumber: "${e.lineNumber}"`);
    }
    lists = FileUtils.getLists();
  }
  if ("list".includes(args[1])) {
    try {
      FileUtils.list(args[0]);
    } catch (e) {
      ChatLib.chat(`§4Uncaught Error occured during listing the list. Check the console for more Information`);
      console.log(`${ChatLib.getChatBreak()}\nCommand: "list"\nError: "${e.name}"\nMessage: "${e.message}"\nFileName: "${e.fileName}"\nLineNumber: "${e.lineNumber}"`);
    }
  }

  //Waypoint
  if ("waypoint".includes(args[0])) {
    if("clear".includes(args[1])) {
      waypoints = []
      return ChatLib.chat(`${Const.prefix} Cleared Waypoints`)
    }
    
    if (!args2[1] || !args2[2] || !args2[3]) return ChatLib.chat(`${Const.prefix} Invalid Usage`);
    let x = args[1].trim().replaceAll(",", ".")
    let y = args[2].trim().replaceAll(",", ".")
    let z = args[3].trim().replaceAll(",", ".")
    waypoints.push({
      x: x,
      y: y,
      z: z,
    });
    ChatLib.chat(`${Const.prefix} Added Waypoint at X: ${x}, Y: ${y}, Z: ${z}`);
  }
})
  .setTabCompletions("add", "remove", "list", "help", "waypoint")
  .setName("su");


