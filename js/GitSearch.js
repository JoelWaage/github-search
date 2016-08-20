var apiKey = require('./../.env').apiKey;

function Git() {
}

Git.prototype.gitSearch = function(input) {
  $.get('https://api.github.com/users/' + input + '/repos?access_token=' + apiKey).then(function(response){
    for (var i = 0; i < response.length; i++) {
      $('.displayName').append("<li><strong>" + response[i].name + "</strong></li><ul><li>" + response[i].description + "</li></ul>");
      // $('.displayDescription').append("<li>" + response[i].description + "</li>");
    }
  }).fail(function(error){
    $('.displayName').text("User Not Found");
    console.log(error.responseJSON.message);
  });
};

exports.gitModule = Git;
