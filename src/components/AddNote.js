import React, {useContext, useState} from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title:"", description:"", tag:""});
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        //Reset form after adding a note
        document.getElementById("addNoteForm").reset();
        setNote({title:"", description:"", tag:""});
    }
    const onChange = (e)=>{
        //... is spread operator
        // Values in note are remained and additional properties are added.
        setNote({...note, [e.target.name]: e.target.value});
    }
    return (
    <div className="my-3">
        <form id="addNoteForm">
            <h1>Add a note</h1> 
            <div className="card">
                <div className="card-body input-group">
                    <span className="input-group-text">Title</span>
                    <textarea type="text" className="form-control" aria-label="title" id="title" name="title" placeholder="Enter your note title here." rows={1} onChange={onChange}></textarea>
                </div>
                <div className="card-body input-group">
                    <span className="input-group-text">Description</span>
                    <textarea type="text" className="form-control" aria-label="description" id="description" name="description" placeholder="Enter your note description here." rows={5} onChange={onChange}></textarea>
                </div> 
                <div className="card-body input-group">
                    <span className="input-group-text">Tag</span>
                    <textarea type="text" className="form-control" aria-label="tag" id="tag" name="tag" placeholder="Enter your note tag here." rows={1} onChange={onChange}></textarea>
                </div> 
                <div className="card-body"><button type="submit" className="my-2 btn btn-primary" id="addBtn" onClick={handleClick}>Add Note</button></div>
            </div> 
        </form>
    </div>
    )
}

export default AddNote;