"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaFilePdf } from "react-icons/fa";
import Modal from "../modal";

const parseSpecifications = (specString: any) => {
  const specs: any = {};
  const lines = specString
    .split("\n")
    .map((line: any) => line.trim())
    .filter((line: any) => line !== "");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes(":")) {
      const parts = line.split(":").map((part: any) => part.trim());
      const key = parts[0];
      let value = parts.slice(1).join(":");

      if (!value || value === ":") {
        if (i + 1 < lines.length && !lines[i + 1].includes(":")) {
          value = lines[i + 1];
          i++;
        }
      }

      specs[key] = value || "";
    }
  }

  return specs;
};

const GalleryItem = ({
  title,
  id,
  category,
  src,
  secondaryImages = [],
  manuals = [],
  description,
  specifications,
}: any) => {
  const imageSrc = src || "/images/no-image.png";
  const allImages = [imageSrc, ...secondaryImages];
  console.log(allImages);

  const [hasMainImageError, setHasMainImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? allImages.length - 1 : prevIndex - 1));
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === allImages.length - 1 ? 0 : prevIndex + 1));
  };

  const handleMainImageError = () => {
    setHasMainImageError(true);
  };

  const processedSpecifications =
    typeof specifications === "string" ? parseSpecifications(specifications) : specifications;

  return (
    <>
      {!hasMainImageError && (
        <div className="gallery-item transition-transform transform hover:-translate-y-2 hover:shadow-lg border border-gray-300 rounded-lg overflow-hidden">
          {/* Imagen Principal */}
          <div className="relative w-full h-72 lg:h-80 cursor-pointer" onClick={() => openModal(0)}>
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              onError={handleMainImageError}
              className={`object-contain transition-opacity duration-500`}
            />
          </div>

          {/* Título y Categoría */}
          <div className="text-center my-4 px-2">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-600">{category}</p>
          </div>

          {/* Modal para visualizar imágenes, especificaciones y otros detalles */}
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="relative w-full h-full flex flex-col p-4 space-y-4">
              {/* Botón de Descarga de PDF */}
              {manuals.length > 0 && (
                <div className="flex space-x-2 w-full justify-end">
                  {manuals.map((manual: any, index: number) =>
                    manual.url ? (
                      <a
                        key={index}
                        href={manual.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-red-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-800 transition-colors duration-300"
                        aria-label={`Ver ${manual.file_name || `Manual`}`}
                      >
                        <FaFilePdf size={20} className="mr-2" />
                        <span className="font-medium">{manual.file_name || `Archivo Técnico`}</span>
                      </a>
                    ) : null
                  )}
                </div>
              )}

              {/* Contenedor de la imagen con dimensiones fijas */}
              <div className="relative w-full max-w-3xl h-96 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={allImages[currentImageIndex]}
                  alt={`${title} - Image ${currentImageIndex + 1}`}
                  className={`transition-opacity object-cover duration-500 rounded-lg h-full`}
                />
              </div>

              {/* Botones de Navegación */}
              {allImages.length > 1 && (
                <div className="flex space-x-4 w-full justify-center">
                  <button
                    onClick={showPrevImage}
                    className="flex items-center justify-center bg-white bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full shadow-md transition-opacity duration-300"
                    aria-label="Imagen Anterior"
                  >
                    <FaChevronLeft size={20} />
                  </button>
                  <button
                    onClick={showNextImage}
                    className="flex items-center justify-center bg-white bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full shadow-md transition-opacity duration-300"
                    aria-label="Imagen Siguiente"
                  >
                    <FaChevronRight size={20} />
                  </button>
                </div>
              )}

              {/* Especificaciones */}
              {processedSpecifications && Object.keys(processedSpecifications).length > 0 && (
                <div className="specifications bg-white bg-opacity-90 rounded-lg p-6 shadow-md w-full">
                  <h3 className="text-xl font-semibold mb-4">Especificaciones:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {Object.entries(processedSpecifications).map(([key, value]: any, index) => (
                      <li key={index} className="text-gray-700">
                        <span className="font-medium text-gray-900">{key}:</span> {value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Descripción (opcional) */}
              {description && (
                <div className="description bg-white bg-opacity-90 rounded-lg p-6 shadow-md w-full">
                  <h3 className="text-xl font-semibold mb-4">Descripción:</h3>
                  <p className="text-gray-700">{description}</p>
                </div>
              )}
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default GalleryItem;