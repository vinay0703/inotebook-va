import React, {useState} from 'react';

export default function Contact(props) {
  const {showAlert} = props;
  const minimumLength = 3;
  //state for contactForm
  const [contact, setContact] = useState({email:"", query:"", concern:""});
  //handle click for onSubmit form
  const handleClick = async(e)=>{
    e.preventDefault();
    const host = process.env.REACT_APP_HOST;
    const url = `${host}/api/contact/contactform`;
    const response = await fetch(url, {
      method: 'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify({email:contact.email, query:contact.query, concern:contact.concern})
    });
    const json = await response.json();
    if(json.success){
      showAlert("Contacted us successfully. We will resolve your concern shortly", "success");
    }
    else{
      showAlert("Invalid details", "danger");
    }
    //clear the form after submitting
    document.getElementById("contactForm").reset();
    setContact({email:"", query:"", concern:""});
  }
  const onChange = (e)=>{
    //... is spread operator
    // Values in contact are remained and additional properties are added.
    setContact({...contact, [e.target.name]: e.target.value});
  }
  return (
      <div className="container my-3">
        <h1 className="mx-auto">Fill in the form below</h1>
        <hr />
        <form id="contactForm" onSubmit={handleClick}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name = "email" value = {contact.email} placeholder="name@example.com" required onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="query" className="form-label">Enter your query</label>
            <textarea className="form-control" id="query" name="query" cols="30" rows="1" value={contact.query} placeholder={`Enter query of minimum length ${minimumLength} here.`} required minLength={minimumLength} onChange={onChange}></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="concern" className="form-label">Eloborate your concern</label>
            <textarea className="form-control" id="concern" name="concern" rows="3" value={contact.concern} placeholder={`Enter concern of minimum length ${minimumLength} here.`} required minLength={minimumLength} onChange={onChange}></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
  )
}