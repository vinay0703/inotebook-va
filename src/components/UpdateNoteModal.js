import React from 'react'

export default function UpdateNoteModal() {
    const onChange = ()=>{

    }
    const handleClick = ()=>{

    }
    return (
        <>
        {/*UpdateNote Modal*/}
        <div className="modal fade" id="updateNoteModal" tabIndex="-1" aria-labelledby="updateNoteLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="updateNoteLabel">Update your note</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form id="updateNoteForm">
                    <div className="card">
                        <div className="card-body input-group">
                            <span className="input-group-text">Title</span>
                            <textarea type="text" className="form-control" aria-label="updateTitle" id="updateTitle" name="updateTitle" placeholder="Enter your note title here." rows={1} onChange={onChange}></textarea>
                        </div>
                        <div className="card-body input-group">
                            <span className="input-group-text">Description</span>
                            <textarea type="text" className="form-control" aria-label="UpdateDescription" id="UpdateDescription" name="UpdateDescription" placeholder="Enter your note description here." rows={5} onChange={onChange}></textarea>
                        </div> 
                        <div className="card-body input-group">
                            <span className="input-group-text">Tag</span>
                            <textarea type="text" className="form-control" aria-label="UpdateTag" id="UpdateTag" name="UpdateTag" placeholder="Enter your note tag here." rows={1} onChange={onChange}></textarea>
                        </div> 
                        <div className="card-body"><button type="submit" className="my-2 btn btn-primary" id="updateBtn" onClick={handleClick} >Update Note</button></div>
                    </div> 
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}