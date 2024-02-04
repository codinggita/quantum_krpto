import React from "react";
import Navbar from "./Navbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const About = () => {
  return (
    <>
      <Navbar />
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Paper
          elevation={3}
          style={{
            padding: 24,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "#ffffff",
            width: "80%",
          }}
        >
          <Typography variant="h1" component="div" gutterBottom>
            About Quantum Krypto
          </Typography>
          <Typography variant="body1" paragraph>
            Quantum Krypto is a leading-edge platform that harnesses the
            potential of blockchain technology to transform the landscape of
            digital assets and NFTs (Non-Fungible Tokens).
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
              <ul>
                <li>
                  <Typography variant="body1">Innovation</Typography>
                </li>
                <li>
                  <Typography variant="body1">Transparency</Typography>
                </li>
                <li>
                  <Typography variant="body1">Community-driven</Typography>
                </li>
                <li>
                  <Typography variant="body1">Excellence</Typography>
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
