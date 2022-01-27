import React, { useContext } from "react";

import VideoContainer from "./IdeaNetworkVideoList/VideoContainer";
import { IdeaNetworkContext } from "../../contexts/IdeaNetworkContext";

function IdeaNetworkVideoList() {
  //pass what's changed in the context and display video containers
  const { videoType, industry, videoStyle, budget, ideas } = useContext(
    IdeaNetworkContext
  );
  return (
    <VideoContainer
      videoType={videoType}
      industry={industry}
      videoStyle={videoStyle}
      budget={budget}
      ideas={ideas}
    />
  );
}

export default IdeaNetworkVideoList;
