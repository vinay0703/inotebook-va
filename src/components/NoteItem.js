import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

export default function NoteItem(props) {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const {note, updateNote, showAlert} = props;
    const deleteNoteHandler = ()=>{
        deleteNote(note._id);
        showAlert("Deleted successfully", "success");
    }
    return (
    <>
    <div className="noteCard my-2 mx-2 card" style={{"width": "18rem"}}> 
        <div className="card-body"> 
            <h5 className="card-title">{note.title}</h5> 
            <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
            <p className="card-text"> {note.description}</p> 
            <button className="btn btn-primary mx-1 my-1" onClick={()=>{return updateNote(note)}}>Update</button> 
            <button className="btn btn-primary mx-1 my-1" onClick={deleteNoteHandler}>Delete</button> 
        </div> 
    </div>
    </>
    )
}
