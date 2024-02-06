import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const useStyles = styled((theme) => ({
  footer: {
    backgroundColor: "transparent",
    color: "#fff",
    padding: "20px",
    marginTop: "20px",
  },
  column: {
    textAlign: "left",
  },
  newsletterForm: {
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    borderRadius: "20px 0 0 20px",
    padding: "10px",
  },
  submitButton: {
    borderRadius: "0 20px 20px 0",
    padding: "10px",
    background: "#87CEEB",
    color: "#000",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer
      className={classes.footer}
      style={{ color: "white", overflow: "hidden", marginTop: "-20px" }}
    >
      <Container>
        <Grid container spacing={10}>
          {/* Column 1 */}
          <Grid item xs={12} md={3} className={classes.column}>
            <Typography
              variant="h6"
              style={{
                background:
                  "linear-gradient(45deg, #FF0000, #FF9900, #FFFF00, #00FF00, #0000FF)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              QUANTUM KRYPTO
            </Typography>
            <img
              src="https://github.com/SCORLEOs773/quantum_krypto/blob/main/src/assets/qk%20logo.png?raw=truepath/to/quantum-krypto-logo.png"
              alt="Quantum Krypto Logo"
              style={{ marginTop: "10px", width: "100px", height: "auto" }}
            />
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} md={2} className={classes.column}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Krypto
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/quantum-hub"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/coin-list"
                >
                  Coin List
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/bit-buzz"
                >
                  Bit Buzz
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} md={2} className={classes.column}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Market
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/nft-bazaar"
                >
                  Browse NFTs
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/nft-bazaar"
                >
                  Buy NFTs
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/nft-bazaar"
                >
                  Sell NFTs
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Column 4 */}
          <Grid item xs={12} md={2} className={classes.column}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Contact
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="mailto:sukhadsharma075@gmail.com"
                >
                  Email
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="https://www.linkedin.com/in/sukhadsharma/"
                  target="#"
                >
                  LinkedIn
                </Link>
              </li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </Grid>

          {/* Column 5 */}
          <Grid item xs={12} md={3} className={classes.column}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Join Our Newsletter
            </Typography>
            <form style={{ display: "flex", marginTop: "35px" }}>
              <input
                type="text"
                placeholder="Email"
                style={{
                  borderRadius: "20px 0 0 20px",
                  padding: "12px",
                  backgroundColor: "rgba(135, 206, 250, 0.5)",
                  color: "white",
                  border: "none",
                  flex: 1,
                }}
              />
              <button
                type="submit"
                style={{
                  borderRadius: "0 20px 20px 0",
                  padding: "10px",
                  background: "rgba(135, 206, 250, 0.5)",
                  color: "white",
                  border: "none",
                  paddingRight: "20px",
                }}
              >
                Submit
              </button>
            </form>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>© A Sukhad Sharma Production</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      <div
        style={{
          height: "10px",
          width: "100vw",
          marginTop: "10px",
          backgroundImage: "linear-gradient(to right, #87CEEB, #3680d1)",
        }}
      />
    </footer>
  );
};

export default Footer;
