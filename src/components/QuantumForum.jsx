import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const QuantumForum = () => {
  // Replace this data with your actual forum topics
  const forumTopics = [
    { id: 1, title: "Topic 1", author: "User1" },
    { id: 2, title: "Topic 2", author: "User2" },
    // Add more topics as needed
  ];

  return (
    <div>
      <Navbar activeTab="quantum-forum" />
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          marginTop: "6vh",
          marginBottom: "20vh",
          color: "white",
          borderRadius: "20px",
          marginLeft: "4vh",
          marginRight: "4vh",
          background: "rgba(255, 160, 255, 0.2)", // Orangeish background
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white" }}>Quantum Forum - Quantum Topics</h1>
        <TableContainer style={{ width: "90%", marginTop: "20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    color: "orange", // Orange color
                    fontSize: "18px", // Bigger font
                    textTransform: "uppercase", // Capitalize
                    fontWeight: "bold", // Bold
                  }}
                >
                  S.No
                </TableCell>
                <TableCell
                  style={{
                    color: "orange", // Orange color
                    fontSize: "18px", // Bigger font
                    textTransform: "uppercase", // Capitalize
                    fontWeight: "bold", // Bold
                  }}
                >
                  Title
                </TableCell>
                <TableCell
                  style={{
                    color: "orange", // Orange color
                    fontSize: "18px", // Bigger font
                    textTransform: "uppercase", // Capitalize
                    fontWeight: "bold", // Bold
                  }}
                >
                  Author
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {forumTopics.map((topic, index) => (
                <TableRow key={topic.id}>
                  <TableCell style={{ color: "white" }}>{index + 1}</TableCell>
                  <TableCell>
                    <Link
                      to={`/quantum-forum/${topic.title}`}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {topic.title}
                    </Link>
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    {topic.author}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Footer />
    </div>
  );
};

export default QuantumForum;
