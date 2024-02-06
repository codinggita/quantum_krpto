import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import {
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  Avatar,
  Divider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const ForumChat = () => {
  const { id } = useParams();
  const topicId = parseInt(id);

  const [comments, setComments] = useState([
    { id: 1, user: "User1", text: "Comment 1", upvotes: 5, downvotes: 2 },
    { id: 2, user: "User2", text: "Comment 2", upvotes: 8, downvotes: 1 },
    // Add more comments as needed
  ]);

  const handleUpvote = (commentId) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId
        ? { ...comment, upvotes: comment.upvotes + 1 }
        : comment
    );
    setComments(updatedComments);
  };

  const handleDownvote = (commentId) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId
        ? { ...comment, downvotes: comment.downvotes + 1 }
        : comment
    );
    setComments(updatedComments);
  };

  const handleAddComment = (newCommentText) => {
    const newComment = {
      id: comments.length + 1,
      user: "NewUser", // You can replace this with the actual username
      text: newCommentText,
      upvotes: 0,
      downvotes: 0,
    };
    setComments([...comments, newComment]);
  };

  return (
    <>
      <Navbar activeTab="quantum-forum" />
      <div
        style={{
          padding: "20px",
          width: "92vw",
          height: "70vh",
          backgroundColor: "#333",
          marginBottom: "15vh",
          marginTop: "6vh",
          marginLeft: "2vw",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          style={{ color: "white", marginBottom: "20px" }}
        >
          Forum Chat - Topic {topicId}
        </Typography>
        <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
          <div>
            {comments.map((comment) => (
              <div key={comment.id} style={{ marginBottom: "10px" }}>
                <Avatar style={{ marginRight: "10px" }}>U</Avatar>
                <div>
                  <Typography variant="subtitle1">{comment.user}</Typography>
                  <Typography style={{ textAlign: "left" }}>
                    {comment.text}
                  </Typography>
                  <IconButton
                    onClick={() => handleUpvote(comment.id)}
                    color="primary"
                  >
                    <ThumbUpIcon />
                    {comment.upvotes}
                  </IconButton>
                  <IconButton
                    onClick={() => handleDownvote(comment.id)}
                    color="secondary"
                  >
                    <ThumbDownIcon />
                    {comment.downvotes}
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
          <Divider style={{ margin: "20px 0" }} />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newCommentText = e.target.comment.value;
              handleAddComment(newCommentText);
              e.target.comment.value = "";
            }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <TextField
              name="comment"
              label="Add a Comment"
              variant="outlined"
              fullWidth
              margin="normal"
              style={{ flex: 1 }}
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              color="primary"
            >
              Send
            </Button>
          </form>
        </Paper>
      </div>
      <Footer />
    </>
  );
};

export default ForumChat;
