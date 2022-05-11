// 第一個區塊 內建模組
const http = require('http');

// 第二個區塊 第三方模組(套件)

// 第三個區塊 自建模組

////////////////////////////////////////////////////////////////

const server = http.createServer((req, res) => {
	// console.log('第一個參數是瀏覽器對 web server 的 request', req);
	// console.log('第二個參數是 web 要response 給瀏覽器的內容', res);
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' }); //MIME type
        return res.end('<h1>This is Home page</h1>');
    }
    if (req.url === '/login') {
        res.writeHead(200, { 'Content-Type': 'text/html' }); //MIME type
        return res.end('<h1>This is Login page</h1>');
    }
	res.end();
});

server.listen(3000, () => {
	console.log('running server on port 3000');
});