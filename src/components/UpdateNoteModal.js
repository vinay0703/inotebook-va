import React from 'react'

export default function UpdateNoteModal(props) {
    const {note, setNote} = props;
    const onChange = (e) => {
        //... is spread operator
        // Values in note are remained and additional properties are added.
        setNote({...note, [e.target.name]: e.target.value});
    }
    const handleClick = (e) => {
        e.preventDefault();
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
                                        <textarea type="text" className="form-control" aria-label="utitle" id="utitle" name="utitle" value = {note.utitle} placeholder="Enter your note title here." rows={1} onChange={onChange}></textarea>
                                    </div>
                                    <div className="card-body input-group">
                                        <span className="input-group-text">Description</span>
                                        <textarea type="text" className="form-control" aria-label="udescription" id="udescription" name="udescription" value={note.udescription} placeholder="Enter your note description here." rows={5} onChange={onChange}></textarea>
                                    </div>
                                    <div className="card-body input-group">
                                        <span className="input-group-text">Tag</span>
                                        <textarea type="text" className="form-control" aria-label="utag" id="utag" name="utag" value={note.utag} placeholder="Enter your note tag here." rows={1} onChange={onChange}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="my-2 btn btn-primary" id="updateBtn" onClick={handleClick} >Update Note</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}