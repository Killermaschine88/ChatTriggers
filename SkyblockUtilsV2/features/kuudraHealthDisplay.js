const Mc = Client.getMinecraft();
const EntityArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand");

register("renderEntity", (entity, pos, idk, event) => {
  if (!entity instanceof EntityArmorStand) return;

console.log(Scoreboard.getLines().forEach((line) => { console.log(line.toString())}))

  if (entity.name !== "§c§lKuudra" || entity.name !== "§c§lTentacle Ida" || entity.name !== "§c§lTentacle King" || entity.name !== "§c§lTentacle Echo" || entity.name !== "§c§lTentacle Zulu") return;
console.log(entity.toString())
  return;
  Tessellator.drawString(`${entity.name}`, entity.x, entity.y + 50, entity.z, 0xffffff, true, 0.75, false); //Rendering HP Display
});
