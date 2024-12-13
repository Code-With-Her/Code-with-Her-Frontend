import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>} />
      </Routes>
    </Router>
  );
}

export default App;
