import Notes from './Notes';

function HomeAfterLogin() {
    return (
    <>
    <div className="container my-3">
        <div className="my-3">
            <form>
                <h1>Add a note</h1> 
                <div className="card">
                    <div className="card-body input-group">
                        <span className="input-group-text">Title</span>
                        <textarea className="form-control" aria-label="title" id="title" placeholder="Enter your note title here." rows={1}></textarea>
                    </div>
                    <div className="card-body input-group">
                        <span className="input-group-text">Description</span>
                        <textarea className="form-control" aria-label="description" id="description" placeholder="Enter your note description here." rows={5}></textarea>
                    </div> 
                    <div className="card-body input-group">
                        <span className="input-group-text">Tag</span>
                        <textarea className="form-control" aria-label="tag" id="tag" placeholder="Enter your note tag here." rows={1}></textarea>
                    </div> 
                    <div className="card-body"><button className="my-2 btn btn-primary" id="addBtn">Add Note</button></div>
                </div> 
            </form>
        </div>
        <br />
        <Notes/>
    </div> 
    </>
    )
}

export default HomeAfterLogin;