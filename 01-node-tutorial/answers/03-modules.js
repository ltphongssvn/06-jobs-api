// 03-modules.js - Main program that demonstrates the CommonJS module system
// This file requires (loads) all our other modules

console.log('=== CommonJS Module System Demo ===\n');

// Require module 04 - multiple exports as an object
console.log('1. Loading 04-names.js...');
const names = require('./04-names.js');
console.log('Imported names:', names);
console.log(`John is: ${names.john}`);
console.log(`Favorite food is: ${names.favoriteFood}\n`);

// Require module 05 - single function export
console.log('2. Loading 05-utils.js...');
const sayHi = require('./05-utils.js');
console.log('Calling imported function:');
sayHi(names.peter);
console.log();

// Require module 06 - alternative export syntax
console.log('3. Loading 06-alternative-flavor.js...');
const alternative = require('./06-alternative-flavor.js');
console.log('Items:', alternative.items);
console.log('Person:', alternative.singlePerson);
console.log('Greeting:', alternative.greet('World'));
console.log();

// Require module 07 - the mind grenade!
console.log('4. Loading 07-mind-grenade.js...');
require('./07-mind-grenade.js');
console.log();

console.log('=== All modules loaded! ===');

// Let's demonstrate module caching
console.log('\n5. Requiring 04-names.js again to show caching...');
const namesAgain = require('./04-names.js');
console.log('Notice: The "module loaded" message did NOT print again!');
console.log('Are they the same object?', names === namesAgain); // true!
