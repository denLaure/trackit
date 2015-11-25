var app = angular.module('TrackIt', ['ngMaterial']);
app.controller("AppCtrl", function($scope) {
   $scope.onResultsTabSelected = function() {
      $("#fabButtonAdd").hide();
   };
   $scope.onDiaryTabSelected = function() {
      $("#fabButtonAdd").show();
   };
});

$(window).load(function() {
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
});
