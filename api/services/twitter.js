var Twitter = require('twitter'),
  Promise = require('bluebird');

module.exports.getUser = function(req, ids){
  var token = null,
    tokenSecret = null;
  Passport.findOne({user:req.user.id,provider:'twitter'})
    .exec(function(err, rec){
      token = rec.tokens.token;
      tokenSecret = rec.tokens.tokenSecret;
    });
  var client = new Twitter({
    consumer_key: 'consumer-key',
    consumer_secret: 'consumer-secret',
    access_token_key: token,
    access_token_secret: tokenSecret
  });
  return new Promise(function(resolve, reject){
    client.post('users/lookup.json', {
      screen_name: ids
    }, function(error, params){

        if(error) reject(error);

        resolve(params);

    });
  });
};
