import { @Vigilant, @SelectorProperty, @SwitchProperty, @CheckboxProperty, @TextProperty, @ColorProperty, @DecimalSliderProperty,Color } from "Vigilance";
import * as Const from "../utils/constants";

//Pretty simple for now no? Remember to ignore errors shown in editor

@Vigilant(`${Const.moduleName}`, `§e${Const.moduleName}`, {
  getCategoryComparator: () => (a, b) => {
    const categories = ["Nether", "Waypoint", "QOL"];

    return categories.indexOf(a.name) - categories.indexOf(b.name);
  },
  getSubcategoryComparator: () => (a, b) => {
    const subcategories = ["Filter", "Damage Splash"];

    return subcategories.indexOf(a.getValue()[0].attributesExt.subcategory) - subcategories.indexOf(b.getValue()[0].attributesExt.subcategory);
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

  @SwitchProperty({
    name: "Kuudra Health Display",
    description: "Displays the Health of Kuudra/Kuudra Tentacles and the Dropship above them.\nDefaults to §cDisabled§r.",
    category: "Nether",
    subcategory: "Kuudra",
  })
  kuudraHealthDisplay = false;

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
    category: "QOL",
    subcategory: "Filter",
  })
  phraseFilter = false;

  //Damage Splash
  @SwitchProperty({
    name: "Custom Damage Splash",
    description: "Displays a custom Damage Splash. If this is Disabled the module will not modify the Damage Splash.\nDefaults to §cDisabled§r.\nCapped at 15 active Splashes at the same time to reduce lag.",
    category: "QOL",
    subcategory: "Damage Splash",
  })
  customDamageSplash = false;

  @SelectorProperty({
    name: "Custom Damage Type",
    description: "What the Custom Damage Splash scale should be.\nDefaults to §cNormal§r.",
    category: "QOL",
    subcategory: "Damage Splash",
    options: Const.customDamageTypes,
  })
  customDamageType = 2;

  @DecimalSliderProperty({
    name: "Custom Damage Scale",
    description: "Sets the custom scale of the Damage Splash.\nDefaults to 50 (Basically hypixel)",
    category: "QOL",
    subcategory: "Damage Splash",
    minF: 1,
    maxF: 100,
  })
  customDamageScale = 50;

  @SwitchProperty({
    name: "Hide Armor Stands",
    description: "Hide all ArmorStands to improve FPS.\nDefaults to §cDisabled§r.",
    category: "QOL",
    subcategory: "Hider",
  })
  hideArmorStands = false;

  constructor() {
    this.initialize(this);
    this.addDependency("Display Waypoint Distance", "Waypoint shown");
    this.addDependency("Banner of Corruption Display Color", "Banner of Corruption Timer");
    this.addDependency("Banner of Corruption Display Text", "Banner of Corruption Timer");
    this.addDependency("Vanquisher Message Chat", "Vanquisher Spawn Message");
    this.addDependency("Custom Damage Type", "Custom Damage Splash");
    this.addDependency("Custom Damage Scale", "Custom Damage Splash");
  }
}

export default new Settings();
