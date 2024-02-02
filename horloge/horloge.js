// Exercice petit tp Html /Css et Js

// Petite pratique en html css et javascript, qui va consister à créer une page web affichant une horloge
// indiquant l’heure(pour les plus péchus on fera l’heure actuelle), en utilisant Html, Css et javascript, je
// veux voir une belle horloge de votre choix. Cette horloge devra évidemment fonctionner comme une
// vraie horloge et donc afficher les heures, les minutes, et les secondes, et surtout que les secondes
// défilent comme une vrai horloge. Le tout en fichier séparé donc 3 fichiers.

// fonction pour afficher l'heure
clock();
function clock() {
    let date = new Date()
    // permet de recuperer heure actuelle, date, minutes etc
    let hours = ((date.getHours()+11)%12+1);
    let minutes = date.getMinutes();
    let seconds= date.getSeconds();
// permettent de recuperer separement les heures, minutes et secondes actuelles
// pour les heures la formule +11 modulo 12 + 1 permet de garder en permanence les heures comprises entre 0 et 12
    let hour = hours*(360/12);
    let minute = minutes*(360/60);
    let second = seconds*(360/60);
// formules pour obtenir les degrés correspondants

// affichage en fonction via les classes css second, minute et hour des données recupérées(grace aux variables second, minute et hour) et retranscrit dans parametre rotate (Xdeg)
document.querySelector(".second").style.transform = `rotate(${second}deg)`;

document.querySelector(".minute").style.transform = `rotate(${minute}deg)`;

document.querySelector(".hour").style.transform = `rotate(${hour}deg)`;
}

// installer un timer 'interval'
setInterval(clock,1000);
// permet de raffraichir/executer la fonction clock toutes les 1000 millisecondes