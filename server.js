const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/Music';
const port = process.env.PORT || 3000;

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static("public"));

// app.get('/', (req, res) => {
//   res.send('index')
// });

//USER CONTROLLER
const userController = require('./controllers/users.js');
app.use('/users', userController);
const playlistController = require('./controllers/playlist.js');
app.use('/playlist', playlistController);

app.listen(port, () => {
  console.log('listening......');
});

//Mongoose Connection
//mongoose.connect("mongodb://localhost:27017/Music", { useNewUrlParser: true } );
mongoose.connect(mongoUri);
mongoose.connection.once("open", () => {
  console.log("Connected to mongoose!");
});
