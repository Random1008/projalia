// Petit script : ouvrir et fermer le menu quand on est sur téléphone.

var bouton = document.getElementById("bouton-menu");
var liens = document.getElementById("liens");

bouton.addEventListener("click", function () {
  liens.classList.toggle("ouvert");
  bouton.classList.toggle("ouvert");
});
