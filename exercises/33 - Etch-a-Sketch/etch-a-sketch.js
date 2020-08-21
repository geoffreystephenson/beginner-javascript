// console.log('it works!');

// Select the canvas on the page
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// Setup our canvas for drawing
const { width, height } = canvas;

// create random starting points
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({ key }) {
	// console.log(key);

	// increment the hue
	hue += 1;
	// console.log(hue);
	// ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

	ctx.beginPath();
	ctx.moveTo(x, y);

	// move accordingly
	switch (key) {
		case 'ArrowUp':
			y -= MOVE_AMOUNT;
			break;
		case 'ArrowDown':
			y += MOVE_AMOUNT;
			break;
		case 'ArrowLeft':
			x -= MOVE_AMOUNT;
			break;
		case 'ArrowRight':
			x += MOVE_AMOUNT;
			break;
		default:
			break;
	}
	ctx.lineTo(x, y);
	ctx.stroke();
}

// Write a handler for the keys
function handleKey(e) {
	if (e.key.includes('Arrow')) {
		e.preventDefault();
		draw({ key: e.key });
	}
}

// Clear/Shake function
function clearCanvas() {
	canvas.classList.add('shake');
	ctx.clearRect(0, 0, width, height);
	canvas.addEventListener(
		'animationend',
		function() {
			// console.log('Done the shake!');
			canvas.classList.remove('shake');
		},
		{ once: true }
	);
}

// Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
