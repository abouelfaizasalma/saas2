const prompt = require('prompt-sync')();

let n = personalbar(prompt("Entrer un nombrer entier : "));

for (let i = 2 ; i <= n*2 ; i+=2) {
    console.log(i)
}
