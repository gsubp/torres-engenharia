import React from "react";
import Header from "../components/Header";
import Social from "../components/FloatSocial";
import Video from "../assets/video.mp4";
import "../styles/home.scss";

export default function Home() {
  return (
    <main className="home">
      <Header />
      <video className="bg-video" loop={true} muted={true} autoPlay={true}>
        <source src={Video} type="video/mp4" />
      </video>
      <Social />
    </main>
  );
}
