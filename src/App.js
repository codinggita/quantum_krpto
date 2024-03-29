import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import QuantumHub from "./components/QuantumHub";
import QuantumPrime from "./components/QuantumPrime";
import Error404 from "./components/Error404";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Open from "./components/Open";
import NFTBazaar from "./components/NFTBazaar";
import BitBuzz from "./components/BitBuzz";
import Portfolio from "./components/Portfolio";
import QuantumForum from "./components/QuantumForum";
import About from "./components/About";
import BuySell from "./components/BuySell";
import CoinList from "./components/CoinList";
import CoinDetails from "./components/CoinDetails";
import ForumChat from "./components/ForumChat";

function App() {
  const appStyle = {
    // backgroundColor: "#090419",
    backgroundImage:
      "url(https://github.com/SCORLEOs773/quantum_krypto/blob/main/src/assets/QK%20bg.png?raw=true)",
    backgroundSize: "cover",
    minHeight: "100vh",
  };

  return (
    <div className="App" style={appStyle}>
      <Router>
        <Routes>
          <Route path="/" element={<Open />} />
          <Route path="/quantum-hub" element={<QuantumHub />} />
          <Route path="/quantum-prime" element={<QuantumPrime />} />
          <Route path="/nft-bazaar" element={<NFTBazaar />} />
          <Route path="/bit-buzz" element={<BitBuzz />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/quantum-forum" element={<QuantumForum />} />
          <Route path="/quantum-forum/:id" element={<ForumChat />} />
          <Route path="/about" element={<About />} />
          <Route path="/buy-sell/:cardId" element={<BuySell />} />
          <Route path="/coin-list" element={<CoinList />} />
          <Route path="/coin-details/:id" element={<CoinDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
