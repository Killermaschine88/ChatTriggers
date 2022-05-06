import Settings from "../data/Settings";
import * as MathUtils from "./../utils/MathUtils";
global.waypoints = [];

register("renderWorld", () => {
  if (!Settings.waypointShown) return;
  waypoints.forEach((waypoint) => {
    if (Settings.displayWaypointDistance) {
      Tessellator.drawString(`Vanquisher, ${MathUtils.getWaypointDistance(waypoint)}m`, waypoint.x, waypoint.y, waypoint.z, 0xffffff, true, 1, true);
    } else {
      Tessellator.drawString(`Vanquisher`, waypoint.x, waypoint.y, waypoint.z, 0xffffff, true, 1, true);
    }
  });
});
