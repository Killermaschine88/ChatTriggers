import Settings from "../data/Settings";
global.waypoints = [];

register("renderWorld", () => {
  if (!Settings.waypointShown) return;
  waypoints.forEach((waypoint) => {
    Tessellator.drawString(`Vanquisher ${Settings.displayWaypointDistance ? `\n${Math.hypot(waypoint.x - Player.getX(), waypoint.y - Player.getY(), waypoint.z - Player.getZ())}m` : ""}`, waypoint.x, waypoint.y, waypoint.z, 0xffffff, true, 0.7, true);
  });
});
