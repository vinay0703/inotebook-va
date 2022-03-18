import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props)=>{
  const host = "http://localhost:5000";
    const intialNotes = [];
    const [notes, setNotes] = useState(intialNotes);

    //Get all Note
    const getNotes = async()=>{
      //API call
      const url = `${host}/api/notes/fetchallnotes`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //Todo
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzMGE5MWM3MjA4ZDMxNTViYzg4MTQ5In0sImlhdCI6MTY0NzM2MTEyNn0.ytjdWHlTjVCdV2FHTKXgmu8y2UrHWRT5Gy8RSYf3-N4'
        }
      });
      const json = await response.json();
      setNotes(json);
    }

    //Add a Note
    const addNote = async(title, description, tag)=>{
      //API call
      const url = `${host}/api/notes/addnote`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //Todo
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzMGE5MWM3MjA4ZDMxNTViYzg4MTQ5In0sImlhdCI6MTY0NzM2MTEyNn0.ytjdWHlTjVCdV2FHTKXgmu8y2UrHWRT5Gy8RSYf3-N4'
        },
        body: JSON.stringify({title, description, tag})
      });

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
    const deleteNote = async(id)=>{
      //confirming delete note
      let text = "Are you sure to delete this note?";
      //If user doesn't opt for deleting note, then return simply;
      if(!window.confirm(text)){
        return;
      }

      //API call
      const url = `${host}/api/notes/deletenote/${id}`;
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          //Todo
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzMGE5MWM3MjA4ZDMxNTViYzg4MTQ5In0sImlhdCI6MTY0NzM2MTEyNn0.ytjdWHlTjVCdV2FHTKXgmu8y2UrHWRT5Gy8RSYf3-N4'
        },
      });
      const json = response.json();
      console.log(json);

      const newNotes = notes.filter((note)=>{return note._id!==id});
      setNotes(newNotes);
    }

    //Edit a Note
    const editNote = async(id, title, description, tag)=>{
      //API call
      const url = `${host}/api/notes/updatenote/${id}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //Todo
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzMGE5MWM3MjA4ZDMxNTViYzg4MTQ5In0sImlhdCI6MTY0NzM2MTEyNn0.ytjdWHlTjVCdV2FHTKXgmu8y2UrHWRT5Gy8RSYf3-N4'
        },
        body: JSON.stringify({title, description, tag})
      });
      const json = response.json();

      //Logic to edit in client
      for(let index=0;index<notes.length;index++){
        const element = notes[index];
        if(element.id === id){
          element.title = title;
          element.description = description;
          element.tag = tag;
        }
      }
    }
    return(
        <noteContext.Provider value = {{notes:notes, addNote:addNote, deleteNote:deleteNote, editNote:editNote, getNotes:getNotes}}>
            {props.children}
        </noteContext.Provider>
    ); 
    
}

export default NoteState;