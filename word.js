const Letter = require("./letter.js")

const Word = function(word){
    // array of new Letters for each index or word
    this.letter = word.split("").map(function(char){
        return new Letter(char)
    });

    // function to run charCheck and return this.letter as a string
    this.display = function(){
        let displayWord = [];
        // loops through this.letter
        for(let i = 0; i < this.letter.length; i++){
            // run charCheck on letter[i]
            let displayLetter =  this.letter[i].charCheck();
            // push into displayWord
            displayWord.push(displayLetter)
        }
        // return as a string
        let stringWord = displayWord.toString()
        // remove , from string
        let cleanWord = stringWord.replace(/,/g, " ")
        // return string
        return cleanWord
    },

    this.guess = function(char){
        for(let i = 0; i < this.letter.length; i++){
            this.letter[i].charUpdate(char);
        }
    }
}

module.exports = Word;