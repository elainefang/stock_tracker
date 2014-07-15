define(function(require) {

  var Backbone = require('backbone');
  var list = require('../models/list');

  var ListView = Backbone.View.extend({
    el: '#stock-list',

    initialize: function() {
      this.listenTo(this.collection, 'sync add remove', this.render);
    },

    render: function() {
      var html = '';

      this.collection.each(function(model) {
        html += '<li><a href="#stocks/' + model.get('ticker') + '">' + model.get('ticker') + '</a></li>';
      });

      this.$el.html(html);
    }
  });

  return new ListView({collection: list});
});
