const factorial = require('./factorial');
const {Worker} = require('worker_threads');
const compute = (array) => {
	return new Promise((resolve, reject) => {
		performance.mark('worker start');
		const worker = new Worker('./worker', {
			workerData: {
				array
			}
		})
		worker.on('message', (msg) => {
			console.log(worker.threadId);
			resolve(msg)
		});

		worker.on('error', (err) => {
			reject(err)
		});

		worker.on('exit', () => {
			console.log('Done');
		});
	});
};

const main = async () => {
	try {
		performance.mark('start');
		const result = await Promise.all([
			compute([25, 12, 20, 48, 30, 50]),
			compute([25, 12, 20, 48, 30, 50]),
			compute([25, 12, 20, 48, 30, 50]),
			compute([25, 12, 20, 48, 30, 50]),
		]);
		console.log(result);

		performance.mark('end');
		performance.measure('main', 'start', 'end');
		console.log(performance.getEntriesByName('main').pop());
	} catch (error) {
		console.error(error.message);
	}
}

main();