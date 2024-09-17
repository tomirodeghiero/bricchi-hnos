import React from "react";
import Image from 'next/image';
import Link from "next/link";
import HeaderBackground from "@/components/header-background/HeaderBackground";
import { BRICCHI_HNOS_BACKGROUND } from "@/utils/assets/images";
import { GO_TO_SHOP, SERVICE_01, SERVICE_02, SERVICE_03, SERVICE_04, SERVICE_05, SERVICE_06, SERVICES } from "@/utils/constants/services";

const Services = () => {
  return (
    <div>
      <HeaderBackground
        background={BRICCHI_HNOS_BACKGROUND}
        title="Soluciones Agrícolas"
        subtitle="Inicio - Servicios"
      />
      <div className="max-w-5xl mx-auto mt-10 px-4 lg:px-0">
        <h1 className="font-yellowtail text-green-400 text-2xl font-medium text-center mb-1">
          Nuestro Compromiso
        </h1>
        <h2 className="text-3xl font-semibold text-center text-green-900">
          Agricultura Innovadora Para
        </h2>
        <h2 className="text-3xl font-semibold mb-5 text-center text-green-900">
          Un Futuro Mejor
        </h2>

        <div className="flex flex-col lg:flex-row justify-between lg:space-x-8">
          {/* Left side */}
          <div className="flex flex-col space-y-6 lg:w-1/3">
            <div className="flex flex-col items-center md:items-end space-x-4">
              <Image src={SERVICE_01} alt="Icono Entrega Rápida" width={32} height={32} />
              <div>
                <h3 className="font-semibold text-green-900 text-center md:text-end my-1">Entrega Rápida</h3>
                <p className="text-gray-800 font-open-sans text-center md:text-end text-[0.9rem]">Logística eficiente para asegurar que tus pedidos lleguen a tiempo, utilizando sistemas avanzados de gestión de inventario.</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end space-x-4">
              <Image src={SERVICE_02} alt="Icono Venta" width={32} height={32} />
              <div>
                <h3 className="font-semibold text-green-900 text-center md:text-end my-1">Venta</h3>
                <p className="text-gray-800 font-open-sans text-center md:text-end text-[0.9rem]">
                  Nuestro equipo de ventas está listo para asesorarte en la elección de la maquinaria que mejor se adapte a tus necesidades. Contamos con una amplia gama de financiamiento para facilitar tu compra.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end space-x-4">
              <Image src={SERVICE_03} alt="Icono Post Venta" width={32} height={32} />
              <div>
                <h3 className="font-semibold text-green-900 text-center md:text-end my-1">Post Venta</h3>
                <p className="text-gray-800 font-open-sans text-center md:text-end text-[0.9rem]">
                  Estamos con vos en cada paso. Nuestro servicio de post venta asegura el mantenimiento y soporte que tu maquinaria necesita para seguir rindiendo al máximo.
                </p>
              </div>
            </div>
          </div>

          {/* Center image */}
          <div className="hidden md:block lg:w-1/3 my-8 lg:my-0">
            <img src={SERVICES} alt="Central Image" className="w-full h-full object-cover rounded-xl shadow-sm" />
          </div>

          {/* Right side */}
          <div className="flex flex-col space-y-6 lg:w-1/3">
            <div className="flex flex-col items-center md:items-start mt-5 md:mt-0">
              <Image src={SERVICE_04} alt="Icono de Agricultura de Precisición" width={32} height={32} />
              <div>
                <h3 className="font-semibold text-center md:text-start text-green-900 my-1">Agricultura de Precisición</h3>
                <p className="text-gray-800 font-open-sans text-center md:text-start text-[0.9rem]">Maximizá tu rendimiento con nuestras soluciones de agricultura de precisión. Tecnología avanzada para decisiones más informadas.</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <Image src={SERVICE_05} alt="Icono Servicio Técnico" width={32} height={32} />
              <div>
                <h3 className="font-semibold text-center md:text-start text-green-900 my-1">Servicio Técnico</h3>
                <p className="text-gray-800 font-open-sans text-center md:text-start text-[0.9rem]">Mantené tu maquinaria en perfecto estado con nuestro servicio técnico especializado. Reparaciones rápidas y eficaces, donde y cuando lo necesites.</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <Image src={SERVICE_06} alt="Icono Flete" width={32} height={32} />
              <div>
                <h3 className="font-semibold text-green-900 my-1 text-center md:text-start">Flete</h3>
                <p className="text-gray-800 font-open-sans text-center md:text-start text-[0.9rem]">Llevamos tu maquinaria hasta donde la necesites. Servicio de flete seguro y puntual, porque sabemos que tu tiempo es valioso.</p>
              </div>
            </div>
          </div>
        </div>

        <Link href="/shop" className="text-center mt-8 flex mx-auto justify-center">
          <button className="bg-white hover:bg-green-900 border border-green-900 font-medium focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 rounded-[40px] text-green-900 hover:text-white px-6 py-3 flex items-center">
            Explorar más en la Tienda
            <img src={GO_TO_SHOP} alt="Ir a la Tienda" className="w-5 h-5 ml-2" />
          </button>
        </Link>
      </div>

      <div data-aos="fade-up" className="max-w-5xl mx-auto mt-10 h-[27.5rem] p-4 lg:p-0 border-none rounded-3xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13361.13500055996!2d-64.3828499!3d-33.1541768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d1ff821678a3eb%3A0x3e83cf1394f36c4e!2sBricchi%20Hnos%20S.A!5e0!3m2!1ses-419!2sar!4v1724025086608!5m2!1ses-419!2sar"
          className='rounded-3xl w-full h-full'
        />
      </div>
    </div>
  );
};

export default Services;
