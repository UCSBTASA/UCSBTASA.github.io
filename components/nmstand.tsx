"use client";
import React from 'react';
import Tooltip from "@mui/material/Tooltip";

const Stand = (props: any) => {
    // calculate everything as a percentage of the surrounding div
    // also for x,y calculate from top left, and use the x,y as the center of the object
    const height = props.height;
    const width = props.width;
    const x = props.x;
    const y = props.y;
    const blurb = props.blurb;
    const color = props.color ? props.color : "rgb(255, 226, 163)";

    return (
        <div>
            <Tooltip title={blurb} placement="top">
                <div className="absolute transform transition-transform 
            hover:scale-105 hover:ring-4 hover:ring-blue-400 hover:ring-opacity-10 
            hover:transition-transform hover:duration-300 rounded-lg" style={{top: `${y - height/2}%`, left: `${x - width/2}%`, height: `${height}%`, width: `${width}%`, backgroundColor: color}} >
                    <p>{props.name}</p>
                </div>
            </Tooltip>
        </div>
    );
};

export default Stand;