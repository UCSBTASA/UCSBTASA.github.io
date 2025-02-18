"use client";
import React from "react";
import YouTube from "react-youtube";

class Youtube extends React.Component {
  render() {
    const options = {
      playerVars: {
        autoplay: 1 as 0 | 1,
        controls: 1 as 0 | 1,
        origin: "https://www.youtube-nocookie.com",
        mute: 1 as 0 | 1,
      },
      host: "https://www.youtube-nocookie.com",
    };

    return (
      <div className="w-full aspect-w-16 aspect-h-9">
        <YouTube
          videoId="g5Ex5BHIApc"
          opts={options}
          onReady={this._onReady}
          className="w-full h-full"
        />
      </div>
    );
  }

  _onReady(event: any) {
    event.target.playVideo();
  }
}

export default Youtube;
