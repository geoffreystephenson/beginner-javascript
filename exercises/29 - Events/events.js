const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
	console.log('it got clicked');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', function() {
	console.log('Im an anon!');
});
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);

function handleBuyButtonClick(event) {
	console.log('You clicked a button!');
	// console.log(event); // good stuff here
	const button = event.target;
	// console.log(button.textContent);
	// console.log(parseFloat(event.target.dataset.price)); // i like this one!
	console.log(event.target);
	console.log(event.currentTarget);
	console.log(event.target === event.currentTarget);
}

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

// console.log(buyButtons);

// buyButtons.forEach((button) =>
// button.addEventListener('click', handleBuyButtonClick)
// );

buyButtons.forEach(function(buyButton) {
	buyButton.addEventListener('click', handleBuyButtonClick);
	// console.log(buyButton);
});

window.addEventListener(
	'click',
	function(event) {
		console.log('YOU CLICKED THE WINDOW');
		console.log(event);
		console.log(event.target);
		console.log(event.type);
		// event.stopPropagation();
		console.log(event.bubbles);
	},
	{ capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', (e) => {
	console.log(e.currentTarget);
	console.log(this);
	// console.log(e);
});
