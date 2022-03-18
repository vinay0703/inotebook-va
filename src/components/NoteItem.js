import React from 'react';

export default function NoteItem(props) {
    return (
    <div className="noteCard my-2 mx-2 card" id = {props.id} style={{"width": "18rem"}}> 
        <div className="card-body"> 
            <h5 className="card-title">{props.title}</h5> 
            <h6 className="card-subtitle mb-2 text-muted">{props.tag}</h6>
            <p className="card-text"> {props.description}</p> 
            <button className="btn btn-primary mx-1 my-1">Edit Note</button> 
            <button className="btn btn-primary mx-1 my-1">Delete Note</button> 
        </div> 
    </div>
    )
}
