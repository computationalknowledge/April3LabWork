var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<H1>hello!</H1>");

    res.write("<img src='./linefriends.jpg'/>");
    res.end("<h1>this is the end</h1>");
    console.log(" i am receiving an incoming URL!");
}).listen(9123)
