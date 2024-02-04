import React from "react";
import Button from "@mui/material/Button";
import PortfolioPic from "../assets/Portfolio Pic.png";

const PortfolioHero = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    marginLeft: "5vw",
    marginRight: "5vw",
    marginTop: "-10vh",
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
    backgroundColor: "#87CEEB",
    color: "#000000",
    fontWeight: "bold",
    marginTop: "20px",
    borderRadius: "20px",
  };

  const imageStyle = {
    flex: "1",
    marginRight: "15vw",
  };

  return (
    <div style={containerStyle}>
      <div style={imageStyle}>
        <img src={PortfolioPic} alt="Portfolio" style={{ width: "100%" }} />
      </div>
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
    </div>
  );
};

export default PortfolioHero;
