// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression
// const doctorize = function(firstName) {
// 	return `Dr. ${firstName}`;
// };

// const inchToCm = function(inches) {
// 	return (cm = inches * 2.54);
// };

const inchToCm = (inches) => (cm = inches * 2.54);

// function add(a, b = 3) {
// 	const total = a + b;
// 	return total;
// }

const add = (a, b = 3) => a + b;

// returning an object

// function makeABaby(first, last) {
// 	const baby = {
// 		name: `${first} ${last}`,
// 		age: 0,
// 	};
// 	return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression

(function(age) {
	return `You are cool and age ${age}`;
})(10);

// Methods!!!
const wes = {
	name: 'Wes Bos',
	// Method!
	sayHi: function() {
		console.log('Hey Wes');
		return 'Hey Wes';
	},
	// Short hand method
	yellHi() {
		console.log('HEY WESSS');
	},
	// Arrow function
	whisperHi: () => {
		console.log('hi wesss i am a mouse');
	},
};

// Callback functions
// Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
	console.log(wes.yellHi());
}

// button.addEventListener('click', handleClick);

button.addEventListener('click', function() {
	console.log('Nice job');
});

// Timer Callback
setTimeout(() => {
	console.log('DONE! Time to eat!');
}, 1000);
