const prompt = require('prompt-sync')();

let C = parseFloat(prompt("donne moi la température en celsiUS"));

if (C<0) {console.log("solide");}

else if (0 <= C < 100 ) {console.log("liquide");}

else (C >= 100) {
    console.log("liquide")}
