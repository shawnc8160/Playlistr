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
// curl http://localhost:3000/bookmarks

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
// curl -X PUT -H "Content-Type: application/json" -d '{"title":"Moogle"}' http://localhost:3000/bookmarks/5b4d6594830af722cd91486e

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
// curl -X DELETE http://localhost:3000/bookmarks/5b4d6594830af722cd91486e
module.exports = router;
