FormView = Backbone.View.extend({
  events : {
    "submit": "submitHandler"
    // you'll want to add a submit event to the form
    // it should trigger the submitHandler function
  },
  initialize : function(obj) {
    this['user']=(obj.model);
    this.render();
    // call on this instance's render function here
  },
  render : function() {
    // here is the html you want to append to $el:
    // <form>
    //  <label for="name"></label>
    //  <input id="name" type="text" name="name">
    //  <input id= "mySubmit" type="submit" value="submit">
    // </form>
    
    // remember to return the instance of the FormView
    var html = '<form><label for="name"></label><input id="name" type="text" name="name"><input id= "mySubmit" type="submit" value="submit"></form>';
    this.$el.html(html);
  },
  submitHandler : function(e) {
    // make sure this function accepts the event parameter
    e.preventDefault();
    // prevent the default behavior (submission) of the form 
    // (call preventDefault on the event) 
    debugger;
    this.model.set('name', this.$el.find('#name').val());
    // save the text is in the input field with an id of name here

    // set the model's name to have a value of the name variable here
  }
});

