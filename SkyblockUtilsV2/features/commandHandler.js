import Settings from "../data/Settings";
import * as Const from "../utils/constants";
import * as FileUtils from "../utils/fileUtils";
import * as CommandUtils from "./../utils/commandUtils";

global.lists = FileUtils.getList();

//new command System
//TODO: Port old commands to Settings and implement them in code
register("command", (...args) => {
  if (args === undefined) {
    return Settings.openGUI();
  }
  if (args[0] === "help") {
    CommandUtils.helpmessage();
    return;
  }
  if (!["filter", "waypoint"].includes(args[0])) {
    return CommandUtils.InvalidUsage();
  }
  let arg1 = args.shift();

  if (args[0] === undefined) {
    return CommandUtils.InvalidUsage();
  }

  if ("filter".includes(arg1)) {
    let arg2 = args.shift();
    if (args[0] === undefined) {
      return CommandUtils.InvalidUsage();
    }
    if ("add".includes(arg2)) {
      try {
        FileUtils.addFilter(args);
      } catch (e) {
        CommandUtils.error(e, arg2);
      }
    }
    if ("remove".includes(arg2)) {
      try {
        FileUtils.removeFilter(args);
      } catch (e) {
        CommandUtils.error(e, arg2);
      }
    }
    if ("list".includes(arg2)) {
      try {
        FileUtils.list(arg1);
      } catch (e) {
        CommandUtils.error(e, arg2);
      }
    }
  }

  //Waypoint
  if ("waypoint".includes(arg1)) {
    let arg2 = args.shift();
    if (arg2 == undefined) {
      return CommandUtils.InvalidUsage();
    }
    if ("clear".includes(arg2)) {
      global.waypoints = [];
      return ChatLib.chat(`${Const.prefix} Cleared Waypoints`);
    }

    if (arg2 == undefined || args[0] == undefined || args[1] == undefined) return CommandUtils.InvalidUsage();
    let x = arg2.trim().replaceAll(",", ".");
    let y = args[0].trim().replaceAll(",", ".");
    let z = args[1].trim().replaceAll(",", ".");
    waypoints.push({
      x: x,
      y: y,
      z: z,
    });
    ChatLib.chat(`${Const.prefix} Added Waypoint at X: ${x}, Y: ${y}, Z: ${z}`);
  }
})
  .setTabCompletions("help", "filter", "waypoint")
  .setName("su");
