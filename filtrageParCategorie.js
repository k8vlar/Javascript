// Exercice : Filtrage par catégorie
// Vous allez développer une page web contenant une liste de produits, et permettant à l’utilisateur de filtrer l’affichage de ces produits, en activant les catégories de produits qui l’intéressent.
// Exemple minimaliste (animation):

// Vous êtes libre sur le choix des produits et des catégories qui seront proposés sur votre page, sur leur rendu visuel, ainsi que sur la manière d’activer les catégories.
// Contraintes à respecter :
// incluez au minimum 10 produits et 3 catégories;
// chaque produit doit être représenté par un élément HTML;
// les catégories de chaque produit doivent associées aux éléments correspondants à l’aide de l’attribut class;
// le filtrage par catégories doit s’appuyer sur ces classes;
// l’utilisateur doit pouvoir passer rapidement d’une catégorie à une autre, puis afficher la liste complète (non filtrée) des produits;
// au moins 2 de vos produits doivent être présents dans plusieurs catégories.
// Exemple de liste de produits en HTML:
// <article class="ludique pratique">iPad</article>
// <article class="ludique sportif">Batte de baseball</article>
// <article class="pratique">Ventilateur</article>
// Vous serez évalué(e) selon les critères suivants :
// bon fonctionnement du filtrage,
// concision et qualité du code,
// bonus: esthétique du rendu et simplicité d’usage. (ergonomie)
// Les solutions les plus élégantes seront éventuellement présentées en cours.

console.log();
let allArticles = document.getElementsByTagName("p");
console.log(allArticles);
function filtrage(material){
    for (i=0; i<allArticles.length; i++){
        let element= allArticles[i];
        if (element.classList.contains(material)){
            element.classList.remove("hidden");
        } else {element.classList.add("hidden");
            }
    }
}

document.getElementById("btnViandes").onclick = function () {filtrage ("viandes") };
document.getElementById("btnPoissons").onclick = function () {filtrage ("poissons") };
document.getElementById("btnCrudites").onclick = function () {filtrage ("crudites") };

document.getElementById("btnViewAll").onclick = function(){
    for (i=0; i<allArticles.length; i++){
        let element= allArticles[i]
       if (element.classList.contains("p")){
        element.classList.add("hidden");
    } else {element.classList.remove("hidden")
    }
    }
};

// let allArticles = document.getElementsByTagName("p");
// console.log(allArticles);
// function filtrage(material){
//     for (i=0; i<allArticles.length; i++){
//         let element= allArticles[i];
//         if (element.classList.contains(material)){
//             element.classList.remove("hidden");
//         } else {element.classList.add("hidden");
//             }
        
//     }


// }

// document.getElementById("btnViandes").onclick = function () {filtrage ("viandes") };
// document.getElementById("btnPoissons").onclick = function () {filtrage ("poissons") };
// document.getElementById("btnCrudites").onclick = function () {filtrage ("crudites") };

// document.getElementById("btnViewAll").onclick = function(){
//     for (i=0; i<allArticles.length; i++){
//         let element= allArticles[i]
//        if (element.classList.contains("hidden")){
//         element.classList.remove("hidden");
//     } else {element.classList.add("hidden")
//     }
//     }
// };