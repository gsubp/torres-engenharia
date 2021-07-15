import React from "react";
import Instagram from "../assets/instagram.svg";
import Mail from "../assets/mail.svg";
import Map from "../assets/map.svg";
import Whatsapp from "../assets/whatsapp.svg";
import "../styles/float-social.scss";

export default function Social() {
  return (
    <div className="social">
      <a href="https://goo.gl/maps/ZVWxDLNoq33KHskv6" target="foo">
        <img src={Map} alt="Localização" />
      </a>
      <a href="mailto:contato@torresengenharia.com" target="foo">
        <img src={Mail} alt="contato@torresengenharia.com" />
      </a>
      <a href="https://www.instagram.com/torresengenharialtda" target="foo">
        <img src={Instagram} alt="@torresengenharialtda" />
      </a>
    </div>
  );
}
