define(function(require) {

  var Backbone = require('backbone');
  var list = require('../models/list');

  var ListView = Backbone.View.extend({
    el: '#stock-list',

    initialize: function() {
      this.listenTo(this.collection, 'sync add remove', this.render);
      this.render();
    },

    render: function() {
      var html = '';

      console.log('Collection in list view');
      console.log(this.collection);
      list.each(function(model) {
        html += '<li><a href="#stocks/' + model.get('ticker') + '">' + model.get('ticker') + '</a></li>';
      });

      this.$el.html(html);
    }
  });

  return new ListView({collection: list});
});
