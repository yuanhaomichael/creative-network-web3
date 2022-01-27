import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { getMarketers } from "../../api";
import smallBranch from "../../assets/smallBranch.svg";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import "./HomepageHero.scss";


function HomepageAnimation() {
  const [email, setEmail] = React.useState("");
  const [show, setShow] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setShow(False);
    axios
      .post(
        getMarketers,
        { email: email }
      )
      .then((res) => {
        console.log({ res });
        console.log(email);
      })
      .catch(() => {
        console.log("error");
      });
  };

  let history = useHistory();

  return (
    <div className="bg">
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div
            className="wave waveTop"
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-top.png')"
            }}
          ></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div
            className="wave waveMiddle"
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-mid.png')"
            }}
          ></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div
            className="wave waveBottom"
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-bot.png')"
            }}
          ></div>
        </div>
      </div>

      <Row
        className="container-fluid homepage-hero-container d-flex align-items-center justify-content-center"
        style={{ marginRight: "0px", marinLeft: "0px" }}
      >
        <Col xl={5} lg={5} mb={5} sm={5} className="hero-content-con mb-5">
          <Row className="heading-row">
            <Col>
              <div className="h1"> Drive ROI with interactive experiences</div>
            </Col>
          </Row>
          <Row className="text-row">
            <Col>
              <div>
                <p className="hero-text">
                  Create best-in-class experiential content for your technology or e-commerce
                  brand.
                </p>
              </div>
            </Col>
          </Row>
          <Form className="homepage-form" onSubmit={handleSubmit} method="POST">
            <Form.Row className="homepage-form-row mt-2">
              <Col xl={6} lg={12} md={12} sm={12}>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="email-input"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Col>
              <Col xl={6} lg={12} md={12} sm={12} className="hero-int-btn mt-2">
                <Button
                  type="submit"
                  variant="success"
                  className="form-button mb-2"
                  style={{ width: "max-content"}}
                  target="_blank" 
                  href="https://calendly.com/lemontree-media/discovery"
                >
                  <span style={{color: "white"}}>Schedule a free consultation</span>
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
        <Col xl={5} lg={5} mb={5} sm={5} className="hero-content-img-con mb-5">
          <img
            style={{
              display: "relative",
              zIndex: "1000",
              width: "20%"
            }}
            src={smallBranch}
            alt="LemonTree Media small tree branch"
            className="smallBranch"
          />
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title={"interactive"}
              src="https://player.vimeo.com/video/535508578?autoplay=1"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>

      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <p>
            Our Client Engagement Rep will contact you soon😊
            <br />
            <br /> Would you like to view our case studies?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => history.push("/case-studies")}
          >
            YES!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default HomepageAnimation;
