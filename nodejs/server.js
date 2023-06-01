const http = require('http')

// Create the http server 
const server = http.createServer((req, res) => {
    // the only route we have
    if (req.url === '/hello') {
        res.write("Hello World!")
        res.end()
    } else {
        // Sending 404 not found for other unknown routes
        res.statusCode = 404;
        res.end();
    }
});

// Listens on the port 3000
server.listen(3000)