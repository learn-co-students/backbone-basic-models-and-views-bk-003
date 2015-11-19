var app = {};

function bootstrap() {
  var user = new User();
  var formView = new FormView({model : user});
  app.formView = formView;
  $("body").append(formView.el);
}

bootstrap();