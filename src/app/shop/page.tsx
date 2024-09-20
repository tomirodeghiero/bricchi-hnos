"use client";

import HeaderBackground from "@/components/header-background/HeaderBackground";
import { BRICCHI_HNOS_BACKGROUND } from "@/utils/assets/images";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Features from "@/components/features/Features";
import Image from "next/image";
import { DROP_RIGHT, NO_RESULTS, SEARCH } from "@/utils/assets/icons/icons";
import SkeletonCard from "@/components/skeleton-card";
import { CSSTransition } from "react-transition-group";
import { GalleryItem } from "@/components/gallery-shop";

// Componente de tags de subcategorías con selección múltiple
const CategoryTags = ({ subcategories, selectedSubcategories, onToggleSubcategory }: any) => {
  return (
    <div className="flex flex-wrap gap-2">
      {subcategories.length > 0 ? (
        subcategories.map((subcategory: any) => (
          <button
            key={subcategory._id}
            className={`tag-button ${selectedSubcategories.includes(subcategory.name) ? "active" : ""}`}
            onClick={() => onToggleSubcategory(subcategory.name)}
          >
            {subcategory.name}
          </button>
        ))
      ) : (
        <p className="text-sm text-gray-600">No hay subcategorías disponibles.</p>
      )}
    </div>
  );
};

