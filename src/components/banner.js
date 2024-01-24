import React from "react";
import banner from "./images/levyug.jpeg";

function Banner() {
  return (
    <div className="banner-con">
    <img  className="banner" src={banner} alt="NITC Banner" />
    </div>
  );
}

export default Banner;
