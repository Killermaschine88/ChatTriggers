const Mc = Client.getMinecraft();
const EntityArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand");

register("renderEntity", (entity, pos, idk, event) => {
  if (!entity instanceof EntityArmorStand) return;

  //add a check to only pass if location includes "Kuudra"

  //Name Check
  if(!entity.name.includes("§cKuudra") || !entity.name.includes("§cTentacle Ida") || !entity.name.includes("§cTentacle King") || !entity.name.includes("§cTentacle Echo") || !entity.name.includes("§cTentacle Zulu")) return

  //console.log(entity.toString())
  return;
  Tessellator.drawString(`${entity.name}`, entity.x, entity.y + 50, entity.z, 0xffffff, true, 0.75, false); //Rendering HP Display
});
