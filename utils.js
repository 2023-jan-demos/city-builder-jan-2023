export function makeImageURL(location, value) {
    return `assets/${location}-${value}-.png`;
}


// render is a pure function that takes in data and returns a DOM element.
export function renderSlogan(slogan) {
    // - there is a function called `createElement('p')` that will create a <p> for us
    const newElement = document.createElement('p');
    // mutating an element _defined inside the function_: pure operation -- this does not make the function impure
    newElement.classList.add('slogan');
    newElement.textContent = slogan;

    return newElement;
}