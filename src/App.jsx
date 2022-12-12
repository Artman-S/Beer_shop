import React from "react";
//import de react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import des pages
import Home from "./Pages/Home";
import Beers from "./Pages/Beers";
import Nav from "./Components/Nav";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Beers and so More</h1>
      <Router>
        <Nav />
       <Routes>
          <Route path="/" element="{<Home />}" />
          <Route path="Beers" element="{<Beers />}" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
