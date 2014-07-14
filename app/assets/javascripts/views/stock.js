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

      var dates = this.model.attributes.dates;
      var positions = this.model.attributes.positions;
      var prices = this.model.attributes.prices;

      // svg.selectAll("circle").data(country).enter()
      //   .append("circle")
      //   .attr("cx",function(d,i) {return x(GERD[i]);})
      //   .attr("cy",function(d,i) {return y(growth[i]);})
      //   .attr("r",function(d,i) {return r(Math.sqrt(population[i]));})

      //   .style("fill",function(d,i) {return c(continent[i]);})
      //   .style("opacity",function(d,i) {return o(GDPcap[i]);})

      //     .append("title")
      //     .text(String);

      var margin = {top: 30, right: 20, bottom: 30, left: 50},
          width = 600 - margin.left - margin.right,
          height = 270 - margin.top - margin.bottom;

      var parseDate = d3.time.format("%d-%b-%y").parse;

      var x = d3.time.scale().range([0, width]);
      var y = d3.scale.linear().range([height, 0]);

      var xAxis = d3.svg.axis().scale(x)
          .orient("bottom").ticks(5);

      var yAxis = d3.svg.axis().scale(y)
          .orient("left").ticks(5);

      var valueline = d3.svg.line()
          .x(function(d) { return x(d.date); })
          .y(function(d) { return y(d.close); });

      var svg = d3.select("body")
          .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
          .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      return this.$el.html(rendered);
    }
  });

  return StockView;
});
