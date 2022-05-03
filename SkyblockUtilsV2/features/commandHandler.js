import Settings from "./data/Settings";
import * as Const from "./utils/constants";
import * as FileUtils from "./utils/fileUtils";
import debug from "./utils/Debug";

let lists = FileUtils.getLists();

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
  let argss = args.join(" ").replace("add ", "").replace("remove ", "").replace("list ", "").replace("waypoint ", "").split(" ");
  let args2 = [];
  argss.forEach((entry) => {
    args2.push(entry.trim());
  });

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
    if ("clear".includes(args[1])) {
      waypoints = [];
      return ChatLib.chat(`${Const.prefix} Cleared Waypoints`);
    }

    console.log(`"${args2.join(",")}"`)

    if (!args2[1] || !args2[2] || !args2[3]) return ChatLib.chat(`${Const.prefix} Invalid Usage, refer to /su help`);
    let x = args[1].trim().replaceAll(",", ".");
    let y = args[2].trim().replaceAll(",", ".");
    let z = args[3].trim().replaceAll(",", ".");
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
