const prompt = require('prompt-sync')();
let nombre = parseFloat(prompt("Entrer le nombre elements : "));

let tableau = [];
let somme = 0;

for (let i = 1 ; i <= nombre ; i++ ) {
    let valeur = parseFloat(prompt(`Entrer l'élément n°${1+i} : `));

    tableau.push(valeur);
    somme += valeur;
}
console.log("tableau : " + tableau + " + somme : " + somme);




