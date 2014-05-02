// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",
  className: "queueView",

  initialize: function() {
    var that = this;
    this.render();
    this.collection.on('add', function() {
      setTimeout(this.render,1000); //show up after the animation is done
    }, this);
  },

  events: {
    //'ended': function() {
      //this.model.ended(); 

      // one model per view, we can only tell
      // the model that this particular song has ended
    //}
  },

  render: function() {
    if (this.$el) { 
      this.$el.children().detach();
      this.$el.html('<th>Queue</th>').append(
        this.collection.map(function(song) {
          return new SongQueueEntryView({model:song}).render();
        })
      );
    }
  }

});
