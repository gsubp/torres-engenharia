import React from "react";
import Video2 from "../assets/video2.mp4";
import "../styles/home.scss";
export default function Home() {
  return (
    <main className="home">
      <video
        className="bg-video"
        loop={true}
        muted={true}
        autoPlay={true}
        controlsList="nodownload"
        disablePictureInPicture={true}
      >
        <source src={Video2} type="video/mp4" />
      </video>
      <div className="hps-home">
        <span>Desenvolvido por</span>
        <a href="https://www.instagram.com/hps.solucoes" target="foo">
          HPS SOLUÇÕES DIGITAIS
        </a>
      </div>
    </main>
  );
}
