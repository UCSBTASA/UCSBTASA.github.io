"use client"
import React from "react";
import YouTube from "react-youtube";


class Youtube extends React.Component {
   render() {
     const options = {
       height: '390',
       width: '640',
       playerVars: {
         autoplay: 1,
         controls: 1,
       },
     };
 
     return <YouTube videoId="Oflbho9ZG2U" opts={options} onReady={this._onReady} id="video"/>;
   }
 
   _onReady(event: any) {
     event.target.pauseVideo();
   }
 }

 export default Youtube;