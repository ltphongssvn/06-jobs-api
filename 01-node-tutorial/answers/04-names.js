// 04-names.js - Module that exports multiple values in an object
// This demonstrates the most common pattern for exporting multiple items

// Define some values to export
const john = 'John Doe';
const peter = 'Peter Smith';

// Secret name - we'll keep this private to show not everything needs to be exported
const secretName = 'Secret Agent 007';

// Export multiple values as properties of an object
// This is the most common pattern in Node.js modules
module.exports = {
    john: john,
    peter: peter,
    // Using ES6 shorthand property syntax (when key and value have same name)
    favoriteFood: 'pizza',
    favoriteNumber: 42
};

// Note: secretName is NOT exported, so it remains private to this module
console.log('04-names.js module loaded! (This runs when required)');
