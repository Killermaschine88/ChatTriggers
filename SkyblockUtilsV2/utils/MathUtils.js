

/**
 * Calculates the Distance between a waypoint and the Player.
 * 
 * @param {Obj} waypoint Waypoint Object
 * @returns {int} Distance to The Player
 */
export function getWaypointDistance(waypoint) {
    let wx = waypoint.x;
    let wy = waypoint.y;
    let wz = waypoint.z;
    let dist = Math.floor(Math.hypot(wx - Player.getX(),wy - Player.getY(),wz - Player.getZ()))
    return dist;
}