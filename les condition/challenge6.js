const prompt = require('prompt-sync')();
let n = parseFloat(prompt("entrer les nombre "));

if (n<0) {
    console.log("negatif");
}
else if(n>0){
    console.log("positif");
}
else{
    console.log(null);
    
}

 
