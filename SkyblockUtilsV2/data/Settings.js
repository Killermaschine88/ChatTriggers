import { @Vigilant, @SelectorProperty, @SwitchProperty, @CheckboxProperty, @TextProperty, @ColorProperty, Color } from "Vigilance";
import * as Const from "../utils/constants";

//Pretty simple for now no? Remember to ignore errors shown in editor

@Vigilant(Const.moduleName, `§e${Const.moduleName}`)
class Settings {
  //Formatting
  @SwitchProperty({
    name: "Setting Formatting (This Setting doesnt do anything)",
    description: "My Description (Default Value) [Setting which has to be enabled for this feature to work]",
    category: "Example",
  })
  formatting=false;
  
  //Nether
  @SwitchProperty({
    name: "Vanquisher Spawn Message",
    description: "Send a Message in Party Chat containing your location if a Vanquisher Spawns (Disabled) []",
    category: "Nether",
    subcategory: "Vanquisher",
  })
  vanquisherMessage = false;

  @SelectorProperty({
    name: "Vanquisher Message Chat",
    description: "In which chat the Vanquisher Message should be sent when you spawn one (Party Chat) [Vanquisher Spawn Message]",
    category: "Nether",
    subcategory: "Vanquisher",
    options: ["All Chat (Use at own Risk)", "Party Chat"],
  })
  vanquisherMessageChat = 1;

  @SwitchProperty({
    name: "Banner of Corruption Timer",
    description: "Starts a Timer when you place a Banner and reminds you when the banner expires (Disabled) []",
    category: "Nether",
    subcategory: "Corrupted Banner",
  })
  bannerTimer = false;

  @TextProperty({
    name: "Banner of Corruption Display Text",
    description: "The Text to Display when the Banner of Corruption has expired (Banner) [Banner of Corruption Timer]",
    category: "Nether",
    subcategory: "Corrupted Banner",
  })
  bannerText = "Banner";

  @ColorProperty({
    name: "Banner of Corruption Display Color",
    description: "The Color of the Banner Reminder Message (Magenta) [Banner of Corruption Timer]",
    category: "Nether",
    subcategory: "Corrupted Banner",
  })
  bannerColor = Color.MAGENTA;

  //Waypoints
  @SwitchProperty({
    name: "Waypoint shown",
    description: "If Waypoints you add should be shown in-game (Disabled) []",
    category: "Waypoint",
  })
  waypointShown = false;

  @SwitchProperty({
    name: "Auto Waypoint Pickup",
    description: "If a Waypoint is detected in chat it will automatically be rendered (Disabled) [Waypoint shown]",
    category: "Waypoint",
  })
  autoDetectWaypoints = false;

  @SwitchProperty({
    name: "Display Waypoint Distance",
    description: "Displays how far away you are from a waypoint (Disabled) [Waypoint shown]",
    category: "Waypoint",
  })
  displayWaypointDistance = false;

  //Filter
  @SwitchProperty({
    name: "Phrase Filter",
    description: "Enable/Disable a filter for certain Phrases or Words from a list you make using /su word-list add myWord (None) []",
    category: "Filter",
  })
  phraseFilter = false;

  //Flipper
  @SwitchProperty({
    name: "Auction tracking",
    description: "Start tracking Items and show notifications in your chat (Disabled) []",
    category: "Flipper",
  })
  enable = false;

  @SwitchProperty({
    name: "High price Warning",
    description: "Prices above 20 million Coins will be marked §cRed (Enabled) [Auction tracking]",
    category: "Flipper",
  })
  priceWarn = true;

  @TextProperty({
    name: "Min price (Disabled)",
    description: "Items below that Value will not show up in chat, Format: 20000000 (None) [Auction tracking]",
    category: "Flipper",
  })
  minPrice = "";

  @TextProperty({
    name: "Max price (Disabled)",
    description: "Items above that Value will not show up in chat, Format: 20000000 (None) [Auction tracking]",
    category: "Flipper",
  })
  maxPrice = "";

  @TextProperty({
    name: "API Key",
    description: "API Key given out by Baltraz#4874 to access the Flipper *Only like 3 people get one so yea* (None) [Auction tracking]",
    category: "Flipper",
    placeholder: "None",
  })
  apiKey = "";

  constructor() {
    this.initialize(this);
  }
}

export default new Settings();
