const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/views/index.html')));
//__dirname : It will resolve to your project folder.
app.get('/about', (req, res) => res.sendFile(path.join(__dirname + '/views/about.html')));
app.get('/contact-me', (req, res) => res.sendFile(path.join(__dirname + '/views/contact-me.html')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/views/404.html')));

const PORT = 3000;
app.listen(PORT, () => console.log('Listeing on port: ' + PORT));