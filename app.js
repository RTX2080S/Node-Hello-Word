

var http = require("http");

function onRequest(request, response) {
    var fs = require('fs');
    fs.readFile('index.html', function (err, html) {
        if (err) {
            throw err;
        }
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    });
}

http.createServer(onRequest).listen(8000);
