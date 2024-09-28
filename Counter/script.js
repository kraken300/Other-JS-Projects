const addBtn = document.body.querySelector(".plus");
const subtractBtn = document.body.querySelector(".minus");
const countDisplay = document.body.querySelector(".countDisplay");
const inputNum = document.body.querySelector("#inputNum");
const resetBtn = document.body.querySelector(".reset");
const errorDisplay = document.body.querySelector(".errorDisplay");
inputNum.value = 0;

function updateCount(newCount) {
    countDisplay.innerText = newCount;
}

function showError(errorMessage){
    errorDisplay.innerText = errorMessage;
    setTimeout(() => {
        errorDisplay.innerText = "";
    }, 1000)
}

addBtn.addEventListener("click", () => {
    const increment = parseInt(inputNum.value);
    if (isNaN(increment)) {
        showError("Please enter a valid number!");
    }
    else {
        const count = parseInt(countDisplay.innerText);
        updateCount(count + increment);
    }
})

subtractBtn.addEventListener("click", () => {
    const decrement = parseInt(inputNum.value);
    if (isNaN(decrement)) {
        showError("Please enter a valid number!");
    }
    else {
        const count = parseInt(countDisplay.innerText);
        updateCount(count - decrement);
    }
})

resetBtn.addEventListener("click", () => {
    updateCount(0);
    inputNum.value = "0";
})