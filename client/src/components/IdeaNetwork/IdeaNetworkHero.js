import React from "react";
import Button from "react-bootstrap/Button";
import CTA from "../../assets/CTABackground.webp";
import { Link } from "react-router-dom";

function IdeaNetworkHero() {
  return (
    <div>
      <div className="mb-5">
        <img id="CTA" src={CTA} alt="CTA Background" className="" />

        <div className="text-center CTA-center">

            <Button size="sm"
                  className="mb-2"
                  variant="success" 
                  target="_blank" 
                  href="https://calendly.com/lemontree-media/discovery"
            ><span style={{color: "white"}}>Schedule a free consultation</span></Button>

          <p className="h6" id="CTAexplainer">
          Explore how LemonTree can transform your brand.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IdeaNetworkHero;
