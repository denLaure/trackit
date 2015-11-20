$(window).load(function(){
   $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider-nav',
      infinite:false
   });
   $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      infinite:false
   });
   var screen_height = $( window ).height();
   var screen_width = $( window ).height();

   /* menu-slider and top-buttons holder slider image*/
   $('.slider-nav').css('height', 0.0875 * screen_height);
   $('.top-buttons-holder').css('height', 0.0875 * screen_height);
   $('.top-buttons-holder-market').css('height', 0.0875 * screen_height);
   $('.css-fix-object').css('height', 0.0875 * screen_height);

   // set height event cards in pub
   screen_height = $( window ).height();

   // set height profile image cards in home
   $('.profile-image').css('height', 0.25 * screen_height);

   var menuSliderTop = $('.slider-for').outerHeight() + $('#menu-slider').outerHeight() - $('.slider-image').outerHeight();
   $('#menu-slider').css("top", '-' + menuSliderTop + 'px');

   var menuSliderPadding = ($('#menu-slider').height() - $('.menu-label').height())/2;
   $('#menu-slider').css("padding-top", '' + menuSliderPadding + 'px');

   $('.add').css('height', 0.15 * screen_height);

   $('.menu-highlight').attr("width", "" + $(".menu-element.slick-current").children(".menu-label").outerWidth() + "px");
   $('#menu-slider').on('afterChange', function(event, slick, currentSlide){
      if (currentSlide == 1 || currentSlide == 3) {
         $('.mfb-component--br').animate({'margin-bottom':'-150'});
      } else {
         $('.mfb-component--br').animate({'margin-bottom':'25'});
         if (currentSlide == 4) {
            $(".float-button-icon").attr("src", "img/ic_swap_vert_white_24dp.png");
         } else {
            $(".float-button-icon").attr("src", "img/ic_add_white_24dp.png");
         }
      }
      $(".menu-element").children("hr").remove();
      $(".menu-element.slick-current").append("<hr class='menu-highlight' size='6px' color='#687e1e' align='center'>");
      $('.menu-highlight').attr("width", "" + $(".menu-element.slick-current").children(".menu-label").outerWidth() + "px");
   });
   var floatingButtonIconTop = ($('#float-btn').outerHeight() - $('.float-button-icon').outerHeight())/2;
   $('.float-button-icon').css('top', "" + floatingButtonIconTop + "px");
   $(".mfb-component--br").on("tap", function() {
      var currentSlide = $('#menu-slider').slick('slickCurrentSlide');
      if (currentSlide === 0) window.location.href = "addad.html";
   });
   $("#bike-repair-img").on("tap", function() {
      window.location.href = "market.html";
   });
   $(".top-button-market-left").on("tap", function() {
      window.location.href = "index.html";
   });
   $("#offering-ad-img").on("tap", function() {
      $(".add-ad-info").animate({'opacity':'1'});
   });
   $("#looking-for-ad-img").on("tap", function() {
      $(".add-ad-info").animate({'opacity':'0'});
   });
});

$( window ).resize(function() {
   // set height thumbnails equal to width
   var width = $('.thumbnail').first().width();
   $('.thumbnail').css('height', width);
   $('.thumbnail').css('margin-top', margin);
});