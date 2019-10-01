var Letter = function(){
    this.placeholder = "",
    this.guessed = false,
    this.charCheck = function(){
        if(this.guessed){
            return(this.placeholder)
        } else {
            return "_"
        }
    },
    this.charUpdate = function(char){
        if(char === this.guessed){
            this.guessed = true
        }
    }
}