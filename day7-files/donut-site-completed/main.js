// Declare the function
function toggleSprinkles() {
  // First select the DOM node where the class should be applied
  var topping = document.querySelector('.topping');
  //  log a message to the console to confirm that this function is executing
  console.log("toggling sprinkles!");
  // Toggle the class (remove it if it is there; add it if it isn't there)
    // A lot is happening here! See this documentation: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    // First we retrieve the classList property of the DOM element we saved to the variable `topping`
    // The property returns a collection that responds to methods like `toggle`.
  topping.classList.toggle('sprinkles');
}

// Find the button to add/remove sprinkles and save it to a variable
var sprinkleBtn = document.querySelector('.sprinkle-btn');

// Add an event listener that will respond to a mouse click event
// When that event happens, it will execute the `toggleSprinkles` function
sprinkleBtn.addEventListener('click', toggleSprinkles);
