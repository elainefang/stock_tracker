define(function(require) {

  var Backbone = require('backbone');

  var ListItem = Backbone.Model.extend({
    defaults: {
      ticker: '',
      name: '',
      quantity: 0
    }
  });

  var List = Backbone.Collection.extend({

    model: ListItem,
    url: '/stocks'
  });

  return new List();
});
