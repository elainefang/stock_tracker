define(function(require) {

  var Backbone = require('backbone');
  var _ = require('underscore');
  var stockHTML = require('text!../templates/stock.html');
  var list = require('../models/list');

  var StockView = Backbone.View.extend({
    tagName: 'div',
    template: _.template(stockHTML),

    initialize: function() {
      this.listenTo(this.model, 'sync', this.render);
    },

    render: function() {


      $("svg").remove();
      var prices = this.model.get('prices');
      // var dates = this.model.get('dates');
      var positions = this.model.get('positions');

      var stockArray = [];

      for (var i = 0; i < prices.length; i++) {
        var stockHash = {};
        stockHash["position"] = positions[i];
        stockHash["price"] = prices[i];

        stockArray.push(stockHash);
      }

      var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

      // var parseDate = d3.time.format("%Y-%m-%dT%H:%M:%SZ").parse;

      var x = d3.time.scale()
          .range([0, width]);

      var y = d3.scale.linear()
          .range([height, 0]);

      var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom");

      var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left");

      var line = d3.svg.line()
          .x(function(d) { return x(d.position); })
          .y(function(d) { return y(d.price); });

      var svg = d3.select(".main").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


      stockArray.forEach(function(d) {

          // d.date = parseDate(d.date);
          d.position = d.position;
          d.price = +d.price;

      x.domain(d3.extent(stockArray, function(d) { return d.position; }));
      y.domain(d3.extent(stockArray, function(d) { return d.price; }));

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Price ($)");

      svg.selectAll("path").remove();

      svg.append("path")
          .datum(stockArray)
          .attr("class", "line")
          .attr("d", line);
      });

      var rendered = this.template(this.model.toJSON());

      return this.$el.html(rendered);
    },

    events: {
      'click #add': 'onAdd',
      'click #delete': 'onRemove'
    },

    onAdd: function(evt) {
      evt.preventDefault();
      console.log("Add button clicked");
      // var saved = this.getSavedStock();
      // if (saved) {

      // create what you add as a model, and add it to the collection
      list.create({
        ticker: this.model.get('ticker'),
        user_id: parseInt($('#user-id').val())
      });

      // }
    },

    getSavedStock: function() {
      var stockTicker = this.model.get('ticker');
      return list.findWhere({ticker: stockTicker});
    },

    onRemove: function(evt) {
      evt.preventDefault();

      console.log("Remove button clicked");
      var saved = this.getSavedStock();

      if (!saved) {
        saved.destroy();
      }

    }

  });

  return StockView;
});
