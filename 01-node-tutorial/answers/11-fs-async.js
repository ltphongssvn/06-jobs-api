// 11-fs-async.js - Asynchronous file operations  
// This demonstrates non-blocking I/O and callback patterns

const { writeFile, readFile } = require('fs');
const path = require('path');

console.log('=== Asynchronous File Operations Demo ===\n');
console.log('at start');

const filePath = path.join('.', 'temporary', 'fileB.txt');

// Write first line
writeFile(filePath, 'Line 1: This is asynchronous!\n', (err) => {
    console.log('at point 1 - inside first callback');
    if (err) {
        console.log('Error writing first line:', err);
        return;
    }
    
    console.log('First line written!');
    
    // Write second line INSIDE the first callback to ensure order
    writeFile(filePath, 'Line 2: We must nest callbacks to maintain order\n', { flag: 'a' }, (err) => {
        console.log('at point 2 - inside second callback');
        if (err) {
            console.log('Error writing second line:', err);
            return;
        }
        
        console.log('Second line written!');
        
        // Write third line INSIDE the second callback
        writeFile(filePath, 'Line 3: This is "callback hell" - deeply nested callbacks\n', { flag: 'a' }, (err) => {
            console.log('at point 3 - inside third callback');
            if (err) {
                console.log('Error writing third line:', err);
                return;
            }
            
            console.log('Third line written!');
            
            // Finally, read the file INSIDE the third callback
            readFile(filePath, 'utf8', (err, data) => {
                console.log('at point 4 - inside read callback');
                if (err) {
                    console.log('Error reading file:', err);
                    return;
                }
                
                console.log('\nFile contents:');
                console.log('=' * 50);
                console.log(data);
                console.log('=' * 50);
                console.log('\nAll async operations complete!');
            });
        });
    });
});

console.log('at end - this prints IMMEDIATELY, not after file operations!');

// Add a timer to show that other code can run while file operations happen
setTimeout(() => {
    console.log('\nThis timer fired while file operations were potentially still running!');
}, 100);
