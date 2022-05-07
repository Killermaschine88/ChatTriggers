const Mc = Client.getMinecraft();
const EntityArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand");
global.damageText = [];
import Settings from "../data/Settings";
import * as MathUtils from "./../utils/MathUtils";

register("renderEntity", (entity, pos, idk, event) => {
  if (entity.name.includes("✧") || !isNaN(Number(entity.name.replace("§", "")))) {
    cancel(event);
    if(Settings.customDamageType === "Hidden") return
    if (damageText.find((dmg) => dmg.name === entity.name && dmg.x === entity.x && dmg.y === entity.y && dmg.z === entity.z)) return;
    if(Math.floor(MathUtils.getDistanceToPlayer({x: entity.x, y: entity.y, z: entity.z})) > 5) return
    global.damageText.push({ name: entity.name, x: entity.x, y: entity.y, z: entity.z });
  }
});

register("step", () => {
  global.damageText = []; // Clears after 3 seconds
}).setDelay(3);
