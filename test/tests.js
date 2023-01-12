// import functions under test
import { renderSlogan } from '../utils.js';

const test = QUnit.test;

test('renderSlogan should take in a string and return a proper p tag', (expect) => {
    // Arrange
    const expected = '<p class="slogan">the city that commutes!</p>';

    // Act
    const actual = renderSlogan('the city that commutes!');

    console.log(actual.outerHTML);
    // Assert
    // we are comparing a string (expected) the stringified version of our actual result
    // why not use our actual result on its own? because it is hard to "compare" a DOM element.
    // strings, on the other hand, are easy to compare
    expect.deepEqual(actual.outerHTML, expected);
});
