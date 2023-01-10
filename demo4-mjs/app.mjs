import log, { characters, greet } from './characters.mjs'
// import * as char from './characters.mjs'

for (const c of characters) {
    greet(c);
}

// for (const c of char.characters) {
//     char.greet(c);
// }