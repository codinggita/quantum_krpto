import React, { useState } from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default function BottomSlider() {
  // Sample data for the carousel
  const bottomCarouselData = [
    {
      title: "Card 1",
      image:
        "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww", // Replace with your image URL
      price: "0.1 ETH",
      volume: "100 ETH",
    },
    {
      title: "Card 2",
      image:
        "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FtcGxlfGVufDB8fDB8fHww", // Replace with your image URL
      price: "0.15 ETH",
      volume: "120 ETH",
    },
    {
      title: "Card 3",
      image:
        "https://images.unsplash.com/photo-1558383331-f520f2888351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbXBsZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with your image URL
      price: "0.08 ETH",
      volume: "80 ETH",
    },
    {
      title: "Card 4",
      image:
        "https://images.unsplash.com/photo-1531361171768-37170e369163?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhbXBsZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with your image URL
      price: "0.1 ETH",
      volume: "100 ETH",
    },
    {
      title: "Card 5",
      image:
        "https://images.unsplash.com/photo-1551307090-6c32b15bd0c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNhbXBsZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with your image URL
      price: "0.15 ETH",
      volume: "120 ETH",
    },
    {
      title: "Card 6",
      image:
        "https://images.unsplash.com/photo-1613467663837-e4a6be2014b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbXBsZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with your image URL
      price: "0.08 ETH",
      volume: "80 ETH",
    },
    {
      title: "Card 7",
      image:
        "https://images.unsplash.com/photo-1616020453784-a24fa9845b05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNhbXBsZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with your image URL
      price: "0.15 ETH",
      volume: "120 ETH",
    },
    {
      title: "Card 8",
      image:
        "https://images.unsplash.com/photo-1524419986249-348e8fa6ad4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FtcGxlfGVufDB8fDB8fHww", // Replace with your image URL
      price: "0.08 ETH",
      volume: "80 ETH",
    },
    // Add more cards as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 4) % bottomCarouselData.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 4 + bottomCarouselData.length) % bottomCarouselData.length
    );
  };

  return (
    <div style={{ overflow: "hidden" }}>
      {/* Carousel of MUI Cards */}
      <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <IconButton onClick={handlePrev}>
          <NavigateBeforeIcon style={{ color: "white" }} />
        </IconButton>

        <div style={{ display: "flex" }}>
          {bottomCarouselData
            .slice(currentSlide, currentSlide + 4)
            .map((card, index) => (
              <Card
                key={index}
                style={{
                  position: "relative",
                  width: "20vw",
                  height: "50vh",
                  margin: "0 10px",
                  color: "white",
                  borderRadius: "20px",
                }}
              >
                {/* Card Image */}
                <img
                  src={card.image}
                  alt={`Card ${index + 1}`}
                  style={{
                    width: "100%", // Make the image fill the card
                    height: "69.5%", // Make the image fill the card
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
                    backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark background
                  }}
                >
                  {/* Title */}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    style={{ textAlign: "left", marginBottom: "8px" }}
                  >
                    {card.title}
                  </Typography>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {/* Price */}
                    <Typography
                      variant="body1"
                      style={{ textAlign: "left", marginBottom: "8px" }}
                    >
                      Floor:
                      <br />
                      {card.price}
                    </Typography>

                    {/* Volume */}
                    <Typography
                      variant="body1"
                      style={{ textAlign: "left", marginRight: "20px" }}
                    >
                      24h Volume:
                      <br />
                      {card.volume}
                    </Typography>
                  </div>
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
