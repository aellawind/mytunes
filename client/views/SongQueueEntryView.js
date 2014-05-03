// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  // initialize: function() {
  // 	console.log('do we get here');
  // 	this.model.on('ended', function() {
  // 		console.log('gets here');
  // 	});
  // },

  tagName: 'tr',

  className: 'queueEntry',
  template: _.template('<td>(<%= artist %>) - <%= title %></td>'),

  events: {
  	'click': function() {
  		this.model.dequeue();
  		console.log('clicked');
  	}
  },

  render: function(){
    console.log('this ges rendered');
    return this.$el.html(this.template(this.model.attributes));
  }

});
