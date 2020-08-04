// Function definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
	// this is the function body
	// console.log('Running calculate bill');
	const total = billAmount + billAmount * taxRate + billAmount * tipRate;
	return total;
}

// Function call or run
const myTotal = calculateBill(100, 0.13);
// console.log(myTotal);

// console.log(`Your total is $${calculateBill(100, 0.13)}`);

// Function definition
function sayHiTo(firstName) {
	return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Wes');
// console.log(greeting);

// const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.13);
// console.log(myTotal3);

function doctorize(name = '') {
	return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
	return `HEY ${name.toUpperCase()}`;
}

// console.log(yell(doctorize('wes')));

const myTotal4 = calculateBill(100);
console.log(myTotal4);
