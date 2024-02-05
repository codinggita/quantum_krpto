import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const CoinDetails = () => {
  const { id } = useParams();
  const [coinDetails, setCoinDetails] = useState(null);

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

  return (
    <div>
      <Navbar />
      {coinDetails && (
        <Card>
          <CardMedia
            component="img"
            height="200" // Adjust the height as needed
            image={coinDetails.image.large}
            alt={coinDetails.name}
            style={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography variant="h4">{coinDetails.name}</Typography>
            <Typography variant="h6" color="textSecondary">
              {coinDetails.symbol.toUpperCase()}
            </Typography>
            {/* Add more details based on your requirements */}
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
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CoinDetails;
