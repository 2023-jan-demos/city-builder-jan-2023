/* Imports */
import { makeImageURL, renderSlogan } from './utils.js';
/* Get DOM Elements */

const parkDropdown = document.getElementById('park-dropdown');
const parkImage = document.getElementById('park-image');
const parkCountEl = document.getElementById('park-count');
const skylineDropdown = document.getElementById('skyline-dropdown');
const skylineImage = document.getElementById('skyline-image');
const skylineCountEl = document.getElementById('skyline-count');
const sloganButton = document.getElementById('slogan-button');
const sloganInputEl = document.getElementById('slogan-input');
const slogansEl = document.getElementById('slogans');
// State 
let parkCount = 0;
let skylineCount = 0;
let slogans = ['the big apple', 'the windy city', 'the great milwuakee'];

displaySlogans();

// Events
sloganButton.addEventListener('click', () => {
    slogans.push(sloganInputEl.value);

    displaySlogans();
});



parkDropdown.addEventListener('change', () => {
    parkImage.src = makeImageURL('park', parkDropdown.value);
    parkCount++;

    displayStats();
});


skylineDropdown.addEventListener('change', () => {
    skylineImage.src = makeImageURL('skyline', skylineDropdown.value);
    skylineCount++;

    displayStats();
});

/* Display Functions */

// no arguments -- this is impure
function displayStats() {
    // mutate the DOM -- that's a side effect. this is impure
    skylineCountEl.textContent = skylineCount;
    parkCountEl.textContent = parkCount;
}
// (don't forget to call any display functions you want to run on page load!)

// no arguments: impure
// as a rule display function are impure: they append to the DOM
function displaySlogans() {
        // i want to go through the slogans array
    // one by one i want to create an element for that slogan and add it to the DOM
    // when i do the same thing to every item in an array, it's time for a a loop!
    // 99% of the time, if you see an array, it's because it's time to loop.

    // mutate an element _not defined in the function_: impure
    slogansEl.textContent = '';

    for (let slogan of slogans) {
        const newElement = renderSlogan(slogan);
    // - the is another function called `myParentEl.append(myChildEl)` that will inject `myChildEl` into `myParentEl`.
        slogansEl.append(newElement);
    //     - that is how we put new elements into the DOM so the user can see them
    }

}

