// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

 initialize: function(){
 	this.on( 'add', this.enqueue, this );
 },

 model: SongModel
 
});