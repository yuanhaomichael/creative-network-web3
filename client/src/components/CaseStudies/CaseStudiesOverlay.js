import React from "react";
import VideoEmbed from "./../VideoEmbed";
import "./CaseStudiesOverlay.scss";

function CaseStudiesOverlay(props) {
  console.log(props);
  return (
    <div className="container">
      <div className="section1">
        <div className="case-video-container">
          <VideoEmbed
            videoLink={props.videoLink || props?.data?.videoLink}
            className="video"
          />
        </div>

        <em>
          <h4 className="font-weight-bold mb-4 video-name">
            {props.videoName || props?.data?.company}
          </h4>
        </em>
      </div>

      <div className="left-border mb-5" style={{ marginTop: "2em", zIndex: 1 }}>
        <h3 className="mb-3">The Challenge</h3>
        <em className="gray">{props.challengeText || props?.data?.challenge}</em>
      </div>
      <div className="mb-5" style={{ marginTop: "2em", zIndex: 1 }}>
        <h3 className="mb-3">The Story</h3>

        {props.storyText || props?.data?.storyText}
    
      </div>
      <div>
        <div className="mb-2 p-3 minibox">
          <strong className="h3 text-weight-bold">
            {props.numCreatives || props?.data?.creatives}
          </strong>
          <div className="line-separator" />
          LemonTree <br /> Creatives
        </div>
        <div className="mb-2 p-3 minibox">
          <strong className="h3 text-weight-bold">
            {props.numDaysToDeliver || props?.data?.ctr}
          </strong>
          <div className="line-separator" />
          Days to <br /> Completion
        </div>
        <div className="mb-2 p-3 minibox">
          <strong className="h3 text-weight-bold">
            {props.numAssets || props?.data?.assets}
          </strong>
          <div className="line-separator" />
          Assets <br /> Delivered
        </div>
      </div>
      <div className="circle"></div>
    </div>
  );
}

export default CaseStudiesOverlay;
