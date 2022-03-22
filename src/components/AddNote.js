import React, {useContext, useState} from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = (props) => {
    const {showAlert} = props;
    //Title and description should be min length 5
    const minimumLength = 5;
    
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title:"", description:"", tag:""});

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        //Reset form after adding a note
        document.getElementById("addNoteForm").reset();
        showAlert("Added successfully", "success");
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
                    <textarea type="text" className="form-control" aria-label="title" id="title" name="title" placeholder={`Enter title of minimum length ${minimumLength} here.`} rows={1} onChange={onChange} minLength={minimumLength} required style={{'zIndex':0}}></textarea>
                </div>
                <div className="card-body input-group">
                    <span className="input-group-text">Description</span>
                    <textarea type="text" className="form-control" aria-label="description" id="description" name="description" placeholder={`Enter description of minimum length ${minimumLength} here.`} rows={minimumLength} onChange={onChange} minLength={minimumLength} required style={{'zIndex':0}}></textarea>
                </div> 
                <div className="card-body input-group">
                    <span className="input-group-text">Tag</span>
                    <textarea type="text" className="form-control" aria-label="tag" id="tag" name="tag" placeholder="Enter tag here." rows={1} onChange={onChange} style={{'zIndex':0}}></textarea>
                </div> 
                <div className="card-body"><button disabled = {note.title.length < 5 || note.description.length < 5} type="submit" className="my-2 btn btn-primary" id="addBtn" onClick={handleClick}>Add Note</button></div>
            </div> 
        </form>
    </div>
    )
}

export default AddNote;