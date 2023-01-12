const { spawn } = require('child_process');

var childProcess = spawn('ls');

childProcess.stdout.on('data', function (data) {
	console.log('stdout: ' + data);
});

childProcess.stderr.on('data', function (data) {
	console.log('stderr: ' + data);
});

childProcess.on('close', function (code) {
	console.log('child process exited with code ' + code);
});