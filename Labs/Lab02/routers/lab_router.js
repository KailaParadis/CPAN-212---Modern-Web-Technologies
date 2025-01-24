import express from "express";
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Welcome to the lab router")
})

// /name -> /lab/name
router.get("/name", (req, res)=>{
    res.send("Kaila Paradis")
})

// /greeting -> /lab/greeting
router.get("/greeting", (req, res)=>{
    res.send("Hello, I am Kaila Paradis and my student number is n01659632")
})

// adding params with the colon
router.get("/add/:x/:y", (req, res)=>{
    let x = parseFloat(req.params.x); //parse lets input be read as an integer not a String
    let y = parseFloat(req.params.y);

    res.send(`${x+y}`) //wrapped in a String so the system does not read it as a status code (such as 404- page not found, 200 - ok, 500 - no cloud sync)
})

router.get("/calculate/:a/:b/:operation", (req, res) => {
    let x = parseFloat(req.params.x); //parse lets input be read as an integer not a String
    let y = parseFloat(req.params.y);

    switch (req.params.operation) {
        case "+":
            res.send(`${a+b}`);
            break;
        
        case "-":
            res.send(`${a-b}`);
            break;

        case "*":
            res.send(`${a*b}`);
            break;

        case "/":
            res.send(`${a/b}`);
            break;
    
        default:
            res.send("WRONG OPERATOR")
    }
})

export default router;