//Test 
(function(){
	var http = require('http'),
		url = '127.0.0.1',
		port = 5000;

	http.createServer(function (req, res) {}).listen(port, url);

	console.log('Server running at http://' + url + ':' + port + '/');

	var options = {
	  //host: 'www.google.com',
	  port: 5000,
	  path: '/test',
	  method: 'POST'
	};

	var req = http.request(options, function(res) {
	  console.log('STATUS: ' + res.statusCode);
	  console.log('HEADERS: ' + JSON.stringify(res.headers));
	  res.setEncoding('utf8');
	  res.on('data', function (chunk) {
	    console.log('BODY: ' + chunk);
	  });
	});

	req.on('error', function(e) {
	  console.log('problem with request: ' + e.message);
	});

	// write data to request body
	//req.write('data\n');
	//req.write('data\n');
	//req.end();
})();