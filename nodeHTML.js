var http = require('http');
var fs = require('fs');
var port = 8080;
http.createServer(function(request,res) {
	res.writeHead(200, {
	 	'Content-Type':'text/html' });
	fs.readFile('nodeTest.html', function(err,contents){
		if (err) throw err;
		res.write(contents);
	});
	res.end("<p>So This</p><hr><p>can output html easily enough</p>");
}).listen(port);
console.log('Listening on port '+port);
