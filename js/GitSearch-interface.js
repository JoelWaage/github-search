// var Alarm = require('./../js/TEMPLATE.js').templateModule;
var input = null;

$(document).ready(function() {
  $('.search').submit(function(event) {
    event.preventDefault();
    input = $('#search-user').val();
    $('.displayResult').text("this is a big ole testeroonie");
    console.log(input);
  });
});
