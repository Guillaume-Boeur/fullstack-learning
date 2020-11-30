const http = require('http');

const server = http.createServer((req, res) => {
    res.end("First server's response with nodemon !")
});

server.listen(process.env.PORT || 3000);