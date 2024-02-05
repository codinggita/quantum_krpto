import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  TextField,
} from "@mui/material";

const CoinList = () => {
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=24&page=1&sparkline=false&price_change_percentage=24h",
          {
            headers: {
              "Content-Type": "application/json",
              "X-CoinGecko-API-Key": "CG-TBUbnGXu24EmUsHaAsJ7Cr9X",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error("Error fetching data from CoinGecko API:", error);
      }
    };

    fetchCoins();
  }, []);

  const handleCardClick = (coinId) => {
    navigate(`/coin-details/${coinId}`);
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <Navbar activeTab="coin-list" />
      <TextField
        label="Search Crypto"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchInput}
        onChange={handleSearchChange}
        sx={{
          backgroundColor: "white",
          border: "10px solid white",
        }}
      />
      <Grid container spacing={2} style={{ marginTop: "2vh" }}>
        {filteredCoins.map((coin) => (
          <Grid item key={coin.id} xs={12} sm={6} md={3}>
            <Card
              onClick={() => handleCardClick(coin.id)}
              sx={{
                color: "black",
                height: "100%",
                position: "relative",
                "&:hover": {
                  boxShadow: (theme) =>
                    `0 0 5px 10px ${theme.palette.info.main}`,
                },
                transition: "box-shadow 0.3s ease-in-out",
                border: searchInput
                  ? coin.name.toLowerCase().includes(searchInput.toLowerCase())
                    ? "2px solid rgba(0, 255, 0, 0.7)" // Neon green border for matching cards
                    : "2px solid transparent"
                  : "2px solid transparent",
                borderRadius: "10px",
              }}
            >
              <CardMedia
                component="img"
                height="100vh"
                image={coin.image}
                alt={coin.name}
                style={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {coin.name}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  {coin.symbol.toUpperCase()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CoinList;
