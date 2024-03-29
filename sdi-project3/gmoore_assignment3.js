//variables
/**
 * SDI Week 3
 * @author Garrett Moore
 */

//Variables
var invasionBegun = false;
var soldiers = "Soldiers";
var zombies = "horde";
var minutes = 45;
var arrWeapons = ["Handgun", "Shotgun", "Magnum", "Tank"];
var weapons = true;
var roadblocks = true;

var vehicle = {    
	name: "Jeep",
	maintenance: [
		flatTire = {
			frontOrBack: "back",
			leftOrRight: "right"
		},
		oilChange = {
			engineType: "Gasoline",
			oilType: "SW-50"
		}
	],
	isFitForDuty: false,
};

var json = { "weapons": 
				{ "Tank": {
					"NumberOfWeapons": 2,
					"canSpare": false
					},
				  "Shotgun": {
						"NumberOfWeapons": 34,
						"canSpare": true
					},
					"Magnum": {
						"NumberOfWeapons": 1,
						"canSpare": false
					}
					
				}
}


//Procedure
var invasionHasBegun = function(infected, clean) {
	var result = infected/clean;
	
	if (result > 0)
	{
		invasionBegun = true;
		console.log("The zombie invasion has begun.");
		if (result < 1) { //nested coniditional
			console.log("We might survive this!");	
		} else {
			console.log("We could be in a lot of trouble...");	
		}
	}
	else
	{
		console.log("No zombie invasion ever started.");
	}
};

// My Boolean Function
var defenseReady = function (roadblocks, weapons) {	
	if (roadblocks === true && weapons === true) {
		console.log("We have assembled the roadblocks and requisitioned enough weapons to fight back!");
		return true;
	}
	else
	{
		console.log("We need more roadblocks and weapons!");	
		return false;
	}
};

//Number Function
var stopTheHorde = function(minutes) {
	while (minutes >= 0) {
		
		if (minutes > 0) {
			console.log("We still have " + minutes + " minutes before reinforcements arrive!");
		} else {
			console.log("Reinforcements have arrived! We are safe again!");
		};
		minutes = minutes - 5
	};
	return minutes;
};

//My String function
var announceBattle = function(string1,string2) {
	var announcement = "Attention " + string1 + ": Prepare to fight the " + string2 + ".";
	console.log(announcement);
	return announcement;
}

// My Array Function
var destroyTheHorde = function(weaponCount, weapons){
	var zombieCount = 200;
	
	for (var i=0, j=weaponCount; i<j; i++) {
		zombieCount = zombieCount - 50;
		console.log("Someone used a " + weapons[i] + " and managed to kill 50 zombies!");
		console.log(zombieCount + " zombies remain.");
	}
	return weapons;
};

invasionHasBegun(50, 9000); //Procedure Call
var booleanResult = defenseReady(weapons, roadblocks); //Boolean Call

console.log("We are holding the roadblocks on the east side of town, but the west has lost their roadblock.");
console.log("Reinforcements have been sent, but won't arrive for another " + minutes + " minutes.");
console.log("Hold them off until then.");

var numberResult = stopTheHorde(minutes); //Number Call

console.log("Because we had to wait " + minutes + " minutes for backup, too many people have become infected inside the base.");
console.log("We have to kill anyone that has an infection because they're starting to attack us.");

var stringResult = announceBattle(soldiers, zombies); //String Call
var arrayResult = destroyTheHorde(arrWeapons.length, arrWeapons); // Array Call

console.log("Boolean Result: " + booleanResult);
console.log("Number Result: " + numberResult);
console.log("String Result: " + stringResult);
console.log("Array Result: " + arrayResult);