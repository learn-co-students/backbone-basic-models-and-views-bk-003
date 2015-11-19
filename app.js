var app = app || {};

function bootstrap() {
  // instantiate a new user object and save it as a variable here
  debugger
  // instantiate your view object here:
  //   * it should take one argument, an object:
  //      - the parameter object should have a property called "model"
  //        which should point to the new instance of the user  
  var user = new User;
  var formview = new FormView({model: user});
  
  // attach your view object to the app object as a property called "formView"
  app['formView'] = formview
  // append your view object's HTML to the DOM here
  $("body").append(formview.el)
}

bootstrap();