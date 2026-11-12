console.log("Hello from script.js!");
// Get HTML Elements
let form = document.querySelector("#menu-form");
let menuInput = document.querySelector("#menu-input");
let count = document.querySelector("#count");
let menuText = document.querySelector("#menu-text");

function handleSubmit(event) {
    event.preventDefault();
    let menu = JSON.parse(menuInput.value);
    count.textContent = "We have " + menu.length + " items on the menu Today.";
}

form.addEventListener("submit", handleSubmit);
