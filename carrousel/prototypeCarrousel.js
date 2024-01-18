// Exercice Javascript 12 Le caroussel et les composants
// Le caroussel
// Avant de développer un composant réutilisable, il est prudent de prototyper une version d’essai de ce futur composant.
// Pour prototyper notre futur composant “caroussel”:
// 1. Créer une page HTML contenant un élément <img> (qui contiendra l’image courante) et un <button> (qui servira à afficher l’image suivante).
// 2. Créer un tableau images contenant les URLs de trois images trouvées sur le web, sous forme de chaînes de caractères.
// 3. Toujours dans le code JavaScript associé à notre page, écrire l’instruction permettant d’afficher la première image du tableau images dans l’élément <img>.
// 4. Faire en sorte que l’utilisateur puisse afficher les images suivantes en cliquant sur le bouton.
let images = ["image1","image2","image3","image4","image5","image6","image7","image8","image9"];
let firstPicture = [0];
let secondPicture = [1];
let thirdPicture = [2];
let fourPicture = [3];
let fivePicture = [4];
let sixPicture = [5];
let sevenPicture = [6];
let eightPicture = [7];
let ninePicture = [8];



let carrousel= "carrousel"
carrousel.appendChild(images);

document.getElementsByClassName("image1", src="Link/PatrickMecanique.jpg");
document.getElementsByClassName("image2", src="Link/JeremyMinet.jpg");
document.getElementsByClassName("image3", src="Link/GuillaumeAlagomme.jpg");
document.getElementsByClassName("image4", src="link/MathiasPaillasse.jpg");
document.getElementsByClassName("image5", src="Link/JosephEDF.jpg");
document.getElementsByClassName("image6", src="Link/AlexQueenex.jpg");
document.getElementsByClassName("image7", src="Link/ClaudeLeClodo.jpg");
document.getElementsByClassName("image8", src="Link//EnzoSuperCrado.jpg");
document.getElementsByClassName("image9", src="Link/jeremyCrobe.jpg");
document.getElementsByClassName("image", src="");
function nextPicture(){

}


// let imageCarrousel = document.getElementsByClassName("carrouselImg")
// let tableau = createElement ("tab")
// let carrouselImg = createElement("img") + createElement("img2")+
// tableau.appendChild("imageCarrousel");
// document.body.appendChild(tableau);

// let bouton =  document.createElement("button");
// let boutonText= document.createTextNode("bouton pour faire defiler les ecoliers");
// bouton.appendChild(boutonText);
// document.body.appendChild(bouton)

// bouton.onclick = function (event) {
    
// }