// Sidebar para mostrar categorías y subcategorías con animación smooth y múltiples subcategorías seleccionables
const ProductsFilterSidebar = ({
  searchQuery,
  onSearch,
  onSortByCategory,
  categories,
  selectedSubcategories,
  onToggleSubcategory,
}: any) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null); // Colapsar la categoría si ya está expandida
    } else {
      setExpandedCategory(categoryName); // Expandir la categoría seleccionada
    }
    setSelectedCategory(categoryName);
    onSortByCategory(categoryName); // Filtrar productos por categoría seleccionada
  };

  return (
    <div className="w-full lg:w-1/4 lg:flex lg:flex-col gap-5">
      <div className="mt-5">
        {/* Búsqueda de categorías */}
        <div className="hidden lg:block lg:relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="placeholder-gray-700 px-2 py-2 pr-10 w-full font-normal border-b border-gray-300 focus:outline-none focus:border-red-500 transition-colors duration-300"
            style={{ lineHeight: "1.5" }}
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
          <img
            className="absolute right-0 top-1/2 transform -translate-y-1/2 h-8 cursor-pointer p-2"
            src={SEARCH}
            alt="Search"
          />
        </div>

        <div className="flex flex-col gap-2 mt-3">
          <button
            onClick={() => handleCategoryClick("")}
            className={`
            ${!selectedCategory ? "bg-red-700 text-white" : "bg-white"}
           hover:bg-red-700 hover:border-black mx-auto flex w-full border border-red-700 font-medium focus:outline-none focus:ring-1 focus:ring-red-700 focus:ring-opacity-50 transition duration-300 ease-in-out hover:shadow-md rounded-[40px] text-red-700 hover:text-white text-center py-2 justify-center items-center`}>
            Todas las Categorías
          </button>

          {/* Filtrar solo las categorías principales antes de renderizarlas */}
          {categories
            .filter((category: any) => category.isMainCategory)  // Solo categorías principales
            .map((category: any) => (
              <div key={category._id}>
                <button
                  className={`py-2 text-left w-full flex justify-between items-center ${selectedCategory === category.name ? "font-bold" : ""}`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  {category.name}
                  {/* Indicador de expansión para las subcategorías */}
                  <span>{expandedCategory === category.name ? "-" : "+"}</span>
                </button>

                {/* Mostrar subcategorías cuando se expanda la categoría */}
                <CSSTransition
                  in={expandedCategory === category.name}
                  timeout={300}
                  classNames="subcategory-transition"
                  unmountOnExit
                >
                  <div>
                    <CategoryTags
                      subcategories={category.subcategories}
                      selectedSubcategories={selectedSubcategories}
                      onToggleSubcategory={onToggleSubcategory}
                    />
                  </div>
                </CSSTransition>
              </div>
            ))}
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

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(searchQueryParam || "");
  const [sortByCategory, setSortByCategory] = useState(categoryQueryParam || "");
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);

  // Obtener las categorías del backend
  async function getCategories() {
    try {
      const response = await fetch('http://127.0.0.1:5001/api/categories');
      const data = await response.json();

      setCategories(data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }


  // Obtener los productos del backend
  async function getProducts(): Promise<any> {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        `http://127.0.0.1:5001/api/products?page=1&limit=200`,
        requestOptions
      );

      if (!response.ok) {
        console.error("Error al obtener productos");
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const productsDB = await response.json();
      setProducts(productsDB.products);
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
    let tempProducts = [...products];

    // Filtrar productos por el término de búsqueda
    if (searchQuery) {
      tempProducts = tempProducts.filter((product: any) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filtrar productos por categoría principal o subcategoría seleccionada
    if (sortByCategory || selectedSubcategories.length > 0) {
      tempProducts = tempProducts.filter((product: any) =>
        (product?.category?.name?.toLowerCase() === sortByCategory.toLowerCase()) ||
        (selectedSubcategories.includes(product?.subCategory?.name))
      );
    }

    const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
    const currentProducts = tempProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    setFilteredProducts(currentProducts);
  }, [currentPage, products, sortByCategory, searchQuery, selectedSubcategories]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onToggleSubcategory = (subcategory: string) => {
    setSelectedSubcategories((prevSelected) =>
      prevSelected.includes(subcategory)
        ? prevSelected.filter((sub) => sub !== subcategory)
        : [...prevSelected, subcategory]
    );
  };

  const onResetSearch = () => {
    setSearchQuery("");         // Resetear el término de búsqueda
    setSortByCategory("");      // Resetear la categoría seleccionada
    setSelectedSubcategories([]); // Resetear las subcategorías seleccionadas
    setCurrentPage(1);          // Volver a la primera página
  };


  // Calcular la cantidad total de páginas
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

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
            onSearch={setSearchQuery}
            onSortByCategory={setSortByCategory}
            categories={categories}
            selectedSubcategories={selectedSubcategories}
            onToggleSubcategory={onToggleSubcategory}
          />

          <div className="flex-col w-full">
            {isLoading ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                {Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                {filteredProducts.length > 0 &&
                  filteredProducts.map((product: any) => (
                    <GalleryItem
                      key={product._id}
                      title={product.name}
                      id={product._id}
                      category={product.category?.name}
                      src={product.mainImageUrl}
                    />
                  ))
                }
              </div>
            )}

            {!isLoading && filteredProducts.length == 0 &&
              <div className="flex flex-col justify-center items-center w-full">
                <img className="h-60" src={NO_RESULTS} alt={"Without results"} />
                <p className="font-medium text-[1.15rem] max-w-[30rem] text-center">
                  No se encontraron productos que coincidan con los criterios de búsqueda.
                </p>
                <p className="mt-4 text-[1.05rem] text-center">
                  Por favor, intenta recortar o reformular su búsqueda 🔎
                </p>
                <button
                  onClick={onResetSearch}
                  className="bg-white border py-2 mb-8 text-[0.85rem] font-medium px-8 border-black rounded mt-7 uppercase"
                >
                  Reestablecer Búsqueda
                </button>
              </div>
            }

            {totalPages > 1 && (
              <div className="flex justify-center items-center my-8 lg:mb-0">
                <div className="flex w-full max-w-lg mx-auto justify-between items-center">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-10 h-10 bg-gray-400 hover:bg-yellow-400 text-white rounded"
                  >
                    <Image src={DROP_RIGHT} alt="Izquierda" width={8} height={8} className="transform rotate-180" />
                  </button>
                  <span className="px-4">{`${currentPage} de ${totalPages}`}</span>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 bg-gray-400 hover:bg-yellow-400 text-white rounded"
                  >
                    <Image src={DROP_RIGHT} alt="Derecha" width={8} height={8} />
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

export default ShopPage;
