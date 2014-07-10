define(function(require) {});
  var FormView = Backbone.View.extend({
    el: 'form',

    events: {
      'submit' : 'createStock'
    },

    createStock: function(evt) {
      evt.preventDefault();

      var ticker = this.$('[name="ticker').val();
      this.el.reset();
      this.collection.create({
        ticker: ticker
      });
    }
  });
