$(function() {
  var stocks = new StockCollection();
  var stocksView = new ListView({collection: stocks});
  var formView = new FormView({collection: stocks});
  stocks.fetch().then(function() {
    var router = new Router();
    Backbone.history.start();
  });
});
