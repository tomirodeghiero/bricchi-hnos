import React from "react";
import Link from "next/link";
import HeaderBackground from "@/components/header-background/HeaderBackground";
import { BRICCHI_HNOS_BACKGROUND } from "@/utils/assets/images";
import { GO_TO_SHOP, SERVICES_IMAGES } from "@/utils/constants/services";
import { ABOUT_01, ABOUT_02 } from "@/utils/constants/about";
import { CIRCLE, SPARE_PARTS, TRACTOR } from "@/utils/assets/icons/icons";
import { IMAGE_01, IMAGE_02, IMAGE_03, IMAGE_04 } from "@/utils/assets/categories/categories";
import { FaTractor, FaWrench } from "react-icons/fa";
import ButtonUI from "@/components/buttons/ButtonUI";

const About = () => {
  const categories = [
    {
      title: "Tractores",
      subtitle: "Máquinas potentes",
      image: IMAGE_01,
    },
    {
      title: "Cosechadoras",
      subtitle: "Recolección eficiente",
      image: IMAGE_02,
    },
    {
      title: "Sembradoras",
      subtitle: "Siembra precisa",
      image: IMAGE_03,
    },
  ];



  return (
    <div>
      <HeaderBackground
        background={BRICCHI_HNOS_BACKGROUND}
        title="Sobre Nosotros"
        subtitle="Inicio - Empresa"
      />

      <div className="md:mx-auto mt-8">
        <div className="flex flex-col lg:flex-row mx-auto md:gap-20 max-w-5xl" data-aos="fade-up">
          <div className="w-full lg:w-1/2 mt-8 md:mt-14 lg:order-first order-last" data-aos="fade-right">
            <img src={ABOUT_01} alt="Sobre Nosotros" className="w-full rounded-lg" />
          </div>

          <div className="w-full lg:w-1/2 md:mt-10 px-4 lg:px-0" data-aos="fade-left">
            <h1 className="font-yellowtail text-red-500 text-2xl font-medium mb-1">
              Acerca de Nosotros
            </h1>
            <h2 className="text-3xl font-semibold text-gray-900">
              Comercializamos Maquinarias Diseñadas Para El Éxito
            </h2>
            <p className="text-gray-800 text-sm mt-2">
              Ofrecemos las mejores soluciones en maquinaria agrícola para maximizar tu productividad y eficiencia.
            </p>
            <p className="text-gray-800 text-sm mt-4">
              Nuestro compromiso es brindar equipos de alta calidad que se adapten a las necesidades específicas de cada cliente, garantizando rendimiento y durabilidad en cada uso.
            </p>
            <div className="flex justify-between mt-4">
              <div className="flex items-center gap-3">
                <FaTractor className="w-8 h-8 text-red-500" />
                <h3 className="text-gray-900 font-medium leading-4">Maquinaria Agrícola Moderna</h3>
              </div>
              <div className="flex items-center gap-3">
                <FaWrench className="w-6 h-6 text-red-500" />
                <h3 className="text-gray-900 font-medium leading-4">Repuestos Para El Campo</h3>
              </div>
            </div>

            <div className="my-7">
              <Link href="/shop">
                <ButtonUI text="Explorar más en la Tienda" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex  mx-auto bg-gray-200">
          <div className="flex mx-auto gap-20 py-10" data-os="fade-up">
            <div className="flex flex-col md:flex-row mx-auto gap-2 md:gap-20 max-w-5xl">
              <div className="w-full md:w-1/2 px-4 lg:px-0">
                <h1 className="font-yellowtail text-red-500 text-2xl font-medium mb-1">
                  ¿Por qué elegirnos?
                </h1>
                <h2 className="text-3xl font-semibold text-gray-900">
                  Proveemos Directamente <br /> Desde El Fabricante
                </h2>
                <p className="text-gray-800 text-sm mt-2">
                  Trabajamos con los fabricantes más confiables para ofrecer maquinaria de alta calidad, garantizando la durabilidad y eficiencia de nuestros productos.
                </p>

                <div className="mt-6 flex flex-col">
                  <div className="flex flex-col">
                    <div className="mb-4">
                      <div className="inline-flex px-4 py-2 w-64 rounded-full items-center bg-slate-100">
                        <img src={CIRCLE} alt="Icono Maquinaria Agrícola" className="w-3 h-3 mr-2" />
                        <h3 className="font-medium text-gray-900">Productos 100% Original</h3>
                      </div>
                      <p className="text-sm text-gray-800 mt-2 ml-12">
                        Garantizamos que todas nuestras maquinarias y repuestos son originales y de la más alta calidad.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col mt-2">
                    <div className="mb-4">
                      <div className="inline-flex px-4 py-2 w-64 rounded-full items-center bg-slate-100">
                        <img src={CIRCLE} alt="Icono Maquinaria Agrícola" className="w-3 h-3 mr-2" />
                        <h3 className="font-medium text-gray-900">Aumenta la Eficiencia</h3>
                      </div>
                      <p className="text-sm text-gray-800 mt-2 ml-12">
                        Nuestras máquinas están diseñadas para aumentar la eficiencia y productividad en tus operaciones agrícolas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-5 md:px-0">
                <img src={ABOUT_02} alt="Sobre Nosotros" className="w-full rounded-[1.5rem]" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto my-10 px-4 lg:px-0" data-aos="fade-up">
          <h2 className="font-yellowtail text-red-500 text-2xl font-medium text-center mb-1">
            Áreas
          </h2>
          <h3 className="text-3xl font-semibold text-center text-gray-900">
            Nuestras Especialidades en el Campo
          </h3>
          <p className="text-base text-gray-800 mt-2 text-center">
            Nuestro equipo está compuesto por profesionales altamente capacitados y con amplia experiencia en el sector agrícola.
            <br />
            Nos dedicamos a ofrecer soluciones personalizadas y eficientes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5" data-aos="fade-up">
            {SERVICES_IMAGES.slice(1).map((category, index) => (
              <div key={index} className="flex flex-col bg-gray-200 rounded-b-2xl" data-aos="zoom-in">
                <div className="w-full h-80 overflow-hidden rounded-t-2xl">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mt-4 text-2xl px-4">{category.title}</h3>
                <p className="text-red-700 font-yellowtail text-xl px-4 pb-4">{category.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-200 py-10">
          <div className="max-w-5xl mx-auto px-4 lg:px-0">
            <h2 className="font-yellowtail text-red-500 text-2xl font-medium text-center mb-1">
              Acerca de Nosotros
            </h2>
            <h3 className="text-3xl font-semibold text-center text-gray-900">
              Lo Que Ofrecemos Para Su Empresa
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
              {SERVICES_IMAGES.map((service, index) => (
                <div key={index} className="flex flex-col rounded-b-2xl" data-aos="zoom-up">
                  <div className="w-full overflow-hidden rounded-[1.5rem]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-60 object-cover transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 mt-2 text-center text-xl px-4">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
