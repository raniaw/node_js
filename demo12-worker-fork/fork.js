process.on('message', (msg) => {
	if (msg == 'disconnect') {
		process.disconnect();
		return;
	}
	console.log(`Get client: ${msg}`);
	process.send('Pong!');
}) 