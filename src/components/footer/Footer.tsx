import { ARROW, FACEBOOK, INSTAGRAM } from "@/utils/assets/icons/icons";
import React from "react";
import Link from "next/link";
import { FACEBOOK_URL, INSTAGRAM_URL } from "@/utils/constants/constants";
import { BRICCHI_HNOS_LOGOTYPE } from "@/utils/assets/images";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left border-b border-gray-400 py-8">
          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-end md:col-span-1">
            <h5 className="text-green-900 font-bold text-xl mb-4">Contáctanos</h5>
            <p className="text-gray-800 mb-1 text-[0.9rem]"><strong>Email</strong></p>
            <p className="text-gray-800 mb-5 text-[0.9rem]">ventas@briccihnos.com</p>
            <p className="text-gray-800 mb-1 text-[0.9rem]"><strong>Phone</strong></p>
            <p className="text-gray-800 mb-5 text-[0.9rem]">+54 9 3586214-729</p>
            <p className="text-gray-800 mb-1 text-[0.9rem]"><strong>Dirección</strong></p>
            <p className="text-gray-800 text-[0.9rem]">Ruta A005 km 1.2, Río Cuarto</p>
            <p className="text-gray-800 text-[0.9rem]">Córdoba, Argentina</p>
          </div>
          {/* Logo and Description Section */}
          <div className="flex flex-col items-center md:border-l md:border-r border-gray-400 md:mx-8 px-8 md:col-span-2">
            <img src={BRICCHI_HNOS_LOGOTYPE} alt="Bricci Hnos" className="mb-4 h-8" />
            <p className="text-gray-800 mb-4 text-[0.9rem] text-center font-open-sans">Maquinaria agrícola de alta calidad para mejorar la eficiencia y productividad de tu campo. Proporcionamos soluciones innovadoras y servicio de excelencia.</p>
            <div className="flex space-x-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <img src={INSTAGRAM} alt="Instagram" className="h-10 w-10" />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                <img src={FACEBOOK} alt="Facebook" className="h-10 w-10" />
              </a>
            </div>
          </div>
          {/* Links Section */}
          <div className="flex flex-col items-center md:items-start md:col-span-1">
            <h5 className="text-green-900 font-bold text-xl mb-4">Enlaces</h5>
            <ul className="space-y-4 text-gray-800 font-open-sans text-[0.9rem]">
              <li><Link href="#" className="hover:text-gray-800">Inicio</Link></li>
              <li><Link href="#" className="hover:text-gray-800">Empresa</Link></li>
              <li><Link href="#" className="hover:text-gray-800">Productos</Link></li>
              <li><Link href="/categories" className="hover:text-gray-800">Categorías</Link></li>
              <li><Link href="#" className="hover:text-gray-800">Servicios</Link></li>
              <li><Link href="#" className="hover:text-gray-800">Contacto</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="flex items-center justify-center mt-5 gap-2 text-center text-gray-800 font-open-sans">
          Desarrollado por
          <span className="font-medium">💻 Tomás Rodeghiero.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
