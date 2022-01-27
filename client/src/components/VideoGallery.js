import React from "react";
import ImageGallery from "react-image-gallery";

const videos = [
  {
    original:
      "https://www.quackit.com/pix/routeburn_track/routeburn_flats_t.jpg",
    thumbnail:
      "https://www.quackit.com/pix/routeburn_track/routeburn_flats_t.jpg", 
  },
  {
    original:
      "https://www.quackit.com/pix/routeburn_track/routeburn_flats_t.jpg",
    thumbnail:
      "https://www.quackit.com/pix/routeburn_track/routeburn_flats_t.jpg",
  },
  {
    original:
      "https://www.quackit.com/pix/routeburn_track/routeburn_flats_t.jpg",
    thumbnail:
      "https://www.quackit.com/pix/routeburn_track/routeburn_flats_t.jpg",
  },
  {
    original:
      "https://www.quackit.com/pix/routeburn_track/routeburn_flats_t.jpg",
    thumbnail:
      "https://www.quackit.com/pix/routeburn_track/routeburn_flats_t.jpg",
  },
];
const VideoGallery = () => {
  return (
    <div className="mt--6">
      <ImageGallery items={videos} showNav={false} />
    </div>
  );
};

export default VideoGallery;
