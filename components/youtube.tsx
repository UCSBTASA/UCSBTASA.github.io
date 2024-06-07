"use client";
import React from "react";
import YouTube from "react-youtube";

// Define the Props interface


class Youtube extends React.Component {
  render() {
    const options = {
      height: 255,
      width: 400,
      playerVars: {
        autoplay: 1 as 0 | 1, // Explicitly define as 0 | 1
        controls: 1 as 0 | 1, // Explicitly define as 0 | 1
      },
    };

    return (
      <YouTube
        videoId="g5Ex5BHIApc?si=SaWB7DozkLMBU0Jr"
        opts={options}
        onReady={this._onReady}
        id="video"
      />
    );
  }

  _onReady(event: any) {
    event.target.pauseVideo();
  }
}

export default Youtube;
