import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../assets/img (1).jpg";
import img2 from "../assets/img (2).jpg";
import img3 from "../assets/img (3).jpg";
import img4 from "../assets/img (4).jpg";
import "../styles/slide.scss";

export default function Slide() {
  return (
    <div className="slide-container">
      <Fade arrows={false}>
        <div className="each-fade">
          <div className="image-container">
            <img src={img1} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={img2} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={img3} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={img4} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
