var Router = Backbone.Router.extend({
  routes: {
    'stocks'  : 'listStocks',
    'stocks/:id' : 'displayDetail'
    '*default'  : 'listStocks',
  },

  clearView: function() {
    if (this.view) {
      this.view.remove();
      this.view = null;
    }
  },

  listStocks: function() {
    console.log("listStocks function reached");
    this.clearView()
    this.view = new
  }
});
