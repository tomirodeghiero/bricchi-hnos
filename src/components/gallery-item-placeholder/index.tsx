"use client";

import React from "react";

const GalleryItemPlaceholder: React.FC = () => {
  return (
    <div className="gallery-item animate-pulse">
      {/* Placeholder para la Imagen Principal */}
      <div className="relative w-full h-72 lg:h-96 bg-gray-300 border border-gray-300 rounded-lg"></div>

      {/* Placeholder para el Título y Categoría */}
      <div className="text-center mt-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
        <div className="h-3 bg-gray-300 rounded w-1/4 mx-auto"></div>
      </div>
    </div>
  );
};

export default GalleryItemPlaceholder;