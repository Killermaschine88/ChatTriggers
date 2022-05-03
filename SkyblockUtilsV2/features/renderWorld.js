import Settings from "../data/Settings";
global.waypoints = [];

register("renderWorld", () => {
  if (!Settings.waypointShown) return;
  waypoints.forEach((waypoint) => {
    Tessellator.drawString("Vanquisher", waypoint.x, waypoint.y, waypoint.z, 0xffffff, true, 0.7, true);
  });
});
