var Alarm = require('./../js/TEMPLATE.js').templateModule;

$(document).ready(function() {
  $('#submit').submit(function(event) {
    event.preventDefault();
    console.log("boom");
  });
});
