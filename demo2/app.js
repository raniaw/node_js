const { characters, stealRing } = require('./characters.js');

let myCharts = characters;

myCharts = stealRing(characters, 'Frodo');
for (const c of characters) {
    console.log(c);
}