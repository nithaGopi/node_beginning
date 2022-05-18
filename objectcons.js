
function sampleFunc (a, b, c){
    this.name   = a
    this.age    = b
    this.place  = c


    this.displayVal = function (){
     console.log(this.name+this.age+this.place)
    }


}
///////////////FIRST OBJECT CREATION
var obj = new sampleFunc("Nitha",10,"KTM")
obj.displayVal()
//////////////SECOND OBJECT CREATION
var obj2  =  new sampleFunc("aadhi",10,"syd")
obj2.displayVal()