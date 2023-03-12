import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './Components/Home/Home'

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Routes */}
      <Router>
          <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
