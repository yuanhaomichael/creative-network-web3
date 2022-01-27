import React from "react";
import{Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import collabUX from "../../assets/collab-ux.webp";

function HomepageCollaboration() {
  return (
    <div className="mb-large mx-medium">
          <p className="h2 font-weight-bold text-left mt-5" >
           Transforming collaboration <br/>on Interactive Content 
          </p>
          <Row className="row">
            <Col className="col" xl={6} xs={12} md={6}>
                <div className="mb-5 mt-5">
               
                <p className="d-inline"> When video creators lack proper familiarity of your brand and business 
                                          initiatives, things could go south quickly. Misalignment on project 
                                          objectives or video tone can lead to wasted time and effort.<br/><br/>

                                          Our collaboration workspace is optimized for creating Interactive Content.
                                          It enables you to work with creators 
                                          who understand
                                          your target industry deeply, communicate through ideas and videos,
                                          and track video performances, all in one place.
                                          We aim to bring you peace of mind, to empower
                                            a meticulous and productive collaboration process. </p>
              </div>
            <div className="d-flex flex-row text-left">
            <p className="h2 font-weight-bold mb-5 ml-0 transform collaboration">50%</p>
                <p className="mt-2 ml-3 collaboration"><a href="https://medium.com/@lemontree-media/lemontree-and-the-future-of-interactive-media-d08b5f44d8cf">time saved in communication</a></p>
          </div>
          <div className="d-flex flex-row text-left">
            <p className="h2 font-weight-bold mb-5 ml-0 transform collaboration">9x</p>
                <p className="mt-2 ml-3 collaboration"><a href="https://medium.com/@lemontree-media/lemontree-and-the-future-of-interactive-media-d08b5f44d8cf">more engagment than traditional videos</a></p>
          </div>
          <div className="d-flex flex-row text-left">
            <p className="h2 font-weight-bold mb-5 ml-0 transform collaboration">30%</p>
                <p className="mt-2 ml-3 collaboration"><a href="https://medium.com/@lemontree-media/lemontree-and-the-future-of-interactive-media-d08b5f44d8cf">cost savings by repurposing content</a></p>
          </div>

              <div className="text-left mt-4 mb-3">
              <Link to='/get-started'>
          <Button size="sm" variant="success">Get a free 15-min consultation</Button></Link>
              </div>
            </Col>
            <Col className="col" xl={6} xs={12} md={6}>
              <img id="collabUX" src={collabUX} alt="Collaboration Tool UX" />
            </Col>
          </Row>

        </div>
  );
}

export default HomepageCollaboration;
