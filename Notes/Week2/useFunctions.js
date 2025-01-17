const greetings = require("./functions")

greetings.sayHi //only sayHi and sayHigh3 are exported in functions.js, cant access here

const {sayHi3} = require("./functions") // only bringing one part of the code over specifically

greetings.sayHi3("Kaila") // does not give a response even when properly called because there is no return statement
greetings.sayHi("Kaila")

// click on the file on the left to open an intergrated terminal - run with "node filename.js"