// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  initialize: function() {
  	console.log('do we get here');
  	this.model.on('ended', function() {
  		console.log('gets here');
  	});
  },

  tagName: 'tr',

  className: 'queueEntry',
  template: _.template('<td>(<%= artist %>) - <%= title %></td>'),

  render: function(){
    console.log('this ges rendered');
    return this.$el.html(this.template(this.model.attributes));
  },

  handleEnded: function() {
	console.log(this);
	newParent = $(".libraryView");
	console.log(newParent);
	element = $(e); //Allow passing in either a JQuery object or selector
	console.log(element);
	var oldOffset = element.offset();
	element.appendTo(newParent);
	var newOffset = element.offset();

	var temp = element.clone().appendTo('body');
	temp    .css('position', 'absolute')
	        .css('left', oldOffset.left)
	        .css('top', oldOffset.top)
	        .css('zIndex', 1000)
	        .css(this.styles);
	element.hide();
	temp.animate( {'top': newOffset.top, 'left':newOffset.left}, 'slow', function(){
	   element.remove();
	   temp.remove();
	});
  },

  //for the tr to retain its appearance as it moves
  styles: {
    'outline': 'thin solid black',
    'border-color':'black',
    'border-style':'solid',
    'background-color':'#9DDEFF',
    'font-family': 'times, Times New Roman, times-roman, georgia, serif',
    'font-size': '18px',
    'line-height': '30px',
    'letter-spacing': '-1px',
    'color': '#444',
    'width':'624px',
  }

});
