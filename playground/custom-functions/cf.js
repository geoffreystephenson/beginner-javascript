// Function definition
function calculateBill() {
	// this is the function body
	console.log('Running calculate bill');
	const total = 100 * 1.13;
	return total;
}

// Function call or run
const myTotal = calculateBill();
console.log(myTotal);

console.log(`Your total is $${calculateBill()}`);
