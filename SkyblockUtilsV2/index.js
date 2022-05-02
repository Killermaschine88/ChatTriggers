import request from "requestV2/index";

import Settings from "./data/Settings";

import * as Const from "./utils/constants";

import * as FileUtils from "./utils/fileUtils";

let i = 0;
let j = 0;
let sent = [];
let running = false;
let color = true;
let divider = 5;
let lists = FileUtils.getLists();

//Waypoints
let waypoints = [];

register("renderWorld", () => {
  for (const waypoint of waypoints) {
    Tessellator.drawString("Vanquisher", waypoint.x, waypoint.y, waypoint.z, 0xffffff, true, 0.5, true);
  }
});

//Implosion Hider
register("chat", (message, event) => {
  //Filter Unwanted Phrases Filter
  if (Settings.phraseFilter) {
    for (const word of lists.wordFilter) {
      if (message.toLowerCase().includes(word.toLowerCase())) {
        return cancel(event);
      }
    }
  }

  //Vanquisher Message
  if (Settings.vanquisherMessage && message.includes("A Vanquisher is spawning")) {
    ChatLib.command(`pc Vanquisher spawning at: X: ${Player.getX().toFixed(2)} Y: ${Player.getY().toFixed(2)} Z: ${Player.getZ().toFixed(2)}`);
  }

  //when coordinates are detected in chat offer a menu to click if you want to set a marker at those coords for 2 minutes [Yes / No] and then have a simple display there showing the coords
}).setCriteria("${message}");

register("step", () => {
  if (!Settings.enabled) return;
  if (running) return;
  return;
  running = true;
  ChatLib.chat(`${Const.prefix} Started searching for Items.`);
  if (j % divider === 0) {
    sent = [];
  }
  j++;
  try {
    request(`https://development.baltrazz.repl.co/shards?key=${Settings.apiKey}`).then((res) => {
      if (res.length > 0) {
        res = JSON.parse(res);
        res.forEach((item) => {
          if (sent.includes(item.command)) return;
          sent.push(item.command);
          sendMessage(item);
        });
      } else {
        return ChatLib.chat(`${Const.prefix} No new Items found.`);
      }
    });
    ChatLib.chat(`${Const.prefix} Finished searching Items and sent them.`);
  } catch (e) {
    ChatLib.chat(`${Const.prefix} Error occured`);
  }
  running = false;
}).setDelay(20);

//DEBUG

const testObject = {
  name: "Aurora Helmet",
  price: "30,300,000",
  rarity: "LEGENDARY",
  command: "/viewauction 055b2876e20a498383e1a0d4196a33d7",
};

function sendTestMessage(testObject) {
  //if (!Settings.enabled) return;
  let colorcode = "a";
  let price = testObject.price.replace(/,/g, "");
  if (price > 20000000 && color) {
    colorcode = "c";
  }
  new Message(new TextComponent(`${Const.prefix} ${Const.rarities[testObject.rarity]}${testObject.name} §f- §${colorcode}${testObject.price} ${Const.suffix}`).setClick("run_command", `${testObject.command}`).setHover("show_text", `${testObject.name}`)).chat();
}

//DEBUG END

//new command System
//TODO: Port old commands to Settings and implement them in code

register("command", (...args) => {
  if (args === undefined) {
    return Settings.openGUI();
  }
  if (args[0] === "help") {
    ChatLib.chat(`&9&m${ChatLib.getChatBreak()}§r`);
    ChatLib.chat(`${Const.prefix} Help Menu\n/su flipper add/remove/list Word\n/su filter add/remove/list Word\n\nA Word is only required when using add or remove.`);
    ChatLib.chat(`&9&m${ChatLib.getChatBreak()}§r`);
    return;
  }
  if (!["flipper", "filter", "waypoint"].includes(args[0])) {
    return ChatLib.chat(`Invalid Usage.\nRefer to /su help`);
  }
  let args2 = args.join(" ").replace("add", "").replace("remove", "").replace("list", "").replace("waypoint", "").split(" ");

  if ("add".includes(args[1])) {
    try {
      FileUtils.add(args2, args[0]);
    } catch (e) {
      console.log(`${ChatLib.getChatBreak()}`);
      ChatLib.chat(`§4Uncaught Error occured during adding §b${args[1]} §4to the list. Check the console for more Information`);
      console.log(`Command: "add"\nError: "${e.name}"\nMessage: "${e.message}"\nFileName: "${e.fileName}"\nLineNumber: "${e.lineNumber}"`);
    }
    lists = FileUtils.getLists();
  }
  if ("remove".includes(args[1])) {
    try {
      FileUtils.remove(args2, args[0]);
    } catch (e) {
      console.log(`${ChatLib.getChatBreak()}`);
      ChatLib.chat(`§4Uncaught Error occured during removing §b${args[1]} §4to the list. Check the console for more Information`);
      console.log(`Command: "remove"\nError: "${e.name}"\nMessage: "${e.message}"\nFileName: "${e.fileName}"\nLineNumber: "${e.lineNumber}"`);
    }
    lists = FileUtils.getLists();
  }
  if ("list".includes(args[1])) {
    try {
      FileUtils.list(args[0]);
    } catch (e) {
      console.log(`${ChatLib.getChatBreak()}`);
      ChatLib.chat(`§4Uncaught Error occured during listing the list. Check the console for more Information`);
      console.log(`Command: "list"\nError: "${e.name}"\nMessage: "${e.message}"\nFileName: "${e.fileName}"\nLineNumber: "${e.lineNumber}"`);
    }
  }

  //Waypoint
  if ("waypoint".includes(args[0])) {
    if (!args2[0] || !args2[1] || !args2[2]) return ChatLib.chat(`${Const.prefix} Invalid Usage, ${args2.join(",")}. ${args2.size}`);
    waypoints.push({
      x: args2[0].trim(),
      y: args2[1].trim(),
      z: args2[2].trim(),
    });
    ChatLib.chat(`${Const.prefix} Added Waypoint at X: ${args2[0].trim}, Y: ${args2[1].trim()}, Z: ${args2[2].trim()}`);
  }
})
  .setTabCompletions("add", "remove", "list", "help", "waypoint")
  .setName("su");

function sendMessage(item) {
  if (!Settings.enabled) return;
  let colorcode = "a";
  let price = item.price.replace(/,/g, "");
  if (price > 20000000 && Settings.priceWarn) {
    colorcode = "c";
  }
  new Message(new TextComponent(`${Const.prefix} ${Const.rarities[item.rarity]}${item.name} §f- §${colorcode}${item.price} ${Const.suffix}`).setClick("run_command", `${item.command}`).setHover("show_text", `${item.name}`)).chat();
}
