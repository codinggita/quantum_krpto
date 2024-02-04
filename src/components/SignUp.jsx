import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const CustomContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
});

const CustomPaper = styled(Paper)({
  position: "relative",
  width: "500px",
  padding: "30px",
  borderRadius: "20px",
  background: "#87CEEB",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      "url('https://github.com/SCORLEOs773/quantum_krypto/blob/main/src/assets/qk%20logo.png?raw=true')",
    opacity: 0.2,
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    pointerEvents: "none",
  },
});

const CustomTextField = styled(TextField)({
  marginBottom: "20px",
  width: "100%",
});

const CustomButton = styled(Button)({
  backgroundColor: "#ffffff",
  color: "#000000",
  fontWeight: "bold",
  borderRadius: "20px",
  width: "100%",
  marginBottom: "10px",
});

const DividerWithBG = styled(Divider)({
  backgroundColor: "#87CEEB",
  margin: "20px 0",
});

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/quantum-hub");
  };

  const handleGoogleSignUp = () => {
    // Handle Google signup logic
  };

  const handleAppleSignUp = () => {
    // Handle Apple signup logic
  };

  return (
    <CustomContainer>
      <CustomPaper>
        <h1 style={{ color: "#000000" }}>Sign Up</h1>
        <CustomTextField label="Username" variant="outlined" />
        <CustomTextField label="Email" type="email" variant="outlined" />
        <CustomTextField label="Password" type="password" variant="outlined" />
        <CustomButton variant="contained" onClick={handleSignUp}>
          Sign Up
        </CustomButton>
        <DividerWithBG />
        <p>or</p>
        <CustomButton
          variant="outlined"
          onClick={handleGoogleSignUp}
          style={{ backgroundColor: "#4285F4", color: "#ffffff" }}
        >
          Sign Up with Google
        </CustomButton>
        <CustomButton
          variant="outlined"
          onClick={handleAppleSignUp}
          style={{ backgroundColor: "#000000", color: "#ffffff" }}
        >
          Sign Up with Apple
        </CustomButton>
      </CustomPaper>
      <p style={{ marginTop: "10px", color: "white" }}>
        Don't miss out on the crypto fun! 🚀
      </p>
    </CustomContainer>
  );
};

export default SignUp;
