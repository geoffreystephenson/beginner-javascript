// console.log('it works!');

function wait(ms = 0) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
	let myPopup = popup;
	popup.classList.remove('open');
	await wait(1000);
	// remove the popup entirely
	popup.remove();
	myPopup = null;
}

function ask(options) {
	return new Promise(async function(resolve) {
		// First we need to create a popup with all the fields in it
		const popup = document.createElement('form');
		popup.classList.add('popup');
		popup.insertAdjacentHTML(
			'afterbegin',
			`
            <fieldset>
                <label>${options.title}</label>
                <input type="text" name="input">
                <button type="submit">Submit</button>
            </fieldset>
        `
		);

		// Check if they want a cancel button
		if (options.cancel) {
			const skipButton = document.createElement('button');
			skipButton.type = 'button';
			skipButton.textContent = 'Cancel';
			popup.firstElementChild.appendChild(skipButton);

			// TODO: listen for a click on that cancel button
			skipButton.addEventListener(
				'click',
				function() {
					resolve(null);
					destroyPopup(popup);
				},
				{ once: true }
			);
		}
		// listen for a submit event on the inputs
		popup.addEventListener(
			'submit',
			function(e) {
				e.preventDefault();
				resolve(e.target.input.value);
				// remove it from the DOM entirely
				destroyPopup(popup);
			},
			{ once: true }
		);

		// when someone does submit, we want to resolve the form data

		// insert that popup into the DOM
		document.body.appendChild(popup);
		// put a very small timeout before we add the open class

		await wait(50);
		popup.classList.add('open');
	});
}

async function askQuestion(e) {
	const button = e.currentTarget;
	const cancel = 'cancel' in button.dataset;
	// const cancel = button.hasAttribute('data-cancel');
	const answer = await ask({
		title: button.dataset.question,
		cancel,
	});
	console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => button.addEventListener('click', askQuestion));

const questions = [
	{ title: 'What is your name?' },
	{ title: 'What is your age?', cancel: true },
	{ title: 'What is your dogs name?' },
];

// Promise.all([ask(questions[0]), ask(questions[1]), ask(questions[2])]).then(
// 	(answers) => {
// 		console.log(answers);
// 	}
// );

async function asyncMap(array, callback) {
	// make an array to store our results
	const results = [];
	// loop over our array
	for (const item of array) {
		const result = await callback(item);
		results.push(result);
	}
	// when we are done with the loop, return it
	return results;
}

async function go() {
	const answers = await asyncMap(questions, ask);
}

go();

// async function askMany() {
// 	for (const question of questions) {
// 		const answer = await ask(question);
// 		console.log(answer);
// 	}
// }

// askMany();
