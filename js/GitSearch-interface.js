// var Alarm = require('./../js/TEMPLATE.js').templateModule;
var apiKey = require('./../.env').apiKey
var input = null;


$(document).ready(function() {
  $('.search').submit(function(event) {
    event.preventDefault();
    input = $('#search-user').val();
    $('#search-user').val("");
    $('.displayResult').text("result text");
  });
});
