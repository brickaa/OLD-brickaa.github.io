/* Landing width */
'use strict';

function setWidth() {
  var width = $(window).height() * .6;
  $('.cat-love').css('width', width);
}

$(document).ready(function() {
  setWidth();
});

// Reset heights/positions on window resize
$(window).resize(function() {
  setWidth();
});

$(window).on( 'orientationchange', function() {
  setWidth();
});
