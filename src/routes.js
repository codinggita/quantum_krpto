const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// NFT Marketplace --------------------------------------------------------------------------------------------

let nftList = [
  {
    id: "1",
    name: "Golden Phoenix NFT",
    description: "A stunning digital art piece featuring a golden phoenix.",
    owner: "Sukhad Sharma",
    price: 10.99,
    currency: "ETH",
    category: "Digital Art",
    tags: ["Phoenix", "Digital", "Art"],
  },
  {
    id: "2",
    name: "Galactic Dreams",
    description:
      "Embark on a cosmic journey with this mesmerizing digital artwork.",
    owner: "Alice Johnson",
    price: 8.75,
    currency: "BTC",
    category: "Space",
    tags: ["Galaxy", "Dreams", "Art"],
  },
  {
    id: "3",
    name: "Abstract Harmony",
    description:
      "Explore the beauty of abstract shapes and colors in this harmonious NFT.",
    owner: "Bob Anderson",
    price: 15.5,
    currency: "ETH",
    category: "Abstract",
    tags: ["Harmony", "Abstract", "Art"],
  },
  {
    id: "4",
    name: "Mystical Forest",
    description:
      "Step into a mystical world with this enchanting digital representation of a forest.",
    owner: "Elena Martinez",
    price: 12.25,
    currency: "BTC",
    category: "Nature",
    tags: ["Mystical", "Forest", "Art"],
  },
  {
    id: "5",
    name: "Cyberpunk Cityscape",
    description:
      "Immerse yourself in the futuristic vibes of this cyberpunk cityscape NFT.",
    owner: "David Chen",
    price: 18.99,
    currency: "ETH",
    category: "Cyberpunk",
    tags: ["Cityscape", "Cyberpunk", "Art"],
  },
];

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

// PATCH to update specific details of NFT by ID
app.patch("/api/nfts/:id", (req, res) => {
  const nftId = req.params.id;
  const updatedFields = req.body;

  // Find the index of the NFT in the array
  const index = nftList.findIndex((nft) => nft.id === nftId);

  if (index !== -1) {
    // Update the specified fields of the NFT at the found index
    Object.assign(nftList[index], updatedFields);

    res.json({
      message: `Updated specific details of NFT ${nftId}`,
      updatedNft: nftList[index],
    });
  } else {
    res.status(404).json({ message: "NFT not found" });
  }
});

// Quantum Portfolio --------------------------------------------------------------------------------------------

let portfolios = [
  {
    id: "1",
    name: "Crypto Enthusiast Portfolio",
    description: "A diversified portfolio of various cryptocurrencies.",
    owner: "Sukhad Sharma",
    assets: [
      {
        crypto: "BTC",
        quantity: 1.75,
      },
      {
        crypto: "ETH",
        quantity: 3.5,
      },
      {
        crypto: "ADA",
        quantity: 500,
      },
      {
        crypto: "LINK",
        quantity: 50,
      },
    ],
  },
  {
    id: "2",
    name: "Tech Investor Portfolio",
    description: "Investing in technology-driven cryptocurrencies.",
    owner: "Alice Johnson",
    assets: [
      {
        crypto: "ETH",
        quantity: 2.0,
      },
      {
        crypto: "DOT",
        quantity: 100,
      },
      {
        crypto: "UNI",
        quantity: 25,
      },
      {
        crypto: "DOGE",
        quantity: 5000,
      },
    ],
  },
  {
    id: "3",
    name: "Stablecoin Holdings",
    description: "A portfolio focused on stablecoins for reduced volatility.",
    owner: "Mark Anderson",
    assets: [
      {
        crypto: "USDT",
        quantity: 1000,
      },
      {
        crypto: "USDC",
        quantity: 500,
      },
      {
        crypto: "DAI",
        quantity: 250,
      },
    ],
  },
];

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

// Bit Buzz --------------------------------------------------------------------------------------------

let bitBuzzArticles = [
  {
    id: "1",
    title: "The Rise of Cryptocurrencies",
    content:
      "Explore the fascinating journey of cryptocurrencies and their impact on the financial landscape.",
    author: "Sukhad Sharma",
    date: "2024-01-15",
  },
  {
    id: "2",
    title: "Decoding Blockchain Technology",
    content:
      "Delve into the intricacies of blockchain technology and its revolutionary applications beyond cryptocurrencies.",
    author: "Sukhad Sharma",
    date: "2024-01-16",
  },
  {
    id: "3",
    title: "Crypto Market Trends for 2024",
    content:
      "Stay ahead with insights into the latest trends shaping the cryptocurrency market in the year 2024.",
    author: "Sukhad Sharma",
    date: "2024-01-17",
  },
];

// GET list of Bit Buzz articles
app.get("/api/bit-buzz", (req, res) => {
  res.json(bitBuzzArticles);
});

