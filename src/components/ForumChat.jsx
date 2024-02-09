import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [comments, setComments] = useState([]);
  const [votedComments, setVotedComments] = useState([]);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const location = useLocation();
  const topicTitle = location.state?.topicTitle || "Quantum Krypto";
  console.log(topicTitle);

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

  useEffect(() => {
    // Check login status when the component mounts
    // You can replace this with actual logic to check if the user is logged in
    setIsLoggedIn(/* Replace with your actual login check logic */ true);
  }, []);

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
    // Check if the user is logged in
    if (!isLoggedIn) {
      // Show popup notifying the user to log in
      setAlert({
        open: true,
        message: "Please log in to add a comment.",
        severity: "error",
      });

      // Redirect to the login page
      // You may need to adjust the route based on your project structure
      navigate("/login");
      return;
    }

    // If the user is logged in, proceed with adding the comment
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
          backgroundColor: "#637a96",
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
          {topicTitle}
        </Typography>
        <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
          <div>
            {comments.map((comment) => (
              <div
                key={comment.commentId}
                style={{ marginBottom: "10px", display: "flex" }}
              >
                <div style={{ marginRight: "10px" }}>
                  <Avatar>S</Avatar>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    textAlign: "left",
                    margin: "15px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    style={{
                      color: "brown",
                      fontWeight: "bold",
                    }}
                  >
                    {comment.user}
                  </Typography>
                  <Typography style={{ textAlign: "left" }}>
                    {comment.text}
                  </Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
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
                    onClick={() => handleDeleteComment(comment.commentId)}
                    color="warning"
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "1px solid red",
                      borderRadius: "0px",
                    }}
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
              style={{
                height: "7.4vh",
                marginTop: "1vh",
              }}
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
