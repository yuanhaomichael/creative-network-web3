import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import Trusted from './trusted.svg'
import Data1 from './data1.svg'
import Data2 from './data2.svg'

function HomepageData() {

    return (
    	<Container fluid>
          <div className="homepage-data">
          <img src={Trusted} alt="trusted" />
          <h2>Your search for the right video marketing partner ends here.</h2>
          <img id="data1" src={Data1} />
          <img id="data2" src={Data2} />
           <Link to="/get-started">
            <Button variant="success">Get a free 15-min consultation</Button>
        </Link>
		</div>
		</Container>

)
       
}

export default HomepageData;
