define(function(require) {

  var jquery_ujs = require('jquery_ujs');
  var Backbone = require('backbone');

  var list = require('./models/list');
  var router = require('./routers/router');
  var SearchView = require('./views/search');
  var SearchResult = require('./models/search');
  var StockView = require('./views/stock');

  console.log("Main file ready.");

  list.fetch();
  Backbone.history.start();

});
