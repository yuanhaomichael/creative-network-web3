import React from "react";

function VideoEmbed({videoLink}) {
  return (
    <div className="mobileHidden">
      <iframe
        title={"interactive"}
        src={videoLink}
        width="480"
        height="270"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default VideoEmbed;
