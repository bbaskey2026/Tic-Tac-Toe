function Calculator(a, b) {
    this.addition = function() {
        return a + b;
    };

    this.subtraction = function() {
        return a - b;
    };

    this.multiplication = function() {
        return a * b;
    };

    this.division = function() {
        if (b === 0) {
            return "Division by zero is not allowed";
        }
        return a / b;
    };
}
const calc = new Calculator(10, 2);

console.log("Addition:", calc.addition());           // Output: 12
console.log("Subtraction:", calc.subtraction());     // Output: 8
console.log("Multiplication:", calc.multiplication()); // Output: 20
console.log("Division:", calc.division());           // Output: 5
