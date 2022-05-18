class superclass {

 superfunc(){

    console.log("function in super class")
 }

}

class hello extends superclass{

    constructor (a,b){

        /* super() - calls the parent constructor.
        When used in a constructor, the super keyword appears alone and must be used before
        the this keyword is used. The super keyword can also be used to call functions on a
        parent object. */
        super()
        this.a  = a
        this.b  = b
        this.c  = this.a+this.b
    }
    printvalues(){
         console.log("In class function")
         console.log("Sum from constructor"+this.c)
     }

}
var obj = new hello(200,400)
obj.printvalues()
obj.superfunc()