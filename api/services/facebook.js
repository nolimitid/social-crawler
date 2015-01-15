var fb = require('fbgraph'),
  Promise = require('bluebird');

fb.setAccessToken('711251902306725|8itg58OqQloexHPl5qbrpNJ4JqM');
fb.setVersion('2.2');
module.exports.getUser = function(id){
  return new Promise(function(resolve, reject){
    fb.get(id, function(error, params){

      if(error) {
        console.log(error);
        reject(error);
      }

      resolve(params);

    });
  });
};
