const mongoose = require('mongoose');

const playlistSchema = mongoose.Schema({
  name: {type: String, required: true},
  tracks: [{
    title: String,
    artist: String,
    url: String,
    tags: [String],
    image: [{
      '#text': String,
      size: String
    }]
  }],
  description: String,
  likes: {type: Number, default: 0},
  tags: [{type: String}],
  creator: String
}, {timestamps: true});

module.exports = mongoose.model('Playlist', playlistSchema);
