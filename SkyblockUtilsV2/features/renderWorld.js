import Settings from "../data/Settings";
import * as MathUtils from "./../utils/MathUtils";
global.waypoints = [];

register("renderWorld", () => {
  if (Settings.waypointShown) {
    waypoints.forEach((waypoint) => {
      if (Settings.displayWaypointDistance) {
        Tessellator.drawString(`Vanquisher, ${MathUtils.getWaypointDistance(waypoint)}m`, waypoint.x, waypoint.y, waypoint.z, 0xffffff, true, 1, true);
      } else {
        Tessellator.drawString(`Vanquisher`, waypoint.x, waypoint.y, waypoint.z, 0xffffff, true, 1, true);
      }
    });
  }

  if(global.damageText.length != 0) {
      global.damageText.forEach((dmg) => {
		  Tessellator.drawString(`${dmg.name}`, dmg.x, dmg.y, dmg.z, 0xffffff, true, 0.03, false);
	  });
  };
	
});
