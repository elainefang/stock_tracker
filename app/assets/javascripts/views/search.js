define(function(require) {

  var Backbone = require('backbone');
  var searchResult = require('../models/search');
  var router = require('../routers/router');

  var SearchView = Backbone.View.extend({
    el: '#search',

    initialize: function() {
      this.listenTo(this.model, 'sync', this.render);
      this.render();
    },

    render: function() {
      console.log('rendered');

    },

    events: {
      'submit': 'onSubmit',
    },

    onSubmit: function(evt) {
      evt.preventDefault();
      var searchTerm = this.$('[name="ticker"]').val();
      this.model.search(searchTerm);
      this.$('input').val('');
      router.navigate('#stocks/' + this.model.searchTerm, true);
    }

  });

  return new SearchView({model: searchResult});
});
