var http = require('http');
var fs = require('fs');
var port = 4832;
var fileName = 'nodeTest2.html';
var count = 0;

http.createServer(function(request,res) {
	res.writeHead(200, {
	 	'Content-Type':'text/html' });
	fs.readFile(fileName, "utf8",function(err,contents){
		if (err) throw err;
		count++;
		if(count%2==0) console.log("serving file "+fileName+" to port "+port+".");
		res.write(contents);
		res.end();
	});
}).listen(port);
console.log('Listening on port '+port);
