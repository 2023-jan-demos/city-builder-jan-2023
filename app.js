/* Imports */

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
    parkImage.src = `assets/park-${parkDropdown.value}.png`;
    parkCount++;

    displayStats();
});


skylineDropdown.addEventListener('change', () => {
    skylineImage.src = `assets/skyline-${skylineDropdown.value}.png`;
    skylineCount++;

    displayStats();
});

/* Display Functions */

function displayStats() {
    skylineCountEl.textContent = skylineCount;
    parkCountEl.textContent = parkCount;
}
// (don't forget to call any display functions you want to run on page load!)

function displaySlogans() {
        // i want to go through the slogans array
    // one by one i want to create an element for that slogan and add it to the DOM
    // when i do the same thing to every item in an array, it's time for a a loop!
    // 99% of the time, if you see an array, it's because it's time to loop.
    slogansEl.textContent = '';

    for (let slogan of slogans) {
    // - there is a function called `createElement('p')` that will create a <p> for us
        const newElement = document.createElement('p');
        newElement.classList.add('slogan');
        newElement.textContent = slogan;
    // - the is another function called `myParentEl.append(myChildEl)` that will inject `myChildEl` into `myParentEl`.
        slogansEl.append(newElement);
    //     - that is how we put new elements into the DOM so the user can see them
    }

}