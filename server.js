const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    let path = './views';
    if (req.url === '/') {
        path = path + '/index.html';
    } else if (req.url === '/about') {
        path = path + '/about.html';
    } else if (req.url === '/contact-me') {
        path = path + '/contact-me.html';
    }  else {
        path = path + '/404.html';
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.end(data);
        }
    })
})

server.listen(8080, 'localhost', () => {
    console.log('server running on port 8080');
})