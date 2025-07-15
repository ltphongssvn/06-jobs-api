// 06-alternative-flavor.js - Alternative way to export multiple values
// This shows how to add exports one at a time

// Instead of creating an object and assigning to module.exports all at once,
// we can add properties to the exports object incrementally

// First export
module.exports.items = ['item1', 'item2', 'item3'];

// Add another export
module.exports.singlePerson = {
    name: 'Susan',
    age: 25
};

// We can even add functions this way
module.exports.greet = function(name) {
    return `Greetings, ${name}!`;
};

console.log('06-alternative-flavor.js module loaded!');
