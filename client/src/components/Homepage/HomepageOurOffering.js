import React,{useState} from 'react';
import Icofont from 'react-icofont';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import AnchorLink from 'react-anchor-link-smooth-scroll'

function HomepageWhyUs() {


    return (
        <div className="mb-large mx-medium text-center mt-5" id="ourOfferings">
          <Row className="d-flex justify-content-between">
            
             <Col xl={3} xs={9} md={9} id="ourOfferings">
             <Icofont size="2" icon="icofont-youtube-play" />
              <div className="h4 font-weight-bold mb-4 mt-3">Create & Innovate</div>
              <div className="text-center mt-3">
                <p>
                We fuse interactivity into your content strategies across business scenarios.
                </p>
              </div>
            </Col>

          <Col xl={3} xs={9} md={9} id="ourOfferings">
             <Icofont size="2" icon="icofont-tick-mark" />
              <div className="h4 font-weight-bold mb-4 mt-3">Never detached</div>
              <div className="text-center mt-3">
                <p>
                We translate your business objectives into creative visions, easily undersdood by creatives.
                </p>
              </div>
            </Col>

            <Col xl={3} xs={9} md={9} id="ourOfferings">
            <Icofont size="2" icon="icofont-diamond" />
              <div className="h4 font-weight-bold mb-4 mt-3">Fast Turnaround</div>
              <div className="text-center mt-3">
                <p>
                  Work with a dedicated team to complete a project within 30 days.  
                </p>
              </div>
            </Col>
            <Col xl={3} xs={9} md={9} id="ourOfferings">
            <Icofont size="2" icon="icofont-video-cam" />
              <div className="h4 font-weight-bold mb-4 mt-3">Vast Network</div>
              <p className="text-center mt-3">
                 Partner with interactive creators all over the world on your next project.
              </p>
            </Col>
          </Row>
          <AnchorLink offset={() => 130} href='#whatWeDo'>
            <Button size="sm" className="mt-5">What we do</Button> <br /><br />
          </AnchorLink>
        </div>
    );
}

export default HomepageWhyUs;
