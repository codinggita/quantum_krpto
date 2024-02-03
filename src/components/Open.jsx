import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import Vid from "../assets/open cut.mp4";

export default function Open() {
  const playerRef = useRef(null);
  const navigate = useNavigate();
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    navigate("/quantumhub");
  };

  const handleSkip = () => {
    setVideoEnded(true);
    navigate("/quantumhub");
  };

  const handleKeyPress = (event) => {
    handleSkip();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <ReactPlayer
        ref={playerRef}
        url={Vid}
        width="100vw"
        height="100vh"
        playing={!videoEnded}
        controls={false}
        muted={true}
        onEnded={handleVideoEnd}
      />
      {!videoEnded && (
        <button
          onClick={handleSkip}
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Skip Video
        </button>
      )}
    </div>
  );
}
