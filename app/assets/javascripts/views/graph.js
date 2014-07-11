define(function(require) {

  var _ = require('underscore');
  var Backbone = require('backbone');
  var searchResult = require('../models/search');

  var GraphView = Backbone.View.extend({
    tagName: 'div',

    initialize: function() {
      this.listenTo(this.model, 'sync', this.render);
      this.render();
    },

    render: function() {
      var rendered = '<h3>' + this.model.get('ticker') + '</h3>';
      return this.$el.html(rendered);
    }

  });

  return new GraphView({model: searchResult});
});
