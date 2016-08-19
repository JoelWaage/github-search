var Git = require('./../js/GitSearch.js').gitModule;
var input = null;

$(document).ready(function() {
  $('.search').submit(function(event) {
    event.preventDefault();
    input = $('#search-user').val();
    $('#search-user').val("");
    var currentGitObject = new Git();
    currentGitObject.gitSearch(input);
    $('.displayResult').text("Displaying");
  });
});
