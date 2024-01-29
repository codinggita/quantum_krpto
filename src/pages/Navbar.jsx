import React from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
  };

  return (
    <div className="navbar-home">
      <div className="navbar">
        <div className="navbar-child" />
        <b className="quantumkrypto1">QuantumKrypto</b>
        <div className="sign-up">
          <div className="sign-up-child" />
          <div className="sign-up1">Sign Up</div>
        </div>
        <div className="log-in">
          <div className="log-in-child" />
          <div className="sign-up1">Log In</div>
        </div>
        <div className="nav-tabs">
          <Link
            to="/quantum-forum"
            className="quantum-forum2"
            style={linkStyle}
          >
            Quantum Forum
          </Link>
          <Link to="/nft-bazaar" className="nft-bazaar" style={linkStyle}>
            NFT Bazaar
          </Link>
          <Link to="/portfolio" className="portfolio1" style={linkStyle}>
            Portfolio
          </Link>
          <Link to="/bit-buzz" className="bit-buzz1" style={linkStyle}>
            Bit Buzz
          </Link>
          <div className="active-tab">
            <Link to="/quantum-hub" className="quantum-hub" style={linkStyle}>
              Quantum Hub
            </Link>
            <div className="active-tab-child" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
