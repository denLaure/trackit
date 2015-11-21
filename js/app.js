var app = angular.module('TrackIt', ['ngMaterial']);
app.config(function($mdIconProvider) {
  $mdIconProvider
       .icon('star', '../img/ic_stars_black_24px.svg');    // Register a specific icon (by name)
});

$(window).load(function() {
   $("md-whiteframe").click(function() {
      if($("md-whiteframe").attr("opened") === "true") {
         $("md-whiteframe").children(".card-content").hide();
         $("md-whiteframe").children(".card-header").children(".close-card-icon").hide();
         $("md-whiteframe").attr("opened", "false");
      } else {
         $("md-whiteframe").children(".card-content").show();
         $("md-whiteframe").attr("opened", "true");
         $("md-whiteframe").children(".card-header").children(".close-card-icon").show();
      }
   });
});
