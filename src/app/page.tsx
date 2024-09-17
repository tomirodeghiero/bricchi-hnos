import { GalleryItem } from "@/components/gallery-shop";
import { QUALITY, STANDARD } from "@/utils/assets/icons/icons";
import { BACKGROUND_STATISTICS, CAMP, COMPANIES, HERO, HOME_01, HOME_02, HOME_03, STATISTICS } from "@/utils/constants/home";
import { GO_TO_SHOP } from "@/utils/constants/services";
import Link from "next/link";
import { IMAGE_01, IMAGE_02, IMAGE_03, IMAGE_04 } from "@/utils/assets/categories/categories";
import ButtonUI from "@/components/buttons/ButtonUI";

export default function Home() {
  const productsOnOffer = [
    {
      title: "Tractores",
      image: IMAGE_01,
    },
    {
      title: "Cosechadoras",
      image: IMAGE_02,
    },
    {
      title: "Sembradoras",
      image: IMAGE_03,
    },
    {
      title: "Pulverizadoras",
      image: IMAGE_04,
    },
  ];

  const STATIC_PRODUCTS = [
    {
      id: 1,
      src: '/assets/shop/01.png',
      title: 'Minipala MP45',
      category: 'Maquinaria Vial',
      subcategory: 'Mini Palas',
    },
    {
      id: 2,
      src: '/assets/shop/02.png',
      title: 'Stark 500/4',
      category: 'Maquinaria Agrícola',
      subcategory: 'Tractores',
    },
    {
      id: 3,
      src: '/assets/shop/03.png',
      title: 'ME 25-45T',
      category: 'Maquinaria Vial',
      subcategory: 'Autoelevadores',
    },
    {
      id: 4,
      src: '/assets/shop/04.png',
      title: 'Hanomag E143',
      category: 'Maquinaria Vial',
      subcategory: 'Pala Cargadoras',
    },
    {
      id: 5,
      src: '/assets/shop/05.png',
      title: 'Minipala MP45',
      category: 'Maquinaria Vial',
      subcategory: 'Mini Palas',
    },
    {
      id: 6,
      src: '/assets/shop/06.png',
      title: 'Stark 500/4',
      category: 'Maquinaria Agrícola',
      subcategory: 'Tractores',
    },
  ];

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
    <main className="relative">
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src={HERO}
            alt="Agricultural field"
            className="object-cover w-full h-[87.5vh] sm:h-[70vh] md:h-[80vh] lg:h-[87.5vh]"
          />
          <div className="absolute inset-0 bg-black opacity-50 h-[87.5vh] sm:h-[70vh] md:h-[80vh] lg:h-[87.5vh]" />
        </div>

        <div
          className="relative flex flex-col items-start justify-center h-[77.5vh] sm:h-[60vh] md:h-[70vh] lg:h-[77.5vh] px-8 py-12 text-white sm:px-16 md:px-24 lg:px-32"
          data-aos="fade-up"
        >
          <h1
            className="text-lg font-bold font-livvic bg-stone-500 px-3 py-1 rounded-md shadow"
          >
            Maquinaria & Equipamiento
          </h1>
          <h2
            className="mt-2 text-4xl font-bold text-yellow-300 sm:text-5xl md:text-6xl font-livvic"
          >
            Producción Agrícola
          </h2>
          <h2
            className="mt-1 text-4xl font-bold sm:text-5xl md:text-6xl font-livvic"
          >
            De calidad
          </h2>
          <Link href="/about">
            <button
              className="bg-yellow-300 hover:border-yellow-600 shadow-2xl text-stone-900 my-8 font-livvic border uppercase border-yellow-300 font-medium focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 rounded-lg px-6 py-3 flex items-center"
            >
              Descubre Más
              <img src={GO_TO_SHOP} alt="Ir a la Tienda" className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </div>

      <div className="relative mt-[10vh] py-10 flex flex-col justify-center lg:px-0 px-5" data-aos="fade-up">
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

        <div className="flex flex-col md:flex-row justify-center items-center gap-20 mt-8">
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
            <h1 className="font-yellowtail text-green-400 text-2xl font-medium mb-1">
              Sobre Nosotros
            </h1>

            <h2 className="text-3xl font-semibold text-green-900">
              Comprometidos Con <br /> La Agricultura
            </h2>

            <p className="text-gray-800 font-open-sans text-base mt-2 mb-4">
              En <strong>Bricchi Hnos.</strong>, ofrecemos maquinaria agrícola y vial de alta calidad para mejorar la eficiencia y productividad en el campo y en la construcción. Proporcionamos soluciones innovadoras y servicio de excelencia.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-4 w-28 rounded-lg">
                  <img src={QUALITY} alt="Repuestos Originales" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900">Repuestos Originales</h3>
                  <p className="text-gray-800 text-[0.9rem] font-open-sans">
                    Vendemos repuestos originales que aseguran el rendimiento y la durabilidad de tu maquinaria. Calidad garantizada en cada componente para que sigas trabajando sin interrupciones.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-aos-delay="200">
                <div className="bg-white p-4 w-28 rounded-lg">
                  <img src={STANDARD} alt="Estándares de Calidad" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900">Estándares de Calidad</h3>
                  <p className="text-gray-800 text-[0.9rem] font-open-sans">
                    Cumplimos con los más altos estándares de calidad para asegurar que nuestros productos y servicios superen tus expectativas.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/shop" className="mt-8">
              <ButtonUI text="Ir a la Tienda" />
            </Link>
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center my-10 justify-center max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="font-yellowtail text-green-400 text-2xl font-medium mb-1">
          Maquinaria de Calidad
        </h2>

        <h3 className="text-3xl font-semibold text-green-900">
          Nuestros Productos
        </h3>

        <div className="mx-auto max-w-6xl py-4 px-2" data-aos="fade-right">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
            {!!STATIC_PRODUCTS && STATIC_PRODUCTS.map((lamp: any, index) => (
              <GalleryItem key={index} {...lamp} />
            ))}
          </div>
        </div>

        <Link href="/shop">
          <button
            className="bg-green-900 my-8 hover:bg-white border border-green-900 font-medium focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 rounded-xl text-white hover:text-green-900 px-6 py-3 flex items-center"
            data-aos="fade-up"
          >
            Ver Más
            <img src={GO_TO_SHOP} alt="Ir a la Tienda" className="w-5 h-5 ml-2" />
          </button>
        </Link>
      </div>


      <div className="relative border-t border-slate-100 bg-white py-12" data-aos="fade-up">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BACKGROUND_STATISTICS})` }}
        />

        <div className="absolute inset-0 bg-white opacity-90" />

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <h2 className="font-yellowtail text-green-400 text-2xl font-medium mb-1" data-aos="fade-up">
            Testimonios
          </h2>

          <h3 className="text-3xl font-semibold text-green-900" data-aos="fade-up">
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

      <div className="bg-green-900 py-14">
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <div className="w-full flex flex-col md:flex-row justify-between items-center relative">
            <div className="flex flex-col">
              <h2 className="font-yellowtail text-green-400 text-2xl font-medium text-left mb-1">
                Ofertas
              </h2>
              <h3 className="text-3xl font-semibold text-left text-white">
                Te Ofrecemos Maquinaria de Calidad <br />
                & Al Mejor Precio
              </h3>
            </div>

            <Link href="/about">
              <button
                className="bg-yellow-300 right-0 bottom-0 mt-5 md:mt-0 md:absolute text-stone-900 font-livvic border border-yellow-300 font-medium focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 rounded-lg px-6 py-3 flex items-center"
              >
                Ver Más Productos
                <img src={GO_TO_SHOP} alt="Ir a la Tienda" className="w-5 h-5 ml-2" />
              </button>
            </Link>
          </div>

          <div className="max-w-5xl mx-auto mt-8 bg-green-900">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {productsOnOffer.map((product, index: number) => (
                <div key={index} className="flex flex-col rounded-b-2xl" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                  <div className="w-full overflow-hidden rounded-[1.5rem]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium text-white mt-2 text-center text-xl px-4">
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
              <h2 data-aos="fade-up" className="font-yellowtail text-green-400 text-2xl font-medium text-left mb-1">
                Amigable con el Agro
              </h2>
              <h3 data-aos="fade-up" className="text-3xl font-semibold text-left text-green-900 mt-1">
                Bricchi Hnos. Es Tu Amigo <br /> En Maquinaria Agrícola
              </h3>

              <div className="space-y-4 mt-4">
                <div data-aos="fade-up">
                  <h4 className="text-lg font-medium text-green-900">Comienza con nuestra empresa</h4>
                  <p className="text-gray-800 font-open-sans text-sm">
                    Ofrecemos las mejores soluciones en maquinaria agrícola para maximizar tu productividad y eficiencia.
                  </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                  <h4 className="text-lg font-medium text-green-900">Aprende cómo crecer con nosotros</h4>
                  <p className="text-gray-800 font-open-sans text-sm">
                    Descubre cómo nuestras innovaciones pueden transformar tu labor en la industria agrícola.
                  </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                  <h4 className="text-lg font-medium text-green-900">Estrategias agrícolas actuales</h4>
                  <p className="text-gray-800 font-open-sans text-sm">
                    Implementa las técnicas más avanzadas con nuestra moderna maquinaria de vanguardia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-20 bg-green-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {categories.map((category) => (
            <div key={category.title} className="relative">
              <img
                src={category.image}
                alt={category.title}
                className="h-96 w-full rounded object-cover"
              />
              <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                <div className="bg-white py-3 px-10 rounded-lg">
                  <h2 className="text-lg font-medium text-center text-green-900">
                    {category.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
