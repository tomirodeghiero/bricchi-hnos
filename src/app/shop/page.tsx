import HeaderBackground from "@/components/header-background/HeaderBackground";
import React from "react";
import { BRICCHI_HNOS_BACKGROUND } from "@/utils/assets/images";
import GalleryShop from "@/components/gallery-shop";

const Shop = () => {
  return (
    <div>
      <HeaderBackground
        background={BRICCHI_HNOS_BACKGROUND}
        title="Nuestra Tienda"
        subtitle="Inicio - Productos"
      />
      <h2 data-aos="fade-right" className="text-3xl font-medium mb-5 w-full text-center text-gray-900">Explora por Categorías</h2>
      <div data-aos="fade-up" className='max-w-5xl mx-auto'>
        <GalleryShop />
      </div>
    </div>
  );
};

export default Shop;
