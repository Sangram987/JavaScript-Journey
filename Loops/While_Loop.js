// Example: Using a while loop to sum numbers until the user enters 0

// This will work in Node.js or browser console
let sum = 0;
let input;

// Simulate user input for demonstration (replace with prompt() in browser)
const inputs = [5, 10, -3, 0]; // Example sequence of inputs
let index = 0;

// While loop runs until the user enters 0
while (true) {
    input = inputs[index++]; // Simulated input
    console.log(`User entered: ${input}`);

    // Validate input is a number
    if (typeof input !== "number" || isNaN(input)) {
        console.log("Invalid input. Please enter a valid number.");
  

    if (input === 0) {
        break; 
    }

    sum += input;
}

console.log(`Total sum: ${sum}`);