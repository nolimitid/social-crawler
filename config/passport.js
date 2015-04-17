/**
 * Passport configuration
 *
 * This if the configuration for your Passport.js setup and it where you'd
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

module.exports.passport = {
  local: {
    strategy: require('passport-local').Strategy
  },

  twitter: {
    name    : 'Twitter',
    protocol: 'oauth',
    strategy: require('passport-twitter').Strategy,
    options : {
      consumerKey   : 'G6Lzoxrk5Npd2rUfWuwktSYfV',
      consumerSecret: 'VW0xNRgNVKYyRHqknA8eCQpzpd5h38y0CAg27t4qfQ1ZhCWp95'
    }
  }

  //youtube: {
  //  name    : 'Youtube',
  //  protocol: 'oauth2',
  //  strategy: require('passport-youtube').Strategy,
  //  options : {
  //    clientID    : '681206281547-j86ringbcqohtes6fpnei8m2c8drhlln.apps.googleusercontent.com',
  //    clientSecret: 'XKb6knXEIcPZHZTyZcUhFgpt'
  //  }
  //},

  //github: {
  //  name: 'GitHub',
  //  protocol: 'oauth2',
  //  strategy: require('passport-github').Strategy,
  //  options: {
  //    clientID: 'your-client-id',
  //    clientSecret: 'your-client-secret'
  //  }
  //},
  //
  //facebook: {
  //  name: 'Facebook',
  //  protocol: 'oauth2',
  //  strategy: require('passport-facebook').Strategy,
  //  options: {
  //    clientID: '1764297723794605',
  //    clientSecret: '8c7befe94e5bb62bb7eb3ee6177fe37f'
  //  }
  //}
  //
  //google: {
  //  name: 'Google',
  //  protocol: 'oauth2',
  //  strategy: require('passport-google-oauth').OAuth2Strategy,
  //  options: {
  //    clientID: 'your-client-id',
  //    clientSecret: 'your-client-secret'
  //  }
  //}
};
