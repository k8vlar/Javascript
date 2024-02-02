// Exercice Javascript 12 Le caroussel et les composants
// Le caroussel
// Avant de développer un composant réutilisable, il est prudent de prototyper une version d’essai de ce futur composant.
// Pour prototyper notre futur composant “caroussel”:
// 1. Créer une page HTML contenant un élément <img> (qui contiendra l’image courante) et un <button> (qui servira à afficher l’image suivante).
// 2. Créer un tableau images contenant les URLs de trois images trouvées sur le web, sous forme de chaînes de caractères.
// 3. Toujours dans le code JavaScript associé à notre page, écrire l’instruction permettant d’afficher la première image du tableau images dans l’élément <img>.
// 4. Faire en sorte que l’utilisateur puisse afficher les images suivantes en cliquant sur le bouton.
let images = ["image1","image2","image3"];
const buttons = document.querySelectorAll(".buttonContainer");
const slides =document.querySelectorAll(".slide");

document.getElementById("image1").src="./Link/car.jpeg";
document.getElementById("image2").src="./Link/roue.jpeg";
document.getElementById("image3").src="./Link/selle.jpeg";

buttons.forEach((button) => {
    button.addEventListener("click", (event)=>{
       const rightSlide = event.target.id === "right" ? 1
       : -1;
//    on associe les boutons a un evenement(ici on ecrit que si la condition du slide vers la droite est vraie alors on ajoute 1 dans le tableau "images", sinon on va vers la gauche avec -1)
       let slideDisplay = document.querySelector(".display");
// ici on associe la variable rightSlide a la classe active, que l'on souhaite deplacer en fonction de l'action des boutons
        newIndex = rightSlide+ [...slides].indexOf(slideDisplay);
// on créé une nouvelle variable qui permet d'ajouter cette classe display dans la bonne position du tableau [images]
        if (newIndex<0) newIndex= [...slides].length-1;
        if (newIndex>= [...slides].length) newIndex=0;
// on ajoute les 2 exceptions: passage de la derniere position du tab a la 1ere et de la premiere a la derniere -[].length-1 taille du tab -1 tab commence par 0 et si newIndex >= a la taille tab on recommence a position 0
        slides[newIndex].classList.add("display");
// ici on ajoute la classe display a la slide correpondant a la nouvelle destination provoquée par l'activation bouton
        slideDisplay.classList.remove("display")
// il faut supprimer la classe display de l'ancienne position (correspond ici a la variable slicedisplay du debut)
});
})


// document.getElementById("right").onclick = function nextPicture(){
// let transitionright= firstPicture[+1];
//     if (transitionright == [2]){firstPicture;
//     } else if(transitionright == [0]){secondPicture;
//     } else if(transitionright == [1]){thirdPicture}
// }
// for(i=0; i<images.length;i++)
// {
    
// }
// document.getElementById("right").onclick = function nextPicture(){
//     let currentImage = document.querySelector(".img");
//     let nextImage = currentImage.nextElementSibling;

//     if(nextImage == null){
//         nextImage = document.querySelector(".img");
//     }

//     currentImage.style.opacity = 0;
//     nextImage.style.opacity = 1;
// }