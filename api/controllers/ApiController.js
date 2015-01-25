/**
 * ApiController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var Promise = require('bluebird');
var fs = require('fs');
var tosql = require('mongo-sql');

var fulljson = JSON.parse(fs.readFileSync('./file/fullparsed.json'));
var validjson = JSON.parse(fs.readFileSync('./file/validation.json'));
//var keyword = JSON.parse(fs.readFileSync('./file/keyword.json'));
var socialData = JSON.parse(fs.readFileSync('./file/social_data.json'));

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

    sails.log.verbose('Getting Facebook\'s users divided into ' + reduced.length + ' groups');
    _.each(reduced, function (n, i) {
      var ids = n.join(',');
      promises.push(facebook.getUser(ids, i));
    });

    Promise.all(promises)
      .then(function (results, rejects) {
        //console.log(results);
        var flatten = _.flatten(_.map(results, function (n) {
          return _.map(n, function (o) {
            return o;
          });
        }));
        //console.log(flatten);
        var require = _.map(flatten, function (n) {
          return {
            object_name: n.name || '',
            content: n.id || '',
            extra_content: n.id || ''
          }
        });
        if (rejects) return res.json(rejects);
        res.json(require);
      });
  },
  sql: function (req, res) {
    var media = req.param('media') || null;
    if (!media) return res.ok('parameter \'media\' harap diisi \'facebook\' atau \'twitter\'');

    var file = JSON.parse(fs.readFileSync('./file/' + media + '.json'));
    var sql = _.map(file, function (n) {
      return '("' + n.object_name + '","' + media + '","account","' + n.content + '","' + n.extra_content + '", @APPID, now())'
    }).join(',');
    res.ok(sql);
  },
  parsing: function (req, res) {
    var result = [];
    sails.log.verbose('social_data length: ' + socialData.length);
    _.each(socialData, function (n) {
      var stream_type = 'account';
      //if (n.keyword_supertype === 2) {
      //  stream_type = 'account'
      //}
      //else if (n.keyword_supertype === 1) {
      //  stream_type = 'account'
      //}

      var media;
      if (n.social_type === 1) {
        media = 'twitter'
      }
      else if (n.social_type === 2) {
        media = 'facebook'
      }
      else if (n.social_type === 3) {
        media = 'facebook'
      }

      var object_name = n.socialaccount_id;
      var content = n.social_id;
      //var extra_content = n.extra_content;
      var extra_content = n.display_name;

      if (!(media && stream_type)) return;

      result.push('("' + object_name + '","' + media + '","' + stream_type + '","' + content + '","' + extra_content + '", @APPID, now())');
      //result.push({
      //  object_name: object_name,
      //  media_id: media,
      //  stream_type: stream_type,
      //  content: content,
      //  extra_content: extra_content,
      //  app_id: '@APPID',
      //  date_created: 'NOW()'
      //});
    });

    sails.log.verbose('Results length: ' + result.length)

    //var sql = tosql.sql({
    //  type: 'insert',
    //  table: 'object',
    //  columns: ['object_name', 'media_id', 'stream_type', 'content', 'extra_content', 'app_id', 'date_created'],
    //  values: result
    //}).toString();

    res.ok(result.join(', '));
  }
};
