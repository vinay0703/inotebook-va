import React from 'react';
import Typewriter from 'typewriter-effect';

function HomeBeforeLogin() {
  //typed js pause time in mill-seconds.
  const pausedTime = 1000;

  //onIntit function for Typewriter
  const typed = (typewriter)=>{
    typewriter.typeString("Your digital notebook.").pauseFor(pausedTime).deleteAll().typeString("Leave paper behind.").pauseFor(pausedTime).deleteAll().typeString("Your world, organized.").pauseFor(pausedTime).deleteAll().typeString("Gather your thoughts, then make them even better.").pauseFor(pausedTime).deleteAll().typeString("Login to your account or SignUp to create one.").start();
  }
  return (
    <>
    <div className="text-center cover-container dflex mx-auto flex-column inner cover my-3" style={{"width":'50vw'}}>
        <h1 className="cover-heading">Welcome to inotebook-va.</h1>
        <div className="lead"><strong><Typewriter onInit={typed}/></strong></div>
        <hr />
        <div className="lead"><p>inotebook-va is a notetaking website that saves and syncs your work across devices from the web. You can Gather your thoughts and sync them across multiple devices.</p></div>
        <hr />
        <div className="lead">
          <p><strong>Login</strong> to your account or <strong>SignUp</strong> to create one and start taking notes.</p>
          <button className="btn btn-dark mx-1 my-1" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
          <button className="btn btn-dark mx-1 my-1" data-bs-toggle="modal" data-bs-target="#signUpModal">SignUp</button>
        </div>
    </div>
    </>
  )
}

export default HomeBeforeLogin;