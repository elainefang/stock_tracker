define(function(require) {

  var Backbone = require('backbone');
  var searchResult = require('../models/search');
  var router = require('../routers/router');

  var SearchView = Backbone.View.extend({
    el: '#search',

    initialize: function() {
      this.listenTo(this.model, 'sync', this.render);
      this.model.search('GOOG');
      // this.render();
    },

    render: function() {
      console.log('rendered');
      var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

      var svg = d3.select("body").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      var prices = this.model.get('prices');
      console.log( prices );

      d3.select('svg')
        .data(this.model.get('prices'));

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
