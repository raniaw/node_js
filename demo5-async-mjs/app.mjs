async function main() {
    try {
        const { characters, greet } = await import('./characters.mjs')
        for (const c of characters) {
            greet(c);
        }        
    } catch (error) {
        console.log('error')
    }
}
main();
