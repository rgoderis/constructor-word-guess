const Letter = function(char){
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
        if(char.toUpperCase() === this.char.toUpperCase()){
            this.guessed = true
            return this.guessed
        } 
    }
}

module.exports = Letter;