
import request from "../../requestV2/index";
import Settings from "../data/Settings";
import * as Const from "./../utils/constants";

let j = 0;
let sent = [];
let running = false;
let divider = 7;


register("step", () => {
    if (!Settings.enable) return;
    if (running) return;
    running = true;
    if (j % divider === 0) {
      sent = [];
    }
    j++;
    try {
      request(`https://development.baltrazz.repl.co/shards?key=${Settings.apiKey}`).then(res => {
        if (res.length > 0) {
          res = JSON.parse(res);
          res.forEach(item => {
            if (sent.includes(item.command)) return;
            sent.push(item.command);
            sendMessage(item);
          });
        } else {
          return ChatLib.chat(`${Const.prefix} No new Items found.`);
        }
      }).catch(e => {
        ChatLib.chat(`${Const.prefix} Error occured during request`)
      });
    } catch (e) {
      ChatLib.chat(`${Const.prefix} Error occured`);
    }
    running = false;
  }).setDelay(20);

function sendMessage(item) {
    if (!Settings.enable) return;
    let colorcode = "a";
    let price = item.price.replace(/,/g, "");
    if (price > 20000000 && Settings.priceWarn) {
      colorcode = "c";
    }
    new Message(new TextComponent(`${Const.prefix} ${Const.rarities[item.rarity]}${item.name} §f- §${colorcode}${item.price} ${Const.suffix}`).setClick("run_command", `${item.command}`).setHover("show_text", `${Const.rarities[item.rarity]}${item.name}`)).chat();
  }

