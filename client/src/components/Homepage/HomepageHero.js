import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import hero from "../../assets/hero-background.jpeg";
import heroUX from "../../assets/hero-ux.png";
import heroMobile from "../../assets/hero-mobile.png";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import "./HomepageHero.scss";
import HomepageHeroForm from "./HomepageHeroForm.js";
import { getMarketers } from "../../api";

function HomepageHero() {
  const [email, setEmail] = React.useState("");
  const [show, setShow] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    axios
      .post(getMarketers, { email: email })
      .then((res) => {
        console.log({ res });
        console.log(email);
      })
      .catch(() => {
        console.log("error");
      });
  };

  const handleChange = (e) => setEmail(e.target.value);

  let history = useHistory();
  return (
    <div style={{ position: "relative" }}>
      <div className="bg">
        <img
          style={{ display: "relative" }}
          src={hero}
          alt="LemonTree Media Hero"
          className="translate-up heroImage"
        />
        <img
          src={heroMobile}
          alt="LemonTree Media Hero"
          className="heroImageMobile"
        />
        <div className="homepage-hero-container d-flex align-items-end">
          <Col className="hero-content-con mb-5">
            <Row className="heading-row">
              <Col>
                <div className="h1">
                  {" "}
                  Let your creative partner understand you
                </div>
              </Col>
            </Row>
            <Row className="text-row">
              <Col>
                <div>
                  <p>
                    All-in-one collaborative workspace for marketers and
                    creatives to produce engaging, ROI-focused interactive
                    content
                  </p>
                </div>
              </Col>
            </Row>
            <HomepageHeroForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Col>
          <Col className="hero-content-img-con mb-5">
            <img
              src={heroUX}
              alt="LemonTree Media UX"
              className="hero-ux-image"
            />
          </Col>
        </div>
      </div>
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <p>
            Thank you for your interest😊
            <br />
            <br /> Is your brand looking to create more video content?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => history.push("/get-started")}
          >
            YES!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default HomepageHero;
