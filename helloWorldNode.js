var http = require('http');
var port = 4830;
//for(port=4830;port<4840;port++){ //just curious
http.createServer(function (req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write("Hello World\n\t4830 - Hello World\n\t4831 - Node HTML\n\t4832 - Node HTML with CSS\n\t4833 - Node MongoDB");
	res.end();
}).listen(port);
console.log('Server running at http://127.0.0.1:'+port+'/');
//}

