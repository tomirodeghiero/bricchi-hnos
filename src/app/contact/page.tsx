"use client";

import React, { useState } from "react";
import Link from "next/link";
import HeaderBackground from "@/components/header-background/HeaderBackground";
import TextInput from "@/components/text-input/TextInput";
import { CONTACT, CONTACT_BACKGROUND } from "@/utils/assets/contact/contact";
import { EMAIL, FACEBOOK, INSTAGRAM, LOCATION, TELEPHONE } from "@/utils/assets/icons/icons";
import { BRICCHI_HNOS_BACKGROUND } from "@/utils/assets/images";
import { FACEBOOK_URL, INSTAGRAM_URL, SALES_PHONE_NUMBER } from "@/utils/constants/constants";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClickToWhatsApp = (phoneNumber: number) => {
    const { fullName, email, company, subject, message } = formData;
    const whatsappMessage = `Hola! Soy ${fullName}.
Email: ${email}
Empresa: ${company}
Asunto: ${subject}
Mensaje: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      <HeaderBackground
        background={BRICCHI_HNOS_BACKGROUND}
        title="Contáctanos"
        subtitle="Inicio - Contacto"
      />
      <div className='max-w-5xl mx-auto mt-8'>
        <div className='flex flex-col p-4 lg:p-0 lg:flex-row gap-4'>
          <div className='flex w-full lg:w-1/2 mx-auto gap-5'>
            <img data-aos="fade-right" src={CONTACT} className='h-3/4 lg:h-full w-full object-cover rounded-3xl' />
          </div>

          <div className="w-full lg:w-1/2 lg:pl-4 mx-auto py-8" data-aos="fade-left">
            <h1 className="text-gray-900 text-3xl font-semibold leading-[2.25rem]">Tu consulta es importante para nosotros.</h1>
            <p className="text-gray-800 font-family-jost mt-2 leading-[1.5rem] font-open-sans">
              ¿Tenés alguna consulta o querés más información sobre nuestros productos y servicios? No dudes en contactarnos. Nuestro equipo está listo para asistirte y encontrar la mejor solución para vos. <span className='font-medium'>¡Escribinos y empecemos a trabajar juntos!</span>
            </p>

            <div className="flex-col mt-6 space-y-4 md:w-3/4">
              <Link href="mailto:infod.pastel@gmail.com" className="flex p-2 items-center rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 border border-gray-300">
                <div className="flex items-center justify-center rounded-lg">
                  <img src={EMAIL} alt="E-mail" className="h-16" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-900">Mensaje</p>
                  <p className="text-gray-800">ventas@briccihnos.com</p>
                </div>
              </Link>
              <div onClick={() => handleClickToWhatsApp(5493584854418)} className="cursor-pointer flex p-2 items-center rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 border border-gray-300">
                <div className="flex items-center justify-center rounded-lg">
                  <img src={TELEPHONE} alt="E-mail" className="h-16" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-900">Teléfono - Área de Maquinaria</p>
                  <p className="text-gray-800">+54 9 3584854418</p>
                </div>
              </div>
              <div onClick={() => handleClickToWhatsApp(5493586542828)} className="cursor-pointer flex p-2 items-center rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 border border-gray-300">
                <div className="flex items-center justify-center rounded-lg">
                  <img src={TELEPHONE} alt="E-mail" className="h-16" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-900">Teléfono - Área de Repuestos</p>
                  <p className="text-gray-800">+54 9 3586542828</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex font-family-jost items-center mt-6">
              <Link href={INSTAGRAM_URL} target='_blank'>
                <img
                  className="hover-lift h-14 w-14 mx-2"
                  src={INSTAGRAM}
                  alt="Instagram Icon"
                />
              </Link>

              <Link href={FACEBOOK_URL} target='_blank'>
                <img
                  className="hover-lift h-14 w-14 mx-2"
                  src={FACEBOOK}
                  alt="Facebook Icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-5xl mx-auto relative w-full overflow-hidden rounded-2xl shadow-lg">
        <img
          src={CONTACT_BACKGROUND}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <div className="relative w-full flex justify-start">
          <div className="p-8 max-w-[30rem] bg-white bg-opacity-90 md:rounded-xl shadow-lg m-8">
            <h4 className="text-red-500 font-yellowtail text-2xl">Ubicación</h4>
            <h2 className="text-3xl font-bold text-gray-900">Nuestra Sucursal</h2>
            <p className="text-gray-800 mt-2 font-open-sans">
              Encuentra nuestra sucursal donde ofrecemos las mejores soluciones en maquinaria agrícola y repuestos. Visítanos para descubrir cómo podemos ayudarte a mejorar la productividad y eficiencia de tu campo.
            </p>
            <div className="flex items-center mt-4 text-gray-800 leading-[1.5rem]">
              <img
                className="h-10 w-10 mx-2"
                src={LOCATION}
                alt="Location Icon"
              />
              <div>
                <p className="font-semibold text-gray-900">Río Cuarto, Argentina</p>
                <p className="text-gray-800">Ruta A005 km 1.2, Río Cuarto, Córdoba</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-5xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TextInput
            as="input"
            name="fullName"
            label="Nombre Completo"
            placeholder="Su nombre completo"
            value={formData.fullName}
            onChange={handleInputChange}
          />
          <TextInput
            as="input"
            name="email"
            label="Email"
            placeholder="ejemplo@suemail.com"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextInput
            as="input"
            name="company"
            label="Empresa"
            placeholder="Nombre de tu empresa aquí"
            value={formData.company}
            onChange={handleInputChange}
          />
          <TextInput
            as="input"
            name="subject"
            label="Asunto"
            placeholder="¿Cómo podemos ayudarte?"
            value={formData.subject}
            onChange={handleInputChange}
          />
        </div>
        <div className="py-8">
          <TextInput
            as="textarea"
            name="message"
            label="Mensaje"
            placeholder="¡Hola! Me gustaría preguntar acerca de"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full justify-end">
          <button
            className="bg-green-900 w-full md:w-auto py-4 px-8 rounded-lg text-white font-medium"
            onClick={() => handleClickToWhatsApp(Number(SALES_PHONE_NUMBER))}
          >
            Enviar Mensaje a WhatsApp
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
