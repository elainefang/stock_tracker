define(function(require) {

  var jquery_ujs = require('jquery_ujs');
  var Backbone = require('backbone');

  var router = require('./routers/router');
  var searchView = require('./views/search');
  var searchResult = require('./models/search');
  var stockView = require('./views/stock');

  console.log("Main file ready.");

  Backbone.history.start();

});
