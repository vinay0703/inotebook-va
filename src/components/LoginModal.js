import React from 'react'

export default function LoginModal() {
  return (
    <>
      {/*Login Modal*/}
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <form>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="loginModalLabel">Login to your inotebook-va account</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="loginInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="loginInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="loginInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="loginInputPassword1" placeholder="Enter your password" />
                </div>
                {/* Login button trigger */}
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Login</button>
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