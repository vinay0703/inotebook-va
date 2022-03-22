import React, { useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

function Navbar(props) {
  let history = useHistory();
  const {showAlert} = props;
  let location = useLocation();
  useEffect(() => {}, [location]);
  const handleLogOut = ()=>{
    //remove the token in local storage
    localStorage.removeItem('token');
    //after logout redirect to home page
    history.push('/');
    //display message after logged out
    showAlert("Logged out successfully", "success");
  }
  return (
    <>
    <LoginModal showAlert={showAlert}/>
    <SignUpModal showAlert={showAlert}/>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id = "navbar">
      <div className="container-fluid">
        <div className="navbar-brand">
          <i className="fa fa-book"></i> inotebook-va
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === (!localStorage.getItem('token')?"/":"notes") ? "active" : ""
                }`}
                aria-current="page"
                to={!localStorage.getItem('token')?"/":"notes"}
              >
                NewHome
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item active">
              <Link className={`nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`} to="/contact">
                Contact us
              </Link>
            </li>
            {!localStorage.getItem('token') && <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle" 
                to="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login/SignUp
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <button
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Login
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#signUpModal"
                  >
                    SignUp
                  </button>
                </li>
              </ul>
            </li>}
          </ul>
          {localStorage.getItem('token')?<><form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form><button className="btn btn-light my-2" onClick={handleLogOut}>Log out</button></>:<></>}
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
