var app = angular.module('TrackIt', ['ngMaterial']);
app.config(function($mdIconProvider) {
  $mdIconProvider
       .icon('star', '../img/ic_stars_black_24px.svg');    // Register a specific icon (by name)
});

$(window).load(function() {
   $(".day-card").each(function( index ) {
     if($(this).attr("opened") === "false") {
         $(this).children(".card-content").hide();
         $(this).children(".card-header").children(".close-card-icon").hide();
      }
   });
   $(".day-card").click(function() {
      if($(this).attr("opened") === "true") {
         $(this).children(".card-content").hide();
         $(this).children(".card-header").children(".close-card-icon").hide();
         $(this).attr("opened", "false");
      } else {
         $(this).children(".card-content").show();
         $(this).attr("opened", "true");
         $(this).children(".card-header").children(".close-card-icon").show();
      }
   });
});
