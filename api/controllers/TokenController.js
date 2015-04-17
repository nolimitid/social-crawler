/**
 * TokenController
 *
 * @description :: Server-side logic for managing tokens
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var request    = require('request');
var twitterAPI = require('node-twitter-api');
var data       = {};
var twitter    = null;
var tokens     = {};

module.exports = {
  main   : function (req, res) {
    res.view();
  },
  hooks  : function (req, res) {
    twitter.getAccessToken(req.param('oauth_token'), tokens[req.param('oauth_token')], req.param('oauth_verifier'), function (error, accessToken, accessTokenSecret, results) {
      if (error) {
        console.error(error);
        return res.negotiate(error);
      }
      
      res.json({
        consumerKey        : data.consumerKey,
        consumerSecret     : data.consumerSecret,
        access_token       : accessToken,
        access_token_secret: accessTokenSecret,
        user_id            : results.user_id,
        screen_name        : results.screen_name
      });
    });
  },
  twitter: function (req, res) {
    data = {
      consumerKey   : req.param('consumer_key'),
      consumerSecret: req.param('consumer_secret'),
      callback      : format('%s/token/hooks', sails.getBaseurl())
    };
    if (!(req.param('consumer_key') && req.param('consumer_secret'))) return res.badRequest('please give consumer_key, consumer_secret');

    twitter = new twitterAPI(data);
    twitter.getRequestToken(function (error, requestToken, requestTokenSecret, results) {
      if (error) {
        console.error(error);
        res.negotiate(error);
      } else {
        tokens[requestToken] = requestTokenSecret;
        return res.redirect(twitter.getAuthUrl(requestToken));
      }
    });
  }
};