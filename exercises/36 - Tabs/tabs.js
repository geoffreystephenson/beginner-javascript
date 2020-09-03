// console.log('ya ya wes we get it.. IT WORKS!');

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
	// console.log(event.currentTarget);
	// hide all tab panels
	// console.log(tabPanels);
	tabPanels.forEach((panel) => (panel.hidden = true));
	// mark all tabs as unselected
	tabButtons.forEach((tab) => tab.setAttribute('aria-selected', false));
	// mark the clicked tab as selected
	event.currentTarget.setAttribute('aria-selected', true);
	// find the associate tabPanel and show it!
	const { id } = event.currentTarget;

	/*
        METHOD 1
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    // console.log(tabPanel);
    tabPanel.hidden = false;
    */

	// METHOD 2 - find in the array of tabPanels
	// console.log(tabPanels);
	const tabPanel = tabPanels.find(
		(panel) => panel.getAttribute('aria-labelledby') === id
	);
	tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
	button.addEventListener('click', handleTabClick)
);
