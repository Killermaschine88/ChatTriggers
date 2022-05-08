const Mc = Client.getMinecraft();
const EntityArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand");

register("renderEntity", (entity, pos, idk, event) => {
  if (!entity instanceof EntityArmorStand) return;

console.log(Scoreboard.getLines().forEach((line) => { console.log(line.toString())}))

  //Kuudra
  if(entity.name === "§c§lKuudra") {
    const hp = Scoreboard.getLines().find(e => e.includes("§cKuudra"))
    if(!hp) return
    renderHealth(entity)
  }

  //Tentacles
  if(entity.name === "§c§lTentacle Ida") {
    const hp = Scoreboard.getLines().find(e => e.includes("§cTentacle Ida"))
    if(!hp) return
    renderHealth(entity)
  }
  if(entity.name === "§c§lTentacle King") {
    const hp = Scoreboard.getLines().find(e => e.includes("§cTentacle King"))
    if(!hp) return
    renderHealth(entity)
  }
  if(entity.name === "§c§lTentacle Echo§c§lKuudra") {
    const hp = Scoreboard.getLines().find(e => e.includes("§cTentacle Echo"))
    if(!hp) return
    renderHealth(entity)
  }
  if(entity.name === "§c§lTentacle Zulu") {
    const hp = Scoreboard.getLines().find(e => e.includes("§cTentacle Zulu"))
    if(!hp) return
    renderHealth(entity)
  }
});

function renderHealthDisplay(entity) {
  Tessellator.drawString(`${entity.name}`, entity.x, entity.y + 20, entity.z, 0xffffff, true, 1, false);
}