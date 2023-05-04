import "./App.css";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Pages/Home";
import Aboutme from "./Pages/Aboutme";
import Contact from "./Pages/Contact";
import Ability from "./Pages/Ability";
import Project from "./Pages/Project";

var state = {
  navbarRespon: false,
};

function handleInClickMenu() {
  state.navbarRespon = !state.navbarRespon;
  let navbar = document.querySelector(".navbar");
  if (!state.navbarRespon) {
    navbar.classList.add("navbar-responsive");
  } else {
    navbar.classList.remove("navbar-responsive");
  }
}

function App() {
  return (
    <Router basename="/portfolio-reactjs-basic">
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
          <div className="menu">
            <span>MENU</span>
            <button className="menu-btn" onClick={() => handleInClickMenu()}>
              <i class="fa fa-bars"></i>
            </button>
          </div>
          <div className="navbar">
            <NavLink to="/" className="navbar-item">
              HOME
            </NavLink>
            <NavLink to="/aboutme" className="navbar-item">
              SUMMARY
            </NavLink>
            <NavLink to="/contact" className="navbar-item">
              CONTACT
            </NavLink>
            <NavLink to="/ability" className="navbar-item">
              ABILITIES
            </NavLink>
            <NavLink to="/project" className="navbar-item">
              PROJECT
            </NavLink>
          </div>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/aboutme" element={<Aboutme />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/ability" element={<Ability />}></Route>
            <Route path="/project" element={<Project />}></Route>
          </Routes>
        </main>
        <ToastContainer
          position="top-right"
          transition={Flip}
          style={{
            textAlign: "left",
            fontWeight: "bold",
          }}
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </Router>
  );
}

export default App;
