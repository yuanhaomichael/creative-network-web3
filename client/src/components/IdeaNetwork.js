import React, { lazy, Suspense } from "react";

import { IdeaNetworkProvider } from "../contexts/IdeaNetworkContext";

const IdeaNetworkDescription = lazy(() =>
  import("./IdeaNetwork/IdeaNetworkDescription")
);
const IdeaNetworkFilterList = lazy(() =>
  import("./IdeaNetwork/IdeaNetworkFilterList")
);
const IdeaNetworkHero = lazy(() => import("./IdeaNetwork/IdeaNetworkHero"));
const IdeaNetworkVideoList = lazy(() =>
  import("./IdeaNetwork/IdeaNetworkVideoList")
);

function IdeaNetwork() {
  return (
    <IdeaNetworkProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <IdeaNetworkHero />
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <IdeaNetworkDescription />
      </Suspense>

      <hr />
      <Suspense fallback={<p>Loading...</p>}>
        <IdeaNetworkFilterList />
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <IdeaNetworkVideoList />
      </Suspense>
    </IdeaNetworkProvider>
  );
}

export default IdeaNetwork;
