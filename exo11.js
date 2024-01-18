// Exercice : Changer la couleur du parent au clic
// Soit la page HTML suivante :
// <div style="padding: 10px;">
//   <button>Mon 1er Bouton</button>
// </div>
// <div style="padding: 10px;">
//   <button>Mon 2ème Bouton</button>
// </div>
// <div style="padding: 10px;">
//   <button>Mon 3ème Bouton</button>
// </div>
// Écrire le code JavaScript permettant de colorier le fond du <div> parent en jaune lorsqu’un bouton est cliqué par l’utilisateur.
// Pour cela, utiliser une boucle for, une seule fonction onclick, son paramètre event, les propriétés parentNode et style.
// ExerciceJavascript11DomAvancé
let boutons = document.getElementsByTagName("button")
    for(i=0; i<boutons.length; i++){
        boutons[i].onclick = function yellowColoration(event) {
this.parentNode.style.backgroundColor = "yellow"
    }
}

