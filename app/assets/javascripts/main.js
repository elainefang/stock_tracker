define(function(require) {
  console.log("main define");

  var jquery_ujs = require('jquery_ujs');
  var Backbone = require('backbone');

  var list = require('./models/list');
  var stocksView = new ListView({collection: stocks});
  var formView = new FormView({collection: stocks});
  stocks.fetch().then(function() {
    var router = new Router();
    Backbone.history.start();
  });
});
