import React from "react";
import Navbar from "./Navbar";
import NFTHero from "./NFTHero";
import PortfolioHero from "./PortfolioHero";
import CallForAction from "./CallForAction";
import BitBuzzHero from "./BitBuzzHero";
import QuantumForumHero from "./QuantumForumHero";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
// import Glowball from "./Glowball";

export default function QuantumHub() {
  return (
    <div>
      <Navbar activeTab="quantum-hub" />
      <NFTHero />
      {/* <Glowball color="#ff0000" position="right" /> */}
      <PortfolioHero />
      {/* <Glowball color="#00ff00" position="left" /> */}
      <CallForAction />
      <BitBuzzHero />
      <QuantumForumHero />
      <Testimonials />
      <Footer />
    </div>
  );
}
