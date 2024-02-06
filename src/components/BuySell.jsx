import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Typography, Button, Select, MenuItem, Paper } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";

export default function BuySell() {
  const { state } = useLocation();
  const { cardId } = useParams();
  const [cardData, setCardData] = useState(state?.cardData || {});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleBuy = () => {
    alert(`Buy ${quantity} units of ${cardData.title}`);
  };

  // const handleSell = () => {
  //   alert(`Sell ${quantity} units of ${cardData.title}`);
  // };

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/card-details/${cardId}`);
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.error("Error fetching card details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!cardData.id) {
      fetchCardDetails();
    }
  }, [cardId, cardData.id]);

  return (
    <>
      <Navbar activeTab="nft-bazaar" />
      <div
        style={{
          padding: 30,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Card on the left side */}
        <div
          style={{
            flex: "1",
            marginRight: "10px",
            position: "relative",
          }}
        >
          <img
            src={cardData.image}
            alt={cardData.title}
            style={{
              width: "50%",
              borderRadius: "10px",
              height: "50vh",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "3px",
              left: "14px",
              marginLeft: "23%",
              borderRadius: "10px",
              width: "47.5%",
              background: "rgba(0, 0, 0, 0.2)",
              padding: "10px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {cardData.title}
          </div>
        </div>

        {/* Details on the right side */}
        <div style={{ flex: "1" }}>
          <Paper
            style={{
              padding: 20,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            {loading ? (
              <Typography variant="body1">Loading...</Typography>
            ) : (
              <>
                <Typography
                  variant="body1"
                  style={{
                    color: "white",
                    border: "1px solid white",
                    padding: "10px",
                    marginBottom: "20px",
                  }}
                >
                  {cardData.description}
                </Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6" style={{ color: "white" }}>
                    Volume: {cardData.volume}
                  </Typography>
                  <Typography variant="h6" style={{ color: "white" }}>
                    Price: {cardData.price}
                  </Typography>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6" style={{ color: "white" }}>
                    USD:{" "}
                    {parseInt(cardData.usd).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </Typography>
                  <Typography variant="h6" style={{ color: "white" }}>
                    Currecny: {cardData.currency}
                  </Typography>
                </div>

                {/* Quantity selection */}
                <div style={{ marginTop: "20px" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ marginBottom: "10px", color: "white" }}
                  >
                    Quantity:
                  </Typography>
                  <Select
                    value={quantity}
                    onChange={handleQuantityChange}
                    style={{
                      width: "80px",
                      marginRight: "20px",
                      color: "white",
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <MenuItem key={num} value={num}>
                        {num}
                      </MenuItem>
                    ))}
                  </Select>

                  {/* Buy button */}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleBuy}
                  >
                    Buy
                  </Button>
                </div>
              </>
            )}
          </Paper>
        </div>
      </div>
    </>
  );
}
