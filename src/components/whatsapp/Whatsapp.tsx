"use client";

import React from "react";
import { WHATSAPP } from "@/utils/assets/icons/icons";
import { PHONE_NUMBER } from "@/utils/constants/constants";

const WhatsApp = () => {
  const message =
    "Hola, estoy interesado en conocer más sobre la maquinaria agrícola que ofrecen en Bricchi Hnos. ¿Podrían brindarme más información sobre los productos disponibles y sus precios? Gracias!";

  const handleClick = () => {
    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-8 md:bottom-4 right-4 z-40">
      <img
        className="hover-lift h-16 cursor-pointer"
        src={WHATSAPP}
        alt="WhatsApp"
        onClick={handleClick}
      />
    </div>
  );
};

export default WhatsApp;
