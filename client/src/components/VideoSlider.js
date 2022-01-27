import React, { Component, useEffect, useState } from "react";
import icon from "../assets/Triangle.svg";
import thumb_icon from "../assets/Triangle_thumb.svg";

function VideoSlider(props) {
  console.log(props,'----props');
  const [change, setChange] = useState(props.data[0]?.embedLink)
  const [cahngeTitle, setChanegTitle] = useState(props.data[0]?.title)
  const [changeClinet, setChangeClient] = useState(props.data[0]?.client)
  const changeMode = (src, title, client) => {
    setChange(src);
    setChanegTitle(title);
    setChangeClient(client);
  };
 
  return (
    <>
      <div className="slides_data">
        <div className="main_video_cover">
          <iframe
            src={change}
            frameborder="0"
            width="100%"
            height="100%"
            allow="autoplay"
            allowfullscreen
          ></iframe>
          {/* <img className="play" src={icon} alt="noIcons" /> */}
        </div>

        <h4 className="mt-3 mb-4">{changeClinet}: {cahngeTitle}</h4>
        <div className="row_of_child">
          {props.embed.map((emb,ind) => {
              let vimeoLink = emb.embedLink
              let url = new URL(vimeoLink);
              let videoIds = url.pathname.substring(7);
              return (
                <div key={ind}>
                  <button
                    onClick={() => changeMode(emb.embedLink, emb.title, emb.client)}
                    style={{
                      border: "0",
                      marginTop: "30px",
                      marginRight: "18px",
                    }}
                  >
                      <img
                        src={`https://vumbnail.com/${videoIds}.jpg`}
                        alt="icon"
                        className="thumbnail"
                      />
                    <img src={thumb_icon} alt="play" className="thumb_icon"/>
                  </button>
                  <h5>{emb.title}</h5>
                </div>
              );
          })}
        </div>
      </div>
    </>
  );
}

export default VideoSlider;
