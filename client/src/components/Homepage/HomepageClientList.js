import React from "react";
import "./HomepageClientList.scss";

import HomepageClientLogo from "./HomepageClientList/HomepageClientLogo";

import logo_cgc from "../../assets/logo_cgc.webp";
import logo_ggg from "../../assets/logo_ggg.webp";
import logo_olay from "../../assets/logo_olay.webp";
import logo_herotech from "../../assets/logo_herotech.webp";
import logo_cctv from "../../assets/logo_cctv.webp";
// import logo_sina from "../../assets/logo_sina.webp";
import logo_aic from "../../assets/logo_aic.webp";

function HomepageClientList() {
  const logos = [
    { clientName: "Columbia Global Centers", src: logo_cgc },

    { clientName: "GGG", src: logo_ggg },
    { clientName: "Olay", src: logo_olay },
    { clientName: "HeroTech", src: logo_herotech },
    { clientName: "CCTV", src: logo_cctv },
    {
      clientName: "AIC",
      src: logo_aic
    }
  ];

  return (
    <div className="homepage-client-list">
      <h6>
        <em>
          {" "}
          <b>Trusted</b> by dozens of innovative brands:
        </em>
      </h6>
      <div className="client-list-logos">
        {logos.map((logo, i) => (
          <HomepageClientLogo
            key={i}
            clientName={logo.clientName}
            src={logo.src}
          />
        ))}
      </div>
    </div>
  );
}

export default HomepageClientList;
