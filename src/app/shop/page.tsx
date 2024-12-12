"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { CSSTransition } from "react-transition-group";
import React, { Suspense, useEffect, useRef, useState } from "react";

import Features from "@/components/features/Features";
import HeaderBackground from "@/components/header-background/HeaderBackground";

import { BRICCHI_HNOS_BACKGROUND } from "@/utils/assets/images";
import { DROP_RIGHT, NO_RESULTS, SEARCH } from "@/utils/assets/icons/icons";
import GalleryItemPlaceholder from "@/components/gallery-item-placeholder";
import GalleryItem from "@/components/gallery-item";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Componente CategoryTags sin selección de marcas
const CategoryTags = ({
  subcategories,
  onSortBySubcategory,
}: {
  subcategories: any[];
  onSortBySubcategory: (subcategory: string | null) => void;
}) => {
  const [selectedSubcategoryLocal, setSelectedSubcategoryLocal] = useState<string | null>(null);

  const handleSubcategoryClick = (subcategoryName: string) => {
    const newSubcategory = selectedSubcategoryLocal === subcategoryName ? null : subcategoryName;
    setSelectedSubcategoryLocal(newSubcategory);
    onSortBySubcategory(newSubcategory); // Llama al filtro de subcategorías
  };

  return (
    <div className="flex flex-col gap-4">
      {subcategories.length > 0 ? (
        subcategories.map((subcategory) => (
          <div key={subcategory.name}>
            <button
              className={`tag-button ${selectedSubcategoryLocal === subcategory.name ? "active" : ""}`}
              onClick={() => handleSubcategoryClick(subcategory.name)}
            >
              {subcategory.name}
            </button>
            {selectedSubcategoryLocal === subcategory.name && (
              <div className="flex flex-col gap-2 mt-2 pl-4">
                {subcategory.brands.map((brand: string) => (
                  <div key={brand} className="flex items-center">
                    <span className="text-gray-700 font-medium mr-2">-</span>
                    <span className="shadow px-3 py-1 bg-green-900 text-white rounded-full text-sm cursor-default">
                      {brand}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-sm text-gray-600">No hay subcategorías disponibles.</p>
      )}
    </div>
  );
};

// Componente ProductsFilterSidebar sin selección de marcas
const ProductsFilterSidebar = ({
  searchQuery,
  onSearch,
  onSortByCategory,
  onSortBySubcategory,
  categories,
}: any) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Añadimos estado local para selección de categoría

  // Crear un objeto para almacenar las referencias de cada categoría
  const transitionRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({});

  const handleCategoryClick = (categoryName: string | null) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryName);
    }
    onSortByCategory(categoryName);
    setSelectedCategory(categoryName); // Actualizamos el estado local
  };

  return (
    <div className="w-full lg:w-1/4 lg:flex lg:flex-col gap-5">
      <div className="mt-5">
        <div className="hidden lg:block lg:relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="placeholder-gray-700 px-2 py-2 pr-10 w-full font-normal border-b border-gray-300 focus:outline-none focus:border-red-500 transition-colors duration-300"
            style={{ lineHeight: "1.5" }}
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-8 cursor-pointer p-2">
            <Image src={SEARCH} alt="Search" width={24} height={24} />
          </div>
        </div>

        <div className="flex-col gap-2 mt-3 hidden md:flex">
          <button
            onClick={() => handleCategoryClick(null)}
            className={`
              ${!selectedCategory ? "bg-red-700 text-white" : "bg-white"}
              hover:bg-red-700 hover:border-black mx-auto flex w-full border border-red-700 font-medium focus:outline-none focus:ring-1 focus:ring-red-700 focus:ring-opacity-50 transition duration-300 ease-in-out hover:shadow-md rounded-[40px] text-red-700 hover:text-white text-center py-2 justify-center items-center
            `}
          >
            Todas las Categorías
          </button>

          {categories?.slice(1).map((category: any) => {
            // Crear una referencia si no existe
            if (!transitionRefs.current[category.category]) {
              transitionRefs.current[category.category] = React.createRef();
            }
            const nodeRef = transitionRefs.current[category.category];

            return (
              <div key={category.category}>
                <button
                  className={`py-2 text-left w-full flex justify-between items-center ${selectedCategory === category.category ? "font-bold" : ""}`}
                  onClick={() => handleCategoryClick(category.category)}
                >
                  {category.category}
                  <span>{expandedCategory === category.category ? "-" : "+"}</span>
                </button>

                <CSSTransition
                  in={expandedCategory === category.category}
                  timeout={300}
                  classNames="subcategory-transition"
                  unmountOnExit
                  nodeRef={nodeRef} // Proporcionar nodeRef
                >
                  <div ref={nodeRef}>
                    <CategoryTags
                      subcategories={category.subcategories}
                      onSortBySubcategory={onSortBySubcategory}
                    />
                  </div>
                </CSSTransition>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ShopPage = () => {
  const PRODUCTS_PER_PAGE = 9;

  const searchParams = useSearchParams();
  const searchQueryParam = searchParams.get("search");
  const categoryQueryParam = searchParams.get("category");
  const subcategoryQueryParam = searchParams.get("subcategory"); // Añadir subcategoría en los parámetros de búsqueda

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(searchQueryParam || "");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryQueryParam || null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(subcategoryQueryParam || null);
  // Eliminamos selectedBrands ya que no serán utilizadas

  async function getCategories() {
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/api/categories-structured`);
      const data = await response.json();
      console.log("Categorías obtenidas:", data);
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  async function getProducts(): Promise<any> {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(`${process.env.BACKEND_URL}/api/products`, requestOptions);
      if (!response.ok) {
        console.error("Error al obtener productos");
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Productos obtenidos:", data);
      setProducts(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  useEffect(() => {
    if (!products || products.length === 0) {
      setFilteredProducts([]);
      return;
    }

    let tempProducts = [...products];

    // Filtro por búsqueda
    if (searchQuery) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filtro por categoría
    if (selectedCategory) {
      tempProducts = tempProducts.filter(
        (product) => product.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filtro por subcategoría
    if (selectedSubcategory) {
      tempProducts = tempProducts.filter(
        (product) => product.subCategory?.toLowerCase() === selectedSubcategory.toLowerCase()
      );
    }

    // Eliminamos el filtro por marcas

    const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
    const currentProducts = tempProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    setFilteredProducts(currentProducts);
  }, [currentPage, products, selectedCategory, selectedSubcategory, searchQuery /*, selectedBrands*/]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Eliminamos onToggleBrand ya que no será necesaria

  const onSortByCategory = (category: string | null) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null); // Resetear subcategoría al cambiar de categoría
    // setSelectedBrands([]); // Eliminamos resetear marcas
    setCurrentPage(1); // Resetear a la primera página al cambiar filtros
  };

  const onSortBySubcategory = (subcategory: string | null) => {
    setSelectedSubcategory(subcategory);
    // setSelectedBrands([]); // Eliminamos resetear marcas
    setCurrentPage(1); // Resetear a la primera página al cambiar filtros
  };

  const onResetSearch = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    // setSelectedBrands([]); // Eliminamos resetear marcas
    setCurrentPage(1);
  };

  const totalPages = Math.ceil((products?.length || 0) / PRODUCTS_PER_PAGE);

  return (
    <div>
      <HeaderBackground
        background={BRICCHI_HNOS_BACKGROUND}
        title="Nuestra Tienda"
        subtitle="Inicio - Productos"
      />
      <div className="bg-gray-200 pt-6 pb-5 px-5 lg:px-16 z-50 opacity-100">
        <div className="flex gap-2">
          <span className="text-gray-900 font-medium text-sm">Inicio</span>
          <Image src={DROP_RIGHT} alt="Arrow" width={6} height={6} />
          <span className="text-gray-900 font-medium text-sm">Productos</span>
        </div>
      </div>

      <div className="flex flex-col text-black pt-5 lg:py-10 px-5 lg:px-28">
        <div className="lg:flex gap-10">
          <ProductsFilterSidebar
            searchQuery={searchQuery}
            onSearch={(query: string) => {
              setSearchQuery(query);
              setCurrentPage(1); // Resetear a la primera página al buscar
            }}
            onSortByCategory={onSortByCategory}
            onSortBySubcategory={onSortBySubcategory} // Pasar la función para subcategoría
            categories={categories}
          />

          <div className="flex-col w-full">
            {isLoading ? (
              // Mostrar placeholders mientras se carga
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                {[...Array(PRODUCTS_PER_PAGE)].map((_, index) => (
                  <GalleryItemPlaceholder key={index} />
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              // Mostrar productos cuando ya se cargaron
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                {filteredProducts.map((product: any) => (
                  <GalleryItem
                    key={product._id}
                    title={product.name}
                    id={product._id}
                    category={product.category}
                    src={product.mainImageUrl}
                    secondaryImages={product.secondaryImageUrls}
                    manuals={product.manuals}
                    description={product.description}
                    specifications={product.specifications} // Asegúrate de que este campo exista en tus datos
                  />
                ))}
              </div>
            ) : (
              // Mostrar mensaje de no resultados cuando no hay productos y no está cargando
              <div className="flex flex-col justify-center items-center w-full">
                <div className="relative h-60 w-60">
                  <Image src={NO_RESULTS} alt="Sin resultados" fill className="object-contain" />
                </div>
                <p className="font-medium text-[1.15rem] max-w-[30rem] text-center">
                  No se encontraron productos que coincidan con los criterios de búsqueda.
                </p>
                <button
                  onClick={onResetSearch}
                  className="bg-white border py-2 mb-8 text-[0.85rem] font-medium px-8 border-black rounded mt-7 uppercase"
                >
                  Reestablecer Búsqueda
                </button>
              </div>
            )}

            {/* Manejar el caso cuando no hay productos filtrados pero ya no está cargando */}
            {!isLoading && filteredProducts.length === 0 && products.length > 0 && (
              <div className="flex flex-col justify-center items-center w-full">
                <div className="relative h-60 w-60">
                  <Image src={NO_RESULTS} alt="Sin resultados" fill className="object-contain" />
                </div>
                <p className="font-medium text-[1.15rem] max-w-[30rem] text-center">
                  No se encontraron productos que coincidan con los criterios de búsqueda.
                </p>
                <p className="mt-4 text-[1.05rem] text-center">
                  Por favor, intenta recortar o reformular tu búsqueda 🔎
                </p>
                <button
                  onClick={onResetSearch}
                  className="bg-white border py-2 mb-8 text-[0.85rem] font-medium px-8 border-black rounded mt-7 uppercase"
                >
                  Reestablecer Búsqueda
                </button>
              </div>
            )}

            {/* Paginación */}
            {!isLoading && totalPages > 1 && (
              <div className="flex justify-center items-center my-8">
                <div className="flex space-x-4 items-center">
                  {/* Botón Anterior */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center justify-center w-10 h-10 bg-red-700 text-white rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-red-900 focus:outline-none 
          ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
                    aria-label="Página Anterior"
                  >
                    <FaChevronLeft size={20} />
                  </button>

                  {/* Indicador de Página */}
                  <span className="text-lg font-medium text-gray-700">
                    Página <span className="text-red-700">{currentPage}</span> de <span className="text-red-900">{totalPages}</span>
                  </span>

                  {/* Botón Siguiente */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center justify-center w-10 h-10 bg-red-700 text-white rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-red-900 focus:outline-none 
          ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""}`}
                    aria-label="Página Siguiente"
                  >
                    <FaChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

const Shop = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ShopPage />
    </Suspense>
  );
};

export default Shop;