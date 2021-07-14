import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp";
import "react-floating-whatsapp/dist/index.css";

export default function WhatsappFloatButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="5587998073764"
      accountName="Torres Engenharia"
      statusMessage="Geralmente responde em 10 minutos"
      chatMessage="Ola, podemos ajudar em algo?"
    />
  );
}
