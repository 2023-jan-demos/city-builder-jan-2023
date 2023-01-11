/* Imports */

/* Get DOM Elements */
const selectEl = document.getElementById('my-select');
const inputEl = document.getElementById('my-input');
const buttonEl = document.getElementById('my-button');
const animalEl = document.getElementById('animal');
/* State */

let animal = '';
/* Events */
selectEl.addEventListener('change', () => {
    // if (selectEl.value === 'dog-value') {
    //     alert('woof woof!');
    // } else {
    //     alert('no dogs here'); 
    // }

    animal = selectEl.value;

    animalEl.textContent = `This user loves the ${animal}`;
});


buttonEl.addEventListener('click', () => {
    console.log(inputEl.value);
    alert(inputEl.value);
    sendItToADatabase(inputEl.value);
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
