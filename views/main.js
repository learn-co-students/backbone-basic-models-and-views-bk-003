FormView = Backbone.View.extend({
  events : {
    // you'll want to add a submit event to the form
    // it should trigger the submitHandler function
    'submit' : 'submitHandler'
  },
  initialize : function() {
    // call on this instance's render function here
    this.render();
  },
  render : function() {
    // here is the html you want to append to $el:
    var frm = '<form><label for="name"></label><input id="name" type="text" name="name"><input id= "mySubmit" type="submit" value="submit"></form>'
    this.$el.html(frm);
    return this;
    
    // remember to return the instance of the FormView
  },

  submitHandler : function(e) {

    // make sure this function accepts the event parameter
    
    // prevent the default behavior (submission) of the form 
    // (call preventDefault on the event) 

    var name = $("#name").val()
    this.model.set('name', name) //do this.model.set because you cant set in a view
    e.preventDefault();
    // save the text is in the input field with an id of name here

    // set the model's name to have a value of the name variable here
  }
})