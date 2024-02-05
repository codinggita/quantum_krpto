import React from "react";
import { styled } from "@mui/system";
import { Grid, Paper, IconButton, Typography } from "@mui/material";

const CoinGrid = styled(Grid)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  gridGap: "15px",
  marginTop: "15px",
}));

const CoinTile = styled(Paper)(({ theme }) => ({
  padding: "10px",
  "&:hover": {
    cursor: "pointer",
    boxShadow: theme.shadows[6], // Green shadow on hover
  },
}));

const CoinHeaderGrid = styled(Grid)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
}));

const CoinSymbol = styled(Typography)(({ theme }) => ({
  justifySelf: "right",
}));

const DeleteIcon = styled(IconButton)(({ theme }) => ({
  justifySelf: "right",
  display: "none",
  "&:hover": {
    color: "red",
  },
  [`${CoinTile}:hover &`]: {
    display: "block",
  },
}));

const CoinList = ({
  favorites,
  coinKeys,
  removeCoinFromFavorites,
  addCoinToFavorites,
}) => {
  return (
    <CoinGrid>
      {coinKeys &&
        coinKeys.map((coinKey, index) => (
          <CoinTile
            key={index}
            onClick={
              favorites
                ? () => removeCoinFromFavorites(coinKey)
                : () => addCoinToFavorites(coinKey)
            }
          >
            <CoinHeaderGrid>
              <Typography>{coinKey.CoinName}</Typography>
              {favorites ? (
                <DeleteIcon>X</DeleteIcon>
              ) : (
                <CoinSymbol>{coinKey.Symbol}</CoinSymbol>
              )}
            </CoinHeaderGrid>
            <img
              style={{ height: "50px" }}
              alt="coin icon"
              src={`http://cryptocompare.com/${coinKey.ImageUrl}`}
            />
          </CoinTile>
        ))}
    </CoinGrid>
  );
};

export default CoinList;
