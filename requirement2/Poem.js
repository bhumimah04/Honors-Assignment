import { readFileSync } from 'fs';
function printPoemContent() {
    try {
        const data = readFileSync('requirement2/Poem.txt', 'utf8');
        console.log(data);
    } 
    catch (err) {
        console.error('Error reading the file:', err);
    }
}
printPoemContent();