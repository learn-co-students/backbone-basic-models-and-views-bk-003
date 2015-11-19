FormView = Backbone.View.extend({
  events : {
    // you'll want to add a submit event to the form
    // it should trigger the submitHandler function
    "submit" : "submitHandler",
  },
  initialize : function() {
    // call on this instance's render function here
    this.render();
  },
  render : function() {
    // here is the html you want to append to $el:
    // <form>
    //  <label for="name"></label>
    //  <input id="name" type="text" name="name">
    //  <input id= "mySubmit" type="submit" value="submit">
    // </form>
    
    // remember to return the instance of the FormView

    this.$el.append('<form><label for="name"></label><input id="name" type="text" name="name"><input id= "mySubmit" type="submit" value="submit"></form>');
  },
  submitHandler : function(event) {
    // make sure this function accepts the event parameter
    
    // prevent the default behavior (submission) of the form 
    // (call preventDefault on the event) 
    
    // save the text is in the input field with an id of name here

    // set the model's name to have a value of the name variable here

    var name = this.$el.find("#name").val();

    this.model.set("name", name)

    event.preventDefault();
  }
})