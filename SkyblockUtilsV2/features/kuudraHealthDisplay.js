const EntityArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand");

register("renderEntity", (entity, pos, idk, event) => {
  if (!Settings.kuudraHealthDisplay) {
    // Kuudra Health Display
    if (!entity instanceof EntityArmorStand) return;
    if (!Scoreboard.getLines().find((e) => e.name.includes("Kuudra"))) return;

    /*//Kuudra
    const hp1 = Scoreboard.getLines().find((e) => e.name.includes("§cKuudra:"));
    if (hp1) {
      renderHealth({}, hp);
    }*/

    //Tentacles
    if (entity.name === "§c§lTentacle Ida") {
      const hp = Scoreboard.getLines().find((e) => e.name.includes("§cTentacle Ida"));
      if (!hp) {
        renderHealthDisplay(entity, hp);
      }
    }
    if (entity.name === "§c§lTentacle King") {
      const hp = Scoreboard.getLines().find((e) => e.name.includes("§cTentacle King"));
      if (!hp) {
        renderHealthDisplay(entity, hp);
      }
    }
    if (entity.name === "§c§lTentacle Echo") {
      const hp = Scoreboard.getLines().find((e) => e.name.includes("§cTentacle Echo"));
      if (!hp) {
        renderHealthDisplay(entity, hp);
      }
    }
    if (entity.name === "§c§lTentacle Zulu") {
      const hp = Scoreboard.getLines().find((e) => e.name.includes("§cTentacle Zulu"));
      if (!hp) {
        renderHealthDisplay(entity, hp);
      }
    }

    if (entity.name.includes("Dropship")) {
      renderHealthDisplay(entity);
      cancel(event);
    }
  }
});

function renderHealthDisplay(entity, hp) {
  if (!hp) {
    Tessellator.drawString(`${entity.name}`, entity.x, entity.y + 2, entity.z, 0xffffff, true, 0.3, false);
  } else {
    Tessellator.drawString(`${hp.name}`, entity.x, entity.y + 15, entity.z, 0xffffff, true, 0.3, false);
  }
}
