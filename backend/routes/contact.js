const express = require('express');
const {body, validationResult} = require('express-validator');
const router = express.Router();
const Contact = require('../models/Contact');


//Route 1:send concern using : POST "/api/contact/contactform". No login required.
router.post('/contactform',[
    body('email', 'Enter a valid email').isEmail(),
    body('query', 'Enter a valid query').isLength({min:3}),
    body('concern', 'Enter a valid concern').isLength({min:3}),
], async(req, res)=>{
    let success = false;
    //If there are errors return Bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success, errors:errors.array()});
    }
    try{
        let contactText = await Contact.create({
            email:req.body.email,
            query:req.body.query,
            concern: req.body.concern
        });
        success = true;
        res.json({success, contactText});
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

module.exports = router;