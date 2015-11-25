var app = angular.module('TrackIt', ['ngMaterial']);
app.controller("AppCtrl", function($scope, $timeout) {
   $scope.onRecipesTabSelected = function() {
      $("#fabButtonAddRecipe").show();
   };
   $scope.onOtherTabSelected = function() {
      $("#fabButtonAddRecipe").hide();
   };
});