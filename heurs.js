var heuresDiv = document.querySelector(".heures");
var dateDiv = document.querySelector(".date");
var affichageHeure = function () {
  var heures, minutes, secondes, deuxChiffres;
  var now, annee, listeMois, mois, listeJours, jourNUmero, jourNom;
  listeMois = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  listeJours = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  now = new Date();
  annee = now.getFullYear();
  mois = listeMois[now.getMonth()];
  jourNUmero = now.getDate();
  jourNom = listeJours[now.getDay()];

  deuxChiffres = function (element) {
    if (element < 10) {
      return (element = "0" + element);
    } else {
      return element;
    }
  };
  heures = deuxChiffres(now.getHours());
  minutes = deuxChiffres(now.getMinutes());
  secondes = deuxChiffres(now.getSeconds());

  heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
  dateDiv.textContent = jourNom + ", " + jourNUmero + " " + mois + " " + annee;

  setTimeout(affichageHeure, 1000);
};
affichageHeure();
