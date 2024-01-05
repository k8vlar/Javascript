// Exercice Javascript 6 ChiFouMi

// Fonctionnement du jeu à implémenter
// À chaque manche, l’ordinateur et le joueur choisissent chacun un élément parmi pierre, feuille ou ciseaux.
// Un point est donné à celui qui a choisi l’élément le plus fort, sachant que:
// ciseaux > feuille (les ciseaux coupent la feuille)
// pierre > ciseaux (la pierre casse les ciseaux)
// feuille > pierre (la feuille enveloppe la pierre)
// Si l’ordinateur et le joueur ont choisi le même élément, aucun d’eux n’emporte de point.
// Exemple de déroulement d’une manche
// l’ordinateur choisit secrètement pierre (parmi les trois valeurs d’éléments possibles);
// le joueur est invité à saisir son choix => il tape feuille;
// l’ordinateur affiche feuille car c’est l’élément qui l’emporte (la feuille enveloppe la pierre).
// Phase 1: Implémentation d’une manche
// Pour implémenter le code d’une manche, nous allons :
// définir une fonction comparer(choix1, choix2) qui renvoie le nom de l’élément gagnant, entre les deux passés en paramètres;
// appeler cette fonction, en passant les choix de l’ordinateur et du joueur en paramètres, afin de savoir lequel des deux a remporté la manche.
// Voici une proposition d’étapes à suivre:
// 1. Dessiner l’arbre de décision d’une manche : nom de l’élément gagnant en fonction de deux éléments choisis ;
// 2. Transformer l’arbre de décision en conditions if imbriquées, en fonction de la valeur de deux variables : choix1 et choix2;
// 3. Chaque condition de dernier niveau va afficher dans la console le nom de l’élément qui remporte la manche ;
// 4. Transférer ces conditions dans la définition d’une fonction comparer (choix1, choix2) qui retourne le nom de l’élément gagnant à l’aide de return (au lieu de l’afficher dans la console), parmi les deux passés en paramètres; Si les deux sont identiques, retourner égalité.
// 5. Tester cette fonction en lui passant chaque combinaison possible de valeurs du jeu en paramètre s;
// 6. En dehors de la définition de la fonction, créer les variables choixOrdi et choixUtilisateur;
// 7. Faire en sorte que choixOrdi ait pour valeur un des trois éléments, choisi de manière aléatoire, et que choixUtilisateur soit saisi par l’utilisateur à l’aide de prompt();
// 8. Appeler la fonction comparer(), puis afficher dans la console la valeur de son résultat (l’élément qui remporte la manche), à partir des choix de l’ordinateur et du joueur.
// Phase 2 : Partie en 3 manches, et scores
// Après avoir implémenté une manche à l’aide de la fonction comparer (), faites en sorte que le joueur puisse jouer 3 manches d’affilée et que le score final du joueur et de l’ordinateur soient affichés dans la console en fin de partie.
// Pour cela :
// 1. Créer les variables scoreOrdi et scoreJoueur;
// 2. Après l’affichage du résultat de l’appel à comparer () dans la console, incrémenter une de ces variables, en fonction de qui a remporté la manche;
// 3. Mettre le code correspondant à une manche dans une boucle for, de manière à ce qu’il s’exécute 3 fois d’affilée ;
// 4. En fin de partie, afficher qui a remporté la partie : 'ordi', 'joueur' ou 'aucun', en fonction des scores.


// function comparer () {
//     return 
//         choixUtilisateur === 'pierre' && choixOrdinateur === 'ciseaux' ? alert ("You Win (comme dans StreetFighter)") :
//         choixUtilisateur === 'feuille' && choixOrdinateur === "pierre" ? alert ("You Win (comme dans StreetFighter)") :
//         choixUtilisateur === "ciseaux" && choixOrdinateur === "feuille" ? alert ("You Win (comme dans StreetFighter)") : 
//         choixUtilisateur === choixOrdinateur ? alert ("égalité")
//         : alert ("Ordinateur est le meilleur")
// }
// comparer (choixUtilisateur)
function comparer (choixUtilisateur,choixOrdinateur) {
    if (choixUtilisateur === choixOrdinateur) {
        return alert ("égalité");
    } else if (choixUtilisateur === 'pierre' && choixOrdinateur === 'ciseaux'){
        return 'pierre', alert("You Win (comme dans StreetFighter)");
    } else if (choixUtilisateur === 'feuille' && choixOrdinateur === "pierre"){
        return 'feuille', alert("You Win (comme dans StreetFighter)");
    } else if (choixUtilisateur === "ciseaux" && choixOrdinateur === "feuille"){
        return "ciseaux", alert("You Win (comme dans StreetFighter)");
    } else {
        return alert("Ordinateur est le meilleur");
    }
    }
