// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
      
    }, this);

    this.on('ended', function(song) {
      console.log('this runs');
      this.remove(song);
      if (this.at(0)) { 
        this.playFirst();
      }

    });

    this.on('dequeue', function(song) {
      this.remove(song);
    });


  },

  events: {
    ended: function(song) {
      console.log('does this ever run');
      this.remove(song);
      if (this.at(0)) {
        this.playFirst();
      }
    }
  },

  playFirst: function() {
      this.at(0).play();    
  }

});