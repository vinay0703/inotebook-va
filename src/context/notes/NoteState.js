import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props)=>{
    const sampleNotes = [
        {
          "_id": "6230c07ea2353653f3ab199d",
          "user": "6230a91c7208d3155bc88149",
          "title": "myTitle",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-03-15T16:36:14.163Z",
          "__v": 0
        },
        {
          "_id": "6230c07ea2353653f3ab199f",
          "user": "6230a91c7208d3155bc88149",
          "title": "myTitle",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-03-15T16:36:14.736Z",
          "__v": 0
        },
        {
          "_id": "6231438ba2a4d1c534f4ce44",
          "user": "6230a91c7208d3155bc88149",
          "title": "New note",
          "description": "Please susbscribe",
          "tag": "Youtube",
          "date": "2022-03-16T01:55:23.326Z",
          "__v": 0
        }
    ];
    const [notes, setNotes] = useState(sampleNotes);
    //Add a Note
    const addNote = (title, description, tag)=>{
      //todo API call
      const note = {
        "_id": "6230c07ea2353653f3ab199d",
        "user": "6230a91c7208d3155bc88149",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-03-15T16:36:14.163Z",
        "__v": 0
      };
      //Used concat instead of push bcz concat returns an array whereas push updates an array.
      setNotes(notes.concat(note));
    }
    //Delete a Note
    const deleteNote = (id)=>{
      //To do API call
      const newNotes = notes.filter((note)=>{return note._id!==id});
      setNotes(newNotes);
    }
    //Edit a Note
    const editNote = ()=>{

    }
    return(
        <noteContext.Provider value = {{notes:notes, addNote:addNote, deleteNote:deleteNote, editNote:editNote}}>
            {props.children}
        </noteContext.Provider>
    ); 
    
}

export default NoteState;