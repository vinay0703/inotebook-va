import React, {useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function SignUpModal() {
  //minimum length of password
  const minimumLength = 5;
  //state for credentials
  const [credentials, setCredentials] = useState({name:"", email:"", password:""});
  const ref = useRef(null);
  const host = "http://localhost:5000";
  const history = useHistory();
  //function to check if password and confirm password are same.
  var check = function () {
    let ele1 = document.getElementById('signUpInputPassword1');
    let ele2 = document.getElementById('signUpInputPassword2');
    let message = document.getElementById('message');
    if (ele1 === null && ele2 === null) {
      return false;
    }
    else if (ele1.value !== ele2.value) {
      message.style.color = 'red';
      message.innerHTML = 'passwords are not matching';
      return false;
    }
    else {
      message.style.color = 'green';
      message.innerHTML = 'passwords match';
      return true;
    }
  }

  //handleClick for form submission
  const handleClick = async(e)=>{
    e.preventDefault();
    if(!check()){
      return;
    }
    const url = `${host}/api/auth/createuser`;
    const response = await fetch(url, {
      method: 'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password})
    });
    const json = await response.json();
    if(json.success){
      //If signUp is successful, then save the token and redirect
      localStorage.setItem('token', json.authtoken);
      history.push("/notes");
    }
    else{
      console.log("Invalid credentials");
    }
    //close the form after submitting
    ref.current.click();
    //clear the form after submitting
    document.getElementById("signUpForm").reset();
    setCredentials({name:"", email:"", password:""});
  }

  
  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]:e.target.value});
  }
  return (
    <>
      {/*signUp Modal*/}
      <div className="modal fade" id="signUpModal" tabIndex="-1" aria-labelledby="signUpModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <form id="signUpForm" onSubmit={handleClick}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="signUpModalLabel">SignUp for inotebook-va</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <div className="mb-3">
                  <label htmlFor="signUpInputName1" className="form-label">Name</label>
                  <input type="text" className="form-control" id="signUpInputName1" name="name" placeholder="Enter your name" onChange={onChange} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="signUpInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="signUpInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter your email (name@example.com)" onChange={onChange} required/>
                  <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="signUpInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="signUpInputPassword1" name="password" placeholder="Enter your password" onKeyUp={check} onChange={onChange} required minLength={minimumLength}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="signUpInputPassword2" className="form-label">Confirm your Password</label>
                  <input type="password" className="form-control" id="signUpInputPassword2" name="cpassword" placeholder="Enter your password" onKeyUp={check} onChange={onChange} required minLength={minimumLength}/>
                  <span id="message"></span>
                </div>
                {/* signUp button trigger */}
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">SignUp</button>
                <button type="reset" className="btn btn-primary mx-2">Reset Form</button>
                <button ref = {ref} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}