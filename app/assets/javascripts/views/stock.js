define(function(require) {

  var Backbone = require('backbone');
  var _ = require('underscore');
  var stockHTML = require('text!../templates/stock.html');

  var StockView = Backbone.View.extend({
    tagName: 'div',
    template: _.template(stockHTML),

    initialize: function() {
      this.listenTo(this.model, 'sync', this.render);
    },

    render: function() {
      var rendered = this.template(this.model.toJSON());

      var dates = this.model.get('dates');
      var positions = this.model.get('positions');
      var prices = this.model.get('prices');

      return this.$el.html(rendered);

    }
  });

  return StockView;
});
