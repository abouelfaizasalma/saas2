const prompt = require('prompt-sync')();
// 1. Demander le nombre
let nombre = parseInt(prompt("Entrez un nombre entier :"));

// 2 & 3. Vérifier la parité avec modulo
if (nombre % 2 === 0) {
    console.log(`Le nombre ${nombre} est pair.`);
} else {
    console.log(`Le nombre ${nombre} est impair.`);
}