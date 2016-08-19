var apiKey = require('./../.env').apiKey;

function Git() {
}

Git.prototype.gitSearch = function(input) {
  $.get('https://api.github.com/users/' + input + '/repos?access_token=' + apiKey).then(function(response){
    // $('.displayName').text("Username:  " + response.login);
    // $('.displayUrl').text("User URL:  " + response.url);
    console.log(JSON.stringify(response));
  }).fail(function(error){
    $('.displayName').text("User Not Found");
    console.log(error.responseJSON.message);
  });
};

exports.gitModule = Git;
