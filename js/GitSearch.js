var apiKey = require('./../.env').apiKey;

function Git() {
}

Git.prototype.gitSearch = function() {
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

// exports.getRepos = function(){
//   $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
//     console.log(response);
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };

exports.gitModule = Git;
