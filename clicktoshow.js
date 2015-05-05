/*
 * clicktoshow.js
 * Copyright 2015 Jonathan Path
 */

$.fn.clicktoshow = function() {
  $(this).click(function(){
    $('#'+$(this).data("toshow")).show();
    $('#'+$(this).data("toshow2")).show();
    $('#'+$(this).data("tohide")).hide();
    $('#'+$(this).data("tohide2")).hide();
    return false;
  });
};
