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
      }

      // nav
      if(settings.nav == true) {
        navTohide.addClass('is-done');
        navToshow.addClass('is-current');
      }

      return false;
    });

  };

}( jQuery ));
