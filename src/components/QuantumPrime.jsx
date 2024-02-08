import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const QuantumPrime = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "83.5vh",
    width: "2000px",
    overflow: "hidden",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    marginBottom: "10vh",
  };

  const cardStyle = {
    width: "80%",
    padding: "16px",
    textAlign: "center",
    color: "white",
    borderRadius: 16,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    backdropFilter: "blur(10px)",
  };

  const titleStyle = {
    marginBottom: "16px",
    fontFamily: "'PremiumFont', sans-serif", // Use a premium font
    fontSize: "2rem", // Adjust font size
  };

  const buttonStyle = {
    marginTop: "16px",
    color: "white",
  };

  const primeGradient = "linear-gradient(45deg, #ff073a, #ffa800)";

  const listStyle = {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const featureBoxStyle = {
    backgroundColor: "#fff", // Background color for feature boxes
    color: "#000", // Text color for feature boxes
    padding: "16px",
    margin: "8px",
    borderRadius: "8px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  };

  return (
    <>
      <Navbar
        title="QuantumPrime"
        customStyle={{
          background: primeGradient,
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontSize: "40px",
          fontWeight: "bold",
          margin: 0,
          marginBottom: "8px",
          marginLeft: "100px",
          textShadow: "0 0 10px rgba(254, 115, 125, 1)",
        }}
      />
      <Container style={containerStyle}>
        <Card style={{ ...cardStyle, color: "black" }}>
          <CardContent>
            <Typography variant="h4" style={titleStyle}>
              Welcome to QuantumPrime
            </Typography>
            <Typography variant="body1">
              QuantumPrime is the epitome of luxury and exclusivity in the world
              of cryptocurrency. As a QuantumPrime member, you unlock a world of
              premium features and unparalleled benefits.
            </Typography>
            <Typography variant="body1">
              Our Features Include:
              <div style={listStyle}>
                {[
                  "Priority Access to New Cryptocurrencies",
                  "Exclusive Market Insights from Top Analysts",
                  "24/7 Concierge Support for Your Crypto Needs",
                  "Customized Investment Strategies",
                  "Access to Premium Webinars and Events",
                ].map((feature, index) => (
                  <div key={index} style={featureBoxStyle}>
                    {feature}
                  </div>
                ))}
              </div>
            </Typography>
            <Typography variant="body1">
              Join QuantumPrime today and elevate your cryptocurrency experience
              to new heights. Seize the opportunities, stay ahead of the trends,
              and be part of an exclusive community shaping the future of
              finance.
            </Typography>
            <Button variant="contained" color="secondary" style={buttonStyle}>
              Join QuantumPrime
            </Button>
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default QuantumPrime;
