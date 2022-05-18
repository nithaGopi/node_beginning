class hello{

    constructor (a,b){
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