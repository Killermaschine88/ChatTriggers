

const Mc = Client.getMinecraft();
const wither = Java.type("net.minecraft.entity.boss.EntityWither")

let kuudra;
register("Step", () => {
    World.getAllEntitiesOfType(wither).forEach(entity =>{
        kuudra = entity;
    })
}).setDelay(1)