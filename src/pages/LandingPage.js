import "./LandingPage.css";
import Navbar from "./Navbar.jsx";
import NftHero from "./NftHero.jsx";
import PortfolioHero from "./PortfolioHero.jsx";
import CallToAction from "./CallToAction.jsx";
import BitBuzzNewsGroup from "./BitBuzzNewsGroup.jsx";
import QuantumForum from "./QuantumForum.jsx";
import Testimonial from "./Testimonial.jsx";
import Footer from "./Footer.jsx";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <NftHero />
      <PortfolioHero />
      <CallToAction />
      <BitBuzzNewsGroup />
      <QuantumForum />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default LandingPage;
