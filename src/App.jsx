import React from "react";
//import de react router dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import des pages
// import Nav from "./Components/NavBar/Nav";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
// import Web from "./Components/WebProject/WebProject";
import Web from "./Components/CardWeb/Web";
// import Audio from "./Components/AudioProject/Audio";
import Contact from "./Components/Contact/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Nav /> */}
       <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/Audio" element={<Audio />} /> */}
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Web />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
