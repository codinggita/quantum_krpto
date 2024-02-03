import React, { useRef, useState } from "react";
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

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={Vid}
        width="100%"
        height="100%"
        playing={!videoEnded}
        controls={false}
        muted={true}
        onEnded={handleVideoEnd}
      />
    </div>
  );
}
