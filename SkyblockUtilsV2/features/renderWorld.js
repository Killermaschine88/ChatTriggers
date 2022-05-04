import Settings from "../data/Settings";
global.waypoints = [];

register("renderWorld", () => {
  if (!Settings.waypointShown) return;
  waypoints.forEach((waypoint) => {
    if (Settings.displayWaypointDistance) {
      Tessellator.drawString(`Vanquisher\n${Math.hypot(waypoint.x - Player.getX(), waypoint.y - Player.getY(), waypoint.z - Player.getZ())}`, waypoint.x, waypoint.y, waypoint.z, 0xffffff, true, 0.7, true);
    } else {
      Tessellator.drawString(`Vanquisher`, waypoint.x, waypoint.y, waypoint.z, 0xffffff, true, 0.7, true);
    }
  });
});
