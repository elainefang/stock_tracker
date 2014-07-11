define(function(require) {

  var Backbone = require('backbone');
  var searchResult = require('../models/search');

  var SearchView = Backbone.View.extend({
    el: '#search',

    initialize: function() {
      this.listenTo(this.model, 'sync', this.render);
      this.render();
    },

    render: function() {

    },

    events: {
      'submit': 'onSubmit',
    },

    onSubmit: function(evt) {
      evt.preventDefault();
      var searchTerm = this.$('[name="ticker"]').val();
      this.model.search(searchTerm);
      this.$('input').val('');
    }

  });

  return new SearchView({model: searchResult});
});
