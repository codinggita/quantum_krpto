import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";
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

  const [comments, setComments] = useState([]);
  const [votedComments, setVotedComments] = useState([]);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/comments/${topicId}`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [topicId]);

  const handleUpvote = async (commentId) => {
    if (!votedComments.includes(commentId)) {
      try {
        await axios.put(`/api/comments/${commentId}/upvote`);
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment.commentId === commentId
              ? { ...comment, upvotes: comment.upvotes + 1 }
              : comment
          )
        );
        setVotedComments((prevVotedComments) => [
          ...prevVotedComments,
          commentId,
        ]);
      } catch (error) {
        console.error("Error upvoting comment:", error);
      }
    } else {
      console.log("User already voted for this comment");
      // Optionally, you can provide user feedback here
    }
    setAlert({
      open: true,
      message: "Upvoted successfully!",
      severity: "success",
    });
  };

  const handleDownvote = async (commentId) => {
    if (!votedComments.includes(commentId)) {
      try {
        await axios.put(`/api/comments/${commentId}/downvote`);
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment.commentId === commentId
              ? { ...comment, downvotes: comment.downvotes + 1 }
              : comment
          )
        );
        setVotedComments((prevVotedComments) => [
          ...prevVotedComments,
          commentId,
        ]);
      } catch (error) {
        console.error("Error downvoting comment:", error);
      }
    } else {
      console.log("User already voted for this comment");
      // Optionally, you can provide user feedback here
    }
    setAlert({
      open: true,
      message: "Downvoted successfully!",
      severity: "success",
    });
  };

  const handleAddComment = async (newCommentText) => {
    try {
      const response = await axios.post(`/api/comments/${topicId}`, {
        user: "NewUser", // Replace with the actual username
        text: newCommentText,
        upvotes: 0,
        downvotes: 0,
      });

      setComments((prevComments) => [...prevComments, response.data]);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
    setAlert({
      open: true,
      message: "Comment posted successfully!",
      severity: "success",
    });
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`/api/comments/${commentId}`);
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.commentId !== commentId)
      );
    } catch (error) {
      console.error("Error deleting comment:", error.message);
    }
    setAlert({
      open: true,
      message: "Comment deleted successfully!",
      severity: "success",
    });
  };

  const handleCloseAlert = () => {
    setAlert({ open: false, message: "", severity: "" });
  };

  return (
    <>
      <Navbar activeTab="quantum-forum" />
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseAlert} severity={alert.severity}>
          <AlertTitle>
            {alert.severity === "success" ? "Success" : "Error"}
          </AlertTitle>
          {alert.message}
        </Alert>
      </Snackbar>
      <div
        style={{
          padding: "20px",
          width: "92vw",
          height: "70vh",
          backgroundColor: "#333",
          marginBottom: "15%",
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
              <div key={comment.commentId} style={{ marginBottom: "10px" }}>
                <Avatar style={{ marginRight: "10px" }}>U</Avatar>
                <div>
                  <Typography variant="subtitle1">{comment.user}</Typography>
                  <Typography style={{ textAlign: "left" }}>
                    {comment.text}
                  </Typography>
                  <IconButton
                    onClick={() => handleUpvote(comment.commentId)}
                    color="primary"
                  >
                    <ThumbUpIcon />
                    {comment.upvotes}
                  </IconButton>
                  <IconButton
                    onClick={() => handleDownvote(comment.commentId)}
                    color="secondary"
                  >
                    <ThumbDownIcon />
                    {comment.downvotes}
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      console.log(
                        "Deleting comment with id:",
                        comment.commentId
                      );
                      handleDeleteComment(comment.commentId);
                    }}
                    color="secondary"
                  >
                    Delete
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
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default ForumChat;
