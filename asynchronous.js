
//sync functions

function longTask(milliSecond){
    dt  =  new Date()
 while((new Date()-dt)<=2000){
    //console.log("In loop")
 }

}
 longTask(2000)
 console.log("First task Finished")
 longTask(2000)
 console.log("Second task finished")
