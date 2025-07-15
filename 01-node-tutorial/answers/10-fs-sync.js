// 10-fs-sync.js - Synchronous file operations
// This shows how to read and write files in a blocking way

// Import specific functions from the fs module
const { writeFileSync, readFileSync } = require('fs');
const path = require('path');

console.log('=== Synchronous File Operations Demo ===\n');

// Build the file path properly
const filePath = path.join('.', 'temporary', 'fileA.txt');
console.log(`Working with file: ${filePath}\n`);

// Write first line (this creates the file or overwrites if it exists)
console.log('1. Writing first line...');
writeFileSync(filePath, 'First line: Hello from Node.js!\n');
console.log('   First line written successfully');

// Append second line (notice the flag option)
console.log('2. Appending second line...');
writeFileSync(filePath, 'Second line: Synchronous operations are blocking\n', { flag: 'a' });
console.log('   Second line appended successfully');

// Append third line
console.log('3. Appending third line...');
writeFileSync(filePath, 'Third line: Each operation waits for the previous to complete\n', { flag: 'a' });
console.log('   Third line appended successfully');

// Now read the entire file
console.log('\n4. Reading the complete file...');
const content = readFileSync(filePath, 'utf8');
console.log('   File read successfully\n');

console.log('File contents:');
console.log('=' * 50);
console.log(content);
console.log('=' * 50);

// Demonstrate the blocking nature
console.log('\nNotice: Each operation completed before the next one started.');
console.log('This is "blocking" I/O - the program waits for each operation.');
