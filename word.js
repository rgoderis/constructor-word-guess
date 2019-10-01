var Letter = require("./letter.js")

var Word = function(arr){
    this.arr = function(){
        var displayWord = []
        for(var i = 0; i < arr.length; i++){
            var displayLetter = new Letter(arr[i].charCheck)
            // console.log(displayLetter.charCheck())
            displayWord.push(displayLetter.charCheck())
            
        }
        return displayWord
    }
    // this.word = function(){
    //     var displayWord = this.arr.toString()
    //     return displayWord
    // }
}

var newWord = new Word(["h","e","l","l","o"])
console.log(newWord.arr())
// console.log(newWord.word())