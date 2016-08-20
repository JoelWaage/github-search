var apiKey = require('./../.env').apiKey;

function Git() {
}

Git.prototype.gitSearch = function(input) {
  $.get('https://api.github.com/users/' + input + '/repos?access_token=' + apiKey).then(function(response){
    for (var i = 0; i < response.length; i++) {
      $('.displayName').append("<li><strong>Repository Name: </strong>" + response[i].name + "</li><ul><li><strong>Description: </strong>" + response[i].description + "</li>" + "<li><strong>URL: </strong>" + response[i].url + "</li></ul><br>");
    }
  }).fail(function(error){
    $('.displayName').text("User Not Found");
    console.log(error.responseJSON.message);
  });
};

exports.gitModule = Git;
