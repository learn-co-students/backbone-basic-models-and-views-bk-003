app = {};

function bootstrap() {
  var user = new User();
  app.formView =  new FormView({model: user});
  $("body").append(app.formView.el);


  // append your view object's HTML to the DOM here
}

bootstrap();
