var app = angular.module('TrackIt', ['ngMaterial']);

$(window).load(function() {
   $("md-whiteframe").click(function() {
      if($("md-whiteframe").attr("opened") === "true") {
         $("md-whiteframe").children("p").hide();
         $("md-whiteframe").children(".card-header").children(".close-card-icon").hide();
         $("md-whiteframe").attr("opened", "false");
      } else {
         $("md-whiteframe").append("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id laoreet sapien. Fusce porta molestie augue rutrum porttitor. Etiam iaculis interdum eros sit amet imperdiet. Sed dignissim vitae tellus at hendrerit. Quisque ante nisl, egestas vitae pulvinar id, fringilla vitae lacus. Morbi viverra velit sapien, eu finibus leo ultricies sed. Ut at sodales nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras tincidunt velit quam, non eleifend mauris placerat sit amet. Suspendisse potenti. Proin hendrerit ligula vitae dui commodo, ac fringilla sem malesuada. Curabitur condimentum sit amet enim sit amet congue. Cras ullamcorper velit varius, placerat lorem id, dictum massa. Aenean nec tellus sit amet metus commodo mollis. Vestibulum diam massa, congue nec leo nec, luctus hendrerit felis.</p>");
         $("md-whiteframe").attr("opened", "true");
         $("md-whiteframe").children(".card-header").children(".close-card-icon").show();
      }
   });
   $("md-whiteframe").click();
});
