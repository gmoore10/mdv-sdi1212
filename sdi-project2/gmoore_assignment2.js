//variables
/**
 * SDI Week 1
 * @author Garrett Moore
 */

/*
I usually wake up every morning to go the gym with a buddy. My alarm goes off at 6AM, I snooze a few times. 
My buddy usually text-messages me at 6:30 to tell me if he's up for it or not. If he doesn't go, 
I don't go (because, that's why!). He didn't text me, so I leave at 6:40 to get there by 7:00 AM.
 */

//Variables
var soldiers = "Soldiers";
var zombies = "horde";
var minutes = 45;
var arrWeapons = ["Handgun", "Shotgun", "Magnum", "Tank"];
var weapons = true;
var roadblocks = true;

//Procedure
var invasionHasBegun = function(infected, clean) {
	var result = infected/clean;
	
	if (result > 0)
	{
		console.log("The zombie invasion has begun.");
	}
	else
	{
		console.log("No zombie invasion ever started.");
	}
}

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

/*

if(alarm === true)
{
	console.log("Alarm is going off");
}
if(minutes >= 40)
{
	console.log(noSnoozeMessage);
}
else
{
	console.log('For ' + me + ', snooze is still an option. So tempting!');
}

if(text === true)
{
	if(friend === "Jim")
	{
		goingOrNotMessage = "I got a text from my friend, " + friend + ". Looks like he's not going. ";
		console.log(goingOrNotMessage);
	}
	else
	{
		goingOrNotMessage = "I got a text, but it wasn't from my friend " + friend + ". Looks like he's still going. ";
	}
}
else
{
	goingOrNotMessage = "No text message, so it looks like my friend will be at the gym. ";
}
console.log(goingOrNotMessage);

if(goingToGym === true && text === true)
{
	goingOrNotMessage = "But I am.";
}
else if(goingToGym === true && text === false)
{
	goingOrNotMessage = "I'll be there too!";
}
else if(goingToGym === false && text === true)
{
	goingOrNotMessage = "Good, because I'm not going either.";
}
else
{
	goingOrNotMessage = "I'm not going either. Lazy morning!";
};
console.log(goingOrNotMessage);
*/
//alert("JavaScript works!");