import React from "react";
import Link from "next/link";

import { BRICCHI_HNOS_BACKGROUND } from "@/utils/assets/images";
import { CATEGORIES_IMAGES } from "@/utils/constants/categories";
import HeaderBackground from "@/components/header-background/HeaderBackground";

const Categories = () => {
  return (
    <div>
      <HeaderBackground
        background={BRICCHI_HNOS_BACKGROUND}
        title="Descúbrenos"
        subtitle="Inicio - Categorías"
      />
      <div className="max-w-5xl mx-auto mt-8 px-5 md:px-0" data-os="fade-up">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {CATEGORIES_IMAGES.map((category, index) => (
            <Link href="/shop" key={index}>
              <div key={index} className="flex flex-col px-2 mt-5 md:mt-0 bg-gray-200 py-2 border border-gray-300 rounded-lg shadow-sm">
                {/* Image container with rounded corners, shadow, and background color */}
                <div className="w-full h-60 md:h-80 overflow-hidden rounded-lg md:rounded-2xl bg-white">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105 rounded-lg md:rounded-2xl"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mt-4 text-xl">
                  {category.title}
                </h3>
                <p className="text-red-700 font-yellowtail text-xl">{category.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
