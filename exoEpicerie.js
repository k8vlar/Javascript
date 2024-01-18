var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];
// Écrire un programme qui:
// 1. Affiche la liste de fruits disponibles;
// 2. Demande au client quel fruit il désire acheter: 
// s’il est présent dans le tableau fruits: le retirer du tableau, et afficher 'ok!',
// sinon, afficher 'indisponible...'.
// 3. Affiche à nouveau la liste de fruits disponibles.
// 1
    alert(fruits);
    
let fruitsChoice = prompt("quel fruit désires tu acheter? mangue, raisin, figue, kiwi?");{
    let fruitCalcul= fruits.indexOf(fruitsChoice);
    console.log(fruitCalcul);
    if (fruitCalcul != -1) {
        fruitCalcul = fruits.splice(fruitCalcul,1);
        alert("ok");
}   else {alert ("indisponible");
}
alert(fruits) 
}

// alert ("fruits.splice");