import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;

app.get("/", (req, res)=>{
    res.send("Welcome to the server - GET")
})
app.post("/", (req, res)=>{
    res.send("Welcome to the server - POST")
})
app.put("/", (req, res)=>{
    res.send("Welcome to the server - PUT")
})
app.delete("/", (req, res)=>{
    res.send("Welcome to the server - DELETE")
})

app.get("/watch", (req, res) => {
    console.log("URL Call:")
    console.log(req.url)
    console.log("Method Call:")
    console.log(req.method)
    console.log("Headers Call:")
    console.log(req.headers)
    console.log("Query Call:")
    console.log(req.query)
    console.log("Params Call:")
    console.log(req.params)
    console.log("Body Call:")
    console.log(req.body)
    res.send("Welcome to the watch list")
})

app.get("/itm/:itemID", (req, res) =>{ //colon indicated that next input should be a variable
    console.log("Query Call:")
    console.log(req.query)
    console.log("Params Call:")
    console.log(req.params)
    console.log("Body Call:")
    console.log(req.body)
    res.send("Welcome to the items list")
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});