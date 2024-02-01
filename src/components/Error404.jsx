import React from "react";
import { Typography, Box } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function Error404() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
      textAlign="center"
    >
      <ErrorOutlineIcon style={{ fontSize: 100, color: "#FFFFFF" }} />
      <Typography
        variant="h2"
        color="textPrimary"
        gutterBottom
        style={{ color: "#FFFFFF" }}
      >
        ERROR 404!
      </Typography>
      <Typography
        variant="h3"
        color="textPrimary"
        gutterBottom
        style={{ color: "#FFFFFF" }}
      >
        Uh-oh! Quantum Glitch Detected!
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        style={{ color: "#FFFFFF" }}
      >
        It seems like you've ventured into a quantum realm that doesn't exist
        yet.
        <br />
        Our quantum engineers are working hard to create this universe. Please
        try another dimension.
      </Typography>
    </Box>
  );
}
