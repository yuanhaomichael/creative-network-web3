import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function HomepageUserIdentify() {
    return (
        <div className="mb-large mx-medium">
          <Row>
            <Col className="col text-center" xl={6} xs={12} md={6}>
              <p className="h3 font-weight-bold mb-5 mr-4 ml-4">
                Pain 1⃣<br/> Lack of robust content
              </p>
              <p>
                Video content is a must-have for 85% of today's brands. However, in an age of
                 content explosion, it’s been harder and harder to create effective 
                 content that resonates with your consumers. <br/><br/>

                With a streamlined way to collaborate with best-in-class creatives to 
                produce interactive experiences, add interactivity to existing content assets, 
                and track data insights, we are here to make your brand stand out from the crowd.

              </p>
            </Col>
            <Col className="col text-center" xl={6} xs={12} md={6}>
              <p className="h3 font-weight-bold mb-5 mr-4 ml-4">
                Pain 2⃣️<br/>Misalignment in collaboration
              </p>
              <p>
                When video creators lack proper familiarity of your brand and business initiatives, 
                things could go south quickly. Misalignment on project objectives or video tone
                 can lead to wasted time and effort.

                 <br/><br/>Our collaboration 
                platform matches you with creators who understand your target industry deeply, to bring you peace 
                of mind and empower a meticulous and productive collaboration process.

              </p>
            </Col>
          </Row>
          <div className="row text-center userIdentity">
            <div className="col mt-5 d-none d-sm-block">
             <AnchorLink offset={() => 130} href='#testimonials'>
              <Button size="sm"> Explore case studies </Button> </AnchorLink>
            </div>
            <div className="col mt-5 d-none d-sm-block">
               <Link to="/idea">
                  <Button size="sm"> Explore creative network </Button>
                </Link>
            </div>
          </div>

        </div>
    );
}

export default HomepageUserIdentify;
