import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icofont from "react-icofont";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "./Logo";
import { useHistory, useLocation } from "react-router";

function Footer() {
  let history = useHistory();
  const location = useLocation();
  const [state, setState] = useState(false);
  console.log(location);
  useEffect(() => {
    if (location.pathname === "/") {
      setState(false);
    } else {
      setState(true);
    }
    setTimeout(() => {
      if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1));
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } 
      else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }, 1000);
    setTimeout(() => {
      if(location.hash === "#ourProcess"){
        window.scrollTo({ 
          top: document.documentElement.scrollHeight, 
          behavior: "smooth"

        }); 
      }
    }, (1000))
   
  }, [location]);

  return (
    <footer className="mt-3 p-5 mobileHidden" style={{ width: "100%" }}>
      <div className="row">
        <div className="col">
          <Logo height={25} /> <br />
          <br />
          All-in-one platform for marketers to produce engaging interactive
          content.
          <br />
          <br />
          <a href="https://www.linkedin.com/company/lemontree-media-interactive">
            <Icofont size="2" icon="linkedin" />
          </a>
          <a href="https://www.facebook.com/lemontreemedianyc/">
            <Icofont size="2" icon="facebook" />
          </a>
          <a href="https://www.instagram.com/lemontreemedianyc/">
            <Icofont size="2" icon="instagram" />
          </a>
        </div>
        <div className="col">
          <strong>Our Solution</strong> <br />
          <br />
          {state ? (
            <a
              offset={() => 130}
              onClick={() => history.push("/#testimonials")}
            >
              <AnchorLink offset={() => 130} href="#testimonials">
                Case Studies
              </AnchorLink>
            </a>
          ) : (
            <AnchorLink offset={() => 130} href="#testimonials">
              Case Studies
            </AnchorLink>
          )}
          <br />
          <br />
          {state ? (
            <a offset={() => 130} onClick={() => history.push("/#ourProcess")}>
              <AnchorLink offset={() => 130} href="#ourProcess">
                Our Process
              </AnchorLink>
            </a>
          ) : (
            <AnchorLink offset={() => 130} href="#ourProcess">
              Our Process
            </AnchorLink>
          )}
          <br />
          <br />
        </div>
        <div className="col">
          <strong>Content</strong>
          <br />
          <br />
          <Link to="/idea">Creative Network</Link>
        </div>
        <div className="col" id="AboutNav">
          <strong>About</strong>
          <br />
          <br />
          <AnchorLink offset={() => 130} href="#offerings">
            Our Mission
          </AnchorLink>
          <br />
          <br />
          <Link to="/terms-of-service">Terms of Service</Link>
          <br />
          <br />
          <Link to="/privacy-policy">Privacy Policy</Link>
          <br />
          <br />
        </div>
        <div className="col" id="contactInfo">
          <strong>Contact</strong> <br />
          <br />
          <em>Prospective Clients:</em>
          <br />
          michael@lemontreemedia.io
          <br />
          <br />
          <em>Careers:</em>
          <br />
          careers@lemontreemedia.io
          <br />
          <br />
          <em>Press & Media Relations:</em>
          <br />
          info@lemontreemedia.io
        </div>
      </div>

      <hr />

      <div>
        &copy; 2020 LemonTree Media. All Rights Reserved.
        <span className="float-right">
          Made with{" "}
          <span role="img" aria-label="love">
            {" "}
            &#10084;&#65039;{" "}
          </span>{" "}
          in NYC.
        </span>
      </div>
    </footer>
  );
}

export default Footer;