// Exercice : Afficher/cacher
// Créer une page web valide contenant les deux paragraphes <p> tels que définis plus haut.
// Y associer un fichier CSS contenant la règle .hidden tel que définie plus haut.
// Ouvrir la page, vérifier que seul le premier paragraphe est visible.
// Quel code JavaScript faut-il exécuter pour retirer la classe hidden du deuxième paragraphe ?

// var element = document.getElementById("second");
// element.classList.remove("hidden");


// Exercice : Cacher les spoilers
// Créer une page web valide contenant les trois paragraphes <p> tels que définis dans l’exemple ci-dessus.
// Y associer un fichier CSS contenant la règle .hidden tel que définie plus haut.
// Ouvrir la page, vérifier que les trois paragraphes sont visibles.
// Quel code JavaScript faut-il exécuter pour ajouter la classe hidden aux paragraphes qui portent la classe spoiler ?
// Ajouter un bouton à la page HTML, et y intégrer le code JS nécessaire pour que les spoilers soient cachés seulement une fois que l’utilisateur aura cliqué sur le bouton.
// Attention, aucun code JavaScript ne doit pas apparaître dans votre fichier HTML => faire un fichier .js à part.

// document.getElementById("mon-bouton").onclick = function spoil() {
//     let elements = document.getElementsByClassName('spoiler');
// for (i=0; i<elements.length; i++){
//     let element = elements[i]
//     element.classList.add('hidden');
// }

// Exercice : Surbrillance au clic
// Créer une page web valide contenant les deux paragraphes <p> tels que définis dans l’exemple ci-dessus.
// Ouvrir la page, vérifier que les deux paragraphes sont visibles.
// (étape optionnelle pour vous entraîner) Intégrer le code JavaScript nécessaire pour que la couleur de fond du deuxième paragraphe devienne jaune.
// Intégrer le code JavaScript nécessaire pour que la couleur de fond du deuxième paragraphe devienne jaune, seulement une fois que l’utilisateur aura cliqué dessus.
// Bonus: Intégrer le code JavaScript nécessaire pour que la couleur de fond de n’importe quel paragraphe de la page devienne jaune quand l’utilisateur clique dessus. (indice: il va falloir utiliser le paramètre fourni à l’appel de votre fonction onclick, nous ne l’avons pas encore vu en cours)
document.getElementById("mon-2emebouton").onclick = function surbrillance() {
    let elements = document.getElementsByClassName('troisieme');
    elements.style.backgroundColor='yellow';
}



// document.getElementById("quatrieme").onclick = function surbrillance() {
//     let elements = document.getElementsByClassName('background-color');
// for (i=0; i<elements.length; i++){
//     let element = elements[i]
//     element.classList.add('hidden');
// }
