define(function(require) {

  var jquery_ujs = require('jquery_ujs');
  var Backbone = require('backbone');

  var router = require('./routers/router');
  var SearchView = require('./views/search');
  var SearchResult = require('./models/search');
  var stockView = require('./views/stock');

  console.log("Main file ready.");

  Backbone.history.start();

});
