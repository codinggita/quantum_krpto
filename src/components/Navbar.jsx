import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Navbar = ({ activeTab, title, customStyle }) => {
  const rainbowGradient =
    "linear-gradient(45deg, #FF0000, #FF9900, #FFFF00, #00FF00, #0000FF, #9900FF)";

  const [heading, setHeading] = useState(title || "QuantumKrypto");
  const [headingStyle, setHeadingStyle] = useState({
    display: "inline-block", // Ensure background spans only the text
    background: rainbowGradient,
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontSize: "40px",
    fontWeight: "bold",
    margin: 0,
    marginBottom: "8px",
    marginLeft: "100px",
    ...customStyle, // Apply custom style
  });

  const navbarStyle = {
    width: "100%",
    background: "transparent",
    zIndex: 1000,
    paddingTop: "10px",
  };

  const buttonStyle = {
    borderRadius: "20px",
    margin: "5px",
    marginTop: "10px",
  };

  const activeTabStyle = {
    color: "#ffffff",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "20px",
  };

  const tabStyle = {
    color: "#ffffff",
  };

  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    navigate("/" + newValue);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  useEffect(() => {
    // Update heading and headingStyle based on the title prop
    setHeading(title || "QuantumKrypto");

    // Example: Update headingStyle dynamically based on the title
    setHeadingStyle((prevStyle) => ({
      ...prevStyle,
      // Apply custom style
      ...customStyle,
    }));
  }, [title, customStyle]);

  return (
    <div>
      <Box sx={{ ...navbarStyle }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={headingStyle}>{heading}</h1>
          <div style={{ marginRight: "6vw" }}>
            <Button
              color="secondary"
              variant="outlined"
              onClick={handleSignUpClick}
              style={{ ...buttonStyle, marginRight: "10px" }}
            >
              Sign Up
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleLoginClick}
              style={buttonStyle}
            >
              Login
            </Button>
          </div>
        </div>
        <Tabs
          style={{ marginLeft: "6vw", indicatorColor: "transparent" }}
          textColor="secondary"
          value={activeTab}
          onChange={handleTabChange}
        >
          <Tab
            value="quantum-hub"
            label="Quantum Hub"
            style={activeTab === "quantum-hub" ? activeTabStyle : tabStyle}
          />
          <Tab
            value="nft-bazaar"
            label="NFT Bazaar"
            style={activeTab === "nft-bazaar" ? activeTabStyle : tabStyle}
          />
          <Tab
            value="coin-list"
            label="Coin List"
            style={activeTab === "coin-list" ? activeTabStyle : tabStyle}
          />
          <Tab
            value="portfolio"
            label="Portfolio"
            style={activeTab === "portfolio" ? activeTabStyle : tabStyle}
          />
          <Tab
            value="bit-buzz"
            label="Bit Buzz"
            style={activeTab === "bit-buzz" ? activeTabStyle : tabStyle}
          />
          <Tab
            value="quantum-forum"
            label="Quantum Forum"
            style={activeTab === "quantum-forum" ? activeTabStyle : tabStyle}
          />
          <Tab
            value="about"
            label="About"
            style={activeTab === "about" ? activeTabStyle : tabStyle}
          />
        </Tabs>
      </Box>
    </div>
  );
};

export default Navbar;
