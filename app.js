// 第一個區塊 內建模組
const path = require('path');

// 第二個區塊 第三方模組(套件)
const express = require('express');

// 第三個區塊 自建模組

////////////////////////////////////////////////////////////////

const app = express();

// middleware
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	console.log('Hello!');
    next();
});

app.use((req, res, next) => {
	console.log('World!');
    next();
});

app.get('/', (req, res) => {
    res.status(200)
        .sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/login', (req, res) => {
    res.status(200)
        .sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});