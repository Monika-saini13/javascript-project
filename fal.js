let a = prompt("Enter first value:");
let b = prompt("Enter second value:");
let op = prompt("Enter operator (+, -, *, /)");

let isFaulty = Math.random() < 0.1;
let result;

if (isFaulty) {
    // ❌ Faulty calculations
    if (op === "+") result = a - b;
    else if (op === "-") result = a / b;
    else if (op === "*") result = a + b;
    else if (op === "/") result = a ** b;
    else result = "Invalid operator";

    alert("⚠ Faulty Result: " + result);
}
else {
    // ✅ Correct calculations
    if (op === "+") result = a + b;   // string concat (intentional)
    else if (op === "-") result = a - b;
    else if (op === "*") result = a * b;
    else if (op === "/") result = a / b;
    else result = "Invalid operator";

    alert("✅ Result: " + result);
}
