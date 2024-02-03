import React from "react";
import Navbar from "./Navbar";
import NFTHero from "./NFTHero";
import PortfolioHero from "./PortfolioHero";
import CallForAction from "./CallForAction";
import BitBuzz from "./BitBuzz";
import QuantumForum from "./QuantumForum";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
// import Glowball from "./Glowball";

export default function QuantumHub() {
  return (
    <div>
      <Navbar />
      <NFTHero />
      {/* <Glowball color="#ff0000" position="right" /> */}
      <PortfolioHero />
      {/* <Glowball color="#00ff00" position="left" /> */}
      <CallForAction />
      <BitBuzz />
      <QuantumForum />
      <Testimonials />
      <Footer />
    </div>
  );
}
