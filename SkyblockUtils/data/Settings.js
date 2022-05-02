import { @Vigilant, @SwitchProperty, @CheckboxProperty, @TextProperty } from "Vigilance";

//Pretty simple for now no? Remember to ignore errors shown in editor

@Vigilant("SkyblockUtils", "§eSkyblockUtils")
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
  phrases = [];

  //QOL
  @SwitchProperty({
    name: "Vanquisher Spawn Message",
    description: "Send a Message in Party Chat containing your location if a Vanquisher Spawns",
    category: "QOL",
  })
  vanquisherMessage = false
  //World.getAllEntitiesOfType(Java.type("net.minecraft.entity.boss.EntityWither"))
  //to get array of all withers

  constructor() {
    this.initialize(this);
  }
}

export default new Settings();
