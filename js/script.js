//  takhle udělám komentář na jeden řádek
/*
komentáře
na více
řádků
*/

var doCoolStuff = function() {
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';	
	} else {
		document.getElementById('cool').className = 'cool';	
	}
	// changing class name
	
}
var sayMyName = function (name) {
	alert('My name is ' +name);
}

var car = {
	make: 'VolkswagenW',
	type: 'Golf',
	series: 'VI',
	color: 'white',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: [
		'seat 1',
		'seat 2',
		'seat 3',
		'seat 4'
	],
	turnOn: function() {
		this.isTurnedOn = true;
	},
	fly: function() {
		alert('fly');
	},
	switchCar: function(isOn) {
		console.log('turn car '+isOn)
			;
		if (isOn == true) {
			this.isTurnedOn = true;
		} else {
			this.isTurnedOn = false;
		}
	}
};
console.log('Hello there friends!');