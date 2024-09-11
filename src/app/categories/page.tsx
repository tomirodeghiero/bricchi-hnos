import HeaderBackground from "@/components/header-background/HeaderBackground";
import React from "react";
import { BRICCHI_HNOS_BACKGROUND } from "@/utils/assets/images";
import { IMAGE_01, IMAGE_02, IMAGE_03, IMAGE_04, IMAGE_05, IMAGE_06 } from "@/utils/assets/categories/categories";

const Categories = () => {
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
    {
      title: "Pulverizadoras",
      subtitle: "Protección de cultivos",
      image: IMAGE_04,
    },
    {
      title: "Tolvas",
      subtitle: "Almacenamiento seguro",
      image: IMAGE_05,
    },
    {
      title: "Cabezal",
      subtitle: "Corte preciso",
      image: IMAGE_06,
    },
  ];

  return (
    <div>
      <HeaderBackground
        background={BRICCHI_HNOS_BACKGROUND}
        title="Descúbrenos"
        subtitle="Inicio - Categorías"
      />
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col px-2 mt-5 md:mt-0">
              <div className="w-full h-60 md:h-80 overflow-hidden rounded-lg md:rounded-2xl">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <h3 className="font-bold text-green-900 mt-4 text-2xl">
                {category.title}
              </h3>
              <p className="text-green-400 font-yellowtail text-xl">{category.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
