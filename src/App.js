import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeBeforeLogin from "./components/HomeBeforeLogin";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomeAfterLogin from "./components/HomeAfterLogin";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
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
