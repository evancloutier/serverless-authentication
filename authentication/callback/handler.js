'use strict';

// Require Serverless ENV vars
var ServerlessHelpers = require('serverless-helpers-js').loadEnv();

// Config
var config = require('../config');

// Providers
var facebook = require('../providers/facebook');
var google = require('../providers/google');
var twitter = require('../providers/twitter');

module.exports.handler = function(event, context) {
  if (event.provider === 'facebook') {
    facebook.callback(event, config, context.done);
  } else if (event.provider === 'google'){
    google.callback(event, config, context.done);
  } else if (event.provider === 'twitter') {
    twitter.callback(event, config, context.done);
  } else {
    context.done('Invalid provider');
  }
};