
    let choixOrdinateur = Math.floor((Math.random ()*100)+1)
    let choixUtilisateur = 0;
    for( let i = 1 ; i <=10 && choixOrdinateur!=choixUtilisateur; i++ ) {
    choixUtilisateur = (prompt ("choisis un nombre entre 1 et 100 si t'es capable !!!"));
    if (choixOrdinateur > choixUtilisateur) { 
    alert("Trop petit");
    } else if (choixOrdinateur < choixUtilisateur){
    alert("Trop grand");
    } else {
    alert("tu as gagné la bataille, mais prépares toi a la guerre");
    }
    if (i === 10)
    (alert("dommage vous avez épuisé toutes vos tentatives! Le nombre secret etait "+choixOrdinateur+""));
}