"use client"
import React from "react";
import YouTube from "react-youtube";


class Youtube extends React.Component {
   render() {
     const options = {
       height: '360',
       width: '640',
       playerVars: {
         autoplay: 1,
         controls: 1,
       },
     };
 
     return <YouTube videoId="g5Ex5BHIApc?si=SaWB7DozkLMBU0Jr" opts={options} onReady={this._onReady} id="video"/>;
   }
 
   _onReady(event: any) {
     event.target.pauseVideo();
   }
 }

 export default Youtube;
