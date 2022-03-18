import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeBeforeLogin from "./components/HomeBeforeLogin";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomeAfterLogin from "./components/HomeAfterLogin";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({msg:message, type:type});
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
            <Switch>
              <Route path = "/contact">
                <Contact/>
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/">
                {/* <HomeBeforeLogin /> */}
                <HomeAfterLogin/>
              </Route>
            </Switch>
          </div>
          <Footer/>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
