import * as Const from "./constants";

export function list(file) {
  let list = JSON.parse(FileLib.read(Const.moduleName, `constants/${file}.json`));
  if (list == null) return ChatLib.chat("§4Error: The File to save the items in doesn't exist!");
  list.length == 0 ? empty = " No phrases" : empty = "";
  ChatLib.chat(`&9&m${ChatLib.getChatBreak()}§r\n§CThe List Contains:${empty}`);
  list.forEach((item) => {
    ChatLib.chat(`- §6${item}`);
  });
  ChatLib.chat(`&9&m${ChatLib.getChatBreak()}§r`);
}

function isIn(list, search) {
  let found = false;
  list.forEach((item) => {
    item2 = item.toLowerCase();
    if (item2 == search) found = true;
  });
  if (found) return true;
  return false;
}

export function addFilter(newItem) {
  let list = JSON.parse(FileLib.read(Const.moduleName, `constants/filter.json`));
  if (list == null) return ChatLib.chat("§4Error: The File to save the items in doesn't exist!");
  newItem = newItem.join(" ");
  newItemLow = newItem.toLowerCase();
  if (isIn(list, newItemLow)) return ChatLib.chat(`${Const.prefix} §4Error: §f"§b${newItem}§f" §4Already exists in the list`);
  list.push(newItem);
  FileLib.write(Const.moduleName, `constants/filter.json`, JSON.stringify(list, null, "\t"));
  ChatLib.chat(`${Const.prefix} §6Successfully added §f"${newItem}" §6to the filter`);
  lists = getList();
}

export function removeFilter(newItem) {
  let list = JSON.parse(FileLib.read(Const.moduleName, `constants/filter.json`));
  if (list == null) return ChatLib.chat("§4Error: The File to remove the items at doesn't exist!");
  newItem = newItem.join(" ");
  newItemLow = newItem.toLowerCase();
  if (!isIn(list, newItemLow)) return ChatLib.chat(`${Const.prefix} §4Error: §f"§b${newItem}§f" §4Doesn't exists in the list`);
  const item = list.findIndex((entry) => entry === newItem);
  list.splice(item, 1);
  FileLib.write(Const.moduleName, `constants/filter.json`, JSON.stringify(list, null, "\t"));
  ChatLib.chat(`${Const.prefix} §6Successfully removed §f"${newItem}" §6from the filter`);
  lists = getList();
}

export function getList() {
  return {
    wordFilter: JSON.parse(FileLib.read(Const.moduleName, `constants/filter.json`)) || [],
  };
}
