"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaDownload, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Modal from "../modal"; // Asegúrate de que la ruta sea correcta

const googleDriveLoader = ({ src }: any) => {
  return src;
};

const convertGoogleDriveUrl = (url: any) => {
  const match = url.match(/\/d\/(.*?)\//);
  return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url;
};

const parseSpecifications = (specString: any) => {
  const specs: any = {};
  const lines = specString.split("\n").map((line: any) => line.trim()).filter((line: any) => line !== "");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes(":")) {
      const parts = line.split(":").map((part: any) => part.trim());
      const key = parts[0];
      let value = parts.slice(1).join(":");

      if (!value || value === ":") {
        if (i + 1 < lines.length && !lines[i + 1].includes(":")) {
          value = lines[i + 1];
          i++; // Saltar la siguiente línea ya que la hemos procesado
        }
      }

      specs[key] = value || "";
    }
  }

  return specs;
};

const GalleryItem = ({ title, id, category, src, secondaryImages = [], manuals = [], description, specifications }: any) => {
  const imageSrc = src || "/images/no-image.png";
  const allImages = [imageSrc, ...secondaryImages];

  // Estado para manejar errores en la imagen principal
  const [hasMainImageError, setHasMainImageError] = useState(false);

  // Estado para manejar imágenes secundarias válidas
  const [validSecondaryImages, setValidSecondaryImages] = useState(secondaryImages || []);

  // Estado para manejar el modal y la navegación
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Funciones para manejar el modal y la navegación
  const openModal = (index: any) => {
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

  // Procesar las especificaciones si es una cadena de texto
  const processedSpecifications = typeof specifications === "string" ? parseSpecifications(specifications) : specifications;

  // Manejar errores en la imagen principal
  const handleMainImageError = () => {
    setHasMainImageError(true);
  };

  // Manejar errores en las imágenes secundarias
  const handleSecondaryImageError = (imageUrl: any) => {
    setValidSecondaryImages((prevImages: any) => prevImages.filter((url: any) => url !== imageUrl));
  };

  // Si la imagen principal tiene error, no renderizar el componente
  if (hasMainImageError) {
    return null;
  }

  return (
    <div className="gallery-item">
      {/* Imagen Principal */}
      <div className="relative w-full h-72 lg:h-96 cursor-pointer" onClick={() => openModal(0)}>
        <Image
          loader={googleDriveLoader}
          src={convertGoogleDriveUrl(imageSrc)}
          alt={title}
          fill
          onError={handleMainImageError} // Manejar error en la imagen principal
          className="object-cover rounded-lg"
        />
      </div>

      {/* Título y Categoría */}
      <div className="text-center mt-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{category}</p>
      </div>

      {/* Imágenes Secundarias */}
      {validSecondaryImages.length > 0 && (
        <div className="secondary-images flex items-center justify-center mt-2 overflow-x-auto scrollbar-hide">
          {validSecondaryImages.map((image: any, index: number) => (
            <div
              className="relative w-16 h-16 mr-2 flex-shrink-0 cursor-pointer"
              key={index}
              onClick={() => openModal(index + 1)} // +1 porque 0 es la imagen principal
            >
              <Image
                loader={googleDriveLoader}
                src={convertGoogleDriveUrl(image)}
                alt={`Secondary ${index + 1}`}
                fill
                onError={() => handleSecondaryImageError(image)} // Manejar error en imagen secundaria
                className="object-cover rounded"
              />
            </div>
          ))}
        </div>
      )}

      {/* Manuales con Icono de Descarga */}
      {manuals.length > 0 && (
        <div className="manuals mt-2">
          {manuals.map((manual: any, index: number) =>
            manual.url ? (
              <a
                key={index}
                href={manual.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 hover:underline mb-1"
              >
                <FaDownload className="mr-2" />
                {manual.file_name || `Manual ${index + 1}`}
              </a>
            ) : null
          )}
        </div>
      )}

      {/* Modal para visualizar imágenes en grande */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="relative w-full h-96">
          {/* Imagen Actual */}
          <Image
            loader={googleDriveLoader}
            src={convertGoogleDriveUrl(allImages[currentImageIndex])}
            alt={`${title} - Image ${currentImageIndex + 1}`}
            fill
            onError={() => {
              // Manejar error en la imagen del modal
              // Puedes optar por mostrar una imagen placeholder o cerrar el modal
              // Aquí simplemente cerramos el modal
              closeModal();
            }}
            className="object-contain"
          />

          {/* Botones de Navegación */}
          <button
            onClick={showPrevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
            aria-label="Imagen Anterior"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={showNextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
            aria-label="Imagen Siguiente"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Información de Texto Adicional */}
          <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-80 p-4 rounded overflow-y-auto max-h-60">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 mb-2">Categoría: {category}</p>
            <p className="text-gray-600 mb-4">{description}</p>

            {/* Especificaciones */}
            {processedSpecifications && Object.keys(processedSpecifications).length > 0 && (
              <div className="specifications">
                <h3 className="text-lg font-semibold mb-2">Especificaciones:</h3>
                <ul className="list-disc list-inside">
                  {Object.entries(processedSpecifications).map(([key, value]: any, index) => (
                    <li key={index}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GalleryItem;