## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Look at the drawing and name the HTML elements you'll need to realize your vision**
1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

## HTML Setup
- two categories
    - change state
    - display state
- three dropdown menus (?) 
    - why? let the user select options for the images
    - why? to find out what the user selected?
        - how? `selectEl.value`
- slogan button
    - why? let the user submit their input
        - how? `buttonEl.addEventListener('click', () => {})`
- slogan input field <input />
    - why? to let the user type their slogan
    - why? to find out what the user typed
        - how? `inputEl.value`
    - why? to track a list of all the user's slogans
        - how? `myArray.push(inputEl.value)`
- three <img />
    - why? to show the user's selections visually (from state)
        - how? `imgEl.src = someImgURL`
- div for slogans
    - why? to list the slogans (from state)
        - how? it's complicated. we'll come back to this

## State
- waterfront option
- skyline option
- park option
- list of slogans

## Slices of work / distinct features
- 3 dropdowns change state and update and images
    - working one dropdown at a time
        - we need to build the first dropdown in HTML with id/values (done)
        - add an image in HTML (done)
        - then we need to grab that dropdown in our app.js (done)
        - then we need to add a change event listener to the dropdown (done)
        - then, in the change listener, we need to figure out what the user selected (done)
        - finally, we need to use the user selection to change to a matching image
            - grab that image in app.js (done)
            - change that img's src property
        - move on to the next dropdown
- keep track of how many times each dropdown has been changed and display that on the page
    - working one dropdown at a time
        - we already have an event listener, thanks to our previous slice (done)
        - we need to add some state for the parkCount (start at 0) (done)
        - in the event listener, we increment the parkCount (done)
        - after we increment the park count, we display the count on the site
            - grab an HTML element (done)
            - change its textContent (done)
- we track a list of what the user typed and display that list
    - we need to initialize slogans state as an empty array (done)
    - we need to add an input element and button to the HTML (done)
    - we need to grab the input el and button el in app.js (done)
    - we need to add an event listener to the button (done)
    - on click, we need to figure out what the user typed (done)
    - we take what the user typed and put it into the state array (done)
    - finally, we add the slogan to the DOM (hard part)
        - we recognize there may be more than one slogan. let's keep that in mind.
        - for now, let's just add the most recent slogan to the DOM.
            - there is a function called `createElement('p')` that will create a <p> for us
            - the is another function called `myParentEl.append(myChildEl)` that will inject `myChildEl` into `myParentEl`.
                - that is how we put new elements into the DOM so the user can see them