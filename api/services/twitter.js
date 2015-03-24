var Twitter = require('twitter');

var twitter = {
  client      : null,
  token       : null,
  generate_token: function(req){
    var that = this;

    var consumerKey = req.param('consumer_key'),
        consumerSecret = req.param('consumer_secret');

    var obj = {
      consumerKey: consumerKey,
      consumerSecret : consumerSecret
    };

    //if (!(consumerKey && consumerSecret)) return reject('please provide `consumer_key` and `consumer_secret` parameter');

    var opt = {
      consumer_key       : sails.config.passport.twitter.options.consumerKey,
      consumer_secret    : sails.config.passport.twitter.options.consumerSecret
    };

    that.client = new Twitter(opt);
    that.token = opt;

    that.client.post('/oauth/request_token', {
    }, function (err, users) {

      //if (err) return reject(err);
      //
      //resolve(users);
    });
  },
  createClient: function (req) {
    var that = this;
    return new Promise(function (resolve, reject) {
      if (!(sails.config.passport.twitter.options.consumerKey && sails.config.passport.twitter.options.consumerSecret)) {
        reject(new Error('consumer key and secret not yet provided'));
      }

      Passport
        .findOne({user: req.user.id, provider: 'twitter'})
        .exec(function (err, rec) {
          if (err) return reject(err);

          var opt = {
            consumer_key       : sails.config.passport.twitter.options.consumerKey,
            consumer_secret    : sails.config.passport.twitter.options.consumerSecret,
            access_token_key   : rec.tokens.token,
            access_token_secret: rec.tokens.tokenSecret
          };

          that.client = new Twitter(opt);
          that.token = opt;

          resolve(this.client);
        });
    });
  },
  usersLookup : function (ids) {
    var that = this;
    return new Promise(function (resolve, reject) {
      that.client.get('/users/lookup', {
        screen_name: ids.join(',')
      }, function (err, users) {

        if (err) return reject(err);

        resolve(users);
      });
    });
  },
  getUser     : function (req, ids) {
    return new Promise(function (resolve, reject) {
      Passport
        .findOne({user: req.user.id, provider: 'twitter'})
        .exec(function (err, rec) {
          var token = rec.tokens.token,
              tokenSecret = rec.tokens.tokenSecret;

          var opt = {
            consumer_key       : sails.config.passport.twitter.options.consumerKey,
            consumer_secret    : sails.config.passport.twitter.options.consumerSecret,
            access_token_key   : token,
            access_token_secret: tokenSecret
          };

          var client = new Twitter(opt);
          console.log(ids.join(','));

          client.get('/users/lookup', {
            screen_name: ids.join(','),
            count      : 200
          }, function (err, params) {

            if (err) {
              console.error('error get user from token: ' + JSON.stringify(opt));
              return reject(err);
            }

            resolve(params);

          });
        });
    });
  },
  cekToken    : function (req) {
    return new Promise(function (resolve, reject) {
      var client = new Twitter({
        consumer_key       : 'N5pxQ5QGhWOvXdDf8DajXWmOt',
        consumer_secret    : 'pR0U4OdEUNBcT73YlEQ8xpdPMZb8edVBFuDvuGlaFTpI2cJ8fl',
        access_token_key   : '1554828487-4S0AcKMnMccZeF5RYwLxxp4ANhkRgbc1dRpQURn',
        access_token_secret: 'cg9ycgnbRalLrCzgrAwJ0b5CEeeyWthri54vmHl9uOxFA'
      });

      client.stream('statuses/filter', {
        track: 'now'
      }, function (stream) {
        stream
          .on('data', function (tweet) {
            console.log(tweet.text);
          });
        stream
          .on('error', function (err) {
            console.error(err);
          });
      });
    });
  }
}

module.exports = twitter;
