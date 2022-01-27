import React, { useState } from "react";
import HomepageTestimonial from "./HomepageTestimonialList/HomepageTestimonial";
import cat from "../../assets/catalyst.png";
import pap from "../../assets/paptools.png";
import swo from "../../assets/softwareone.png";
import under from "../../assets/under.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Icofont from "react-icofont";
import VideoEmbed from "../VideoEmbed";
import VideoEmbedMobile from "../VideoEmbedMobile";
import logo from "./../../assets/logo.png";
import CaseStudiesOverlay from "../CaseStudies/CaseStudiesOverlay";
import './HomepageTestimonialList.scss'

function HomepageTestimonialList() {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState([]);
  const arr = [
 
    {
      id: "1",
      name: "Case Study",
      company: "Catalyst Experiential",
      title: "Personalized Dashboard",
      storyText: "",
      text: "As one of the fastest growing startups in the US. (Inc. 5000), Catalyst Experiential creates a dashboard to personalize content for its potential customers with choices.",
      image: cat,
      videoPosition: "left",
      videoLink: `${process.env.PUBLIC_URL}/InteractiveVideos/catalyst-exp-interactive/index.html`,
      ctr: "5",
      creatives: "3",
      assets: "2",
      challenge: ''
    },
    {
      id: "2",
      name: "Case Study",
      company: "SoftwareONE",
      title: "Simulive Virtual Event with Interactive QR Scan",
      storyText: "",
      text: "A leader in cloud software, SoftwareONE partnered with LemonTree to gain a 2:1 ROI and win a Platinum Award at MUSE Creative Awards for Advertising.",
      image: swo,
      videoPosition: "left",
      videoLink: "https://player.vimeo.com/video/607674562",
      ctr: "30",
      creatives: "9",
      assets: "3",
      challenge: ''
    },
    {
      id: "3",
      name: "Case Study",
      company: "Under Armour",
      title: "Narrative Content with Call-to-Action and Landing Page",
      storyText: "",
      text: "A Story of Time is a piece of narrative content portraying the struggles and hopes of college athletes.",
      image: under,
      videoPosition: "left",
      videoLink: "https://player.vimeo.com/video/174921310",
      ctr: "15",
      creatives: "2",
      assets: "4",
      challenge: ''
    },
    {
      id: "4",
      name: "Case Study",
      company: "PapTools",
      title: "Shoppable Video",
      storyText: "",
      text: "The 30-year-old renowned local store in Greek received a brand new online presence during the pandemic, to transform its offline businesses to online in a seamless manner. The video is integrated with Wix ecommerce.",
      image: pap,
      videoPosition: "left",
      videoLink: `${process.env.PUBLIC_URL}/InteractiveVideos/Paptools-interactive/index.html`,
      ctr: "13",
      creatives: "5",
      assets: "1",
      challenge: ''
    },
  ];

  const showModals = (id) => {
    setShow(true);
    arr.filter((i) => i.id === id).map((m) => setModalData(m));
  };

  return (
    <div className="mb-large text-center testimonial-list" id="testimonials">
      {arr.map((item, index) => {
        return (
          <div
            className="mx-medium mb-5 mt-5 justify-content-center"
            key={index}
          >
            <Row className="row">
              <Col
                className="text-left testVideo mb-2 d-flex px-5"
                xl={6}
                xs={12}
                md={12}
              >
                <VideoEmbed videoLink={item?.videoLink} />
                <VideoEmbedMobile videoLink={item?.videoLink} />
              </Col>

              <Col xl={6} xs={12} md={12} className="testInfo">
                <div className="d-flex flex-row mx-auto">
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="profile mr-3 mt-2"
                    onClick={() => showModals(item?.id)}
                  />
                  <div>
                    <div className="h4 mt-2" onClick={() => showModals(item?.id)}>
                      {item?.name} | {item?.company}
                    </div>
                    <div className="h5 mb-4" onClick={() => showModals(item?.id)}>{item?.title}</div>
                  </div>
                </div>
                <div
                  className="text-center text-xl-left"
                  xl={6}
                  xs={12}
                  md={12}
                >
                  <p onClick={() => showModals(item?.id)}>{item?.text}</p>
                </div>
                <div className="stats">
                  <div className="stat1">
                    <h2>{item?.creatives}</h2>
                    <hr />
                    <h6>LemonTree creatives</h6>
                  </div>
                  <div className="stat2">
                    <h2>{item?.ctr}</h2>
                    <hr />
                    <h6>days to completion</h6>
                  </div>
                  <div className="stat3">
                    <h2>{item?.assets}</h2>
                    <hr />
                    <h6>assets delivered</h6>
                  </div>
                </div>
              </Col>
              {/* {LEFT && (
                <div>
                  <div className="spacer"> </div>
                  <Col className="col" xl={6} xs={12} md={12}>
                    {props.children}
                  </Col>
                </div>
              )} */}
            </Row>
          </div>
        );
      })}
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
            <CaseStudiesOverlay data={modalData}/>
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
    </div>
  );
}

export default HomepageTestimonialList;
