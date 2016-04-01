alert('It is the zombie apocalypse. you are looting a store and suddenly a zombie bursts through the door!');
var weapon = prompt('You search around frantically for a weapon. What do you choose?');

alert('You attack the zombie with your ' + weapon);

var randomNumber = Math.round(Math.random());

if (randomNumber === 0) {
	alert('The zombie bites you. You lose!!!');
} else {
	alert('You kill the zombie with your ' + weapon);
}