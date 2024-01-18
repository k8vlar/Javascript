// Exercice: Annuaire téléphonique
// But: développer un programme qui permet d’afficher le numéro de téléphone d’un ami (à l’aide de alert) dont le nom a été saisi par l’utilisateur (à l’aide de prompt).
// Afin que l’annuaire soit extensible à l’avenir, aucune condition if ne doit être utilisée. Nous allons donc stocker les noms et numéros de téléphones dans un objet, et utiliser l’adressage par crochets pour trouver un numéro à partir d’un nom.
// var annuaire = {
//   patricia: '06 66 66 66 66',
//   david: '07 77 77 77 77',
// };
// 1. Afficher dans la console le numéro de téléphone de patricia, en utilisant la notation pointée sur l’objet annuaire;
// 2. Demander à l’utilisateur de saisir un prénom, puis afficher le numéro de téléphone associé à ce prénom.

// let annuaire ={
//     patricia : '06 66 66 66 66',
//     david: "07 77 77 77 77",
//     joseph: "enfoiré",

// }
// console.log(annuaire.patricia);

// let userChoice = prompt("incrivez votre prénom");
// console.log(annuaire[userChoice])
// alert (annuaire[userChoice])


// Exercice Répertoire téléphonique
// Sur la base de l’annuaire téléphonique réalisé plus tot, développer un programme qui propose les fonctionnalités suivantes:
//
//  recherche et affichage d’un numéro de téléphone en saisissant un nom,

// let userChoice = prompt("incrivez le prenom recherché");
// console.log(annuaire[userChoice]);
// alert (annuaire[userChoice])


// liste des contacts de l’annuaire (nom + numéro de téléphone, à afficher dans la console à l’aide d’une boucle for..in),

// for(const X in annuaire) {
//     console.log(`${X} = ${annuaire[X]}`);  
// }


// ajout d’un contact (nom + numéro de téléphone) dans l’annuaire,

// let addName = prompt("inscrivez votre nom")
// let addPhone = prompt("inscrivez votre numero de téléphone");
// annuaire[addName] = addPhone;
// console.log(annuaire);

// suppression d’un contact.



// Pour permettre à l’utilisateur de choisir la fonctionnalité qu’il souhaite utiliser, lui demander de saisir la première lettre de la fonction:
// 'r' pour rechercher,
// 'l' pour afficher la liste,
// 'a' pour ajouter,
// et 's' pour supprimer.
// Afin que l’utilisateur puisse utiliser plusieurs fonctionnalités d’affilée, placer le code du programme dans une boucle qui ne s’arrêtera que lorsque l’utilisateur aura tapé q au lieu de choisir une fonctionnalité.

let annuaire ={
    patricia : '06 66 66 66 66',
    david: "07 77 77 77 77",
    joseph: "napoléon",

}
console.log(annuaire.patricia);

// let deleteUser = prompt ("inscrivez le nom que vous souhaitez retirer de la liste");
// delete annuaire[deleteUser];
// console.log(annuaire);
// for(const userChoice in annuaire) 
//     console.log(`${userChoice} = ${annuaire[userChoice]}`);

// let addName = prompt("inscrivez votre nom")
// let addPhone = prompt("inscrivez votre numero de téléphone");
// annuaire[addName] = addPhone;
// console.log(annuaire);


let select;
while (select !== "q") { 
    select = prompt("choisis le catégorie que tu souhaites entre r (rechercher), l ( (afficher la liste), a (ajouter), s (supprimer) ou q (quitter)")
    if (select == "r"){
let userChoice = prompt("incrivez le prénom recherché");
console.log(annuaire[userChoice]);
alert (annuaire[userChoice])
    }
    else if (select == "l") {
for(const userChoice in annuaire) {
    console.log(`${userChoice} = ${annuaire[userChoice]}`);  
}
    }
    else if (select == "a") {
let addName = prompt("inscrivez votre nom")
let addPhone = prompt("inscrivez votre numero de téléphone");
annuaire[addName] = addPhone;
console.log(annuaire);
    }
    else if (select == "s") {
let deleteUser = prompt ("inscrivez le nom que vous souhaitez retirer de la liste");
delete annuaire[deleteUser];
console.log(annuaire);
} else if (select == "q");
}
