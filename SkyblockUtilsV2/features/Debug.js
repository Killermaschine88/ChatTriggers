
export default class debug {
    testObject = {
        name: "Aurora Helmet",
        price: "30,300,000",
        rarity: "LEGENDARY",
        command: "/viewauction 055b2876e20a498383e1a0d4196a33d7",
      };
    constructor() {};

    sendTestMessage(testObject) {
    let colorcode = "a";
    let price = testObject.price.replace(/,/g, "");
    if (price > 20000000 && color) {
      colorcode = "c";
    }
    new Message(new TextComponent(`${Const.prefix} ${Const.rarities[testObject.rarity]}${testObject.name} §f- §${colorcode}${testObject.price} ${Const.suffix}`).setClick("run_command", `${testObject.command}`).setHover("show_text", `${testObject.name}`)).chat();
  };
};