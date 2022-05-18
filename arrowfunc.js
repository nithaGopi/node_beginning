function add(){

    var a= 10;
    var b= 20;
    var c  =  a+b;
    return c;

} // ------------------ARROW FUNCTIONS ------------

let addarrow = (a,b)=>a+b // it is a function same as add() written above
let c        = addarrow(15,67)         //call to above function
console.log("from arrow function...."+c);


let d         = add(11,11)
console.log("value from traditional function add() ...."+d);


