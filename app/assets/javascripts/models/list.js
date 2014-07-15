define(function(require) {

  var Backbone = require('backbone');

  var ListItem = Backbone.Model.extend({
    defaults: {
      ticker: '',
      name: '',
      user_id: '',
    }
  });

  var List = Backbone.Collection.extend({
    model: ListItem,
    url: '/users/'+ $('#user-id').val() + 'stocks'
  });

  return new List();
});
