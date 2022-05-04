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

  @TextProperty({
    name: "API Key",
    description: "API Key given out by Baltraz#4874 to access the Flipper (Only like 3 people get one so yea)",
    category: "Flipper",
  })
  apiKey = "";

  //Nether
  @SwitchProperty({
    name: "Vanquisher Spawn Message",
    description: "Send a Message in Party Chat containing your location if a Vanquisher Spawns",
    category: "Nether"
  })
  vanquisherMessage = false;

  //Waypoints
  @SwitchProperty({
    name: "Waypoint shown",
    description: "If Waypoints you add should be shown in-game",
    category: "Waypoint"
  })
  waypointShown = false;

  @SwitchProperty({
    name: "Auto Waypoint Pickup",
    description: "If a Waypoint is detected in chat it will automatically be rendered (Only works if Waypoint shown is enabled)",
    category: "Waypoint"
  })
  autoDetectWaypoints = false;

  @SwitchProperty({
    name: "Display Waypoint Distance",
    description: "Displays how far away you are from a waypoint (Only works if Waypoint shown is enabled)",
    category: "Waypoint"
  })
  displayWaypointDistance = false;

  //Filter
  @SwitchProperty({
    name: "Phrase Filter",
    description: "Enable/Disable a filter for certain Phrases or Words from a list you make using /su word-list add myWord",
    category: "Filter"
  })
  phraseFilter = false;

  constructor() {
    this.initialize(this);
  }
}

export default new Settings();
