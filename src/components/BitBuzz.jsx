import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

const BitBuzz = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bitBuzzContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    color: "#FFFFFF",
    marginTop: "-35vh",
  };

  const buzzTextContainerStyle = {
    textAlign: "center",
    marginBottom: "20px",
  };

  const smallTranslucentTextStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "rgba(255, 255, 255, 0.7)",
  };

  const bigTextStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: "10px",
  };

  const redTextStyle = {
    color: "#FF0000",
  };

  const blueTextStyle = {
    color: "#0000FF",
  };

  const sliderContainerStyle = {
    width: "80vw",
    display: "flex",
    // overflow: "hidden",
  };

  const cardStyle = {
    flex: "0 0 calc(25%)",
    maxWidth: "calc(25%)",
    marginRight: "20px",
    borderRadius: "20px",
    backgroundColor: "rgba(135, 206, 235, 0.5)",
    color: "#FFFFFF",
  };

  const overflowHide = {
    width: "80vw",
    display: "flex",
    overflow: "hidden",
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const slides = [
    {
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus cumque veritatis perferendis, beatae odit cupiditate dolore nemo iure quis!",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      title: "Title 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus cumque veritatis perferendis, beatae odit cupiditate dolore nemo iure quis!",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_640.jpg",
    },
    {
      title: "Title 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus cumque veritatis perferendis, beatae odit cupiditate dolore nemo iure quis!",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
    },
    {
      title: "Title 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus cumque veritatis perferendis, beatae odit cupiditate dolore nemo iure quis!",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg",
    },
    {
      title: "Title 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus cumque veritatis perferendis, beatae odit cupiditate dolore nemo iure quis!",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_640.jpg ",
    },
    {
      title: "Title 6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus cumque veritatis perferendis, beatae odit cupiditate dolore nemo iure quis!",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_640.jpg",
    },
    {
      title: "Title 7",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus cumque veritatis perferendis, beatae odit cupiditate dolore nemo iure quis!",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_640.jpg",
    },
    {
      title: "Title 8",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus cumque veritatis perferendis, beatae odit cupiditate dolore nemo iure quis!",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_640.jpg",
    },
  ];

  return (
    <div style={bitBuzzContainerStyle}>
      <div style={buzzTextContainerStyle}>
        <div style={smallTranslucentTextStyle}>BIT BUZZ</div>
        <div style={bigTextStyle}>
          Stay ahead with <span style={redTextStyle}>Real-Time</span>{" "}
          <span style={blueTextStyle}>CRYPTO INSIGHTS</span>
        </div>
      </div>
      <div style={sliderContainerStyle}>
        <IconButton
          style={{ color: "white", fontWeight: "bold" }}
          onClick={handlePrevSlide}
        >
          {"<"}
        </IconButton>
        <div style={overflowHide}>
          {slides.slice(currentSlide, currentSlide + 4).map((slide, index) => (
            <Card key={index} style={cardStyle}>
              <img
                src={slide.imageUrl}
                alt={`Slide ${currentSlide + index + 1}`}
                style={{ width: "100%" }}
              />
              <CardContent>
                <Typography variant="h5">{slide.title}</Typography>
                <Typography variant="body2">{slide.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
        <IconButton
          style={{ color: "white", fontWeight: "bold" }}
          onClick={handleNextSlide}
        >
          {">"}
        </IconButton>
      </div>
    </div>
  );
};

export default BitBuzz;
