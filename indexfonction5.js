// Une fonction diviserParDeux qui retourne la moitié de la valeur passée en paramètre. Tests : 
// diviserParDeux(2) === 1;
// diviserParDeux(4) === 2;
// var n = Math.random(); diviserParDeux(n) === n / 2;
let nombre = nombre
function diviserParDeux(nombre){
        return nombre/2;
}


var resultat = diviserParDeux(2)
console.log(resultat);
var resultat = diviserParDeux(4)
console.log(resultat);
var n = Math.random(2)
console.log(n);
var resultat = diviserParDeux(n) === n/2
console.log(resultat);

function somme(nombre1, nombre2) {
    return nombre1 + nombre2
    
}
// Une fonction somme qui retourne la somme des deux paramètres qui lui seront passés. Tests : 
// somme(1, 1) === 2;
// somme(1, 2) === 3;
// somme(2, 1) === 3;
// var n = Math.random(); somme(n, 1) === n + 1;
var resultat1 = somme(1,1)
console.log((resultat1));
var resultat1 = somme (1,2)
console.log(resultat1);
var resultat1 = somme(2,1)
console.log(resultat1);

var n = Math.random(1,2)
console.log(n);
var resultat = somme(n,1) === n+1
console.log(resultat);

function signe(string) {
    if (string === 0) return "nul";
    else if (string<0) return "négatif";
    else if (string = Math.random(0,1)) return "positif"    
}


// Une fonction signe qui retourne la chaîne de caractères positif, négatif ou nul, selon le signe de la valeur passée en paramètre. Tests: 
// signe(-1) === 'négatif';
// signe(0) === 'nul';
// signe(Math.random()) === 'positif';
var resultat2= signe (-1)
console.log(resultat2);
var resultat2 = signe(0)
console.log(resultat2);
var resultat2 = signe(0.7)
console.log(resultat2);

// Une fonction factorielle qui retourne le produit de tous les entiers consécutifs entre 1 et l’entier passé en paramètre (compris). Exemple : factorielle(3) retourne le résultat de 1 * 2 * 3, soit 6. Tests : 
// factorielle(0) === 1;
// factorielle(1) === 1;
// factorielle(3) === 6;
// factorielle(4) === 24;
let resultat3=1
function factorielle(n) {
    let resultat3 = prompt("choisis un nombre factorielle");
    for (let i = 1 ; i <= n; i ++ ) {
        return n*resultat3(n-1)
    };
    console.log(factorielle);
    } 


