import React from "react";

const QuantumForum = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "20px",
    color: "rgba(255, 255, 255, 0.7)",
    marginTop: "-30vh",
    marginLeft: "5vw",
  };

  const smallTranslucentTextStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "rgba(255, 255, 255, 0.5)",
  };

  const bigBoldTextStyle = {
    fontSize: "50px",
    fontWeight: "bold",
    marginTop: "10px",
  };

  const rainbowTextStyle = {
    backgroundImage:
      "linear-gradient(80deg, #FF0000, #FF9900, #FFFF00, #00FF00, #0000FF, #9900FF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  const blueTextStyle = {
    color: "#0000FF",
  };

  const yellowTextStyle = {
    color: "#FFFF00",
  };

  const redTextStyle = {
    color: "#FF0000",
  };

  const boxStyle = {
    width: "70%",
    borderRadius: "20px",
    background: "linear-gradient(to right, #154c76, rgba(135, 206, 250, 0.5))",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
  };

  const avatarStyle1 = {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    marginRight: "10px",
  };

  const avatarStyle2 = {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    marginTop: "4vh",
    marginLeft: "59.3vw",
  };

  const textBoxStyle1 = {
    borderRadius: "20px",
    padding: "2 0px",
    backgroundColor: "rgba(135, 206, 250, 0.8)",
    marginLeft: "70px",
    color: "black",
    fontFamily: "Roboto",
  };
  const textBoxStyle2 = {
    borderRadius: "20px",
    padding: "2 0px",
    backgroundColor: "rgba(135, 206, 250, 0.8)",
    marginRight: "70px",
    color: "black",
    fontFamily: "Roboto",
  };

  return (
    <div style={containerStyle}>
      <div style={smallTranslucentTextStyle}>QUANTUM FORUM</div>
      <div style={bigBoldTextStyle}>
        Join the <span style={rainbowTextStyle}>Quantum Community</span>
      </div>
      <div style={{ fontSize: "40px", fontWeight: "Bold" }}>
        <span style={blueTextStyle}>Discuss. </span>
        <span style={yellowTextStyle}>Learn. </span>
        <span style={redTextStyle}>Thrive.</span>
      </div>

      <div style={boxStyle}>
        <div>
          <div style={avatarStyle1}></div>
          <div style={textBoxStyle1}>Left Content</div>
        </div>
        <div>
          <div style={avatarStyle2}></div>
          <div style={textBoxStyle2}>Right Content</div>
        </div>
      </div>
    </div>
  );
};

export default QuantumForum;
