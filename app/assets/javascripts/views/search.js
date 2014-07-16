define(function(require) {

  var Backbone = require('backbone');
  var SearchResult = require('../models/search');
  var router = require('../routers/router');

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
      this.$('input').val('');
      router.navigate('#stocks/' + searchTerm, true);
    }

  });

  var model = new SearchResult();
  return new SearchView({model: model});
});
