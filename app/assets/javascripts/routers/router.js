define(function(require) {

  var Backbone = require('backbone');
  var GraphView = require('../views/graph');
  var StockModel = require('../models/stock');

  var Router = Backbone.Router.extend({
    routes: {
      'stocks'  : 'listStocks',
      'stocks/:id' : 'displayDetail',
      '*default'  : 'listStocks'
    },

    setView: function() {
      if (this.view) {
        this.view.remove();
      }

      this.view = view;
      this.view.render().appendTo('#container');
    },

    listStocks: function() {
      console.log("listStocks function reached");

      var model = new StockModel({ticker: ticker});
      var view = new GraphView({model: model});
      this.setView(view);
      model.fetch();
    }
  });

  return new Router();
});

