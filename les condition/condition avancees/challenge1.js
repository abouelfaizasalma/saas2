const prompt = require('prompt-sync')();
// 1. Récupération des informations
let revenu = parseFloat(prompt("Quel est votre revenu annuel ?"));
let score = parseInt(prompt("Quel est votre score de crédit (sur 1000) ?"));
let duree = parseInt(prompt("Quelle est la durée du prêt (en années) ?"));

// 2 & 3. Évaluation de l'éligibilité avec if / else if / elsenoden
if (revenu >= 30000 && score >= 700 && duree <= 10) {
    console.log("Statut : Éligible");
} 
else if (revenu >= 30000 && score >= 650 && duree <= 15) {
    console.log("Statut : Éligible avec conditions");
} 
else {
    // Si les deux premières conditions ne sont pas respectées, le prêt est refusé
    console.log("Statut : Non éligible");
