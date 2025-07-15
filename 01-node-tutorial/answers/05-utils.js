// 05-utils.js - Module that exports a single function
// This pattern is common for utility modules

// Define a function that we'll export
const sayHi = (name) => {
    const greeting = `Hello there, ${name}!`;
    console.log(greeting);
    return greeting;
};

// When exporting a single item, we can assign directly to module.exports
module.exports = sayHi;

// This will run when the module is first required
console.log('05-utils.js module loaded!');
