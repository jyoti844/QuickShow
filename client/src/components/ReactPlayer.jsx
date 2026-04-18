import React from "react";
const ReactPlayer = ({ url, controls }) => {
  const videoId = new URL(url).searchParams.get("v");

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?controls=${controls ? 1 : 0}`}
      title="YouTube trailer"
      allowFullScreen
      className="absolute top-0 left-0 w-full h-full"
      style={{ border: 0 }}
    />
  );
};

export default ReactPlayer;
