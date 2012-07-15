var util = require('util'),
		exec = require('child_process').exec,
		child,
		datejs = require('safe_datejs');

var app = require('express').createServer();


var history = [];
var lastTextRun = {
	time:   null,
	result: ''
};


var runTests = function (res, type, cb) {
	try {

		child = exec('vows '+ __dirname +'/test/* --' + type,
				function (error, stdout, stderr) {
					lastTextRun.result = '';
					var now = new Date();
					var result;
					if (typeof cb == 'function') {
						cb({
							result: stdout,
							time:   now
						});
					}
					res.send(result = '<pre>' + stdout);
					history.push(result + "\n" + now.toString('d.M. h:mm'));
					history = history.slice(0, 10);
					if (stderr) console.log('stderr: ' + stderr);
					if (error !== null) {
						console.log('exec error: ' + error);
					}
				});
	} catch (e) {
		console.log(e);
	}
}


app.get('/', function (req, res) {
	if (!lastTextRun.time) return res.send('NO history');
	res.send('<pre>Last run in ' + lastTextRun.time.toString('d.M. h:mm') + "\n" + lastTextRun.result);
});

app.get('/run', function (req, res) {
	runTests(res, 'dot-matrix');
});

app.get('/run/text', function (req, res) {
	runTests(res, 'spec', function (result) {
		lastTextRun.result += result.result;
		lastTextRun.time = result.time
	});
});

app.get('/run/json', function (req, res) {
	runTests(res, 'json');
});

app.get('/history', function (req, res) {
	res.send(history.join("\n"));
});

app.listen(3000);