// GET Bit Buzz article by ID
app.get("/api/bit-buzz/:id", (req, res) => {
  const articleId = req.params.id;
  const foundArticle = bitBuzzArticles.find(
    (article) => article.id === articleId
  );
  if (foundArticle) {
    res.json(foundArticle);
  } else {
    res.status(404).json({ message: "Bit Buzz article not found" });
  }
});

// POST to create a new Bit Buzz article
app.post("/api/bit-buzz", (req, res) => {
  const newArticle = req.body;
  bitBuzzArticles.push(newArticle);
  res.json({ message: "Bit Buzz article added successfully", newArticle });
});

// PUT to update Bit Buzz article by ID
app.put("/api/bit-buzz/:id", (req, res) => {
  const articleId = req.params.id;
  const updatedArticle = req.body;

  // Find the index of the article in the array
  const index = bitBuzzArticles.findIndex(
    (article) => article.id === articleId
  );

  if (index !== -1) {
    // Update the article at the found index
    bitBuzzArticles[index] = updatedArticle;
    res.json({
      message: `Updated details of Bit Buzz article ${articleId}`,
      updatedArticle,
    });
  } else {
    res.status(404).json({ message: "Bit Buzz article not found" });
  }
});

// Delete Bit Buzz article by ID
app.delete("/api/bit-buzz/:id", (req, res) => {
  const articleId = req.params.id;

  // Remove the article from the array
  bitBuzzArticles = bitBuzzArticles.filter(
    (article) => article.id !== articleId
  );

  res.json({ message: `Deleted Bit Buzz article ${articleId}` });
});

// PATCH to update specific details of Bit Buzz article by ID
app.patch("/api/bit-buzz/:id", (req, res) => {
  const articleId = req.params.id;
  const updatedFields = req.body;

  // Find the index of the article in the array
  const index = bitBuzzArticles.findIndex(
    (article) => article.id === articleId
  );

  if (index !== -1) {
    // Update the specified fields of the article at the found index
    Object.assign(bitBuzzArticles[index], updatedFields);

    res.json({
      message: `Updated specific details of Bit Buzz article ${articleId}`,
      updatedArticle: bitBuzzArticles[index],
    });
  } else {
    res.status(404).json({ message: "Bit Buzz article not found" });
  }
});

// Quantum Forum --------------------------------------------------------------------------------------------

let quantumForumPosts = [
  {
    id: "1",
    title: "Introduction to Quantum Computing",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Alice",
    date: "2024-03-01",
  },
  {
    id: "2",
    title: "Blockchain Technology: Decentralizing the Future",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Bob",
    date: "2024-03-05",
  },
  {
    id: "3",
    title: "Crypto Market Trends in 2024",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Charlie",
    date: "2024-03-10",
  },
];

// GET list of Quantum Forum posts
app.get("/api/quantum-forum", (req, res) => {
  res.json(quantumForumPosts);
});

// GET Quantum Forum post by ID
app.get("/api/quantum-forum/:id", (req, res) => {
  const postId = req.params.id;
  const foundPost = quantumForumPosts.find((post) => post.id === postId);
  if (foundPost) {
    res.json(foundPost);
  } else {
    res.status(404).json({ message: "Quantum Forum post not found" });
  }
});

// POST to create a new Quantum Forum post
app.post("/api/quantum-forum", (req, res) => {
  const newPost = req.body;
  quantumForumPosts.push(newPost);
  res.json({ message: "Quantum Forum post added successfully", newPost });
});

// PUT to update Quantum Forum post by ID
app.put("/api/quantum-forum/:id", (req, res) => {
  const postId = req.params.id;
  const updatedPost = req.body;

  // Find the index of the post in the array
  const index = quantumForumPosts.findIndex((post) => post.id === postId);

  if (index !== -1) {
    // Update the post at the found index
    quantumForumPosts[index] = updatedPost;
    res.json({
      message: `Updated details of Quantum Forum post ${postId}`,
      updatedPost,
    });
  } else {
    res.status(404).json({ message: "Quantum Forum post not found" });
  }
});

// Delete Quantum Forum post by ID
app.delete("/api/quantum-forum/:id", (req, res) => {
  const postId = req.params.id;

  // Remove the post from the array
  quantumForumPosts = quantumForumPosts.filter((post) => post.id !== postId);

  res.json({ message: `Deleted Quantum Forum post ${postId}` });
});

// PATCH to update specific details of Quantum Forum post by ID
app.patch("/api/quantum-forum/:id", (req, res) => {
  const postId = req.params.id;
  const updatedFields = req.body;

  // Find the index of the post in the array
  const index = quantumForumPosts.findIndex((post) => post.id === postId);

  if (index !== -1) {
    // Update the specified fields of the post at the found index
    Object.assign(quantumForumPosts[index], updatedFields);

    res.json({
      message: `Updated specific details of Quantum Forum post ${postId}`,
      updatedPost: quantumForumPosts[index],
    });
  } else {
    res.status(404).json({ message: "Quantum Forum post not found" });
  }
});

// ----------------------------------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
