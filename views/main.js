FormView = Backbone.View.extend({
  events: {
    // you'll want to add a submit event to the form
    // it should trigger the submitHandler function
    "submit form":  "submitHandler"
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.append('<form><label for="name"></label><input id="name" type="text" name="name"><input id= "mySubmit" type="submit" value="submit"></form>');
    return this;
  },
  submitHandler: function(event) {
      event.preventDefault();
      this.model.set('name', $("#name").val());
      return this.model.get('name');
    // save the text is in the input field with an id of name here

    // set the model's name to have a value of the name variable here
  }
});
