/**
 * ApiController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var Promise = require('bluebird');
var fs = require('fs');

var fulljson = JSON.parse(fs.readFileSync('./file/fullparsed.json'));
var validjson = JSON.parse(fs.readFileSync('./file/validation.json'));

var parseUrl = function (url) {
  if (!url) return '';
  var Url = require('url');
  var raw = Url.parse(url);
  if (!raw) return '';
  return raw.pathname.split('/').reverse()[0];
};

module.exports = {
  validate: function (req, res) {
    res.json(_.map(fulljson, function (n) {
      var temp = n;
      var validation = {
        twitter: {},
        fb: {}
      };

      var full = _.map(fulljson, function (n) {
        var temp = n;
        //check twitter
        if (typeof validation.twitter[n.twitter] === 'undefined') {
          validation.twitter[n.twitter] = {
            count: 1,
            list: [n]
          };
          temp.twitterValid = true;
          if (n.twitter === '') temp.twitterValid = false;
        }
        else {
          validation.twitter[n.twitter].count += 1;
          validation.twitter[n.twitter].list.push(n);
          temp.twitterValid = false;
        }

        //check fb
        if (typeof validation.fb[n.fb] === 'undefined') {
          validation.fb[n.fb] = {
            count: 1,
            list: [n]
          };
          temp.fbValid = true;
          if (n.fb === '') temp.fbValid = false;
        }
        else {
          validation.fb[n.fb].count += 1;
          validation.fb[n.fb].list.push(n);
          temp.fbValid = false;
        }

        return temp;
      });

      var summary = {
        twitter: {
          validRows: 0,
          list: []
        },
        fb: {
          validRows: 0,
          list: []
        }
      };

      _.each(full, function (n) {
        //check twitter
        if (n.twitterValid === true) {
          summary.twitter.validRows += 1;
          summary.twitter.list.push(n.twitter);
        }
        if (n.fbValid === true) {
          summary.fb.validRows += 1;
          summary.fb.list.push(n.fb);
        }
      });

      res.json({
        full: full,
        validation: validation,
        summary: summary
      });
    }));
  },
  twitter: function (req, res) {
    var arrIds = validjson.summary.twitter.list,
        reduced = [],
        promises = [];

    _.each(arrIds, function (n, i) {
      var group = Math.ceil(i / 99);
      if (typeof(reduced[group]) === 'undefined') {
        reduced[group] = []
      }
      reduced[group].push(n);
    });

    _.each(reduced, function (n, i) {
      promises.push(twitter.getUser(n));
    });

    Promise.all(promises)
      .then(function (results) {
        var flatten = _.flatten(results);
        var require = _.map(flatten, function (n) {
          return {
            object_name: n.name,
            content: n.id_str,
            extra_content: n.screen_name
          }
        });
        res.json(require);
      });
  },
  fb: function (req, res) {
    //var arrIds = validjson.summary.fb.list.slice(0,200),
    var arrIds = validjson.summary.fb.list,
        reduced = [],
        promises = [];

    _.each(arrIds, function (n, i) {
      var group = Math.ceil(i / 49);
      if (typeof(reduced[group]) === 'undefined') {
        reduced[group] = []
      }
      reduced[group].push(n);
    });

    sails.log.verbose('Getting Facebook\'s users divided into '+reduced.length+' groups');
    _.each(reduced, function (n, i) {
      var ids = n.join(',');
      promises.push(facebook.getUser(ids,i));
    });

    Promise.all(promises)
      .then(function(results, rejects){
        //console.log(results);
        var flatten = _.flatten(_.map(results, function(n){
          return _.map(n, function(o){
            return o;
          });
        }));
        //console.log(flatten);
        var require = _.map(flatten, function(n){
          return {
            object_name: n.name || '',
            content: n.id || '',
            extra_content: n.id || ''
          }
        });
        if(rejects) return res.json(rejects);
        res.json(require);
      });
  }
};
