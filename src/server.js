const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Connect to MongoDB using your Atlas connection string
mongoose
  .connect(
    "mongodb+srv://SCORLEOs773:mPCn3UXO4ewiovLj@cluster0.ghdrk.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define a MongoDB schema for comments
const commentSchema = new mongoose.Schema({
  user: String,
  text: String,
  upvotes: Number,
  downvotes: Number,
  topicId: Number,
});

// Define a MongoDB model for comments
const Comment = mongoose.model("Comment", commentSchema);

app.use(bodyParser.json());

// GET endpoint to fetch comments for a specific topic
app.get("/api/comments/:topicId", async (req, res) => {
  const topicId = req.params.topicId;

  try {
    const comments = await Comment.find({ topicId: topicId });
    res.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST endpoint to add a new comment for a specific topic
app.post("/api/comments/:topicId", async (req, res) => {
  console.log("Received POST request");
  const topicId = req.params.topicId;
  const { user, text, upvotes, downvotes } = req.body;

  const newComment = new Comment({
    user,
    text,
    upvotes,
    downvotes,
    topicId,
  });

  try {
    const savedComment = await newComment.save();
    console.log("Comment saved:", savedComment);
    res.json(savedComment);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PUT endpoint to upvote a comment
app.put("/api/comments/:commentId/upvote", async (req, res) => {
  const commentId = req.params.commentId;

  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { $inc: { upvotes: 1 } },
      { new: true }
    );
    res.json(updatedComment);
  } catch (error) {
    console.error("Error upvoting comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PUT endpoint to downvote a comment
app.put("/api/comments/:commentId/downvote", async (req, res) => {
  const commentId = req.params.commentId;

  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { $inc: { downvotes: 1 } },
      { new: true }
    );
    res.json(updatedComment);
  } catch (error) {
    console.error("Error downvoting comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE endpoint to delete a comment
app.delete("/api/comments/:commentId", async (req, res) => {
  const commentId = req.params.commentId;

  // Check if the commentId is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(commentId)) {
    return res.status(400).json({ error: "Invalid commentId format" });
  }

  try {
    await Comment.findByIdAndDelete(commentId);
    res.json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
