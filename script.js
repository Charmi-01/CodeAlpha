const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

// Function to update display
function updateDisplay(value) {
    display.textContent = value || "0";
}

// Button Click Handling
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        const action = button.dataset.action;

        // If number/operator pressed
        if (value) {
            currentInput += value;
            updateDisplay(currentInput);
        }

        // Clear button
        if (action === "clear") {
            currentInput = "";
            updateDisplay("0");
        }

        // Equals button
        if (action === "equals") {
            try {
                currentInput = eval(currentInput).toString();
                updateDisplay(currentInput);
            } catch {
                updateDisplay("Error");
                currentInput = "";
            }
        }
    });
});

// ✅ Bonus: Keyboard Support
document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Numbers and operators
    if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", "."].includes(key)) {
        currentInput += key;
        updateDisplay(currentInput);
    }

    // Enter = Calculate
    if (key === "Enter") {
        try {
            currentInput = eval(currentInput).toString();
            updateDisplay(currentInput);
        } catch {
            updateDisplay("Error");
            currentInput = "";
        }
    }

    // Escape = Clear
    if (key === "Escape") {
        currentInput = "";
        updateDisplay("0");
    }
});