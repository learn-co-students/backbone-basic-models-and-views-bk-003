app = {};

function bootstrap() {
  var user = new User //this is the right order, first make objects then assgin properties to objects
  app.formView = new FormView({model: user})  //new formView assigned to app because name is attached to model
  //to access name, view must have model as the parameter::::curly braces used for object parameters...user is an object
  // instantiate a new user object and save it as a variable here
  // instantiate your view object here:
  //   * it should take one argument, an object:
  //      - the parameter object should have a property called "model"
  //        which should point to the new instance of the user  
  $("body").append(app.formView.el)
  // attach your view object to the app object as a property called "formView"

  // append your view object's HTML to the DOM here
};

bootstrap();