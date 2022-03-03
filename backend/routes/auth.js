const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body, validationResult} = require('express-validator');

//Create a user using : POST "/api/auth/createuser". Does'nt require auth.
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({min:3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be min of length 5').isLength({min:5}),
], async (req, res)=>{
    //If there are errors return Bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    try {
        //creating a user
        //Check whether the email already exits.
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({error: 'Sorry a user with this mail already exits'});
        }
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
});

module.exports = router;
