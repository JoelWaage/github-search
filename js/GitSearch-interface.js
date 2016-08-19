var Git = require('./../js/GitSearch.js').gitModule;

$(document).ready(function() {
  var currentGitObject = new Git();
  $('.search').submit(function(event) {
    event.preventDefault();
    var input = $('#search-user').val();
    $('#search-user').val("");
    currentGitObject.gitSearch(input);
    console.log(input);
  });
});
