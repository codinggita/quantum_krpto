import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";

export default function Open() {
  const playerRef = useRef(null);
  const history = useHistory();
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    history.push("/");
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url="your-video-url.mp4"
        width="100%"
        height="100%"
        playing={!videoEnded}
        controls
        onEnded={handleVideoEnd}
      />
    </div>
  );
}
