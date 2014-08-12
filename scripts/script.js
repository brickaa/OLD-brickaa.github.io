/* Main script file */

$(document).ready(function() {

  var data = [];

  //Load JSON data from Google Spreadsheet
  $.getJSON('https://spreadsheets.google.com/feeds/list/1Vdt46LVbwiivYQw3qNq2Qn7qZktYEIEztKF9z5Ma3Vc/od6/public/values?alt=json', function(json) {
  	data = json;
  }).done( function() {
  	console.log(data);
  })

});