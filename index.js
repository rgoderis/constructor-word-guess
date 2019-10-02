var inquirer = require("inquirer")
var Word = require("./word.js")

var choices = [
    "Rugrats",
    "Ahh Real Monsters",
    "Doug",
    "Ren and Stimpy",
    "Rockos Modern Life",
    "All That",
    "Legends of the Hidden Temple",
    "Family Double Dare",
    "Hey Arnold",
    "Angry Beavers",
    "Ed Edd and Eddy"
]

var randomChoice = choices[Math.floor(Math.random()*11)]

console.log(randomChoice)

var testWord = new Word(randomChoice.toLowerCase())
console.log(testWord.guess("l"))
console.log(testWord.display())

// inquirer.prompt([

// ])