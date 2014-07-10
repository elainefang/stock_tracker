define(function(require) {

  var _ = require('underscore');
  var Backbone = require('backbone');

  var GraphView = Backbone.View.extend({
    tagName: 'div',

    initialize: function() {
      this.listenTo(this.model, 'sync', this.render);
    },

    render: function() {
      var rendered = "<p>rendered</p>";
      return this.$el.html(rendered);
    }

  });

  return GraphView;
});
