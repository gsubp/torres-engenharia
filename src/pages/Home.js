import React from "react";
import logoAltImg from "../assets/logo-alt-white.png";
import Video2 from "../assets/video2.mp4";
import Social from "../components/FloatSocial";
import Header from "../components/Header";
import "../styles/home.scss";

export default function Home() {
  return (
    <main className="home">
      <Header />
      <video className="bg-video" loop={true} muted={true} autoPlay={true}>
        <source src={Video2} type="video/mp4" />
      </video>
      <img src={logoAltImg} alt="Torres Engenharia" />
      <Social />
    </main>
  );
}
