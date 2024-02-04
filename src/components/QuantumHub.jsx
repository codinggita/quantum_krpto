import React from "react";
import Navbar from "./Navbar";
import NFTHero from "./QuantumHubComponents/NFTHero";
import PortfolioHero from "./QuantumHubComponents/PortfolioHero";
import CallForAction from "./QuantumHubComponents/CallForAction";
import BitBuzzHero from "./QuantumHubComponents/BitBuzzHero";
import QuantumForumHero from "./QuantumHubComponents/QuantumForumHero";
import Testimonials from "./QuantumHubComponents/Testimonials";
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
