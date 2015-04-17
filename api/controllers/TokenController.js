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
  main    : function (req, res) {
    res.view();
  },
  receive: function (req, res) {
    console.log(req.allParams());
    twitter.getAccessToken(req.param('oauth_token'), tokens[req.param('oauth_token')], req.param('oauth_verifier'), function (error, accessToken, accessTokenSecret, results) {
      if (error) {
        console.error(error);
        res.negotiate(error);
      } else {
        res.json({
          consumerKey        : data.consumerKey,
          consumerSecret     : data.consumerSecret,
          access_token       : accessToken,
          access_token_secret: accessTokenSecret
        });
      }
    });
  },
  twitter: function (req, res) {
    data = {
      consumerKey   : req.param('consumer_key'),
      consumerSecret: req.param('consumer_secret'),
      callback      : format('http://%s:%s/token/receive', req.host, 1337)
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