import React from "react";
import gifImage from "../assets/NFT gif.gif";
import { useNavigate } from "react-router-dom";

const NFTHero = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    marginLeft: "10vw",
    marginRight: "5vw",
  };

  const leftContentStyle = {
    flex: "1",
    color: "#FFFFFF",
    textAlign: "left",
  };

  const blueText = {
    color: "#0000FF",
  };

  const redText = {
    color: "#FF0000",
  };

  const rightContentStyle = {
    flex: "1",
  };

  const exploreNowButtonStyle = {
    background: "#87CEEB",
    color: "#000000",
    fontWeight: "bold",
    padding: "10px 20px",
    fontSize: "16px",
    marginRight: "20px",
    borderRadius: "20px",
    cursor: "pointer",
    border: "none",
    outline: "none",
  };

  const rareFindsButtonStyle = {
    background: "transparent",
    color: "#FFFFFF",
    fontWeight: "bold",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "20px",
    cursor: "pointer",
    border: "2px solid #FFFFFF",
    outline: "none",
  };

  const navigate = useNavigate();

  const handleExploreNow = () => {
    navigate("/nft-bazaar");
  };

  const handleRareFinds = () => {
    navigate("/nft-bazaar");
  };

  return (
    <div style={containerStyle}>
      <div style={leftContentStyle}>
        <h1>
          <span style={{ ...blueText, fontSize: "60px" }}>
            Discover and Collect
          </span>
          <br />
          <span style={{ ...redText, fontSize: "60px" }}>RARE NFTs</span>
        </h1>
        <p style={{ color: "#FFFFFF", textAlign: "left" }}>
          The most secure marketplace for buying and
          <br />
          selling unique crypto assets.
        </p>
        <button onClick={handleExploreNow} style={exploreNowButtonStyle}>
          Explore Now
        </button>
        <button
          onClick={handleRareFinds}
          style={rareFindsButtonStyle}
          variant="outlined"
        >
          Rare Finds
        </button>
      </div>
      <div style={rightContentStyle}>
        <img src={gifImage} alt="GIF" />
      </div>
    </div>
  );
};

export default NFTHero;
