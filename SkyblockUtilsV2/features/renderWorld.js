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
});
