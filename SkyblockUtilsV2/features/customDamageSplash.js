const Mc = Client.getMinecraft();
const EntityArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand");
import Settings from "../data/Settings";
import * as MathUtils from "./../utils/MathUtils";
let damageText = [];

register("renderEntity", (entity, pos, idk, event) => {
  if (entity.name.includes("✧") || !isNaN(Number(entity.name.replace("§", "")))) {
    cancel(event);
    if (Settings.customDamageType === "Hidden") return;
    if (damageText.find((dmg) => dmg.name === entity.name && dmg.x === entity.x && dmg.y === entity.y && dmg.z === entity.z)) return;
    if (Math.floor(MathUtils.getDistanceToPlayer({ x: entity.x, y: entity.y, z: entity.z })) > 7) return; // ignore if more than 7 blocks away
    if(damageText.length >= 10) return
    damageText.push({ name: entity.name, x: entity.x, y: entity.y, z: entity.z });
  }
});

register("renderWorld", () => {
  if (!Settings.customDamageSplash) return;
  if (damageText.length === 0 || damageText.length > 10) return;
  if (Settings.customDamageType === "Hidden") return;
  damageText.forEach((dmg) => {
    Tessellator.drawString(`${dmg.name}`, dmg.x, dmg.y, dmg.z, 0xffffff, true, getDmgScale(Settings.customDamageType), false);
  });
});

register("step", () => {
  damageText = []; // Clears after 3 seconds
}).setDelay(3);

function getDmgScale(type) {
  if (type === "Big") return 0.05;
  if (type === "Normal") return 0.03;
  if (type === "Small") return 0.01;
  if (type === "Custom") {
    return Number((Settings.customDamageScale / 1666).toFixed(2));
  }
}
