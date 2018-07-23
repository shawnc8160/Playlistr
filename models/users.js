const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Basic User Schema
const userSchema = Schema({
  username: {type: String, unique: true},
  password: String,
  likes: [String]
});

module.exports = mongoose.model("User", userSchema);
