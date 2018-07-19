const express = require('express');
const router = express.Router();
const Playlist = require('../models/playlist.js');

/* ---------------------
Create (POST) Route
 --------------------- */
router.post('/', (req, res) => {
  Playlist.create(req.body, (err, result) => {
    if (!err) {
      res.json(result);
    }
  });
});
// curl -X POST -H "Content-Type: application/json" -d '{"name":"TESTNAME2", "tracks":[{"title":"testTrack", "artist":"testArtist", "album":"testAlbum", "genre":"testGenre"}], "description":"test Description", "tags": ["TestTag1", "TestTag2"], "creator": "test Creator"}' http://localhost:3000/playlist/

/* ---------------------
Index (GET) Route
 --------------------- */
router.get('/', (req, res) => {
  Playlist.find({}, (err, allPlaylist) => {
    if (!err) {
      res.json(allPlaylist);
    }
  });
});
// curl http://localhost:3000/playlist

/* ---------------------
Update (PUT) Route
 --------------------- */
router.put('/:id', (req, res) => {
  Playlist.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPlayList) => {
    if (!err) {
      res.json(updatedPlayList);
    }
  });
});
// curl -X PUT -H "Content-Type: application/json" -d '{"name":"Moogle"}' http://localhost:3000/playlist/<id goes here>

/* ---------------------
Delete Route
 --------------------- */
router.delete('/:id', (req, res) => {
  Playlist.findByIdAndRemove(req.params.id, (err, deletedPlaylist) => {
    if (!err) {
      res.json(deletedPlaylist);
    }
  });
});
// curl -X DELETE http://localhost:3000/playlist/<id goes here>
module.exports = router;
