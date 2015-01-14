var Twitter = require('twitter'),
  Promise = require('bluebird');

var client = new Twitter({
  consumer_key: 'Ru17p9AvxtGWqzsd938ceCcVt',
  consumer_secret: 'QGwjxIQ08b4LFkmnKh9HXgCxMSqDErlUGCKM4hsiXBBVzFoKTt',
  access_token_key: '85220340-LgeW2o1XvW8pD25IOSYlMkazJZFVkGXLpJp0f6Vch',
  access_token_secret: 'xysVna9kYHpXSqIb2w1uMQTtYvKcsX6QsA7qdxVWrWhCw'
});

module.exports.getUser = function(ids){
  return new Promise(function(resolve, reject){
    client.post('users/lookup.json', {
      screen_name: ids
    }, function(error, params){

        if(error) reject(error);

        resolve(params);

    });
  });
};
