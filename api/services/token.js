var token = {
  inject: {
    twitter: function (obj) {
      sails.config.passport.twitter.options.consumerKey = obj.consumerKey;
      sails.config.passport.twitter.options.consumerSecret = obj.consumerSecret;
    }
  }
};

module.exports = token;
