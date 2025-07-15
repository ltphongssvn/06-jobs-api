// 12-http.js - Creating a basic HTTP server
// This demonstrates Node.js's networking capabilities

const http = require('http');

console.log('=== HTTP Server Demo ===\n');

// Create the server with a request handler function
const server = http.createServer((req, res) => {
    // This function runs for EVERY incoming request
    console.log(`Incoming request: ${req.method} ${req.url}`);
    
    // Route based on the URL
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>Welcome to Node.js HTTP Server!</h1>
            <p>You're on the home page.</p>
            <p>Try visiting:</p>
            <ul>
                <li><a href="/about">/about</a></li>
                <li><a href="/api">/api</a></li>
                <li><a href="/anything">/anything (404 demo)</a></li>
            </ul>
        `);
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Page</h1><p>This server is built with Node.js!</p><p><a href="/">Back home</a></p>');
    } else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const data = {
            message: 'This is JSON data',
            timestamp: new Date().toISOString(),
            serverInfo: {
                nodeVersion: process.version,
                platform: process.platform
            }
        };
        res.end(JSON.stringify(data, null, 2));
    } else {
        // 404 for any other path
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`<h1>404 - Page Not Found</h1><p>The page ${req.url} doesn't exist.</p><p><a href="/">Go home</a></p>`);
    }
});

// Start listening on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server\n');
});

// Handle server errors
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please close the other program or use a different port.`);
    } else {
        console.error('Server error:', err);
    }
    process.exit(1);
});
