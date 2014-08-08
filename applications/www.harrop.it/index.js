var http = require('http');

var server = http.createServer(function (request,response) {
	
	response.writeHead(200,{
		"Content-Type":"text/plain"
	});
	
	response.end("www.harrop.it\n");
	
});

server.listen(9003);