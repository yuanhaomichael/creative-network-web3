import React from "react";
// import { Link } from "react-router-dom";
import Icofont from "react-icofont";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AnchorLink from "react-anchor-link-smooth-scroll";

import interactiveVideo from "../../assets/interactive-video.webp";

function HomepageInteractiveVideo() {
  return (
    <div className="mb-large mx-medium" id="interactive-portion">
      <p className="h1 font-weight-bold mb-5 text-center">
        What are Interactive Experiences?
      </p>
      <Row>
        <Col className="col" xl={6} xs={12} md={6} id="interactive-portion-2">
          <div className="mb-3">
            <Icofont size="1" className="iconHome" icon="link" />{" "}
            &nbsp;
            <p className="d-inline">
              {" "}
              Shoppable video with clickable hotspots{" "}
            </p>
          </div>
          <div className="mb-3">
            <Icofont size="1" className="iconHome" icon="icofont-magic" /> &nbsp;
            <p className="d-inline">
              {" "}
              Cinematic branded videos with clear CTAs{" "}
            </p>
          </div>
          <div className="mb-3">
            <Icofont size="1" className="iconHome" icon="chart-flow" /> &nbsp;
            <p className="d-inline">
              {" "}
              Interactive virtual event programming{" "}
            </p>
          </div>
          <div className="mb-3">
            <Icofont size="1" className="iconHome" icon="fire-burn" /> &nbsp;
            <p className="d-inline"> {" "}Experiential content for live events</p>
          </div>
          <div className="mb-0">
            <Icofont size="1" className="iconHome" icon="business-man-alt-3" />{" "}
            &nbsp;
            <p className="d-inline">{" "}
               Augmented and virtual reality experiences
              {" "}
            </p>
          </div>
          <div className="text-center mt-4 mb-3"> 
            <AnchorLink offset={() => 130} href='#testimonials'>
              <Button size="sm" className="mt-5 mb-5">See more samples</Button>
            </AnchorLink> 
          </div>
        </Col>
        <Col className="col" xl={6} xs={12} md={6} id="interactive-portion-3">
          <img
            id="interactive"
            src={interactiveVideo}
            alt="Interactive video example"
          />
        </Col>
      </Row>
    </div>
  );
}

export default HomepageInteractiveVideo;
