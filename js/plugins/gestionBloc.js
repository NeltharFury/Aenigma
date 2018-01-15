/*:
*
* @plugindesc This is a plugin for aenigma. Use for modify the room in the game.
*
* @author Nathan Latino
*
* @help
*
*/

if($gameMap.event(this._eventId).x === $gameMap.event(001).x && $gameMap.event(this._eventId).y === $gameMap.event(001).y){
    $gameMessage.add("Open the door!");
}