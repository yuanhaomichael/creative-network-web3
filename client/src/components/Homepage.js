import React, { lazy } from "react";

import HomepageAnimation from "./Homepage/HomepageAnimation";
const HomepageClientList = lazy(() => import("./Homepage/HomepageClientList"));
const HomepageWhatWeDo = lazy(() => import("./Homepage/HomepageWhatWeDo"));
const HomepageSteps = lazy(() => import("./Homepage/HomepageSteps"));
const HomepageTrusted = lazy(() => import("./Homepage/HomepageTrusted"));
const HomepageInteractiveVideo = lazy(() =>
  import("./Homepage/HomepageInteractiveVideo")
);
const HomepageTestimonialList = lazy(() =>
  import("./Homepage/HomepageTestimonialList")
);
const HomepageOurOffering = lazy(() =>
  import("./Homepage/HomepageOurOffering")
);
// const HomepageCollaboration = lazy(() =>
//   import("./Homepage/HomepageCollaboration")
// );

function Homepage() {
  return (
    <div>
      <HomepageAnimation />
      <div className="content-container">
        <div className="home-page-client">
          <HomepageClientList />
        </div>
        <div className="home-page-ourOffering">
          <HomepageOurOffering />
        </div>
      </div>
      <HomepageInteractiveVideo />
      <HomepageWhatWeDo />
      <HomepageTestimonialList />
      <HomepageSteps />
      <HomepageTrusted />
    </div>
  );
}

export default Homepage;
