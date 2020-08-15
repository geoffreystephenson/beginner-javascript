const wes = document.querySelector('.wes');

// console.log(wes.children);
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling); // jQuery prev
// console.log(wes.nextElementSibling); // jQuery next
// console.log(wes.parentElement);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

// p.remove();

wes.remove();

console.log(wes);

document.body.appendChild(wes);

// document.body.appendChild(p);
