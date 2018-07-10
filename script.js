///Déclaration du module newApp et insertion dans la variable app
var app = angular.module('newApp', []);
//Création d'un controlleur showHide et création d'une fonction
app.controller('showHide', function($scope) {
  //Déclaration des variables paragraphe1 et paragraphe2
  $scope.paragraphe1 = 'Le roman est ennemi de la vitesse, la lecture doit être lente et le lecteur doit rester sous le charme d\'une page, d\'un paragraphe, d\'une phrase même.';
  $scope.paragraphe2 = 'La règle d\'or de la conduite est la tolérance mutuelle, car nous ne penserons jamais tous de la même façon, nous ne verrons qu\'une partie de la vérité et sous des angles différents.';
  //Déclaration de la fonction showText()
  $scope.showText = function() {
    //Application de la valeur 'false' a l'attribut parag de ng-show
    $scope.parag1 = 'false';
    //Application de la valeur 'true' a l'attribut parag de ng-show
    $scope.parag2 = 'true';
  }
  //Déclaration de la fonction hideText()
  $scope.hideText = function() {
    //Application de la valeur 'true' a l'attribut parag de ng-show
    $scope.parag1 = 'true';
    //Application de la valeur 'false' a l'attribut parag de ng-show
    $scope.parag2 = 'false';
  }
});
