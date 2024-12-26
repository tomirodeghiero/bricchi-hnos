"use client";


import { useEffect, useState } from "react";
import Link from "next/link";

import ButtonUI from "@/components/buttons/ButtonUI";
import { FaTools, FaCheckCircle } from "react-icons/fa"
import { HOME_CATEGORIES_IMAGES, SERVICES_IMAGES } from "@/utils/constants/services";
import { BACKGROUND_STATISTICS, CAMP, COMPANIES, HERO, HOME_01, HOME_02, HOME_03, STATIC_PRODUCTS, STATISTICS } from "@/utils/constants/home";
import GalleryItem from "@/components/gallery-item";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleProducts = isMobile
    ? STATIC_PRODUCTS.slice(0, 2)
    : STATIC_PRODUCTS;

  return (
    <main className="relative">
      <div className="relative">
        <div className="relative">
          <img
            src={HERO}
            alt="Agricultural field"
            className="object-cover w-full h-full"
          />

          <div className="absolute bottom-40 hidden md:flex justify-center items-center mx-auto w-full z-50">
            <div className="scrolldown" style={{ color: "skyblue" }}>
              <div className="chevrons">
                <div className="chevrondown"></div>
                <div className="chevrondown"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="relative py-10 flex flex-col justify-center lg:px-0 px-5" data-aos="fade-up">
        <div className="max-w-4xl mx-auto flex gap-8 flex-wrap sm:flex-nowrap">
          <img
            src={HOME_01}
            alt="Agricultural field"
            className="w-full sm:w-1/2 rounded-2xl"
            data-aos="fade-right"
          />
          <img
            src={HOME_02}
            alt="Agricultural field"
            className="w-full sm:w-1/2 rounded-2xl"
            data-aos="fade-left"
          />
        </div>

        <div className="flex flex-row justify-center items-center gap-8 md:gap-20 mt-8 md:max-w-5xl mx-auto">
          {COMPANIES.map((company, index) => (
            <div
              key={index}
              className=" justify-center items-center"
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <img src={company.image} alt={`Logo de ${company.image}`} className="w-32 h-auto sm:w-44" />
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-12 lg:px-0 bg-gray-200">
        <div className="max-w-6xl flex flex-col-reverse lg:flex-row flex-wrap mx-auto gap-8">
          <div
            className="w-full h-full flex-1"
            data-aos="fade-right"
          >
            <img
              src={HOME_03}
              alt="Sobre Nosotros"
              className="w-full object-cover rounded-lg"
            />
          </div>

          <div
            className="flex-1 flex flex-col justify-center"
            data-aos="fade-left"
          >
            <h1 className="font-yellowtail text-2xl font-medium">
              Sobre Nosotros
            </h1>

            <h2 className="text-3xl font-semibold text-gray-900">
              Comprometidos Con <br /> La Agricultura
            </h2>

            <p className="text-gray-800 font-open-sans text-base mt-2 mb-4">
              En <strong>Bricchi Hnos.</strong>, ofrecemos maquinaria agrícola y vial de alta calidad para mejorar la eficiencia y productividad en el campo y en la construcción. Proporcionamos soluciones innovadoras y servicio de excelencia.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-30">
                  <div className="bg-white h-20 w-20 flex items-center justify-center rounded-lg">
                    <FaTools color="#E62128" className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">Repuestos Originales</h3>
                  <p className="text-gray-800 text-[0.9rem] font-open-sans">
                    Vendemos repuestos originales que aseguran el rendimiento y la durabilidad de tu Maquinaria.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-aos-delay="200">
                <div className="w-30">
                  <div className="bg-white h-20 w-20 flex items-center justify-center rounded-lg">
                    <FaCheckCircle color="#E62128" className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">Estándares de Calidad</h3>
                  <p className="text-gray-800 text-[0.9rem] font-open-sans">
                    Cumplimos con los más altos estándares de calidad para asegurar que nuestros productos y servicios superen tus expectativas.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/shop" className="mt-8 flex w-full justify-end md:justify-start">
              <ButtonUI text="Ir a la Tienda" />
            </Link>
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center my-10 justify-center max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="font-yellowtail text-red-500 text-2xl font-medium mb-1">
          Maquinaria de Calidad
        </h2>

        <h3 className="text-3xl font-semibold text-gray-900">
          Nuestros Productos
        </h3>

        <div className="mx-auto w-full px-5 md:max-w-7xl py-4 md:px-2" data-aos="fade-right">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
            {!!visibleProducts &&
              visibleProducts.map((lamp: any, index) => (
                <GalleryItem key={index} {...lamp} />
              ))}
          </div>
        </div>

        <Link href="/shop">
          <ButtonUI text="Ver Más" />
        </Link>
      </div>


      <div className="relative border-t border-slate-100 bg-white py-12" data-aos="fade-up">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BACKGROUND_STATISTICS})` }}
        />

        <div className="absolute inset-0 bg-white opacity-90" />

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <h2 className="font-yellowtail text-red-500 text-2xl font-medium mb-1" data-aos="fade-up">
            Testimonios
          </h2>

          <h3 className="text-3xl font-semibold text-gray-900" data-aos="fade-up">
            ¿Qué dicen nuestros clientes?
          </h3>

          <div className="my-5 md:my-8 border-t border-slate-400 w-[90vw] mx-auto md:w-full" data-aos="zoom-in"></div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-14" data-aos="fade-up">
            {STATISTICS.map((stat) => (
              <div key={stat.image} className="text-center">
                <div>
                  <img src={stat.image} className="h-40" alt="Testimonio" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-14">
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <div className="w-full flex flex-col md:flex-row justify-between items-center relative">
            <div className="flex flex-col">
              <h2 className="font-yellowtail text-red-500 text-2xl font-medium text-left mb-1">
                Ofertas
              </h2>
              <h3 className="text-3xl font-semibold text-left text-gray-900">
                Te Ofrecemos Maquinaria de Calidad <br />
                & Al Mejor Precio
              </h3>
            </div>

            <Link href="/about" className="mt-8 lg:mt-0">
              <ButtonUI text="Ver Más Productos" />
            </Link>
          </div>

          <div className="max-w-5xl mx-auto mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES_IMAGES.map((product, index: number) => (
                <div key={index} className="flex flex-col rounded-b-2xl" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                  <div className="w-full overflow-hidden rounded-[1.5rem]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-60 object-contain transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 mt-[-2rem] text-center text-xl px-4">
                    {product.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white h-[36rem] flex items-center">
        <div className="relative w-full h-[36rem] flex items-center">
          <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 h-full">
            <img
              src={CAMP}
              alt="Paisaje agrícola"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative z-10 ml-auto bg-white p-10 w-full lg:w-1/2 h-[28rem] rounded-lg md:rounded-l-3xl md:mr-12 flex items-center" data-aos="fade-left">
            <div>
              <h2 data-aos="fade-up" className="font-yellowtail text-red-500 text-2xl font-medium text-left mb-1">
                Amigable con el Agro
              </h2>
              <h3 data-aos="fade-up" className="text-3xl font-semibold text-left text-gray-900 mt-1">
                Bricchi Hnos. Es Tu Amigo <br /> En Maquinaria Agrícola
              </h3>

              <div className="space-y-4 mt-4">
                <div data-aos="fade-up">
                  <h4 className="text-lg font-medium text-gray-900">Comienza con nuestra empresa</h4>
                  <p className="text-gray-800 font-open-sans text-sm">
                    Ofrecemos las mejores soluciones en maquinaria agrícola para maximizar tu productividad y eficiencia.
                  </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                  <h4 className="text-lg font-medium text-gray-900">Aprende cómo crecer con nosotros</h4>
                  <p className="text-gray-800 font-open-sans text-sm">
                    Descubre cómo nuestras innovaciones pueden transformar tu labor en la industria agrícola.
                  </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                  <h4 className="text-lg font-medium text-gray-900">Estrategias agrícolas actuales</h4>
                  <p className="text-gray-800 font-open-sans text-sm">
                    Implementa las técnicas más avanzadas con nuestra moderna maquinaria de vanguardia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-20 bg-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {HOME_CATEGORIES_IMAGES.map((category) => (
            <Link href="/shop" key={category.title}>
              <div key={category.title} className="relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-80 w-full rounded object-cover"
                />
                <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                  <div className="bg-white py-3 px-10 rounded-lg shadow-sm">
                    <h2 className="text-lg font-medium text-center text-gray-900">
                      {category.title}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
