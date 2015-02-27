var fb = require('fbgraph'),
  Promise = require('bluebird');

fb.setAccessToken('accesstoken');
fb.setVersion('2.2');
module.exports.getUser = function(id){
  return new Promise(function(resolve, reject){
    fb.get(id, function(error, params){

      if(error) {
        reject(error);
      }

      resolve(params);

    });
  });
};
