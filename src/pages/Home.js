import React from "react";
import logoAltImg from "../assets/logo-alt-white.png";
import Video2 from "../assets/video2.mp4";
import Social from "../components/FloatSocial";
import Header from "../components/Header";
import hpsLogoImg from "../assets/hps-logo.png";
import "../styles/home.scss";
import Slide from "./../components/Slide";

export default function Home() {
  return (
    <main className="home">
      <Header />
      {/* <video
        className="bg-video"
        loop={true}
        muted={true}
        autoPlay={true}
        controlsList="nodownload"
        disablePictureInPicture={true}
      >
        <source src={Video2} type="video/mp4" />
      </video> */}
      <Slide />
      <div className="hps-home">
        <span>Desenvolvido por</span>
        <a href="https://www.instagram.com/hps.solucoes" target="foo">
          HPS SOLUÇÕES DIGITAIS
        </a>
      </div>
    </main>
  );
}
