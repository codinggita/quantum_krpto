const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// NFT Marketplace --------------------------------------------------------------------------------------------

let nftList = [];

// GET list of NFTs
app.get("/api/nfts", (req, res) => {
  res.json(nftList);
});

// GET NFT details by ID
app.get("/api/nfts/:id", (req, res) => {
  const nftId = req.params.id;
  const foundNft = nftList.find((nft) => nft.id === nftId);
  if (foundNft) {
    res.json(foundNft);
  } else {
    res.status(404).json({ message: "NFT not found" });
  }
});

// POST to create a new NFT
app.post("/api/nfts", (req, res) => {
  const newNft = req.body;
  nftList.push(newNft);
  res.json({ message: "NFT added successfully", newNft });
});

// PUT to update NFT details by ID
app.put("/api/nfts/:id", (req, res) => {
  const nftId = req.params.id;
  const updatedNft = req.body;

  // Find the index of the NFT in the array
  const index = nftList.findIndex((nft) => nft.id === nftId);

  if (index !== -1) {
    // Update the NFT at the found index
    nftList[index] = updatedNft;
    res.json({ message: `Updated details of NFT ${nftId}`, updatedNft });
  } else {
    res.status(404).json({ message: "NFT not found" });
  }
});

// Delete NFT by ID
app.delete("/api/nfts/:id", (req, res) => {
  const nftId = req.params.id;

  // Remove the NFT from the array
  nftList = nftList.filter((nft) => nft.id !== nftId);

  res.json({ message: `Deleted NFT ${nftId}` });
});

// Quantum Portfolio --------------------------------------------------------------------------------------------

let portfolios = [];

// GET - Get all portfolios
app.get("/api/portfolios", (req, res) => {
  res.json(portfolios);
});

// GET - Get portfolio by ID
app.get("/api/portfolios/:id", (req, res) => {
  const portfolioId = req.params.id;
  const portfolio = portfolios.find((p) => p.id === portfolioId);
  if (!portfolio) {
    return res.status(404).json({ error: "Portfolio not found" });
  }
  res.json(portfolio);
});

// POST - Create a new portfolio
app.post("/api/portfolios", (req, res) => {
  const newPortfolio = req.body;
  portfolios.push(newPortfolio);
  res.status(201).json(newPortfolio);
});

// PUT - Update portfolio details by ID
app.put("/api/portfolios/:id", (req, res) => {
  const portfolioId = req.params.id;
  const updatedPortfolio = req.body;
  // Logic to update the portfolio in the database
  res.json(updatedPortfolio);
});

// DELETE - Delete portfolio by ID
app.delete("/api/portfolios/:id", (req, res) => {
  const portfolioId = req.params.id;
  // Logic to delete the portfolio from the database
  res.json({ message: `Delete portfolio ${portfolioId}` });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
