const prompt = require('prompt-sync')();

let annee = parseFloat(prompt("Entrer les année "));

let propose = parseFloat(prompt("Entrer les propose"));
switch(propose) {
    case 1:
        console.log(annee * 12);
        break;
    case 2:
         console.log(annee* 365);
         break
    case 3:
        console.log(annee * 365 * 24);
    case 4:
        console.log(annee * 365 *24*60);
    case 5 :
        console.log(annee * 365 *24*60*60 );
 default :
 console.log("tu as entre autre choix");
 

    
} 