// switch(choixUtilisateur,choixOrdinateur)
// {
//     case (choixUtilisateur === choixOrdinateur):
//         return alert ("égalité");
//         break;
//     case (choixUtilisateur === "pierre" && choixOrdinateur === "ciseaux"):
//     case (choixUtilisateur === "feuille" && choixOrdinateur === "pierre"):
//     case (choixUtilisateur === "ciseaux" && choixOrdinateur === "feuille"):
//         return alert ("You Win (comme dans StreetFighter)");
//         break
//     case (choixUtilisateur === "pierre" && choixOrdinateur === "feuille"):
//     case (choixUtilisateur === "feuille" && choixOrdinateur === "ciseaux"):
//     case (choixUtilisateur === "ciseaux" && choixOrdinateur === "pierre"):
//         return alert ("Ordinateur est le meilleur");
//         break;
// }
comparer()
// jouer la partie
let scoreJoueur=0
let scoreOrdi=0
for( i = 0; i < 3 ; i++ ){
    let choixOrdinateur = Math.floor(Math.random()*3)
    if (choixOrdinateur = 0) {choixOrdinateur = "pierre";
    } else if (choixOrdinateur = 1) {choixOrdinateur = "feuille";
    } else { choixOrdinateur = "ciseaux"};
console.log(choixOrdinateur)
    let choixUtilisateur = prompt("pierre, feuille, ciseaux ... telle est la question");
    let resultat= comparer(choixUtilisateur,choixOrdinateur)
    if ( resultat === "égalité"){
        console.log("égalité"); scoreJoueur++ && scoreOrdi++;
    } else if (resultat === "You Win (comme dans StreetFighter)"){
        console.log("You Win (comme dans StreetFighter)");scoreJoueur++;
    } else {
        console.log("Ordinateur est le meilleur")
    }
    let score=0;
        if (scoreJoueur === scoreOrdi){
        return alert ("égalité");
    } else if (scoreJoueur < scoreOrdi){
        return alert ("l'ordi a gagné");
    } else {
        return alert("tu as gagné")
    }
    }




// if (choixUtilisateur === choixOrdinateur) {
//     return alert("égalité");
// } else if (choixUtilisateur === 'pierre' && choixOrdinateur === 'ciseaux') {
//     return alert("You Win (comme dans StreetFighter)");
//     } else { 
//     return alert ("Ordinateur est le meilleur");
// } else if (choixUtilisateur === 'feuille' && choixOrdinateur === "pierre") {
//     return alert("You Win (comme dans StreetFighter)");
//     } else { 
//         return alert ("Ordinateur est le meilleur");
// } else if (choixUtilisateur === "ciseaux" && choixOrdinateur === "feuille") {
//     return alert("You Win (comme dans StreetFighter)");
// } else if {
// return alert("Ordinateur est le meilleur");
// }
// }


// 2eme methode

// function comparer (choixOrdinateur,choixUtilisateur) {
//     let choixOrdinateur = Math.floor(Math.random()*3)
//     console.log(choixOrdinateur);
    
//     let choixUtilisateur = prompt ("pierre, feuille, ciseaux ... telle est la question");
//         switchcase(choixUtilisateur,choixOrdinateur)
//         .when (choixOrdinateur === choixUtilisateur)
//         .when (choixUtilisateur === 'pierre' && choixOrdinateur === '2');
//         return alert("You Win (comme dans StreetFighter)");
//         else ("Ordinateur est le meilleur")
//         return alert
//     if (choiceUtil == "pierre"){
            
//             return (0);
//             }
//         else if (choiceUtil == "feuille"){
//             return (1);
//             }
//         else if (choiceUtil == "ciseaux"){
//             return (2);
//         }

//     if (choixUtilisateur == choixOrdinateur){
//         return alert("égalité");}
//     else if (choixUtilisateur == 0 && choixOrdinateur == 1){
//         return alert("Ordinateur est le meilleur");}
//     else if (choixUtilisateur == 0 && choixOrdinateur == 2){
//         return alert("You Win (comme dans StreetFighter)");}
//     else if(choixUtilisateur == 1 && choixOrdinateur == 0 ){
//         return alert("Ordinateur est le meilleur");}
//     else if (choixUtilisateur == 1 && choixOrdinateur == 2){
//         return  alert("You Win (comme dans StreetFighter)");}
//     else if (choixUtilisateur == 2 && choixOrdinateur == 0){
//         return alert("Ordinateur est le meilleur");}
//     else if (choixUtilisateur == 2 && choixOrdinateur == 1){
//         return alert("You Win (comme dans StreetFighter)");}
// return comparer
// }
// comparer()

// 3eme methode

// function comparer (choixOrdinateur,choixUtilisateur) {
//     let pierre =0
//     let feuille=1
//     let ciseaux=2;
//         function choixOrdinateur () {
//             return (choiceComputer = Math.floor(Math.random()*3));
//         }
//         function choixUtilisateur() {
//             let choiceUtil = prompt ("pierre, feuille, ciseaux ... telle est la question");
//             if (choiceUtil == "pierre"){
//                 return (0);
//                 }
//             else if (choiceUtil == "feuille"){
//                 return (1);
//                 }
//             else if (choiceUtil == "ciseaux"){
//                 return (2);
//                 }
//         }
        
//        {
//         if (choixUtilisateur == choixOrdinateur){
//             return alert("égalité");}
//         else if ((choixUtilisateur == 0 && choixOrdinateur == 1) ||(choixUtilisateur == 1 && choixOrdinateur ==0) || (choixUtilisateur == 2 && choixOrdinateur ==0)){
//             return alert("Ordinateur est le meilleur");}
//         else if (choixUtilisateur == 0 && choixOrdinateur == 2){
//             return alert("You Win (comme dans StreetFighter)");}
        
//         else if (choixUtilisateur == 1 && choixOrdinateur == 2){
//             return  alert("You Win (comme dans StreetFighter)");}
        
//         else if (choixUtilisateur == 2 && choixOrdinateur == 1){
//             return alert("You Win (comme dans StreetFighter)");}
//         }
//     }
//     comparer()
    
    // 4eme methode

