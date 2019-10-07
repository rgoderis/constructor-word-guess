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
var guessesLeft = 10;
var guessedArray = []

start();
function start(){
    inquirer.prompt([
        {
            type: "list",
            message: "Select [Play] to play the game or [Exit] to terminate the program",
            choices: ["Play", "Exit"],
            name: "userChoice"
        }
    ]).then(function(answer){
        if(answer.userChoice === "Exit"){
            process.exit();
        } else {
            playGame()
        }
    })
}

function playGame(){
    var computerWord = new Word(choices[Math.floor(Math.random()*11)])
    console.log(computerWord.display())
    guessesLeft = 10;
    guessedArray = [];
    askQuestion(computerWord);

}

function askQuestion(str){
    // check to see if there are any _ left in ComputerWord.display()
    if(str.display().indexOf("_")===-1){
        console.log(str.display())
        console.log("You Won")
        start()
    } else if(guessesLeft === 0){
        console.log("You lost")
        start()
    }
    else {
        inquirer.prompt([
            {
                type: "input",
                message: "guess a letter",
                name: "guess"
            }
        ]).then(function(answer){
            str.guess(answer.guess)
            guessesLeft --
            guessedArray.push(answer.guess)
            console.log(guessesLeft)
            console.log("Letters Guessed: " + guessedArray)
            console.log(str.display());
            askQuestion(str);
        });
    }
}