FormView = Backbone.View.extend({
  events : {
    "click #mySubmit" : "submitHandler"
  },
  initialize : function() {
    this.render();
  },
  render : function() {
    form = '<form><label for="name"></label><input id="name" type="text" name="name"><input id= "mySubmit" type="submit" value="submit"></form>'
    this.$el.html(form);
    return this.$el;
  },
  submitHandler : function(event) {
    event.preventDefault();
    var text = $("#name").val();
    this.model.set('name', text)
  }
})