/*:
*
*
*
*
*
*
*/
var crystalCircle = "";
var doors = "";



Game_Interpreter.prototype.pluginCommand = function(command, args) {
    if (command === 'NatCrystalCircle') this.setNatCrystalCircle(args);
    if (command === 'NatDoors') this.setNatDoor(args);
    if (command === 'NatActive') this.NatActive();
    if (command === 'NatClear') this.NatClear();
};

Game_Interpreter.prototype.setNatCrystalCircle = function(args) {
	var text = '';
    for (var i = 0; i < args.length; ++i) {
        text = text + args[i];
    }
    this.crystalCircle += text + ",";
};

Game_Interpreter.prototype.setDoors = function(args) {
	var text = '';
    for (var i = 0; i < args.length; ++i) {
        text = text + args[i];
    }
    this.doors = text;
};

Game_Interpreter.prototype.NatActive = function() {
	if($gameMap.event(this._eventId).x === $gameMap.event(001).x && $gameMap.event(this._eventId).y === $gameMap.event(001).y){
    $gameMessage.add("Open the door!");
}
};

Game_Interpreter.prototype.NatClear = function() {
	// body...
};