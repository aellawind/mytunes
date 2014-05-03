// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    // we get a params that references a library
    // and in essence, params.library is the same as
    // this.set('library', new Songs(songData));

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      console.log(song);
      var songClone = new SongModel(song.toJSON());
      console.log(songClone);
      //var songClone = new Backbone.Model(song.toJSON());
      params.library.add(songClone);
      console.log(params.library);
      this.get('songQueue').add(songClone);

    }, this);

    this.get('songQueue').on('stop', function(){
      this.set('currentSong', null);
    }, this);

//     collection1.each(function( model ) {
//   var clone = new Backbone.Model( model.toJSON() );
//   clone.set( this.idAttribute, null, { silent: true });
//   collection2.add( clone );
// });


  }

});
