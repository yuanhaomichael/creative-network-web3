import React from "react";

function VideoEmbed90({ videoLink, width, height }) {
  return (
    <iframe
      title="portfolio"
      className="generalEmbed"
      src={videoLink}
      width={width || "auto"}
      height={height || "270"}
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
    ></iframe>
  );
}

export default VideoEmbed90;
