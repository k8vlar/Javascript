
let feel = prompt ("comment allez vous?")
    if (feel == 'bien') {
      alert("super");
    }
    else if(feel == 'mal') {
        alert("genial");
    }
    else {
        alert("pas grave");
    }
let time = prompt ("quelle heure est il?")
    if (time === "12h") {
        alert("tu es en avance");
    } else if (time === "16h") {
        alert("tu es en retard");
    } else {alert("l'heure c'est plus l'heure");
}
let weather = prompt ("quel temps fait il?")
    if (weather === "beau") {
        alert("prepares ton maillot");
    } else if (weather === "moche") {
        alert("prepares ton manteau");
    } else if (weather === "gris"){
        alert("prepares tes lunettes");
    } else {alert("tu vois rien")
}
let  sport = prompt ("quel est ton sport préféré?")
    if (sport === "foot") {
        alert("c'est bien l'ultra");
    } else if (sport === "gymnastique") {
        alert("pourquoi pas la danse?");
    } else {alert("changes de sport");
}
let movie = prompt ("quel est ton film préféré?")
    if (movie === "bambi") {
        alert("pas d'avis");
    } else if (movie === "titanic") {
        alert("un avis");
    } else if (movie === "demolition man"){
        alert("souscoté");
    } else {alert("revois tes classiques");
}