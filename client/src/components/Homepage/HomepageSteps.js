import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import steps from "../../assets/steps.svg";

function HomepageSteps() {
  return (
    <div className="mb-large d-none d-lg-block home-page-steps">
      <div className="mb-3">
        <div className="ml-5 text-left h2 font-weight-bold" id="ourProcess">
          Add interactivity to your video assets<br /> or create Interactive {" "}
          
          Content <br />in <u>four simple steps</u>.
        </div>
        <img
          src={steps}
          alt="LemonTree Media Process"
          id="ourProcesspic"
          className="translate-up"
        />
      </div>
      <div className="mr-3 text-center">
          <Button variant="success" 
                  target="_blank" 
                  href="https://calendly.com/lemontree-media/discovery"
          ><span style={{color: "white"}}>Schedule a free consultation</span></Button>
        <br />
      
      </div>
    </div>
  );
}

export default HomepageSteps;
