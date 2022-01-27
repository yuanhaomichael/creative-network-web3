import React from "react";
import Icofont from "react-icofont";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function HomepageTrusted() {
  return (
    <div className="text-center mb-large" id="trusted">
      <div className="mb-3">
        <Icofont className="green" size="2" icon="lock" /> &nbsp;
        <span className="h5 font-weight-bold green">Trusted</span>
      </div>
      <div className="mb-4">
        <p className="h2 font-weight-bold mb-5">
          Your search for the right video marketing partner ends here.
        </p>
      </div>

      <Row className="justify-content-center" style={{ width: "100%" }}>
        <Col
          className="col border-left text-left ml-3 mb-3"
          xl={4}
          xs={9}
          md={4}
        >
          <div className="h2 font-weight-bold green">7x</div>
          <p>
            faster in adding interactivity than agencies. Hire creatives & engineers
            and finish in 72 hours. &nbsp;
            {/* <small>
              <a href="https://medium.com/@lemontree-media/lemontree-and-the-future-of-interactive-media-d08b5f44d8cf">See how we did it.</a>
            </small> */}
          </p>
        </Col>

        <Col
          className="col border-left text-left ml-3 mb-3"
          xl={4}
          xs={9}
          md={4}
        >
          <div className="h2 font-weight-bold green">2x</div>
          <p>
            faster in interactive content production. Produce videos from concept to
            launch in 16-30 days. &nbsp;
            {/* <small>
              <a href="https://medium.com/@lemontree-media/lemontree-and-the-future-of-interactive-media-d08b5f44d8cf">See how we did it.</a>
            </small> */}
          </p>
        </Col>
      </Row>

      <div className="mt-5 text-center">
      <Button variant="success" 
                  target="_blank" 
                  href="https://calendly.com/lemontree-media/discovery"
          ><span style={{color: "white"}}>Schedule a free consultation</span></Button>
        <br />
       
      </div>
    </div>
  );
}

export default HomepageTrusted;
