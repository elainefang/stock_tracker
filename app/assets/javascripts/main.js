define(function(require) {

  var jquery_ujs = require('jquery_ujs');
  var Backbone = require('backbone');

  var list = require('./models/list');
  var router = require('./routers/router');
  var SearchView = require('./views/search');
  var SearchResult = require('./models/search');
  var StockView = require('./views/stock');
  var listView = require('./views/list');

  list.fetch().then(function() {
    console.log(list);
    // list.each(function(model) {
    //   console.log(model.get('ticker'));
    // });
    Backbone.history.start();
  });

});
