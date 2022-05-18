var person = {
age:25,
name: "nitha",
palce:"kottayam",
dislayFunc : function (){
console.log("display finction call executed")
}

}
person.newFunc = function(){
console.log("here newFunc inject  to person object - executed")
}  // object code ends here


//you can call this function in this object like this
person.newFunc()
person.dislayFunc()

for(key in person){

    if(key == "name") {
            person[key] = "amal"
     }
    console.log(person[key])
}


