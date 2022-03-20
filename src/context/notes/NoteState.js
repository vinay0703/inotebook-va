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
      const note = await response.json();
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
      const json = await response.json();
      //console.log(json);

      const newNotes = notes.filter((note)=>{return note._id!==id});
      setNotes(newNotes);
    }

    //Edit a Note
    const updateNote = async(id, title, description, tag)=>{
      //API call
      const url = `${host}/api/notes/updatenote/${id}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          //Todo
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzMGE5MWM3MjA4ZDMxNTViYzg4MTQ5In0sImlhdCI6MTY0NzM2MTEyNn0.ytjdWHlTjVCdV2FHTKXgmu8y2UrHWRT5Gy8RSYf3-N4'
        },
        body: JSON.stringify({title, description, tag})
      });
      const json = await response.json();
      //console.log(json);
      
      //creating a deep copy
      let newNotes = JSON.parse(JSON.stringify(notes));
      //Logic to edit in client
      for(let index=0;index<newNotes.length;index++){
        const element = newNotes[index];
        if(element.id === id){
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
      getNotes();
    }
    return(
        <noteContext.Provider value = {{notes:notes, addNote:addNote, deleteNote:deleteNote, updateNote:updateNote, getNotes:getNotes}}>
            {props.children}
        </noteContext.Provider>
    ); 
    
}

export default NoteState;