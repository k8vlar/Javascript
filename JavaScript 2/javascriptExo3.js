/******************************EXO 3 *****************modale***********/



// la modal
let modal = document.getElementById("myModal");

// btn ouvre la modal
let btn = document.getElementById("myBtn");

// element fermant la modal
let span = document.getElementsByClassName("close")[0];

// quand clics sur le bouton, ouvres la modal
btn.onclick = function() {
  modal.style.display = "block";
}

// quand clic sur x , ferme la modal
span.onclick = function() {
  modal.style.display = "none";
}

// QUAND tu clics nimporte ou en dehors , fermes la
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
