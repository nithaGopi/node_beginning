var http = require('http');
var fs   = require('fs');

// we can add html through this write code

//http.createServer(function(req, res){
//res.write("Its a data from server ..nitha");
//res.end();
//}).listen(7000)

//ADD HTML THROUGH WRITE()

http.createServer(function (req, res) {

   fs.readFile('table.html',function(err,data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();

    })
}).listen(7000);






//ctrl c   - cmd prompt to quit from server