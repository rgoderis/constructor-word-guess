var Letter = function(char){
    this.char = char,
    this.guessed = false,
    this.charCheck = function(){
        if(this.char === " "){
            return " "
        }
        else if(this.guessed){
            return(this.char)
        } else {
            return "_"
        }
    },
    this.charUpdate = function(char){ 
        if(char === this.char){
            this.guessed = true
            return this.guessed
        } 
    }
}

module.exports = Letter;

// var l = new Letter("l")

// console.log(l.char)
// console.log(l.guessed)
// console.log(l.charUpdate("l"))
// console.log(l.charCheck())