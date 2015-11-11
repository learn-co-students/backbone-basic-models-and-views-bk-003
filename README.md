# Backbone Basics Models & Views

## Overview
* About: General
* Separation of Responsibilities
* Instructions

## About: General
Models are the data layer in Backbone, similar to their function in Rails.  They serve as in-memory representations of any data/data structures you need to build a UI. In Rails, your models help you persist data to the database.  You can retrieve in-memory representations of a row of data from the database. For example, if you had a users table, you could do the following:

```ruby
user = User.find(1)
# =>  #<User:0x007fe6c3e4ae88 name:Avi profession:Dean ...>
```

The `user` variable would be an ActiveRecord object which is essentially an object wrapping a set of key value pairs `:height => "6 feet"`. You can then alter the data held in that object in-memory, and later call `save` to persist that data to the database. Backbone has a similar model. You can take data from a user, write it to your model, and then call save on that object. The only difference is these objects live in-memory on the client side (the user's browser rather than the server) and when saved, they are actually making POST/PUT/PATCH AJAX requests back to the server to persist/update the data. Backbone models can also load data from the server, so they can do the full job of syncing data. Similar to Rails, Backbone models also hold all of the business logic for the data you need to work with.

In Backbone, views and models work together. Views in Backbone are very different from how we typically think of them in the Rails world. A view's job in Backbone is to respond to events (user input) and write that data to models. Its other main job is to render the UI. As we learned in the last lab, views generally do these tasks for one specific section of the UI and know how to render all the relevant HTML and then insert it into the DOM. As such, Backbone views take care of the duties you would typically associate with the view AND the controller layers of the MVC structure.

## Separation of Responsibilities
From the Backbone docs:

Model
* Orchestrates data and business logic.
* Loads and saves from the server.
* Emits events when data changes.

View
* Listens for changes and renders UI.
* Handles user input and interactivity.
* Sends captured input to the model.

## About: Specific to this Lab
In this lab, we want to combine the concepts of a model and a view. Our view is going to render a form into the DOM. It will then wait for user interaction, and handle that interaction by writing the user's input into an in-memory model. 

### Instructions
1. Read the Overview above and examples below to learn about the skills you will need to solve this lab. 
2. Look in `app.js` and `user.js`. For this lab you will need both a namespace and an object.
  + Hint: This object does not need any attributes or methods. 
3. Look in `views/main.js` and build out the `events` hash and the `#initialize`, `#render`, and `#submitHandler` functions. 
4. Pass the basic user model (from `models/user.js`) to the view in `app.js`.

#### Examples
Models extend/inherit from `Backbone.Model` and take an object with certain preset keys.

```javascript
User = Backbone.Model.extend({
  initialize : function() {
    //do some stuff
  },
  defaults : {
    "name" : "generic user"
  }
})
user = new User({
  height : 6,
  weight : 175,
  admin : true
})
```

#### Getting and Setting Values
To interact with a model you must use the `get` and `set` functions defined on it.

```javascript
user.get("height") #=> 6
user.set("height", 6.5)
user.get("height") #=> 6.5
```

#### Passing Models to Views
It's useful to give your views a reference to your model and sometimes the reverse is also useful. If you pass in the model key into the object used to contruct the view, Backbone attaches it directly to the view object it instantiates.

```javascript
var myView = new MyView({model : user})
myView.model #=> {height : 6.5, weight : 175, admin : true};

## Resources
* [Tying the Model to the View](http://orizens.com/wp/topics/backbone-view-patterns-the-relationship-with-model/)
