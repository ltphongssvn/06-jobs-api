// 09-path-module.js - Working with the path module
// This module provides utilities for working with file and directory paths

const path = require('path');

console.log('=== Path Module Demo ===\n');

// Platform-specific path separator
console.log('Path separator for this OS:', path.sep);

// Join path segments - this is THE way to build cross-platform paths
const segments = ['users', 'documents', 'node', 'projects', 'myfile.js'];
const joinedPath = path.join(...segments);
console.log('\nJoining path segments:', segments);
console.log('Result:', joinedPath);
console.log('Notice how join() used the correct separator for your OS!\n');

// Working with the current file's path
console.log('Current file analysis:');
console.log('Full path:', __filename);
console.log('Directory:', path.dirname(__filename));
console.log('Filename:', path.basename(__filename));
console.log('Extension:', path.extname(__filename));
console.log('Filename without extension:', path.basename(__filename, '.js'));

// Parse a path into its components
const parsedPath = path.parse(__filename);
console.log('\nParsed path object:', parsedPath);

// Build an absolute path
const relativePath = './temporary/test.txt';
const absolutePath = path.resolve(relativePath);
console.log('\nConverting relative to absolute:');
console.log('Relative:', relativePath);
console.log('Absolute:', absolutePath);

// Check if a path is absolute
console.log('\nIs absolute?');
console.log('/home/user/file.txt:', path.isAbsolute('/home/user/file.txt'));
console.log('./file.txt:', path.isAbsolute('./file.txt'));

// Normalize a messy path
const messyPath = '/users//documents/../documents/./node//project/';
const cleanPath = path.normalize(messyPath);
console.log('\nPath normalization:');
console.log('Messy:', messyPath);
console.log('Clean:', cleanPath);
