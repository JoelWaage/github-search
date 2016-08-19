var Git = require('./../js/GitSearch.js').gitModule;
// var apiKey = require('./../.env').apiKey;
var input = null;
//
//
$(document).ready(function() {
  $('.search').submit(function(event) {
    event.preventDefault();
    var currentGitObject = new Git();
    currentGitObject.gitSearch();
    input = $('#search-user').val();
    $('#search-user').val("");
    $('.displayResult').text("Displaying");
  });
});
