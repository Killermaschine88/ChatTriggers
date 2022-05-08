const EntityArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand");

register("renderEntity", (entity, pos, idk, event) => {
  if (!entity instanceof EntityArmorStand) return;

  /*//Kuudra
  if (entity.name === "§c§lKuudra") {
    const hp = Scoreboard.getLines().find((e) => e.name.includes("§cKuudra"));
    if (!hp) return;
    renderHealth({}, hp);
  }*/

  //Tentacles
  if (entity.name === "§c§lTentacle Ida") {
    const hp = Scoreboard.getLines().find((e) => e.name.includes("§cTentacle Ida"));
    if (!hp) return;
    renderHealthDisplay(entity, hp);
  }
  if (entity.name === "§c§lTentacle King") {
    const hp = Scoreboard.getLines().find((e) => e.name.includes("§cTentacle King"));
    if (!hp) return;
    renderHealthDisplay(entity, hp);
  }
  if (entity.name === "§c§lTentacle Echo") {
    const hp = Scoreboard.getLines().find((e) => e.name.includes("§cTentacle Echo"));
    if (!hp) return;
    renderHealthDisplay(entity, hp);
  }
  if (entity.name === "§c§lTentacle Zulu") {
    const hp = Scoreboard.getLines().find((e) => e.name.includes("§cTentacle Zulu"));
    if (!hp) return;
    renderHealthDisplay(entity, hp);
  }
});

function renderHealthDisplay(entity, hp) {
  Tessellator.drawString(`${hp.name}`, entity.x, entity.y + 15, entity.z, 0xffffff, true, 0.3, false);
}
