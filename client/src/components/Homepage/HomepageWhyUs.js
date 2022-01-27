import React from "react";
import Icofont from "react-icofont";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function HomepageWhyUs() {
  return (
    <div className="mb-large mx-medium text-center" style={{ width: "100%" }}>
      <p className="h1 font-weight-bold mb-5"> Why take action? </p>
      <Row
        className="d-flex justify-content-between mb-8"
        style={{ width: "100%", marginRight: "0px", marginLeft: "0px" }}
      >
        <Col className="d-xs-block" xl={3} xs={12} md={6}>
          <div className="h2 font-weight-bold">2x</div>
          <p className="text-left mt-2">
            Achieve at least a 2:1 ROI for your next content marketing campaign.
          </p>
        </Col>
        <Col xl={3} xs={12} md={6}>
          <Icofont size="3" icon="dollar" />
          <p className="text-left mt-3">
            Have top-vetted creators bid to ensure best price in the market.
          </p>
        </Col>
        <Col xl={3} xs={12} md={6}>
          <Icofont size="3" icon="heart" className="mr-5" />
          <div className="text-left mt-3">
            <p>
              Deep partnership to understand your brand in depth. &nbsp;
              <small>
                <a href="/">See how we did it.</a>
              </small>
            </p>
          </div>
        </Col>
        <Col xl={3} xs={12} md={6}>
          <Icofont size="3" icon="film" className="mr-3" />
          <p className="text-left mt-3">
            Produce authentic storytelling content by leveraging data insights.
          </p>
        </Col>
      </Row>
      <Button size="sm" className="mt-5">
        Explore our Case Studies
      </Button>{" "}
      <br />
      <br />
      <Button size="sm">Download Product Brochure</Button>
    </div>
  );
}

export default HomepageWhyUs;
