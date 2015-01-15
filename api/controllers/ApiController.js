/**
 * ApiController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var Promise = require('bluebird');

module.exports = {
	user : function(req,res){
    var ids = req.param('ids'),
      arrIds = ids.split(','),
      reduced = [],
      promises = [];

    var token = null,
      tokenSecret = null;

    _.each(arrIds, function(n,i){
      var group = Math.ceil(i/99);
      if(typeof(reduced[group])==='undefined'){ reduced[group] = [] }
      reduced[group].push(n);
    });

    _.each(reduced, function(n,i){
      promises.push( twitter.getUser(req, n) );
    });

    Promise.all(promises)
      .then(function(results){
        var flatten = _.flatten(results);
        var require = _.map(flatten, function(n){
          return {
            object_name: n.name,
            content: n.id_str,
            extra_content: n.screen_name
          }
        });
        res.ok(require);
      });
  }
};
