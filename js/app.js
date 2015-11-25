var app = angular.module('TrackIt', ['ngMaterial']);
app.controller("AppCtrl", function($scope, $timeout) {
   $scope.onResultsTabSelected = function() {
      $("#fabButtonAdd").hide();
   };
   $scope.onDiaryTabSelected = function() {
      $("#fabButtonAdd").show();
   };
   $scope.$watch('AppCtrl.isFabOpen', function(isFabOpen) {
      if (isFabOpen) {
         $timeout(function() {
            $scope.fabTooltipVisible = isFabOpen;
         }, 350);
      } else {
         $scope.fabTooltipVisible = isFabOpen;
      }
   });
});

$(window).load(function() {
   $(".hidden-food-intolerance-item").hide();
   $(".hidden-symptoms-item").hide();
   $(".day-card").each(function( index ) {
      if($(this).attr("opened") === "false") {
         $(this).children(".card-content").hide();
      } else {
         $(this).children(".card-header").children(".close-card-icon").hide();
      }
   });
   $(".day-card").click(function() {
      if($(this).attr("opened") === "true") {
         $(this).children(".card-content").hide();
         $(this).children(".card-header").children(".close-card-icon").show();
         $(this).attr("opened", "false");
      } else {
         $(this).children(".card-content").show();
         $(this).attr("opened", "true");
         $(this).children(".card-header").children(".close-card-icon").hide();
      }
   });
   $("#showMoreFoodIntoleranceItemsButton").click(function() {
      $(".hidden-food-intolerance-item").show();
      $(this).hide();
   });
   $("#showMoreSyptomsItemsButton").click(function() {
      $(".hidden-symptoms-item").show();
      $(this).hide();
   });
});
