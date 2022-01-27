import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Icofont from "react-icofont";
import logo from "./../../../assets/logo.png";

import VideoEmbed from "../../VideoEmbed90";
import CaseStudiesOverlay from "../CaseStudiesOverlay";
import "./VideoContainer.scss";

function VideoContainer(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="video-description">
        <div className="m-0 p-3 d-flex justify-content-between align-items-center">
          <span>
            <em>
              <strong>Video Goal:</strong> {props.videoGoal}
            </em>
          </span>
          <span>  
            <em>
              <strong>Our role:</strong> {props.role}
            </em>
          </span>
        
        </div>
        <VideoEmbed
          videoLink={props.videoLink}
          width={props.width}
          height={props.height}
          className="embeded-video"
        />
        <div className="mx-3">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              minHeight: "100px"
            }}
          >
            <h5 className="font-weight-bold">
              {props.clientName} | {props.videoName}
            </h5>
            <Button
              className="view-details"
              onClick={() => {
                setShow(true);
              }}
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        className="video-container-modal"
      >
        <Modal.Header className="modal-header">
          <img
            src={logo}
            alt="logo"
            style={{ height: "40px", width: "60px" }}
          />
          <Icofont
            size="2"
            icon="close"
            onClick={() => setShow(false)}
            style={{ cursor: "pointer" }}
          />
        </Modal.Header>
        <Modal.Body>
          <CaseStudiesOverlay
            {...props}
            challengeText={props.challengeText}
            storyText={props.storyText}
            numCreatives={props.numCreatives}
            numDaysToDeliver={props.numDaysToDeliver}
            numAssets={props.numAssets}
          />
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button
            size="sm"
            onClick={() => setShow(false)}
            variant="outline-secondary"
          >
            Return Home
          </Button>
          <Button variant="primary" size="sm">
            See our work
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default VideoContainer;
