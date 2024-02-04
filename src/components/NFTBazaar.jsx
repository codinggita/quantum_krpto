import React from "react";
import Navbar from "./Navbar";
import TopSlider from "./TopSlider";
import Footer from "./Footer";
import BottomSlider from "./BottomSlider";
import { Typography } from "@mui/material";

export default function NFTBazaar() {
  return (
    <div>
      <Navbar activeTab="nft-bazaar" />
      <TopSlider />
      <br />
      <div
        style={{
          paddingLeft: "30px",
          textAlign: "left",
          marginTop: "8vh",
          marginBottom: "5vh",
        }}
      >
        <Typography variant="h4" fontWeight="bold" style={{ color: "white" }}>
          Notable Collection
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BottomSlider />
      </div>
      <br />
      <div
        style={{
          paddingLeft: "30px",
          textAlign: "left",
          marginTop: "8vh",
          marginBottom: "5vh",
        }}
      >
        <Typography variant="h4" fontWeight="bold" style={{ color: "white" }}>
          Trending in Art
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BottomSlider />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
