// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",
  className: "queueView",

  initialize: function() {
    this.render();
    this.collection.on('add remove', this.delayedRender, this);
    // this.collection.on('add', function() {
    //   setTimeout(this.render,1000); //show up after the animation is done
    // }, this);
  },

  events: {
    //'ended': function() {
      //this.model.ended(); 

      // one model per view, we can only tell
      // the model that this particular song has ended
    //}
  },

  render: function(that) {
    //console.log(this);
    this.$el.children().detach();

    return this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },

  delayedRender: function() {
    var that = this;
    console.log('thing', that);
    setTimeout(function() {
      that.render();
    }, 450);
  }

});
