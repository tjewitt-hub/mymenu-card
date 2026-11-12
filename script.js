console.log("Hello from script.js!");
// Get HTML Elements
let form = document.querySelector("#menu-form");
let menuInput = document.querySelector("#menu-input");
let count = document.querySelector("#count");
let menuText = document.querySelector("#menu-text");

// Declaring the handleSubmit function
function handleSubmit(event) {
    //Prevents the page reload after clicking the submit button
    event.preventDefault();
    // JSON.parse() converts JSON to an object - input.value captures the user input from the form
    let menu = JSON.parse(menuInput.value);
    // Use textContent to inject text into the count paragraph
    count.textContent = "We have " + menu.length + " items on the menu Today.";
    menuText.textContent = "";
    for (let i = 0; i < menu.length; i++) {
        menuText.textContent = menuText.textContent + menu[i].name + " - $" + menu[i].price + "\n";
    }
}

// Add an event listener to the form that listens for the submit event and calls the handleSubmit function
form.addEventListener("submit", handleSubmit);
