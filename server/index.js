/**
 * Impor HTTP Standar Library dari Node.js
 * Hal inilah yang nantinya akan kita gunakan untuk membuat
 * HTTP Server
 * */
const http = require('http');
const { PORT = 8000 } = process.env; // Ambil port dari environment variable

const fs = require('fs')
const path = require('path')
const PUBLIC_DIRECTORY = path.join(__dirname, '../public')

// Fungsi untuk menentukan Content-Type berdasarkan ekstensi file
const getContentType = (htmlFile) => {
    const extname = path.extname(htmlFile);
    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        case '.json':
            return 'application/json';
        case '.png':
            return 'image/png';
        case '.jpg':
            return 'image/jpeg';
        case '.jpeg':
            return 'image/jpeg';
        case '.gif':
            return 'image/gif';
        default:
            return '';
    }
}

// Request handler
// Fungsi yang berjalan ketika ada request yang masuk.
const onRequest = (req, res) => {
    // Baca file index.html
    let htmlFile = path.join(PUBLIC_DIRECTORY, req.url === '/' ? 'index.html' : req.url);
    if (req.url === '/cars') {
        htmlFile = path.join(PUBLIC_DIRECTORY, 'cars.html');
    };

    fs.readFile(htmlFile, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found
                res.writeHead(404);
                res.end('404 - File Not Found');
            } else {
                // Server error
                res.writeHead(500);
                res.end('500 - Internal Server Error');
            }
        } else {
            // File found
            res.writeHead(200, { 'Content-Type': getContentType(htmlFile) });
            res.end(data);
        }
    });
}

const server = http.createServer(onRequest);

// Jalankan server
server.listen(PORT, 'localhost', () => {
  console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT);
})