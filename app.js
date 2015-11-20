app =  {};

function bootstrap() {
  // instantiate a new user object and save it as a variable here
   var user = new User
  // instantiate your view object here:
  //   * it should take one argument, an object:
  //      - the parameter object should have a property called "model"
  //        which should point to the new instance of the user  
  // attach your view object to the app object as a property called "formView"
var view = new FormView({model: user}) ;
app.formView = view ;
  // append your view object's HTML to the DOM here
$('body').append(view.el);

}

bootstrap();