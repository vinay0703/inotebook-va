import React, {useContext, useEffect, useRef, useState} from 'react';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import UpdateNoteModal from './UpdateNoteModal';

function Notes() {
    //state for update note with initial values of note
    const [note, setNote] = useState({id:"", utitle:"", udescription:"", utag:""});
    const context = useContext(noteContext);
    const {notes, getNotes} = context;
    useEffect(()=>{
        getNotes();
        //eslint-disable-next-line
    }, []);
    const updateNote = (currentNote)=>{
        ref.current.click();
        //sets the values as current note
        setNote({id:currentNote._id, utitle:currentNote.title, udescription:currentNote.description, utag:currentNote.tag});
    }
    const ref = useRef(null);
    return (
    <>
    <AddNote/>
    {/* Just a programable button and it's not visible. Functionality is to launch UpdateNoteModal */}
    <button ref={ref} type="button" className="d-none" data-bs-toggle="modal" data-bs-target="#updateNoteModal"></button>
    <UpdateNoteModal note={note} setNote={setNote}/>
    <div className="my-3">
        <h1>Your notes</h1> 
        <hr/> 
        {/* If there are no notes to display */}
        {notes.length === 0 && "There are no notes to display :("}
        <div id="notes" className="d-flex justify-content-center align-content-center row container-fluid">
            {notes.map((note)=>{
                return <NoteItem note={note} updateNote={updateNote} key={note._id} />
            })}
        </div>
    </div> 
    </>
  )
}

export default Notes;