const http = require("http")
const fs = require("fs");

const app = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Hello from the server")
    }
    else if(req.url === "/homepage") {
        let webpage = fs.readFileSync("homepage.html")
        res.end(webpage)
    }
    else if(req.url === "/about") {
        res.end(``)
    }
    else if(req.url === "/contact") {
        res.end()
    }
    else if(req.url === "/login") {
        res.end()
    }
    else {res.end("Error 404- Page not Found")}
});

let PORT = 8000;
app.listen(8000, ()=> {
    console.log(`http://localhost:${PORT}`)
});