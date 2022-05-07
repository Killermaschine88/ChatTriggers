import Settings from "../data/Settings";
import * as MathUtils from "./../utils/MathUtils";
global.waypoints = [];

register("renderWorld", () => {
  if (Settings.waypointShown) {
    waypoints.forEach((waypoint) => {
      if (Settings.displayWaypointDistance) {
        Tessellator.drawString(`Vanquisher, ${MathUtils.getDistanceToPlayer(waypoint)}m`, waypoint.x, waypoint.y, waypoint.z, 0xffffff, true, 1, true);
      } else {
        Tessellator.drawString(`Vanquisher`, waypoint.x, waypoint.y, waypoint.z, 0xffffff, true, 1, true);
      }
    });
  }

  if (Settings.customDamageSplash) {
    if (global.damageText.length === 0) return;
    if(Settings.customDamageType === "Hidden") return
    global.damageText.forEach((dmg) => {
      Tessellator.drawString(`${dmg.name}`, dmg.x, dmg.y, dmg.z, 0xffffff, true, getDmgScale(Settings.customDamageType), false);
    });
  }
});

function getDmgScale(type) {
  if(type === "Big") return 0.05
  if(type === "Normal") return 0.03
  if(type === "Small") return 0.01
  if(type === "Custom") {
    return (Settings.customDamageScale / 1666).toFixed(2)
  }
}