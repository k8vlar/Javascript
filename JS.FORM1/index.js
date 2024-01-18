// Application: Dire bonjour au monde
// Vous allez créer une page web qui affiche Bonjour le monde ! dans une fenêtre à l’aide de la fonction alert().
// Pour cela:
// 1. Créez un fichier bonjour.html définissant une page web minimale mais valide, contenant seulement un titre de type <h1>.
// 2. Ouvrez cette page dans votre navigateur, pour vérifier qu’elle s’affiche correctement.
// 3. Créez un fichier bonjour.js contenant un programme JavaScript permettant d’afficher le message demandé.
// 4. Testez votre programme JavaScript en le copiant dans la console du navigateur, depuis n’importe quelle page.
// 5. Associez le fichier bonjour.js à la page bonjour.html, à l’aide d’un élément <script>.
// 6. Rafraîchissez la page bonjour.html dans votre navigateur, pour vérifier que le message demandé s’affiche bien dès l’affichage de la page.
// 7. En cas de problème, vérifiez la présence d’erreurs dans la console JavaScript du navigateur, corrigez-les, et ré-essayez.

// alert(document.getElementById(champ1));
// alert(document.getElementById(champ2));

// Pratique: Récupération des valeurs du formulaire
// Afin de mettre en pratique l’association d’un programme JavaScript à une page HTML, l’accès à un élément en JavaScript, et la récupération de la valeur d’un champ de saisie, vous allez:
// 1. Créer un dossier JS-FORM-1;
// 2. Dans ce dossier, créer un fichier index.html valide contenant deux champs de saisie, tel que définis dans l’exemple ci-dessus (avec identifiants nom et prenom);
// 3. Toujours dans ce dossier, créer un fichier index.js contenant un programme JavaScript qui affichera avec alert() la valeur du premier champ de la page, puis celle du deuxième champ;
// 4. Associez votre programme JavaScript (fichier index.js) à votre page HTML (fichier index.html), de manière à ce qu’il soit exécuté quand on ouvre la page, et vérifier que les deux valeurs sont bien affichées dans des alert lors du chargement de la page dans votre navigateur;
// 5. En cas de malfonctionnement, corrigez les erreurs dans vos fichiers, en vous aidant de la console JavaScript.

// document.getElementById(champ1);
// document.getElementById(champ2);


// Exercice: Calculatrice
// Afin de pratiquer la récupération de valeurs d’un formulaire et l’exécution de code JavaScript lorsque l’utilisateur clique, nous allons développer une calculatrice simple en HTML + JavaScript.
// La page HTML a développer doit contenir:
// deux champs <input> portant les valeurs d’id: “premier-nombre” et “deuxieme-nombre”;
// un troisième champ portant l’id: “resultat”;
// et un bouton portant l’id: “mon-bouton”.
// Ensuite, y associer un fichier JavaScript qui permettra à l’utilisateur, à chaque fois qu’il cliquera sur le bouton mon-bouton, d’obtenir le résultat de l’addition des nombres qu’il aura saisis dans les champs premier-nombre et deuxieme-nombre, dans le champ resultat.
// Vous aurez probablement besoin d’utiliser la fonction parseInt() ou parseFloat() pour convertir des chaînes de caractères en véritables nombres.
// Par ailleurs, pour éviter que votre bouton ne soumette votre formulaire quand vous cliquerez dessus, vous aurez peut-être besoin d’ajouter l’attribut type="button" à cet élément. 


// let firstnumber = prompt("Entrez votre premier nombre")
// let secondnumber = prompt("Entrez votre secon nombre")

// function calc() {
//     let firstnumber= parseInt(document.getElementById(premier-nombre).value);
//     let secondnumber= parseInt(document.getElementById(second-nombre).value);
//     console.log(secondnumber);
//     return (firstnumber + secondnumber), alert (document.getElementById.onclick("resultat"));
// }
// calc()
document.getElementById("mon-bouton").onclick = function calc() {
    let firstnumber= parseInt(document.getElementById("premier-nombre").value);
    let secondnumber= parseInt(document.getElementById("second-nombre").value);
    return document.getElementById("resultat").value = firstnumber+secondnumber;
}

