const counterNumberDisplay = document.querySelector("#counter-number-display")
const subtractBtn = document.querySelector("#subtract-btn")
const addBtn = document.querySelector("#add-btn")
const resetBtn = document.querySelector("#reset-btn")

var counterNumber = 0

// Adding a number
function add() {
    counterNumber++
    counterNumberDisplay.innerHTML = counterNumber
}

// Subtracting a number
function subtract() {
    // Preventing negative numbers
    if (counterNumber <= 0) {
        counterNumber = 0
        // counterNumberDisplay.innerHTML = counterNumber
        return
    } else {
        counterNumber--
        counterNumberDisplay.innerHTML = counterNumber
    }
}

// Resetting the counter
function reset() {
    counterNumber = 0
    counterNumberDisplay.innerHTML = counterNumber
}

// Adding event listeners to buttons
addBtn.addEventListener("click", add)
subtractBtn.addEventListener("click", subtract)
resetBtn.addEventListener("click", reset)