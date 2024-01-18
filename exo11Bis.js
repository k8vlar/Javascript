// Exercice: construire une page web en JavaScript
// En partant d’une page HTML vierge, développer le code JavaScript permettant d’ajouter à la page:
// un champ <input>,
// et un bouton qui vide la valeur du champ quand on clique dessus.
// Pour cela, utiliser: createElement(), createTextNode(), appendChild(), document.body, onclick, et value.

let input = document.createElement("input");
input.setAttribute("placeholder","ecrivez ce que vous allez effacer");

document.body.appendChild(input);
let bouton =  document.createElement("button");
let boutonText= document.createTextNode("bouton de suppression champ input");
bouton.appendChild(boutonText);
document.body.appendChild(bouton)

bouton.onclick = function (event) {
    input.value = "";
}
