import React from 'react';
import loaderImage from '../assets/loader.gif';

const loaderStyle = {
    position: "fixed" as const,
    left: "0px",
    top: "0px",
    width: "100%",
    height: "100%",
    zIndex: 9999,
    background: `url(${loaderImage}) 50% 50% no-repeat rgb(249,249,249)`
};

export const Loading = () => {
    return (
        <div style={loaderStyle}>

        </div>
    );
};
