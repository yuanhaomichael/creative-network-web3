import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import VideoEmbed from "../../VideoEmbed";
import VideoEmbedMobile from "../../VideoEmbedMobile";
import "./HomepageTestimonial.scss";

function HomepageTestimonial(
  {
    id,
    videoPosition,
    videoLink,
    image,
    name,
    company,
    title,
    text,
    creatives,
    ctr,
    assets,
  },
  props
) {

  let LEFT, RIGHT;
  
  videoPosition === "right" ? (RIGHT = true) : (LEFT = true);
  return (
    <div className="mx-medium mb-5 mt-5 justify-content-center">
      <Row className="row">
        {LEFT && (
          <Col
            className="text-left testVideo mb-2 d-flex px-5"
            xl={6}
            xs={12}
            md={12}
          >
            <VideoEmbed videoLink={videoLink} />
            <VideoEmbedMobile videoLink={videoLink} />
          </Col>
        )}
        <Col xl={6} xs={12} md={12} className="testInfo">
          <div className="d-flex flex-row mx-auto">
           
            <img
              src={image}
              alt={name}
              className="profile mr-3 mt-2"
            />
            <div>
              <div className="h4 mt-2">
                {name} | {company}
              </div>
              <div className="h5 mb-4">{title}</div>
            </div>
          </div>
          <div className="text-center text-xl-left" xl={6} xs={12} md={12}>
            <p>{text}</p>
          </div>
          <div className="stats">
            <div className="stat1">
              <h2>{creatives}</h2>
              <hr />
              <h6>LemonTree creatives</h6>
            </div>
            <div className="stat2">
              <h2>{ctr}</h2>
              <hr />
              <h6>days to completion</h6>
            </div>
            <div className="stat3">
              <h2>{assets}</h2>
              <hr />
              <h6>assets delivered</h6>
            </div>
          </div>
        </Col>
        {LEFT && (
          <div>
            <div className="spacer"> </div>
            <Col className="col" xl={6} xs={12} md={12}>
              {props.children}
            </Col>
          </div>
        )}
      </Row>
    </div>
  );
}

export default HomepageTestimonial;
