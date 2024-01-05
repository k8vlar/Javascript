function comparer (choixUtilisateur,choixOrdinateur){
    // 0 = pierre , 1=feuille ,2=ciseaux;
    if(choixUtilisateur == choixOrdinateur) return "Egalité"
    if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux") return choixUtilisateur;
    else if(choixUtilisateur == "feuille" && choixOrdinateur == "pierre") return choixUtilisateur;
    else if(choixUtilisateur=="ciseaux" && choixOrdinateur == "feuille") return choixUtilisateur;
    else return choixOrdinateur;
}
// phase 2
for(i = 0; i <3; i++){
    let choixOrdinateur = Math.floor(Math.random()*3);
    if (choixOrdinateur == 0) choixOrdinateur = "pierre";
    else if (choixOrdinateur == 1) choixOrdinateur = "feuille";
    else choixOrdinateur = "ciseaux";
    let choixUtilisateur = prompt ("choisissez un éléments parmis pierre, feuille ou ciseaux");
    comparer()
    let scoreOrdi = 0;
    let scoreJoueur = 0;
    let resultat= comparer(choixUtilisateur,choixOrdinateur)
        if(resultat == choixOrdinateur) {console.log( resultat, "l'ordinateur a gagné cette manche"), scoreOrdi++;
    }   else if(resultat == choixUtilisateur) {console.log(resultat, "vous avez gagné la manche"), scoreJoueur++;
    }   else console.log("égalité"); 
}
// afficher scorefinal
let scoreJoueur= 0;
let scoreOrdi= 0;
let score;
    if (scoreJoueur == scoreOrdi) {console.log("égalité, vous n'avez pu vous départager, vous"+scoreJoueur+",ordi"+scoreJoueur);
}   else if (scoreOrdi > scoreJoueur) {console.log("Vous avez perdu la partie:"+scoreOrdi+"a"+scoreJoueur);
}   else {console.log("Vous avez gagné:"+scoreJoueur+"a"+scoreOrdi);}