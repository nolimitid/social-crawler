var fb      = require('fbgraph'),
    Promise = require('bluebird');

fb.setAccessToken('711251902306725|8itg58OqQloexHPl5qbrpNJ4JqM');
fb.setVersion('2.2');

var getFbIds = function(ids){
  return new Promise(function(resolve, reject){
    fb.get('?ids=' + ids, function (error, params) {
      if (error) {
        if (error.code === 803) {
          var newIds = ids.split(',');

          if(typeof error.message.split(':')[1] === 'undefined'){
            var errorId = error.message.split('(')[2].split(')')[0];
            sails.log.error('Error ID: ' + errorId);

            var index = newIds.indexOf(errorId);
            newIds.splice(index,1);
          }

          else {
            var errs = error.message.split(':')[1].trim().split(',');
            _.each(errs, function (n, i) {
              sails.log.error('Error ID: ' + n);

              var index = newIds.indexOf(n);
              newIds.splice(index, 1);
            });
          }

          var newList = newIds.join(',');
          resolve(getFbIds(newList));
        }
        else {
          sails.log.error('Facebook get user error! Code: ' + error.code);
          sails.log.info(ids);
        }
      }
      resolve(params);
    });
  });
};

module.exports.getUser = function (ids, count) {
  var that = this;
  sails.log.verbose('Getting Facebook\'s ids: ' + ids);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      getFbIds(ids)
        .then(function(results){
          resolve(results);
        });
    }, count * 2000);
  });
};
