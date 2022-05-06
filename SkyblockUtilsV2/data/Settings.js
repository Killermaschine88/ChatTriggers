import { @Vigilant, @SelectorProperty, @SwitchProperty, @CheckboxProperty, @TextProperty, @ColorProperty, Color } from "Vigilance";
import * as Const from "../utils/constants";

//Pretty simple for now no? Remember to ignore errors shown in editor

@Vigilant(`${Const.moduleName}`, `§e${Const.moduleName}`, {
  getCategoryComparator: () => (a, b) => {
      const categories = ["Nether", "Waypoint", "Filter"];

      return categories.indexOf(a.name) - categories.indexOf(b.name);
  },
})
class Settings {

  //Nether
  @SwitchProperty({
    name: "Vanquisher Spawn Message",
    description: "Send a Message in Chat containing your location if a Vanquisher Spawns.\nDefaults to §cDisabled§r.",
    category: "Nether",
    subcategory: "Vanquisher",
  })
  vanquisherMessage = false;

  @SelectorProperty({
    name: "Vanquisher Message Chat",
    description: "In which chat the Vanquisher Message should be sent when you spawn one.\nDefaults to 'Party Chat'.",
    category: "Nether",
    subcategory: "Vanquisher",
    options: ["All Chat (§cUse at own Risk§r)", "Party Chat"],
  })
  vanquisherMessageChat = 1;

  @SwitchProperty({
    name: "Banner of Corruption Timer",
    description: "Starts a Timer when you place a Banner and reminds you when the banner expires.\nDefaults to §cDisabled§r.",
    category: "Nether",
    subcategory: "Corrupted Banner",
  })
  bannerTimer = false;

  @TextProperty({
    name: "Banner of Corruption Display Text",
    description: "The Text to Display when the Banner of Corruption has expired.\nDefaults to '§cBanner§r'.",
    category: "Nether",
    subcategory: "Corrupted Banner",
  })
  bannerText = "Banner";

  @ColorProperty({
    name: "Banner of Corruption Display Color",
    description: "The Color of the Banner Reminder Message.\nDefaults to §5Magenta§r.",
    category: "Nether",
    subcategory: "Corrupted Banner",
  })
  bannerColor = Color.MAGENTA;

  //Waypoints
  @SwitchProperty({
    name: "Waypoint shown",
    description: "If Waypoints you add should be shown in-game.\nDefaults to §cDisabled§r.",
    category: "Waypoint",
    subcategory: "Render",
  })
  waypointShown = false;

  @SwitchProperty({
    name: "Auto Waypoint Pickup",
    description: "If a Waypoint is detected in chat it will automatically be rendered.\nDefaults to §cDisabled§r.",
    category: "Waypoint",
    subcategory: "Auto",
  })
  autoDetectWaypoints = false;

  @SwitchProperty({
    name: "Display Waypoint Distance",
    description: "Displays how far away you are from a waypoint.\nDefaults to §cDisabled§r.",
    category: "Waypoint",
    subcategory: "Render",
  })
  displayWaypointDistance = false;

  //Filter
  @SwitchProperty({
    name: "Phrase Filter",
    description: "Enable/Disable a filter for certain Phrases or Words from a list you make using /su filter add [Words].\nMultiple word lines can be included just use spaces between each word",
    category: "Filter",
  })
  phraseFilter = false;

  constructor() {
    this.initialize(this);
    this.addDependency("Display Waypoint Distance", "Waypoint shown");
    this.addDependency("Banner of Corruption Display Color", "Banner of Corruption Timer");
    this.addDependency("Banner of Corruption Display Text", "Banner of Corruption Timer");
    this.addDependency("Vanquisher Message Chat", "Vanquisher Spawn Message")
  }
}

export default new Settings();
