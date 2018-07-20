const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

//CREATE USER
router.post('/', (req, res) => {
  console.log('node route create user', req.body);
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, createdUser)=>{
        if(!err){
            res.status(201).json({
                status: 201,
                message: 'User Created'
            });
        }
    });
});

//INDEX GET
router.get('/', (req, res) => {
    User.find({}, (err, allUser)=>{
        res.json(allUser);
    });
});

//UPDATE USER
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUser)=>{
        res.json(updatedUser);
    });
});

//DELETE USER
router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, deletedUser)=>{
        res.json(deletedUser);
    });
});


module.exports = router
