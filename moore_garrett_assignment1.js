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
var me = "Garrett";
var friend = 'Jim';
var noSnoozeMessage = 'It\'s too late to snooze now!';
var alarm = true;
var text = false;
var latestTimeToWakeUp = 40;
var minutes = 40;
var goingToGym = true;
var goingOrNotMessage = "";

console.log("Good Morning, " + me);
console.log("Is the alarm going off? " + alarm);
console.log("Alarm started at 6AM. How many minutes have passed? " + minutes);
console.log("Since I have to wake up at 6:" + latestTimeToWakeUp + "AM or greater, and since it's been " + minutes + " minutes, I have to tell myself: " + noSnoozeMessage);
console.log("I did not receive a text. " + text);
console.log("Am I going to the gym? " + goingToGym);

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

//alert("JavaScript works!");