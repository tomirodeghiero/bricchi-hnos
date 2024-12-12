"use client";

import React from "react";
import { WHATSAPP } from "@/utils/assets/icons/icons";

interface WhatsAppProps {
  contacts: {
    phoneNumber: string; // Número de teléfono para el enlace
    message?: string; // Mensaje personalizado para WhatsApp
    label: string; // Etiqueta para identificar si es repuesto o venta
  }[]; // Lista de contactos para renderizar
  bottom?: number; // Ajustar posición desde abajo
  right?: number; // Ajustar posición desde la derecha
}

const WhatsApp: React.FC<WhatsAppProps> = ({
  contacts,
  bottom = 1, // Posición predeterminada
  right = 1, // Posición predeterminada
}) => {
  return (
    <div
      className="fixed z-40 flex flex-col items-end"
      style={{ bottom: `${bottom}rem`, right: `${right}rem` }}
    >
      {contacts.map((contact, index) => (
        <button
          key={index}
          className="flex items-center mb-4 px-3 py-1 bg-green-800 text-white rounded-full shadow-md hover:shadow-lgborder-green-950 hover:translate-y-[-2px] transition-transform duration-200"
          onClick={() =>
            window.open(
              `https://wa.me/${contact.phoneNumber}?text=${encodeURIComponent(
                contact.message || "Hola! Estoy interesado en "
              )}`,
              "_blank"
            )
          }
        >
          <img
            src={WHATSAPP}
            alt="WhatsApp"
            className="w-8 h-8"
          />
          <span className="font-medium">{contact.label}</span>
        </button>
      ))}
    </div>
  );
};

export default WhatsApp;