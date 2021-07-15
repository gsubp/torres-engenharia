import React from "react";
import whatsIcon from "../assets/whatsapp.png";
import "../styles/float-button.scss";

export default function WhatsappFloatButton() {
  return (
    <div className="float-button">
      <span>Fale Conosco!</span>
      <a
        href="https://api.whatsapp.com/send?phone=5587998073764"
        target="foo"
        className="button-img"
      >
        <img src={whatsIcon} alt="Whatsapp" />
      </a>
    </div>
  );
}
