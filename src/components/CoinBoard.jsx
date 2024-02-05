import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Grid, Paper, Typography, Select, MenuItem } from "@mui/material";
import HighchartsReact from "highcharts-react-official";
import highchartsConfig from "./HighchartsConfig"; // Ensure you have the correct import path

const numberFormat = (number) => {
  return +(number + "").slice(0, 7);
};

const ChangePct = styled(Typography)(({ theme, red }) => ({
  color: red ? "red" : "green",
}));

const TicketPrice = styled(Typography)({
  fontSize: "1.5rem",
});

const CoinTile = styled(Paper)(({ theme }) => ({
  padding: "10px",
  "&:hover": {
    cursor: "pointer",
    boxShadow: theme.shadows[6], // Green shadow on hover
  },
}));

const CoinGrid = styled(Grid)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridGap: "15px",
  marginTop: "15px",
}));

const ChartGrid = styled(Grid)(({ theme }) => ({
  display: "grid",
  marginTop: "14px",
  gridGap: "15px",
  gridTemplateColumns: "1fr 3fr",
}));

const PaddingBlue = styled.div`
  padding: 5px;
`;

const ChartSelect = styled(Select)({
  float: "right",
  fontSize: "1rem",
  backgroundColor: "#f4f7fd", // Use your preferred background color
  color: "#1163c9",
  border: "1px solid",
});

const CoinBoard = () => {
  const [prices, setPrices] = useState([]); // Replace with your actual price data
  const [currentFavorite, setCurrentFavorite] = useState(""); // Replace with your actual favorite data
  const [historical, setHistorical] = useState(null);
  const [timeInterval, setTimeInterval] = useState("months"); // Default time interval

  useEffect(() => {
    // Fetch prices, favorites, and historical data here and update state
    // Example: fetchPrices().then(data => setPrices(data));
  }, []); // Adjust dependencies based on your data fetching logic

  const fetchHistorical = () => {
    // Implement your logic to fetch historical data based on currentFavorite and timeInterval
    // Update the historical state
  };

  return (
    <div>
      <CoinGrid>
        {prices.map((price, index) => {
          const sym = Object.keys(price)[0];
          const data = price[sym]["USD"];

          return index < 5 ? (
            <CoinTile
              key={index}
              onClick={() => {
                setCurrentFavorite(sym);
                setHistorical(null);
                fetchHistorical();
              }}
            >
              <div>{sym}</div>
              <ChangePct red={data.CHANGEPCT24HOUR < 0}>
                {numberFormat(data.CHANGEPCT24HOUR)}%
              </ChangePct>
              <TicketPrice>${numberFormat(data.PRICE)}</TicketPrice>
            </CoinTile>
          ) : (
            <CoinTile key={index} onClick={() => setCurrentFavorite(sym)}>
              <div>{sym}</div>
              <ChangePct red={data.CHANGEPCT24HOUR < 0}>
                {numberFormat(data.CHANGEPCT24HOUR)}%
              </ChangePct>
              <TicketPrice>${numberFormat(data.PRICE)}</TicketPrice>
            </CoinTile>
          );
        })}
      </CoinGrid>

      <ChartGrid>
        <PaddingBlue>
          {currentFavorite && (
            <>
              <h2 style={{ textAlign: "center" }}>{currentFavorite}</h2>
              {/* Replace the image source with your actual source */}
              <img
                alt={currentFavorite}
                style={{ height: "200px", display: "block", margin: "auto" }}
                src={`http://cryptocompare.com/${currentFavorite}.png`}
              />
            </>
          )}
        </PaddingBlue>
        <PaddingBlue>
          <ChartSelect
            value={timeInterval}
            onChange={(e) => {
              setTimeInterval(e.target.value);
              setHistorical(null);
              fetchHistorical();
            }}
          >
            <MenuItem value="days">Days</MenuItem>
            <MenuItem value="weeks">Weeks</MenuItem>
            <MenuItem value="months">Months</MenuItem>
          </ChartSelect>
          {historical ? (
            <ReactHighcharts config={highchartsConfig.call(this)} />
          ) : (
            <div>Loading historical data...</div>
          )}
        </PaddingBlue>
      </ChartGrid>
    </div>
  );
};

export default CoinBoard;
