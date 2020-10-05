import React, { Component } from "react";
import BackgroundVideo from "../videos/Interaktyvi_knyga_išklotinė.mp4";

export class VideoBackground extends Component {
  render() {
    return (
      <div className="video-container">
        {/* <video muted autoPlay>
          <source src={BackgroundVideo} type="video/mp4" />
        </video> */}
        {/* <div className="background-image background-image-video"></div> */}
        <div className="background-image background-image-page1"></div>
      </div>
    );
  }
}

export default VideoBackground;
