import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Button,
} from "@mui/material";

const CoinDetails = () => {
  const { id } = useParams();
  const [coinDetails, setCoinDetails] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCoinDetails(data);
      } catch (error) {
        console.error("Error fetching coin details:", error);
      }
    };

    fetchCoinDetails();
  }, [id]);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getDescription = () => {
    const truncatedDescription =
      coinDetails.description?.en.split(" ").slice(0, 45).join(" ") || "";
    return showFullDescription
      ? coinDetails.description?.en || ""
      : truncatedDescription;
  };

  return (
    <div style={{ padding: "20px" }}>
      <Navbar />
      {coinDetails && (
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
                <CardMedia
                  component="img"
                  height="200" // Adjust the height as needed
                  image={coinDetails.image.large}
                  alt={coinDetails.name}
                  style={{ objectFit: "contain", margin: "auto" }}
                />
                <Typography variant="h4" style={{ margin: "10px 0" }}>
                  {coinDetails.name}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  {coinDetails.symbol.toUpperCase()}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="body1"
                  style={{
                    marginBottom: "10px",
                    whiteSpace: showFullDescription ? "normal" : "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {getDescription()}
                  {coinDetails.description?.en &&
                    coinDetails.description.en.split(" ").length > 45 && (
                      <Button
                        variant="text"
                        color="primary"
                        onClick={handleToggleDescription}
                      >
                        {showFullDescription ? "Read Less" : "Read More"}
                      </Button>
                    )}
                </Typography>
                <Typography variant="body1">
                  Current Price: ${coinDetails.market_data.current_price.usd}
                </Typography>
                <Typography variant="body1">
                  Market Cap: ${coinDetails.market_data.market_cap.usd}
                </Typography>
                <Typography variant="body1">
                  24h Volume: ${coinDetails.market_data.total_volume.usd}
                </Typography>
                {/* Add more details as needed */}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CoinDetails;
