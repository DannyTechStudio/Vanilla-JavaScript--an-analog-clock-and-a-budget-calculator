//Selecting elements from the DOM
const incomeInput = document.getElementById("income-input");
const calculateBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const needsOutput = document.getElementById("needs-output");
const wantsOutput = document.getElementById("wants-output");
const saveInvestOutput = document.getElementById("save-invest-output");
const errorMgs = document.getElementById("error-message");
const outputContainer = document.querySelector(".output-container");
const congratMsg = document.getElementById("congrat-message");

//Event listener for calculate button
calculateBtn.addEventListener("click", () => {
    const income = incomeInput.value.trim();

    if (income === "") {
        errorMgs.style.display = "block";
        errorMgs.textContent = "Please fill out this field.";

        setTimeout(() => {
            errorMgs.style.display = "none";
            errorMgs.textContent = "";
        }, 3000);
    }
    else if (isNaN(income) || income < 0) {
        errorMgs.style.display = "block";
        errorMgs.textContent = "Please enter a valid income";

        setTimeout(() => {
            errorMgs.style.display = "none";
            errorMgs.textContent = "";
        }, 3000);
    } else {
        outputContainer.style.display = "flex";

        let needs = 0.5 * income;
        needsOutput.textContent = `🏠Needs: ${needs.toFixed(2)}`;

        let wants = 0.3 * income;
        wantsOutput.textContent = `🎁Wants: ${wants.toFixed(2)}`;

        let saveInvest = 0.2 * income;
        saveInvestOutput.textContent = `💵Savings & Investments: ${saveInvest.toFixed(2)}`;

        congratMsg.style.display = "block";
    }
});

//Event listener for reset button
resetBtn.addEventListener("click", () => {
    incomeInput.value = "";
    errorMgs.style.display = "none";
    needsOutput.textContent = "🏠Needs: $0.00";
    wantsOutput.textContent = "🎁Wants: $0.00";
    saveInvestOutput.textContent = "💵Savings & Investments: $0.00";
    outputContainer.style.display = "none";
    congratMsg.style.display = "none";
});

