import React from "react";
import Navbar from "./Navbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "../assets/qk logo.png";

const About = () => {
  const paperStyle = {
    padding: 24,
    backgroundColor: "#1c1c1c",
    color: "#ffffff",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <Navbar activeTab="about" />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          width: "100vw",
        }}
      >
        <Paper elevation={5} style={paperStyle}>
          <Typography variant="h1" component="div" gutterBottom>
            About Quantum Krypto
          </Typography>
          <Typography variant="body1" paragraph>
            Quantum Krypto is a cutting-edge platform leveraging blockchain
            technology to revolutionize digital assets and NFTs (Non-Fungible
            Tokens).
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to create a seamless and secure environment,
            empowering creators, collectors, and enthusiasts to participate in
            the dynamic world of blockchain-based assets.
          </Typography>
          <Typography variant="body1" paragraph>
            At Quantum Krypto, we believe in fostering innovation, transparency,
            and community-driven collaboration. We strive to bring excellence to
            the decentralized economy.
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="div" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1" paragraph>
                To establish a global ecosystem where individuals can tokenize
                their creativity, assert ownership through NFTs, and actively
                engage in the flourishing decentralized economy.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="div" gutterBottom>
                Core Values
              </Typography>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <Box>
                    <Typography variant="body1">Innovation</Typography>
                  </Box>
                </li>
                <li>
                  <Box>
                    <Typography variant="body1">Transparency</Typography>
                  </Box>
                </li>
                <li>
                  <Box>
                    <Typography variant="body1">Community-driven</Typography>
                  </Box>
                </li>
                <li>
                  <Box>
                    <Typography variant="body1">Excellence</Typography>
                  </Box>
                </li>
                {/* Add more values as needed */}
              </ul>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default About;
