/*
 * clicktoshow.js
 * Copyright 2015 Jonathan Path
 */

(function ( $ ) {

  $.fn.clicktoshow = function( options ) {

    var settings = $.extend({
        effect: "none",
        duration: 300,
        nav: false
    }, options );

    $(this).bind("click", function(){
      var navToshow = $('#'+$(this).data("toshow")+'-nav');
      var navTohide = $('#'+$(this).data("tohide")+'-nav');
      var toshow = $('#'+$(this).data("toshow")+',#'+$(this).data("toshow2"));
      var tohide = $('#'+$(this).data("tohide")+',#'+$(this).data("tohide2"));

      // effect
      if(settings.effect == "none") {
        toshow.show();
        tohide.hide();
      } else if(settings.effect == "fade") {
        tohide.fadeOut(settings.duration, function(){
          toshow.fadeIn(settings.duration);
        });
      } else if(settings.effect == "slideUp") {
        tohide.animate({
          'top': '-500px',
          'opacity': '0'
        }, settings.duration, function(){
          $(this).hide();
          toshow.css({
            display: 'block',
            top: '+500px',
            opacity: 0
          });
          toshow.animate({
            top: 0,
            opacity: 1
          });
        });
      } else if(settings.effect == "slideBottom") {
        tohide.animate({
          'top': '500px',
          'opacity': '0'
        }, settings.duration, function(){
          $(this).hide();
          toshow.css({
            display: 'block',
            top: '-500px',
            opacity: 0
          });
          toshow.animate({
            top: 0,
            opacity: 1
          });
        });
      }

      // nav
      if(settings.nav == true) {
        $('[data-toshow-nav]')
          .removeClass('is-current');
        navToshow
          .addClass('is-current')
          .addClass('is-done');
      }

      return false;
    });

  };

}( jQuery ));
