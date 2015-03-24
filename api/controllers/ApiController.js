/**
 * ApiController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var Promise = require('bluebird');

module.exports = {
  generate_token: function(req, res){
    twitter
      .generate_token(req);
  },
  users_lookup: function (req, res) {
    var ids = req.param('ids').split(',');

    twitter
      .createClient(req)
      .then(function () {
        return twitter.usersLookup(ids);
      }, function (rej) {
        console.error(twitter.token);
        res.serverError(rej);
      })
      .then(function (users) {
        res.json(users);
      }, function (rej) {
        console.error(twitter.token);
        res.serverError(rej);
      });
  },
  user        : function (req, res) {
    var ids = req.param('ids'),
        arrIds = ids.split(','),
        reduced = [],
        promises = [];

    var token = null,
        tokenSecret = null;

    _.each(arrIds, function (n, i) {
      var group = Math.floor(i / 99);
      if (typeof(reduced[group]) === 'undefined') {
        reduced[group] = []
      }
      reduced[group].push(n);
    });

    _.each(reduced, function (n, i) {
      promises.push(twitter.getUser(req, n));
    });

    Promise.all(promises)
      .then(function (results) {
        var flatten = _.flatten(results);
        //var require = _.map(flatten, function (n) {
        //  //return {
        //  //  object_name  : n.name,
        //  //  content      : n.id_str,
        //  //  extra_content: n.screen_name
        //  //}
        //});
        res.json(flatten);
      }, function (rejected) {
        console.error(rejected);
        res.badRequest('error');
      });
  },
  changeApp   : function (req, res) {
    var consumerKey = req.param('consumer_key'),
        consumerSecret = req.param('consumer_secret');

    sails
  },
  cektoken    : function (req, res) {
    twitter
      .cekToken(req)
      .then(function (tweets) {
        res.json(tweets);
      }, function (err) {
        res.negotiate(err);
      })
  }
};
