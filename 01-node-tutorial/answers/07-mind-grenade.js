// 07-mind-grenade.js - Demonstrates that module code runs when required
// This module doesn't export anything, but still executes code

console.log('💥 MIND GRENADE: This code runs immediately when the module is required!');

// Define a function
const addValues = (a, b) => {
    console.log(`The sum of ${a} + ${b} = ${a + b}`);
};

// Call the function right here in the module
addValues(5, 10);

// More code that runs on require
const currentTime = new Date().toLocaleTimeString();
console.log(`Module loaded at: ${currentTime}`);

// Even though we don't export anything, the code above still runs!
// This is important to understand: requiring a module executes all its top-level code
