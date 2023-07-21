const http = require('http');

const port = 5000



let server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"})

   res.end("this is the response")
})

server.listen(port, () =>
console.log(`server is rinning on ${port}`)
)
