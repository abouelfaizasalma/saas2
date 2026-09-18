const prompt = require('prompt-sync')();

let n = parseFloat(prompt("Entrer un nombre entier: "));
let somme = 0 ;

for (let i = 0 ; i <= n; i++ ) {
    somme = somme + i 
} 
console.log (`afficher la somme "i" ; "+" :${somme}`);
