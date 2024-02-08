import React from "react";
import { Typography, Box } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function Error404() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      textAlign="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxWidth="600px"
        padding="20px"
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

      <Box
        flexShrink={0} // Ensure this box doesn't shrink
        marginLeft="20px" // Add some space between the two boxes
      >
        <iframe
          src="https://my.spline.design/rpmt404-cfca27235c1c89938e4cc451f84ea2c2/"
          title="Interactive Spline Design"
          frameBorder="0"
          width="1000px" // Adjust the width as needed
          height="700px" // Adjust the height as needed
        ></iframe>
      </Box>
    </Box>
  );
}
