// 08-os-module.js - Exploring the built-in OS module
// This module provides operating system-related utilities

const os = require('os');

console.log('=== OS Module Information ===\n');

// Basic system information
console.log('Operating System:', os.platform());
console.log('OS Type:', os.type());
console.log('OS Release:', os.release());
console.log('Architecture:', os.arch());

// User information
const userInfo = os.userInfo();
console.log('\nCurrent User:', userInfo.username);
console.log('Home Directory:', userInfo.homedir);

// System uptime
const uptimeSeconds = os.uptime();
const uptimeHours = Math.floor(uptimeSeconds / 3600);
const uptimeMinutes = Math.floor((uptimeSeconds % 3600) / 60);
console.log(`\nSystem Uptime: ${uptimeHours} hours, ${uptimeMinutes} minutes`);

// Memory information
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const usedMemory = totalMemory - freeMemory;
console.log('\nMemory Information:');
console.log(`Total Memory: ${(totalMemory / 1024 / 1024 / 1024).toFixed(2)} GB`);
console.log(`Free Memory: ${(freeMemory / 1024 / 1024 / 1024).toFixed(2)} GB`);
console.log(`Used Memory: ${(usedMemory / 1024 / 1024 / 1024).toFixed(2)} GB`);
console.log(`Memory Usage: ${((usedMemory / totalMemory) * 100).toFixed(1)}%`);

// CPU information
const cpus = os.cpus();
console.log(`\nCPU Cores: ${cpus.length}`);
console.log(`CPU Model: ${cpus[0].model}`);
console.log(`CPU Speed: ${cpus[0].speed} MHz`);

// Network interfaces (just count them for simplicity)
const networkInterfaces = os.networkInterfaces();
const interfaceCount = Object.keys(networkInterfaces).length;
console.log(`\nNetwork Interfaces: ${interfaceCount}`);
