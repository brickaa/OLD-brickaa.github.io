/* Main script file */

$(document).ready(function() {

  var data = [];

  //Load JSON data from Google Spreadsheet
  $.getJSON('https://spreadsheets.google.com/feeds/list/1Vdt46LVbwiivYQw3qNq2Qn7qZktYEIEztKF9z5Ma3Vc/od6/public/values?alt=json', function(json) {
    data = json;
  }).done( function() {
    // console.log(data.feed.entry[0]);
    buildPortfolio(data);
  });

  function buildPortfolio(data) {

    for (var i = 0; i < data.feed.entry.length; i++) {
      entry = data.feed.entry[i];
      console.log(data.feed.entry[i]);
      $('<div class="box col2">' +
        '<h3><a href="' + entry.gsx$url.$t +'">' + entry.title.$t + '</a></h3>' +
        '<p>' + entry.gsx$date.$t + '</p>' +
        '<img src=">' + entry.gsx$img.$t + '" />' +
      '</div>').appendTo('#container');
    }
  }

});

