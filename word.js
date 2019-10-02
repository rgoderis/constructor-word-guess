var Letter = require("./letter.js")

var Word = function(word){
    // array of new Letters for each index or word
    this.letter = word.split("").map(function(char){
        return new Letter(char)
    });

    // function to run charCheck and return this.letter as a string
    this.display = function(){
        let displayWord = [];
        // loops through this.letter
        for(var i = 0; i < this.letter.length; i++){
            // run charCheck on letter[i]
            let displayLetter =  this.letter[i].charCheck();
            // push into displayWord
            displayWord.push(displayLetter)
        }
        // return as a string
        return displayWord.toString()
    },

    this.guess = function(char){
        for(var i = 0; i < this.letter.length; i++){
            this.letter[i].charUpdate(char);
        }
    }
}

var newWord = new Word("hello")
// console.log(newWord.arr)
newWord.guess("l")
console.log(newWord.display())