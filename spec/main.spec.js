'use strict';

describe( "#boostrap", function() {
  it("should instantiate your view and return the view object", function() {
    bootstrap();
    expect($("body")).toContainHtml('<form><label for="name"></label><input id="name" type="text" name="name"><input id= "mySubmit" type="submit" value="submit"></form>');
  });    
});

describe ( "#submit", function(){
  it("should set value of name to blake and set it to name attribute in user model")
  function(){
    $("#name").val("blake")
    $("#mySubmit").click()
    expect(app.formView.model.get("name")).toEqual("blake")
  })
});