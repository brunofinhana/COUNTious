const counterNumberDisplay = document.querySelector("#counter-number-display")
const counterTitle = document.querySelector("#counter-title")
const subtractBtn = document.querySelector("#subtract-btn")
const addBtn = document.querySelector("#add-btn")
const resetBtn = document.querySelector("#reset-btn")
const resetConfirmation = document.querySelector("#reset-confirmation")

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
    		
	if(counterNumber == 0) {
        return
    } else if(confirm("Are you sure you want to reset the counter?")) {
        counterNumber = 0
        counterNumberDisplay.innerHTML = counterNumber
    } else {
        return
    }

}

// Adding event listeners to buttons
addBtn.addEventListener("click", add)
subtractBtn.addEventListener("click", subtract)
resetBtn.addEventListener("click", reset)