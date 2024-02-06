const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/nfts/:id", async (req, res) => {
  const { id } = req.params;
  const url = `https://api.coingecko.com/api/v3/nfts/${id}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-CoinGecko-API-Key": "CG-TBUbnGXu24EmUsHaAsJ7Cr9X",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error in the /api/nfts/:id route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello, this is the Quantum Krypto server!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
