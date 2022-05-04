import { @Vigilant, @SwitchProperty, @CheckboxProperty, @TextProperty, @ColorProperty, Color } from "Vigilance";
import * as Const from "../utils/constants";

//Pretty simple for now no? Remember to ignore errors shown in editor

@Vigilant(Const.moduleName, `§e${Const.moduleName}`)
class Settings {
  //Nether
  @SwitchProperty({
    name: "Vanquisher Spawn Message",
    description: "Send a Message in Party Chat containing your location if a Vanquisher Spawns",
    category: "Nether",
    subcategory: "Vanquisher",
  })
  vanquisherMessage = false;

  @SelectorProperty({
    name: "Vanquisher Message Chat",
    description: "In which chat the Vanquisher Message should be sent when you spawn one (Vanquisher Spawn Message must be enabled for it to work)",
    category: "Nether",
    subcategory: "Vanquisher",
    options: ["All Chat (Use at own Risk)", "Party Chat"],
  })
  vanquisherMessageChat = 1;

  @SwitchProperty({
    name: "Banner of Corruption Timer",
    description: "Starts a Timer when you place a Banner and reminds you when the banner expires",
    category: "Nether",
    subcategory: "Corrupted Banner",
  })
  bannerTimer = true;

  @TextProperty({
    name: "Banner of Corruption Display Text",
    description: "The Text to Display when the Banner of Corruption has expired ('Banner' by default)",
    category: "Nether",
    subcategory: "Corrupted Banner",
  })
  bannerText = "Banner";

  @ColorProperty({
    name: "Banner of Corruption Display Color",
    description: "The Color of the Banner Reminder Message",
    category: "Nether",
    subcategory: "Corrupted Banner",
  })
  bannerColor = Color.MAGENTA;

  //Waypoints
  @SwitchProperty({
    name: "Waypoint shown",
    description: "If Waypoints you add should be shown in-game",
    category: "Waypoint",
  })
  waypointShown = false;

  @SwitchProperty({
    name: "Auto Waypoint Pickup",
    description: "If a Waypoint is detected in chat it will automatically be rendered (Only works if Waypoint shown is enabled)",
    category: "Waypoint",
  })
  autoDetectWaypoints = false;

  @SwitchProperty({
    name: "Display Waypoint Distance",
    description: "Displays how far away you are from a waypoint (Only works if Waypoint shown is enabled)",
    category: "Waypoint",
  })
  displayWaypointDistance = false;

  //Filter
  @SwitchProperty({
    name: "Phrase Filter",
    description: "Enable/Disable a filter for certain Phrases or Words from a list you make using /su word-list add myWord",
    category: "Filter",
  })
  phraseFilter = false;

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
    name: "Min price (Disabled)",
    description: "Items below that Value will not show up in chat (Format: 20000000)",
    category: "Flipper",
  })
  minPrice = "";

  @TextProperty({
    name: "Max price (Disabled)",
    description: "Items above that Value will not show up in chat (Format: 20000000)",
    category: "Flipper",
  })
  maxPrice = "";

  @TextProperty({
    name: "API Key",
    description: "API Key given out by Baltraz#4874 to access the Flipper (Only like 3 people get one so yea)",
    category: "Flipper",
    placeholder: "None",
  })
  apiKey = "";

  constructor() {
    this.initialize(this);
  }
}

export default new Settings();
