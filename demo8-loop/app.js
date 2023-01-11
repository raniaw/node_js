const fs = require('fs');


console.log('Init');
setTimeout(()=>{
    console.log(performance.now(), 'Timer 0');
}, 100);

setImmediate(()=>{
    console.log('setImmediate');
});

fs.readFile(__filename, ()=>{
    console.log('File readed');
});
setTimeout(()=>{
    for(let i=0; i<10000000000; i++){
    }
    console.log('Done');
    Promise.resolve().then(()=>{
        console.log('Promise inside Timeout');
    });
    process.nextTick(()=>{
        console.log('Tick inside Timeout');
    });
}, 0);

Promise.resolve().then(()=>{
    console.log('Promise');
});

process.nextTick(()=>{
    console.log('Tick');
});

console.log('Final');
