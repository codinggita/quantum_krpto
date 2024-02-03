import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const rainbowGradient =
    "linear-gradient(45deg, #FF0000, #FF9900, #FFFF00, #00FF00, #0000FF, #9900FF)";

  const navbarStyle = {
    width: "100%",
    background: "transparent",
    zIndex: 1000,
    paddingTop: "10px",
  };

  const headingStyle = {
    background: rainbowGradient,
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontSize: "40px",
    fontWeight: "bold",
    margin: 0,
    marginBottom: "8px",
    marginLeft: "100px",
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

  const [activeTab, setActiveTab] = useState("quantumHub");
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

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
          <h1 style={headingStyle}>QUANTUM KRYPTO</h1>
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
            value="quantumHub"
            label="Quantum Hub"
            style={activeTab === "quantumHub" ? activeTabStyle : tabStyle}
          />
          <Tab
            value="nftBazaar"
            label="NFT Bazaar"
            style={activeTab === "nftBazaar" ? activeTabStyle : tabStyle}
          />
          <Tab
            value="portfolio"
            label="Portfolio"
            style={activeTab === "portfolio" ? activeTabStyle : tabStyle}
          />
          <Tab
            value="bitBuzz"
            label="Bit Buzz"
            style={activeTab === "bitBuzz" ? activeTabStyle : tabStyle}
          />
          <Tab
            value="quantumForum"
            label="Quantum Forum"
            style={activeTab === "quantumForum" ? activeTabStyle : tabStyle}
          />
        </Tabs>
      </Box>
    </div>
  );
}