import React from 'react'

export default function SignUpModal() {

  var check = function () {
    let ele1 = document.getElementById('signUpInputPassword1');
    let ele2 = document.getElementById('signUpInputPassword2');
    let message = document.getElementById('message');
    if (ele1 === null && ele2 === null) {
      return;
    }
    else if (ele1.value !== ele2.value) {
      message.style.color = 'red';
      message.innerHTML = 'passwords are not matching';
    }
    else {
      message.style.color = 'green';
      message.innerHTML = 'passwords match';
    }
  }
  return (
    <>
      {/*signUp Modal*/}
      <div className="modal fade" id="signUpModal" tabIndex="-1" aria-labelledby="signUpModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <form>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="signUpModalLabel">SignUp for inotebook-va</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="signUpInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="signUpInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="signUpInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="signUpInputPassword1" placeholder="Enter your password" onKeyUp={check} />
                </div>
                <div className="mb-3">
                  <label htmlFor="signUpInputPassword2" className="form-label">Confirm your Password</label>
                  <input type="password" className="form-control" id="signUpInputPassword2" placeholder="Enter your password" onKeyUp={check} />
                  <span id="message"></span>
                </div>
                {/* signUp button trigger */}
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">SignUp</button>
                <button type="reset" className="btn btn-primary mx-2">Reset Form</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}