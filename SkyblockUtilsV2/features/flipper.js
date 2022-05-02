/*
import request from "requestV2/index";


let j = 0;
let sent = [];
let running = false;
let color = true;
let divider = 5;


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

function sendMessage(item) {
    if (!Settings.enabled) return;
    let colorcode = "a";
    let price = item.price.replace(/,/g, "");
    if (price > 20000000 && Settings.priceWarn) {
      colorcode = "c";
    }
    new Message(new TextComponent(`${Const.prefix} ${Const.rarities[item.rarity]}${item.name} §f- §${colorcode}${item.price} ${Const.suffix}`).setClick("run_command", `${item.command}`).setHover("show_text", `${item.name}`)).chat();
  }
*/