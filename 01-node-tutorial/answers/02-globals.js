// 02-globals.js - Exploring Node.js global variables
// This program demonstrates how Node.js provides special global variables to every script

console.log('=== Node.js Globals Demo ===\n');

// __dirname is the directory path of the current module
console.log('Current directory (__dirname):', __dirname);

// __filename includes the full path with filename
console.log('Current file (__filename):', __filename);

// process.env contains all environment variables
console.log('MY_VAR from environment:', process.env.MY_VAR);

// Let's explore more globals
console.log('\n=== Additional Globals ===');
console.log('Process ID:', process.pid);
console.log('Node.js version:', process.version);
console.log('Operating System:', process.platform);
console.log('Current working directory:', process.cwd());

// The global object itself (similar to window in browsers)
console.log('\nType of global object:', typeof global);

// Buffer is available globally for binary data
console.log('Buffer is available:', typeof Buffer !== 'undefined');

// Timers are global too
console.log('setTimeout is available:', typeof setTimeout === 'function');
