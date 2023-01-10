const EventEmitter = require('events');
const myEmitter = new EventEmitter();
const logDbconnection = () =>{
    console.log('DB connected');
};

myEmitter.addListener('connected', logDbconnection);
myEmitter.emit('connected');

myEmitter.removeListener('connected', logDbconnection);
// myEmitter.off('connected', logDbconnection);
// myEmitter.removeAllListeners('connected', logDbconnection);

myEmitter.on('msg', (data)=>{
    console.log(`Get: ${data}`);
});
myEmitter.prependListener('msg', (data) =>{
    console.log('Prepend');
});

myEmitter.emit('msg', 'Hello, you get my message!');

myEmitter.once('off', () =>{
    console.log('Message output only once and no more!');
});

myEmitter.emit('off');
myEmitter.emit('off');

console.log('getMaxListeners: ', myEmitter.getMaxListeners());
myEmitter.setMaxListeners(1);
console.log('getMaxListeners after set', myEmitter.getMaxListeners());
console.log('');
console.log('listenerCount of msg: ', myEmitter.listenerCount('msg'));
console.log('listeners: ', myEmitter.listeners('msg'));
console.log('');
console.log('listenerCount of off: ' , myEmitter.listenerCount('off'));
console.log('eventsName:  ' , myEmitter.eventNames());

console.log('');
myEmitter.on('error', (err) => {
    console.log(`You get one error: ${err.message}`);
});
myEmitter.emit('error', new Error('Errooorrr!'));
console.log('');

/// event Target
const target = new EventTarget();

const logTarget = () =>{
    console.log('Connected to target');
}

target.addEventListener('connected', logTarget);
target.dispatchEvent(new Event('connected'));




