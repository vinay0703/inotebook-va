import React, {useRef, useState} from 'react';
import { useHistory } from 'react-router-dom';

export default function LoginModal(props) {
  const {showAlert} = props;
  //state for credentials
  const [credentials, setCredentials] = useState({email:"", password:""});
  const ref = useRef(null);
  const host = process.env.REACT_APP_HOST;
  const history = useHistory();

  //onChange for user credential values
  const onChange = (e)=>{
    //... is spread operator
    // Values in credentials are remained and additional properties are added.
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }

  //handleClick for form submission
  const handleClick = async(e)=>{
    e.preventDefault();
    const url = `${host}/api/auth/login`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
      },
      body: JSON.stringify({email:credentials.email, password:credentials.password})
    });
    const json = await response.json();
    if(json.success){
      // If login is valid, then save the auth-token and redirect.
      localStorage.setItem('token', json.authToken);
      history.push("/notes");
      //If everything goes fine, then display alert
      showAlert("Logged in successfully.", "success");
    }
    else{
      //If user enter wrong credentials, then display alert
      showAlert("Invalid credentials", "danger");
    }
    //close the form after submitting
    ref.current.click();
    //clear the form after submitting
    document.getElementById('loginForm').reset();
    setCredentials({email:"", password:""});
  }
  return (
    <>
      {/*Login Modal*/}
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <form id = "loginForm" onSubmit={handleClick}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="loginModalLabel">Login to your inotebook-va account</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="loginInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="loginInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" name="email" value={credentials.email} onChange={onChange}/>
                  <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="loginInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="loginInputPassword1" placeholder="Enter your password" name = "password" value = {credentials.password} onChange={onChange}/>
                </div>
                {/* Login button trigger */}
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Login</button>
                <button ref={ref} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}