function sayHi(name) {
    console.log(`Hello ${name}`) // its the thingy (tilda) beside the 1 button that makes the ${} work
}

const sayHi2 = (name) => {
    console.log(`Howdy ${name}`)
}

const sayHi3 = (name) => {
    return `Whats up ${name}`
}
module.exports = {sayHi, sayHi3}