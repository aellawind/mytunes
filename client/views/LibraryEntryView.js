// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><div>(<%= artist %>) - <%= title %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
      this.handleClick(this.$el);
    }
  },

  handleClick: function(e) {
    newParent = $(".queueView");
    element = $(e); //Allow passing in either a JQuery object or selector
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
       element.show();
       temp.remove();
    });
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
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
