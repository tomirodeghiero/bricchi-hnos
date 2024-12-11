"use client";

import React from "react";

const GalleryItemPlaceholder: React.FC = () => {
  return (
    <div className="gallery-item animate-pulse">
      {/* Placeholder para la Imagen Principal */}
      <div className="relative w-full h-72 lg:h-96 bg-gray-300 rounded-lg"></div>

      {/* Placeholder para el Título y Categoría */}
      <div className="text-center mt-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
        <div className="h-3 bg-gray-300 rounded w-1/4 mx-auto"></div>
      </div>

      {/* Placeholder para Imágenes Secundarias */}
      <div className="secondary-images flex items-center justify-center mt-2 space-x-2">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="relative w-16 h-16 bg-gray-300 rounded"></div>
        ))}
      </div>

      {/* Placeholder para Manuales */}
      <div className="manuals mt-2 space-y-1">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryItemPlaceholder;