import * as Const from "./../utils/constants";

export function helpmessage() {
  new Message(
    `&9&m${ChatLib.getChatBreak()}\n`,
    new TextComponent("§a--- Showing Help Message For Module SkyblockUtilsV2 ---§r\n"),
    new TextComponent("§r§c/su").setClick("run_command", "/su").setHover("show_text", "§e/su"),
    new TextComponent(" §7§oto open the Settings\n"),
    new TextComponent("§c/su help").setClick("run_command", "/su help").setHover("show_text", "§e/su help"),
    new TextComponent(" §7§oto show this Message\n"),
    new TextComponent("§c/su filter add [Words]"),
    new TextComponent(" §7§oto add Words to the Filter\n"),
    new TextComponent("§c/su filter remove [Words]"),
    new TextComponent(" §7§oto remove Words from the Filter\n"),
    new TextComponent("§c/su filter list").setClick("run_command", "/su filter list").setHover("show_text", "§e/su filter list"),
    new TextComponent(" §7§oto list all the words in the filter list\n"),
    new TextComponent("§c/su waypoint clear").setClick("run_command", "/su waypoint clear").setHover("show_text", "§e/su waypoint clear"),
    new TextComponent(" §7§oto clear all waypoints\n"),
    new TextComponent("§c/su waypoint [x] [y] [z]"),
    new TextComponent(" §7§oto add a waypoint at given coordinates\n\n"),
    new TextComponent("§7§oin [Words] are not multiple words but rather sentences.\n§7§oTry out what that means. You can always remove every word or sentence from the list"),
    `&9&m${ChatLib.getChatBreak()}`
  )
    .setChatLineId(1289567)
    .chat();
}

export function InvalidUsage() {
  ChatLib.chat(`${Const.prefix} Invalid Usage. Refer to §c/su help`);
}

export function error(e, cmd) {
  ChatLib.chat(`§4Uncaught Error occured during performing this command check the console for more details or as one of the devs`);
  console.log(`${ChatLib.getChatBreak()}\nCommand: "${cmd}"\nError: "${e.name}"\nMessage: "${e.message}"\nFileName: "${e.fileName}"\nLineNumber: "${e.lineNumber}"`);
}
