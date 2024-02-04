import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default function TopSlider() {
  // Sample data for the carousel
  const carouselData = [
    {
      title: "Card 1",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=626&ext=jpg&ga=GA1.1.1572821029.1705490003&semt=sph",
      price: "0.09 ETH",
    },
    {
      title: "Card 2",
      image:
        "https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg?size=626&ext=jpg&ga=GA1.1.1572821029.1705490003&semt=sph",
      price: "0.1 ETH",
    },
    {
      title: "Card 3",
      image:
        "https://img.freepik.com/free-photo/cartoon-man-wearing-vr-glasses_23-2151136773.jpg?size=626&ext=jpg&ga=GA1.1.1572821029.1705490003&semt=sph",
      price: "0.08 ETH",
    },
    {
      title: "Card 4",
      image:
        "https://img.freepik.com/free-photo/cartoon-character-with-handbag-sunglasses_71767-99.jpg?size=626&ext=jpg&ga=GA1.1.1572821029.1705490003&semt=sph",
      price: "0.09 ETH",
    },
    {
      title: "Card 5",
      image:
        "https://img.freepik.com/free-photo/ai-generated-concept-human_23-2150688371.jpg?size=626&ext=jpg&ga=GA1.1.1572821029.1705490003&semt=sph",
      price: "0.1 ETH",
    },
    {
      title: "Card 6",
      image:
        "https://img.freepik.com/free-vector/abstract-flat-design-background_23-2148450082.jpg?size=626&ext=jpg&ga=GA1.1.1572821029.1705490003&semt=sph",
      price: "0.08 ETH",
    },
    // Add more cards as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 3) % carouselData.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 3 + carouselData.length) % carouselData.length
    );
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "transparent",
          marginTop: "20px",
          marginLeft: "30px",
        }}
      >
        <Tabs
          TabIndicatorProps={{ style: { backgroundColor: "transparent" } }}
          textColor="white"
        >
          <Tab label="All" />
          <Tab label="Art" />
          <Tab label="Gaming" />
          <Tab label="Membership" />
          <Tab label="PFPs" />
          <Tab label="Photography" />
          <Tab label="Music" />
        </Tabs>
      </AppBar>

      {/* Carousel of MUI Cards */}
      <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <IconButton onClick={handlePrev}>
          <NavigateBeforeIcon style={{ color: "white" }} />
        </IconButton>

        <div style={{ display: "flex" }}>
          {carouselData
            .slice(currentSlide, currentSlide + 3)
            .map((card, index) => (
              <Card
                key={index}
                style={{
                  position: "relative",
                  width: "30vw",
                  height: "50vh",
                  margin: "0 10px",
                  color: "white",
                }}
              >
                {/* Card Image */}
                <img
                  src={card.image}
                  alt={`Card ${currentSlide + index + 1}`}
                  style={{
                    width: "100%", // Make the image fill the card
                    height: "100%", // Make the image fill the card
                    objectFit: "cover", // Ensure the image covers the area
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    padding: "8px",
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.15)", // Translucent grayish background
                  }}
                >
                  {/* Title and Price */}
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    style={{ textAlign: "left" }}
                  >
                    {card.title}
                    <br />
                    Floor: {card.price}
                  </Typography>
                </div>
              </Card>
            ))}
        </div>

        <IconButton onClick={handleNext}>
          <NavigateNextIcon style={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  );
}
