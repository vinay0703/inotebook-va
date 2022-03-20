const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const JWT_SECRET = 'Harryisgoodb$y';
const fetchuser = require('../middleware/fetchuser')

//Route 1:Create a user using : POST "/api/auth/createuser". No login required.
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

        //Creating a salt
        const salt = await bcrypt.genSalt(10);
        //Creating a secure password
        const securePassword = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePassword
        });

        const data = {
            user:{
                id: user.id
            }
        }

        //Using a jwt so that each user gets his appropriate token
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json(authToken);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});


//Route 2: Authenticate a user using : POST "/api/auth/login". No login required.
router.post('/login',[
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async(req, res)=>{
    //If there are errors return Bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email, password} = req.body;
    try{
        let user = await User.findOne({email});
        let success = false;
        if(!user){
            return res.status(400).json({success, error:"Please login with correct credentials."});
        }

        //comparing password using bcrypt.js
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({success, error:"Please login with correct credentials."});
        }

        //If password is correct then we send user payload(data)
        const data = {
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authToken});

    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

// Route 3: Get logged in user details using POST "api/auth/getuser". Login required.
router.post('/getuser', fetchuser,async(req, res)=>{
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

module.exports = router;