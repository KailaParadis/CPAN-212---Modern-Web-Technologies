const http = require("http");
const fs = require("fs");
const path = require("path");

const app = http.createServer((req, res) => {

    if(req.url === "/") {
        res.end("Hello from the server")
    }
    else if(req.url === "/homepage") {
        const filePath = "./pages/homepage.html";
        let webpage = fs.readFileSync("./pages/homepage.html")
        res.end(webpage)
    }
    else if(req.url === "/about") {
        const filePath = "./pages/about.html";
        let webpage = fs.readFileSync("./pages/about.html")
        res.end(webpage)
    }
    else if(req.url === "/contact") {
        const filePath = "./pages/contact.html";
        let webpage = fs.readFileSync("./pages/contact.html")
        res.end(webpage)
    }
    else if(req.url === "/login") {
        const filePath = "./pages/login.html";
        let webpage = fs.readFileSync("login.html")
        res.end(webpage)
    }
    else {res.end("Error 404- Page not Found")}
});

let PORT = 8000;
app.listen(8000, ()=> {
    console.log(`http://localhost:${PORT}`)
});