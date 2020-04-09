// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
var now = new Date();
//Ajouter l'heure , minite , seconde  dans des varaiables
var seconds;
var mins;
var hour;
// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
var secDeg;
var minDeg;
var hourDeg;
// Déplacer les aiguilles
function demarrerLaMontre() {
  now = new Date();
  seconds = now.getSeconds();
  secDeg = (seconds / 60) * 360;
  AIGUILLESEC.style.transform = `rotate(${secDeg}deg)`;

  mins = now.getMinutes();
  minDeg = (mins / 60) * 360 + (seconds / 60) * 6;
  AIGUILLEMIN.style.transform = `rotate(${minDeg}deg)`;

  hour = now.getHours();
  hourDeg = (hour / 12) * 360 + (mins / 60) * 30;
  AIGUILLEHR.style.transform = `rotate(${hourDeg}deg)`;
}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
