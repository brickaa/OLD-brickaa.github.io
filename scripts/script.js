/* Main script file */
'use strict';

function setHeight() {
  var height = $(window).height() * .8;
  $('.landing').css('height', height);
}

$(document).ready(function() {
  var data = [];

  //Load JSON data from Google Spreadsheet
  $.getJSON('https://spreadsheets.google.com/feeds/list/1Vdt46LVbwiivYQw3qNq2Qn7qZktYEIEztKF9z5Ma3Vc/od6/public/values?alt=json', function(json) {
    data = json;
  }).done( function() {
    buildPortfolio(data);
  });

  function buildPortfolio(data) {

    for (var i = 0; i < data.feed.entry.length; i++) {
      entry = data.feed.entry[i];
      console.log(data.feed.entry[i]);
      $('<li>' +
        '<img src="' + entry.gsx$img.$t + '" />' +
        '<h3><a href="' + entry.gsx$url.$t +'">' + entry.title.$t + '</a></h3>' +
        '<p class="dateline">' + entry.gsx$date.$t + '</p>' +
        '<p>' + entry.gsx$desc.$t + '</p>' +
      '</li>').appendTo('.list-grid');
    }
  }

  setHeight();
});

// Reset heights/positions on window resize
$(window).resize(function() {
  setHeight();
});

$(window).on( 'orientationchange', function() {
  setHeight();
});
