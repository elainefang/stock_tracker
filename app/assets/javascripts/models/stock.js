var StockModel = Backbone.Model.extend({
  defaults: {
    ticker: '',
    name: '',
    quantity: 0
  }
});


var StockCollection = Backbone.Collection.extend({

  model: StockModel,
  url: '/stocks'
});
