// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const url = require('url');
const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {res.send("<h1>Home Page</h1>")});
app.get('/about', (req, res) => {res.send("<h1>About Page</h1>")});
app.get('/contact-me', (req, res) => {res.send("<h1>Contact Page</h1>")});
app.get('/404', (req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// function serveFile(fileName, res){
//     fs.readFile(fileName, (err, data) => {
//         if (err) {
//             res.writeHead(404, {'Content-Type': 'text/plain'});
//             res.end('404 Not Found');
//             return;
//         }
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end(data);
//     });
// }

// function serve404(res) {
//     const notFoundPath = path.join(__dirname, '404.html');
//     fs.readFile(notFoundPath, (err, data) => {
//         if (err) {
//             res.writeHead(404, {'Content-Type': 'text/plain'});
//             res.end('<h1>404 Not Found</h1>');
//             return;
//         } 
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         res.end(data);
//     });
// }

// const server = http.createServer((req, res) => {
//     const parsedURL = url.parse(req.url, true);
//     const pathName = parsedURL.pathname;
//     console.log(`Request for ${pathName} received.`);
//     switch (pathName) {
//         case '/':
//             serveFile(path.join(__dirname, 'index.html'), res);
//             break;
//         case '/about':
//             serveFile(path.join(__dirname, 'about.html'), res);
//             break;
//         case '/contact-me':
//             serveFile(path.join(__dirname, 'contact-me.html'), res);
//             break;
//         default:
//             serve404(res);
//             break;
//     }
// });

// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//     console.log('Available routes:');
//     console.log('  / - Home Page');
//     console.log('  /about - About Page');
//     console.log('  /contact-me - Contact Page');
//     console.log('  /404 - Custom 404 Page');
// });

// server.on('error', (err) => {
//     console.error(`Server error: ${err.message}`);
//     if (err.code === 'EADDRINUSE') {
//         console.error(`Port ${PORT} is already in use.`);
//     }
// });