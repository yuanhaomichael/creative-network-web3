import React from "react";

function VideoEmbedMobile({videoLink}) {
  return (
    <div className="regularHidden">
      <iframe
        title="interactive"
        src={videoLink}
        width="300"
        height="169"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default VideoEmbedMobile;
