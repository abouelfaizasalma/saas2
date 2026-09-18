const prompt = require('prompt-sync')();

let n = parseFloat(prompt("Entrer un nobre entrer : "));

for (let i = 1 ; i <= n*2 ; i+=2 ) {
    console.log (i) ;
} 