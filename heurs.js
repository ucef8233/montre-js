var heuresDiv = document.querySelector(".heures");
var affichageHeure = function () {
  var heures, minutes, secondes, deuxChiffres;

  now = new Date();
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

  setTimeout(affichageHeure, 1000);
};
affichageHeure();
