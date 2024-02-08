import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const CallForAction = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    marginTop: "-25vh",
  };

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80vw",
    height: "50vh",
    borderRadius: "20px",
    background: "linear-gradient(45deg, #9FCBFF, #187AEE)",
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  };

  const redTextStyle = {
    color: "#FF0000",
    fontWeight: "bold",
    fontSize: "20px",
  };

  const bigTextStyle = {
    fontSize: "70px",
    marginTop: "8px",
  };

  const rainbowTextStyle = {
    backgroundImage:
      "linear-gradient(80deg, #FF0000, #FF9900, #FFFF00, #00FF00, #0000FF, #9900FF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontSize: "16px",
  };

  const navigate = useNavigate();

  const handlePrime = () => {
    navigate("/quantum-prime");
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <div style={{ fontSize: "20px" }}>
          ARE YOU <span style={redTextStyle}>READY?</span>{" "}
        </div>
        <div style={bigTextStyle}>
          BE PART OF THE
          <br />
          NEXT{" "}
          <span style={{ ...redTextStyle, fontSize: "70px" }}>BIG THING</span>
        </div>
        <Button
        onClick={handlePrime}
          variant="contained"
          style={{
            backgroundColor: "#1f1f1f",
            color: "#ffffff",
            marginTop: "20px",
            borderRadius: "20px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          <span>
            GET QUANTUM <span style={rainbowTextStyle}>PRIME</span>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default CallForAction;
