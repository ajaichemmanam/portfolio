"use client";
import ReactPlayer from "react-player/lazy";

const VideoPlayer = ({ url }) => {
  return (
    <ReactPlayer
      url={url}
      playing={true}
      loop={true}
      width="100%"
      height="100%"
      controls={true}
    />
  );
};

export default VideoPlayer;
