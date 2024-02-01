import React from "react";
import Button from "@mui/material/Button";

const PortfolioHero = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    marginLeft: "5vw",
    marginRight: "5vw",
  };

  const leftContentStyle = {
    flex: "1",
    textAlign: "left",
    color: "#FFFFFF",
  };

  const smallTextStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "rgba(255, 255, 255, 0.7)",
  };

  const largeTextStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    marginTop: "10px",
  };

  const normalTextStyle = {
    fontSize: "18px",
    marginTop: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#87CEEB", // Skyblue color
    color: "#000000", // Black text
    marginTop: "20px",
    borderRadius: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={leftContentStyle}>
        <div style={smallTextStyle}>PORTFOLIO</div>
        <div style={largeTextStyle}>
          Built-in NFT Analytics <br /> for Portfolio Mastery
        </div>
        <div style={normalTextStyle}>
          Harness insights with our integrated analytics dashboard; track and
          <br />
          optimize the value of your Quantum Krypto portfolio effortlessly.
        </div>
        <Button variant="contained" style={buttonStyle}>
          View Plans
        </Button>
      </div>
      {/* Add your image component for the right side */}
    </div>
  );
};

export default PortfolioHero;
