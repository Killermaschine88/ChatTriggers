const Mc = Client.getMinecraft();
const EntityArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand")
global.damageText = []

register("renderEntity", (entity, pos, idk, event) => {
	if(entity.name.includes("✧") || !isNaN(Number(entity.name.replace("§", "")))) {
		cancel(event)
		if(damageText.find(dmg => dmg.name === entity.name && dmg.x === entity.x && dmg.y === entity.y && dmg.z === entity.z)) return;
		damageText.push({name: entity.name, x: entity.x, y: entity.y, z: entity.z})
	}
})

register("step", () => {
	damageText = [] //to clear them after 3 sec doesnt work atm either :/
}).setDelay(3)
