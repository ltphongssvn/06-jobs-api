// 01-intro.js - First Node.js program
// This demonstrates basic console output and JavaScript execution in Node.js

console.log('Hello from Node.js!');
console.log('Current date and time:', new Date().toLocaleString());

// Let's add some basic JavaScript logic
const nodeVersion = process.version;
console.log(`Running on Node.js ${nodeVersion}`);

// A simple calculation to show JavaScript is fully functional
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(`Sum of ${numbers} is ${sum}`);
