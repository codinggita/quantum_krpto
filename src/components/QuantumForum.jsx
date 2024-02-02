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
    marginTop: "-10vh",
    marginLeft: "3vw",
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
    marginTop: "30px",
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
    overflow: "hidden",
    marginRight: "10px",
  };

  const avatarStyle2 = {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    overflow: "hidden",
    marginTop: "4vh",
    marginLeft: "61vw",
  };

  const textBoxStyle1 = {
    borderRadius: "20px",
    padding: "14px",
    backgroundColor: "rgba(135, 206, 250, 0.8)",
    marginLeft: "70px",
    color: "DarkBlue",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Roboto",
  };
  const textBoxStyle2 = {
    borderRadius: "20px",
    padding: "14px",
    backgroundColor: "rgba(135, 206, 250, 0.8)",
    marginRight: "70px",
    color: "darkBlue",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Roboto",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
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
          <div style={avatarStyle1}>
            <img
              src="https://pics.craiyon.com/2023-06-04/50f169348eb24ce0919dba8133c08ddc.webp"
              alt="User Avatar"
              style={imgStyle}
            />
          </div>
          <div style={textBoxStyle1}>Just secured a Rare NFT!🚀</div>
        </div>
        <div>
          <div style={avatarStyle2}>
            <img src="" alt="User Avatar" style={imgStyle} />
          </div>
          <div style={textBoxStyle2}>
            Congrats on the rare find! What's your strategy?
          </div>
        </div>
      </div>

      <div style={boxStyle}>
        <div>
          <div style={avatarStyle1}>
            <img
              src="https://assets.teenvogue.com/photos/655e4f3ed2be238411f8e03f/16:9/w_1920,c_limit/AVTR_Stills_03.jpg"
              alt="User Avatar"
              style={imgStyle}
            />
          </div>
          <div style={textBoxStyle1}>Just secured a Rare NFT!🚀</div>
        </div>
        <div>
          <div style={avatarStyle2}>
            <img
              src="path_to_your_image2.jpg"
              alt="User Avatar"
              style={imgStyle}
            />
          </div>
          <div style={textBoxStyle2}>
            Congrats on the rare find! What's your strategy?
          </div>
        </div>
      </div>
      <div style={boxStyle}>
        <div>
          <div style={avatarStyle1}>
            <img
              src="https://www.aipromptsgalaxy.com/wp-content/uploads/2023/06/subrat_female_avatar_proud_face_Aurora_a_25-year-old_girl_with__fd0e4c59-bb7e-4636-9258-6690ec6a71e7.png"
              alt="User Avatar"
              style={imgStyle}
            />
          </div>
          <div style={textBoxStyle1}>Just secured a Rare NFT!🚀</div>
        </div>
        <div>
          <div style={avatarStyle2}>
            <img
              src="path_to_your_image2.jpg"
              alt="User Avatar"
              style={imgStyle}
            />
          </div>
          <div style={textBoxStyle2}>
            Congrats on the rare find! What's your strategy?
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumForum;
