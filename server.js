const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static("public"));

// app.get('/', (req, res) => {
//   res.send('index')
// });

//USER CONTROLLER
const userController = require('./controllers/users.js'); 
app.use('/users', userController); 

app.listen(3000, () => {
  console.log('listening......');
});

//Mongoose Connection
mongoose.connect("mongodb://localhost:27017/Music", { useNewUrlParser: true } );
mongoose.connection.once("open", () => {
  console.log("Connected to mongoose!");
});
