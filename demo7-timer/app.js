const start = performance.now();
/// setTimeout
setTimeout(() => {
    console.log(performance.now() - start);
    console.log('One second is over');
}, 1000);

function myFunc(arg) {
    console.log(`Argument => ${arg}`);
}

setTimeout(myFunc, 1500, 'Cool');

const timerId = setTimeout(() => {
    console.log('BOOOOMM!!!');
}, 5000);

setTimeout(() => {
    clearTimeout(timerId);
    console.log('Clear!!!');
}, 1000);
console.log('');

// setInterval
const intervalId = setInterval(() => {
    console.log(performance.now());
    console.log('setInterval after one second');
}, 1000);

setTimeout(() => {
    clearTimeout(intervalId);
    console.log('Clear!!!');
}, 6000);

// setImmediate
console.log('Before');
setImmediate(()=>{
    console.log('After all');
})
console.log('After');


const timerId2 = setTimeout(() => {
    console.log(''); 
    console.log('');
    console.log('BOOOOMM!!!');
}, 8000);

timerId2.unref();
setImmediate(()=>{
    timerId2.ref();
})
