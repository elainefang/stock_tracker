define(function(require) {

  var Backbone = require('backbone');

  var SearchResult = Backbone.Model.extend({
    defaults: {
      ticker: '',
      positions: [],
      dates: [],
      prices: []

    },

    searchTerm: '',

    url: function() {
      return 'http://dev.markitondemand.com/Api/v2/InteractiveChart/jsonp?parameters=%7B"Normalized"%3Afalse%2C"NumberOfDays"%3A365%2C"DataPeriod"%3A"Day"%2C"Elements"%3A%5B%7B"Symbol"%3A"'+ this.searchTerm +'"%2C"Type"%3A"price"%2C"Params"%3A%5B"c"%5D%7D%5D%7D';
    },

    search: function(keyword) {
      this.searchTerm = keyword;
      this.set({ticker: this.searchTerm});
      this.fetch({dataType: 'jsonp'});
      console.log('fetched data');
    },

    parse: function(data) {

      var setHash = {};

      setHash.positions = data.Positions;
      setHash.dates = data.Dates;
      setHash.prices = data.Elements[0].DataSeries.close.values;

      return setHash;
    }
  });

  return SearchResult;
});
