const http = require("http");
const fs = require("fs");
const path = require("path");

const app = http.createServer((req, res) => {

    if(req.url === "/") {
        res.end("Hello from the server")
    }
    else if(req.url === "/homepage") {
        const filePath = "../part2_bookstore/pages/homepage.html";
        let webpage = fs.readFileSync(filePath)
        res.end(webpage)
    }
    else if(req.url === "/about") {
        const filePath = "../part2_bookstore/pages/about.html";
        let webpage = fs.readFileSync(filePath)
        res.end(webpage)
    }
    else if(req.url === "/contact") {
        const filePath = "../part2_bookstore/pages/contact.html";
        let webpage = fs.readFileSync(filePath)
        res.end(webpage)
    }
    else if(req.url === "/login") {
        const filePath = "../part2_bookstore/pages/login.html";
        let webpage = fs.readFileSync(filePath)
        res.end(webpage)
    }
    else {res.end("Error 404- Page not Found")}
});

let PORT = 8000;
app.listen(8000, ()=> {
    console.log(`http://localhost:${PORT}`)
});