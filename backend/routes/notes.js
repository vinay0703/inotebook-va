const express = require('express');
const {body, validationResult} = require('express-validator');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');

//Route 1:Get all the notes using : GET "/api/notes/fetchallnotes". login required.
router.get('/fetchallnotes', fetchuser, async(req, res)=>{
    try {
        const notes = await Note.find({user: req.user.id});
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error"); 
    }
});

//Route 2: Add a new notes using : POST "/api/notes/addnote". login required.
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({min:3}),
    body('description', 'Description must be min of length 5').isLength({min:5}),
], async(req, res)=>{
    try {
        const {title, description, tag} = req.body;
        //If there are errors return Bad request and the errors
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const note = new Note({
            title, description, tag, user:req.user.id
        });

        const savedNote = await note.save();

        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

//Route 3: Update an existing note using PUT: "api/notes/updatenote/id". Login required.
router.put('/updatenote/:id', fetchuser, async(req, res)=>{
    const {title, description, tag} = req.body;
    //Create a new note object
    const newNote = {};
    //intializing user updates to newNote
    if(title){newNote.title = title};
    if(description){newNote.description = description};
    if(tag){newNote.tag = tag};

    //Find the node to be updated and update it.
    let note = await Note.findById(req.params.id);

    //If note not found
    if(!note){
        res.status(404).send("Not found");
    }

    //A person cannot access another person note
    if(note.user.toString() != req.user.id){
        res.status(401).send("Not allowed");
    }

    note = await Note.findByIdAndUpdate(req.params.id, {$set:newNote}, {new:true});
    res.json(note);
});

module.exports = router;