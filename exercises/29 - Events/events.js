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
}

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

// console.log(buyButtons);

// buyButtons.forEach((button) =>
// button.addEventListener('click', handleBuyButtonClick)
// );

buyButtons.forEach(function(buyButton) {
	buyButton.addEventListener('click', handleBuyButtonClick);
});
