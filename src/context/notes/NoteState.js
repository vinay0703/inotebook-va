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
    return(
        <noteContext.Provider value = {{notes:notes, setNotes:setNotes}}>
            {props.children}
        </noteContext.Provider>
    ); 
    
}

export default NoteState;