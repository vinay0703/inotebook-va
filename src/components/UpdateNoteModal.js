import React, {useRef, useContext} from 'react';
import noteContext from '../context/notes/noteContext';

export default function UpdateNoteModal(props) {
    const {showAlert} = props;
    //Title and description should be min length 5
    const minimumLength = 5;
    //Importing note, setNote states from Notes.js
    const {note, setNote} = props;
    //refClose to close the modal on clicking update button.
    const refClose = useRef(null);
    //importing updateNote function from noteContext
    const context = useContext(noteContext);
    const {updateNote} = context;
    //on change function for textareas in updateNoteModal
    const onChange = (e) => {
        //... is spread operator
        // Values in note are remained and additional properties are added.
        setNote({...note, [e.target.name]: e.target.value});
    }
    //handleClick function for updateBtn
    const handleClick = (e) => {
        e.preventDefault();
        updateNote(note.id, note.utitle, note.udescription, note.utag);
        refClose.current.click();
        showAlert("Updated successfully", "success");
    }
    return (
        <>
            {/*UpdateNote Modal*/}
            <div className="modal fade" id="updateNoteModal" tabIndex="-1" aria-labelledby="updateNoteLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <form id="updateNoteForm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="updateNoteLabel">Update your note</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="card">
                                    <div className="card-body input-group">
                                        <span className="input-group-text">Title</span>
                                        <textarea type="text" className="form-control" aria-label="utitle" id="utitle" name="utitle" value = {note.utitle} placeholder={`Enter title of minimum length ${minimumLength} here.`} rows={1} onChange={onChange}></textarea>
                                    </div>
                                    <div className="card-body input-group">
                                        <span className="input-group-text">Description</span>
                                        <textarea type="text" className="form-control" aria-label="udescription" id="udescription" name="udescription" value={note.udescription} placeholder={`Enter description of minimum length ${minimumLength} here.`} rows={5} onChange={onChange}></textarea>
                                    </div>
                                    <div className="card-body input-group">
                                        <span className="input-group-text">Tag</span>
                                        <textarea type="text" className="form-control" aria-label="utag" id="utag" name="utag" value={note.utag} placeholder="Enter tag here." rows={1} onChange={onChange}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span id="message"></span>
                                <button disabled={note.udescription.length < minimumLength || note.utitle.length < minimumLength} type="submit" className="my-2 btn btn-primary" id="updateBtn" onClick={handleClick} >Update Note</button>
                                <button ref = {refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}