import { @Vigilant, @SwitchProperty, @CheckboxProperty, @TextProperty } from "Vigilance";
import * as Const from "../utils/constants";

//Pretty simple for now no? Remember to ignore errors shown in editor

@Vigilant(Const.moduleName, `§e${Const.moduleName}`)
class Settings {
  //Flipper
  @SwitchProperty({
    name: "Enable tracking",
    description: "Start tracking Items and show notifications in your chat",
    category: "Flipper",
  })
  enable = false;

  @SwitchProperty({
    name: "High price Warning",
    description: "Prices above 20 million Coins will be marked §cRed",
    category: "Flipper",
  })
  priceWarn = true;

  @TextProperty({
    name: "Min price",
    description: "Items below that Value will not show up in chat (Format: 20000000)",
    category: "Flipper",
  })
  minPrice = "";

  @TextProperty({
    name: "Max price",
    description: "Items above that Value will not show up in chat (Format: 20000000)",
    category: "Flipper",
  })
  maxPrice = "";

  //Filter
  @SwitchProperty({
    name: "Phrase Filter",
    description: "Enable/Disable Filter out certain Phrases or Words from a list you make using /su word-list add myWord",
    category: "Filter",
  })
  phrases_filter = false;

  //QOL
  @SwitchProperty({
    name: "Vanquisher Spawn Message",
    description: "Send a Message in Party Chat containing your location if a Vanquisher Spawns",
    category: "QOL",
  })
  vanquisherMessage = false;

  constructor() {
    this.initialize(this);
  }
}

export default new Settings();
