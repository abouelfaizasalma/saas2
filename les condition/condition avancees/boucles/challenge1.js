const prompt = require('prompt-sync')();
let N = parseFloat(prompt("entrer un nombre:"));

for ( let i = 1 ; i <= 10 ; i++) {
     resultat = N * i

console.log(`${N} *${i} = ${resultat}`);
 }

