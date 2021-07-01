import React from "react";
import Instagram from "../images/instagram.svg";
import Mail from "../images/mail.svg";
import Map from "../images/map.svg";
import Whatsapp from "../images/whatsapp.svg";
import "../styles/float-social.scss";

export default function Social() {
  return (
    <div className="social">
      <a href="https://goo.gl/maps/ZVWxDLNoq33KHskv6" target="_blank">
        <img src={Map} alt="Localização" />
      </a>
      <a href="mailto:contato@torresengenharia.com" target="_blank">
        <img src={Mail} alt="contato@torresengenharia.com" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5587998073764"
        target="_blank"
      >
        <img src={Whatsapp} alt="87 998073764" />
      </a>
      <a href="https://www.instagram.com/torresengenharialtda" target="_blank">
        <img src={Instagram} alt="@torresengenharialtda" />
      </a>
    </div>
  );
}
