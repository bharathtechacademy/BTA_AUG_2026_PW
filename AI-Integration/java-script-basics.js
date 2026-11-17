// One simple function for common math operations
function calculate(a, operator, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Cannot divide by zero";
            }
            return a / b;
        default:
            return "Invalid operator";
    }
}

// Simple examples
console.log(calculate(10, "+", 5)); // 15
console.log(calculate(10, "-", 5)); // 5
console.log(calculate(10, "*", 5)); // 50
console.log(calculate(10, "/", 5)); // 2
console.log(calculate(10, "^", 5)); // Invalid operator

