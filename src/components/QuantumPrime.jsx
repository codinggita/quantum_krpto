import React from "react";
import Navbar from "./Navbar";
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
    minHeight: "100vh",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  };

  const cardStyle = {
    width: "80%",
    padding: "16px",
    textAlign: "center",
    color: "white",
    borderRadius: 16,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    backdropFilter: "blur(10px)", // This adds a blur effect to the card background
  };

  const titleStyle = {
    marginBottom: "16px",
  };

  const buttonStyle = {
    marginTop: "16px",
    color: "white",
  };

  return (
    <>
      <Navbar />
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
              <ul
                style={{
                  listStyle: "none",
                }}
              >
                <li>Priority Access to New Cryptocurrencies</li>
                <li>Exclusive Market Insights from Top Analysts</li>
                <li>24/7 Concierge Support for Your Crypto Needs</li>
                <li>Customized Investment Strategies</li>
                <li>Access to Premium Webinars and Events</li>
              </ul>
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
    </>
  );
};

export default QuantumPrime;
