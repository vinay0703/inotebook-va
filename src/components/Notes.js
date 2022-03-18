import React, {useContext} from 'react';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

function Notes() {
    const context = useContext(noteContext);
    const {notes, addNote} = context;
    return (
    <>
    <AddNote/>
    <div className="my-3">
        <h1>Your notes</h1> 
        <hr/> 
        <div id="notes" className="d-flex justify-content-center align-content-center row container-fluid">
            {notes.map((note)=>{
                return <NoteItem note={note} key={note._id} />
            })}
        </div>
    </div> 
    </>
  )
}

export default Notes;