//synchronous and asynchronous

 function hello (){
    console.log("In function hello")
 }
function dummy (callbackname){
 callbackname('hello')

  }

dummy(hello)