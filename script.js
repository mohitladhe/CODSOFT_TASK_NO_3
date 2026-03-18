const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");

let expression = "";

// Add click event to buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "C") {
            expression = "";
            screen.value = "";
        } 
        else if (value === "⌫") {
            expression = expression.slice(0, -1);
            screen.value = expression;
        } 
        else if (value === "=") {
            try {
                expression = eval(expression).toString();
                screen.value = expression;
            } catch {
                screen.value = "Error";
                expression = "";
            }
        } 
        else {
            expression += value;
            screen.value = expression;
        }
    });
});

// Keyboard Support
document.addEventListener("keydown", (e) => {
    if ((e.key >= 0 && e.key <= 9) || ["+", "-", "*", "/", "."].includes(e.key)) {
        expression += e.key;
        screen.value = expression;
    } 
    else if (e.key === "Enter") {
        try {
            expression = eval(expression).toString();
            screen.value = expression;
        } catch {
            screen.value = "Error";
            expression = "";
        }
    } 
    else if (e.key === "Backspace") {
        expression = expression.slice(0, -1);
        screen.value = expression;
    } 
    else if (e.key === "Escape") {
        expression = "";
        screen.value = "";
    }
});