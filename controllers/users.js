const express = require('express'); 
const router = express.Router(); 
const User = require('../models/users.js'); 
const bcrypt = require('bcrypt'); 

//CREATE USER
router.post('/', (req, res) => {
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

