define(function(require) {

  var Backbone = require('backbone');

  var SearchResult = Backbone.Model.extend({
    defaults: {
      ticker: '',
      name: '',
      quantity: 0
    },

    searchTerm: '',

    url: function() {
      // return 'http://dev.markitondemand.com/Api/v2/InteractiveChart/json?parameters=%7B"Normalized"%3Afalse%2C"NumberOfDays"%3A365%2C"DataPeriod"%3A"Day"%2C"Elements"%3A%5B%7B"Symbol"%3A"' + this.searchTerm +  '"%2C"Type"%3A"price"%2C"Params"%3A%5B"c"%5D%7D%5D%7D';
      return 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + this.searchTerm;
    },

    search: function(keyword) {
      this.searchTerm = keyword;
      this.fetch();
    },

    parse: function(data) {
      console.log(data);
    }
  });

  return new SearchResult();
});
