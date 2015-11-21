User = Backbone.Model.extend({
	initialize : function(){
			this.get('name')
		},
	defaults : {
		name : ''
	}
  // create your model properties here (you might not need anything)
})