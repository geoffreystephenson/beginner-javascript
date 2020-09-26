// console.log('it works!');

const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to hold our state
let items = [];

function handleSubmit(e) {
	e.preventDefault();
	// console.log('SUBMITTED!');
	const name = e.currentTarget.item.value;
	if (!name) return;
	// console.log(name);
	const item = {
		name,
		id: Date.now(),
		complete: false,
	};
	// Push the items into our state
	items.push(item);
	console.log(`There are now ${items.length} in your state`);
	// clear the form
	e.target.reset();
	displayItems();
	// fire off a custom event that will tell anyone else who cares that the items have been updated!
	list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
	// console.log(items);
	const html = items
		.map((item) => {
			// ${item.complete && 'checked'}
			return `<li class="shopping-item">
            <input
                value="${item.id}"
                type="checkbox"
                ${item.complete ? 'checked' : ''}
            >
            <span class="itemName">${item.name}</span>
            <button
                aria-label="Remove ${item.name}"
                value="${item.id}"
            >&times;</button>
        </li>`;
		})
		.join('');
	// console.log(html);
	list.innerHTML = html;
}

function mirrorToLocalStorage() {
	// console.log('mirroring');
	localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
	// pull from local storage
	const lsItems = JSON.parse(localStorage.getItem('items'));
	// console.table(lsItems);
	if (lsItems.length) {
		// items = lsItems;
		items.push(...lsItems);
		list.dispatchEvent(new CustomEvent('itemsUpdated'));
	}
}

function deleteItem(id) {
	// console.log(`DELETING ITEM ${id}`);
	// update our items array without this one
	items = items.filter((item) => item.id !== id);
	// console.log(items);
	list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
	// console.log('Marking as complete', id);
	const itemRef = items.find((item) => item.id === id);
	// console.log(itemRef);
	itemRef.complete = !itemRef.complete;
	list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// Event Delegation: We listen or the click on the list <ul> but then delegate the click over to the button if that is what was clicked
list.addEventListener('click', function(e) {
	const id = parseInt(e.target.value);
	// console.log(e.target, e.currentTarget);
	if (e.target.matches('button')) {
		deleteItem(id);
	}
	if (e.target.matches('input[type="checkbox"]')) {
		markAsComplete(id);
	}
});

restoreFromLocalStorage();
