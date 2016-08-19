var apiKey = require('./../.env').apiKey;

function Git() {
}

Git.prototype.gitSearch = function(input) {
  $.get('https://api.github.com/users/' + input + '?access_token=' + apiKey).then(function(response){
    $('.displayName').text("Username:  " + response.login);
    $('.displayUrl').text("User URL:  " + response.url);
  }).fail(function(error){
    $('.displayName').text("User Not Found");
    console.log(error.responseJSON.message);
  });
};

exports.gitModule = Git;
