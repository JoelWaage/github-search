var apiKey = require('./../.env').apiKey;

function Git() {
}

Git.prototype.gitSearch = function(input) {
  $.get('https://api.github.com/users/' + input + '?access_token=' + apiKey).then(function(response){
    $('.displayResult').text("username: " + response.login);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.gitModule = Git;
