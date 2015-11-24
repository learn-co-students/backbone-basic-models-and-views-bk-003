User = Backbone.Model.extend({
  initialize: function() {
    //do some stuff
  },
  defaults: {
    "name": "blake"
  }
});
user = new User({
  height: 0,
  weight: 0,
  admin: true
});
