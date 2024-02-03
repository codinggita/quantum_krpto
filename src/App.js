import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import QuantumHub from "./components/QuantumHub";
import Error404 from "./components/Error404";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Open from "./components/Open";

function App() {
  const appStyle = {
    backgroundColor: "#090419",
    minHeight: "100vh",
  };

  return (
    <div className="App" style={appStyle}>
      <Router>
        <Routes>
          <Route path="/" element={<Open />} />
          <Route path="/home" element={<QuantumHub />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
