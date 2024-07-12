import { Box } from "@mui/material";
import React from "react";

export default function Advertisement() {
  return (
    <div className="ads-container">
      <Box className="about-us-box">
        <span>About Us</span>
      </Box>
      <div className="ads-restaurant-frame">
        <video
          className="ads-video"
          autoPlay={true}
          loop
          muted
          playsInline
          data-video-media=""
        >
          <source type="video/mp4" src="/video/burak-ads.mp4" />
        </video>
      </div>
    </div>
  );
}
