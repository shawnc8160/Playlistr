const express = require('express');
const router = express.Router();
const User = require('../models/users.js')
const bcrypt = require('bcrypt');


//Delete Routes
router.delete("/", (req, res) => {
  req.session.destroy( () => {
    res.status(200).json({
      status: 200,
      message: "Logout Complete"
    });
  });
});

//Post Routes
router.post("/", (req, res) => {
  //Find the username
  User.findOne( {username: req.body.username }, (err, foundUser) => {
    //If the username was not found, send an error message
    if(foundUser === null){
      res.status(403).json({
        status: 403,
        message: "Username not found"
      })
      //If the username was found
    } else {
      //Check to see if the password is correct
      if( bcrypt.compareSync( req.body.password, foundUser.password ) ){
        //If correct, set the user to the current session
        req.session.currentUser = foundUser;
        //Send a success message
        res.status(201).json({
          status: 201,
          message: "Session Created"
        });
        //If the password was incorrect
      } else {
        //Send an error message
        res.status(401).json({
          status: 401,
          message: "Login Failed"
        });
      }
    }
  });
});

//Export Routes to sessions controller
module.exports = router;
