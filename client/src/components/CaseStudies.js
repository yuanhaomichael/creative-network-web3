import React from "react";

import { IdeaNetworkProvider } from "../contexts/IdeaNetworkContext";
import CaseStudiesDescription from "./CaseStudies/CaseStudiesDescription";
import IdeaNetworkHero from "./IdeaNetwork/IdeaNetworkHero";
import CaseStudiesVideoList from "./CaseStudies/CaseStudiesVideoList";

function CaseStudies() {
  return (
    <IdeaNetworkProvider>
      <IdeaNetworkHero />
      <CaseStudiesDescription />
      <hr />
      <CaseStudiesVideoList />
    </IdeaNetworkProvider>
  );
}

export default CaseStudies;
