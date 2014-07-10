define(function(require) {

  var Backbone = require('backbone');
  var _ = require('underscore');
  var list = require('../models/list');

  var ListView = Backbone.View.extend({
    el: '#container',

    initialize: function() {
      this.listenTo(this.collection, 'add remove change sort', this.render);
    },

    render: function() {
      this.$el.empty();
      var $e = this.$el;

      this.collection.each(function(one) {
        var view = new StockView({model: one});
        $e.append(view.el);
      });
    }
  });
});
