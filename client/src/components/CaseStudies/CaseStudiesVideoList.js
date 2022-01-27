import React from "react";
import VideoContainer from "./CaseStudiesVideoList/VideoContainer";

function CaseStudiesVideoList() {
  const videoList = [
    {
      videoLink: `${process.env.PUBLIC_URL}/InteractiveVideos/Paptools-interactive/index.html`,
      clientName: "PapTools",
      videoName: "The 60-second Showcase",
      challengeText:
        "To communicate Paptools' story to its consumers and drive 10% more sales for its selected 20 products.",
      storyText: "To be finished.",
      numCreatives: "5",
      numDaysToDeliver: "3",
      numAssets: "2",
      videoGoal: "Increase conversion",
      role: "Producer"
    },
    {
      videoLink: `${process.env.PUBLIC_URL}/InteractiveVideos/catalyst-exp-interactive/index.html`,
      clientName: "Catalyst Experiential",
      videoName: "Landmarks Dashboard",
      challengeText: "To mesasure data and optimize the sales process",
      storyText: "To be finished.",
      numCreatives: "5",
      numDaysToDeliver: "3",
      numAssets: "2",
      videoGoal: "Customer Education",
      role: "Producer"
    },
    {
      videoLink: `https://player.vimeo.com/video/174921310?autoplay=1&color=e84c4d&title=0&byline=0&portrait=0&controls=0`,
      clientName: "Under Armour",
      videoName: "A Story of Time",
      challengeText:
        "To portray athletes and their stories: how they've climbed up the ladder in their sport, their struggles, and their hopes.",
      storyText: "To be finished.",
      numCreatives: "5",
      numDaysToDeliver: "3",
      numAssets: "2",
      videoGoal: "Brand Awareness",
      role: "Producer"
    },
    {
      videoLink: `https://player.vimeo.com/video/368930891?autoplay=1&color=e84c4d&title=0&byline=0&portrait=0&controls=0`,
      clientName: "Godiva",
      videoName: "Sharing",
      challengeText:
        "To showcase Godiva's committment to bringing its fine chocolates to everyone.",
      storyText: "To be finished.",
      numCreatives: "5",
      numDaysToDeliver: "3",
      numAssets: "2",
      videoGoal: "Brand Awareness",
      role: "Producer"
    },
    {
      videoLink: `https://player.vimeo.com/video/384511066?autoplay=1&color=e84c4d&title=0&byline=0&portrait=0&controls=0`,
      clientName: "Gramercy Gift Guide",
      videoName: "My Favorites",
      challengeText:
        "Create an emotionally driven and energetic short film to capture people's genuine thoughts about gifts they received in the past. Introduce Gramercy Gift Guide as the go-to online gift platform for gift buyers.",
      storyText: "To be finished.",
      numCreatives: "5",
      numDaysToDeliver: "3",
      numAssets: "2",
      videoGoal: "Increase conversion",
      role: "Producer"
    }
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
      }}
    >
      {videoList.map((video, i) => (
        <VideoContainer
          key={i}
          videoLink={video.videoLink}
          clientName={video.clientName}
          videoName={video.videoName}
          challengeText={video.challengeText}
          storyText={video.storyText}
          numCreatives={video.numCreatives}
          numDaysToDeliver={video.numDaysToDeliver}
          numAssets={video.numAssets}
          width="100%"
          height="220"
          {...video}
        />
      ))}
    </div>
  );
}

export default CaseStudiesVideoList;
