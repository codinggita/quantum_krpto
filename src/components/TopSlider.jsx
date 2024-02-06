import React, { useState } from "react";
import { AppBar, Tabs, Tab, Card, Typography, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default function TopSlider() {
  // Sample data for the carousel
  const carouselData = [
    {
      title: "Squiggly",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=626&ext=jpg&ga=GA1.1.1572821029.1705490003&semt=sph",
      price: "50.0",
      currency: "ETH",
      usd: "11539888",
      description:
        "Randomly generated and fully on-chain squiggly lines, the first project in the Atlantes series. Only 100 pieces were created during the minting process.  The on-chain generator has now been shut off forever so they are only available in the secondary market. Project was launched in October 2020.\r\n\r\nCurve type refers to the type of bezier curve used in the on chain algorithm. All curve types had an equal probability of being created.\r\nAny auctoineer who called the end auction function for a given auction was credited as the creator of that Squiggly as they generated the seed to create the art for the auction winner and new owner.\r\n\r\ncreated by natealex",
      volume: "100",
    },
    {
      title: "Voxelglyph",
      image:
        "https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg?size=626&ext=jpg&ga=GA1.1.1572821029.1705490003&semt=sph",
      price: "41.0",
      currency: "ETH",
      usd: "21335878",
      description:
        "Randomly generated and fully on-chain squiggly lines, the first project in the Atlantes series. Only 100 pieces were created during the minting process.  The on-chain generator has now been shut off forever so they are only available in the secondary market. Project was launched in October 2020.\r\n\r\nCurve type refers to the type of bezier curve used in the on chain algorithm. All curve types had an equal probability of being created.\r\nAny auctoineer who called the end auction function for a given auction was credited as the creator of that Squiggly as they generated the seed to create the art for the auction winner and new owner.\r\n\r\ncreated by natealex",
      volume: "80",
    },
    {
      title: "Lamponor",
      image:
        "https://img.freepik.com/free-photo/cartoon-man-wearing-vr-glasses_23-2151136773.jpg?size=626&ext=jpg&ga=GA1.1.1572821029.1705490003&semt=sph",
      price: "24.0",
      currency: "ETH",
      usd: "5132936",
      description:
        "Randomly generated and fully on-chain squiggly lines, the first project in the Atlantes series. Only 100 pieces were created during the minting process.  The on-chain generator has now been shut off forever so they are only available in the secondary market. Project was launched in October 2020.\r\n\r\nCurve type refers to the type of bezier curve used in the on chain algorithm. All curve types had an equal probability of being created.\r\nAny auctoineer who called the end auction function for a given auction was credited as the creator of that Squiggly as they generated the seed to create the art for the auction winner and new owner.\r\n\r\ncreated by natealex",
      volume: "200",
    },
    {
      title: "Deckon Xcess",
      image:
        "https://img.freepik.com/free-photo/cartoon-character-with-handbag-sunglasses_71767-99.jpg?size=626&ext=jpg&ga=GA1.1.1572821029.1705490003&semt=sph",
      price: "70.0",
      currency: "ETH",
      usd: "31512834",
      description:
        "Randomly generated and fully on-chain squiggly lines, the first project in the Atlantes series. Only 100 pieces were created during the minting process.  The on-chain generator has now been shut off forever so they are only available in the secondary market. Project was launched in October 2020.\r\n\r\nCurve type refers to the type of bezier curve used in the on chain algorithm. All curve types had an equal probability of being created.\r\nAny auctoineer who called the end auction function for a given auction was credited as the creator of that Squiggly as they generated the seed to create the art for the auction winner and new owner.\r\n\r\ncreated by natealex",
      volume: "40",
    },
    {
      title: "Finister",
      image:
        "https://img.freepik.com/free-photo/ai-generated-concept-human_23-2150688371.jpg?size=626&ext=jpg&ga=GA1.1.1572821029.1705490003&semt=sph",
      price: "20.0",
      currency: "ETH",
      usd: "419582",
      description:
        "Randomly generated and fully on-chain squiggly lines, the first project in the Atlantes series. Only 100 pieces were created during the minting process.  The on-chain generator has now been shut off forever so they are only available in the secondary market. Project was launched in October 2020.\r\n\r\nCurve type refers to the type of bezier curve used in the on chain algorithm. All curve types had an equal probability of being created.\r\nAny auctoineer who called the end auction function for a given auction was credited as the creator of that Squiggly as they generated the seed to create the art for the auction winner and new owner.\r\n\r\ncreated by natealex",
      volume: "150",
    },
    {
      title: "Flexion Fist",
      image:
        "https://img.freepik.com/free-vector/abstract-flat-design-background_23-2148450082.jpg?size=626&ext=jpg&ga=GA1.1.1572821029.1705490003&semt=sph",
      price: "80.0",
      currency: "ETH",
      usd: "91729826",
      description:
        "Randomly generated and fully on-chain squiggly lines, the first project in the Atlantes series. Only 100 pieces were created during the minting process.  The on-chain generator has now been shut off forever so they are only available in the secondary market. Project was launched in October 2020.\r\n\r\nCurve type refers to the type of bezier curve used in the on chain algorithm. All curve types had an equal probability of being created.\r\nAny auctoineer who called the end auction function for a given auction was credited as the creator of that Squiggly as they generated the seed to create the art for the auction winner and new owner.\r\n\r\ncreated by natealex",
      volume: "10",
    },
    // Add more cards as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

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
          textColor="inherit"
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <IconButton onClick={handlePrev}>
          <NavigateBeforeIcon style={{ color: "white" }} />
        </IconButton>

        <div style={{ display: "flex" }}>
          {carouselData
            .slice(currentSlide, currentSlide + 3)
            .map((card, index) => (
              <Link
                key={index}
                to={`/buy-sell/${index + currentSlide}`}
                state={{ cardData: carouselData[index + currentSlide] }}
              >
                <Card
                  key={index}
                  style={{
                    position: "relative",
                    width: "30vw",
                    height: "50vh",
                    margin: "0 10px",
                    color: "white",
                    borderRadius: "20px",
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
              </Link>
            ))}
        </div>

        <IconButton onClick={handleNext}>
          <NavigateNextIcon style={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  );
}
