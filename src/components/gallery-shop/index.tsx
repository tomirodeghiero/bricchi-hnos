"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { NO_RESULTS } from '@/utils/assets/icons/icons';
import { CATEGORIES } from '@/utils/constants/categories';
import { GrNavigate } from 'react-icons/gr';

export const STATIC_PRODUCTS = [
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
    {
        id: 7,
        src: '/assets/shop/07.png',
        title: 'ME 25-45T',
        category: 'Maquinaria Vial',
        subcategory: 'Autoelevadores',
    },
    {
        id: 8,
        src: '/assets/shop/08.png',
        title: 'Hanomag E143',
        category: 'Maquinaria Vial',
        subcategory: 'Pala Cargadoras',
    },
];

const GalleryItemPlaceholder = () => (
    <div className="w-full flex flex-col">
        <div className={`w-full overflow-hidden rounded-lg h-72 lg:h-[30rem]`}>
            <span className="placeholder rounded-lg w-full h-full object-cover"></span>
        </div>
        <div className="text-center p-4 mt-4 flex justify-between items-center">
            <div className='text-left'>
                <span className="placeholder-text block w-3/4 h-6 mb-2"></span>
                <span className="placeholder-text block w-1/2 h-6"></span>
            </div>
            <span className="placeholder h-12 w-12"></span>
        </div>
    </div>
);

export const GalleryItem = ({ title, id, category, src, secondaryImages = [], manuals = [] }: any) => {
    return (
        <div className="gallery-item">
            <img
                src={src}
                alt={title}
                className="main-image w-full h-72 lg:h-96 object-cover rounded-lg"
                onError={(e: any) => (e.target.src = "/default-image.png")} // Imagen de respaldo
            />
            <div className="text-center mt-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-gray-600">{category}</p>
            </div>
            <div className="secondary-images flex flex-wrap mt-2">
                {secondaryImages.map((image: string, index: number) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Secondary ${index + 1}`}
                        className="w-16 h-16 object-cover rounded mr-2"
                        onError={(e: any) => (e.target.src = "/default-image.png")} // Imagen de respaldo
                    />
                ))}
            </div>
            <div className="manuals mt-2">
                {manuals.map((manual: any, index: number) => (
                    <a
                        key={index}
                        href={manual.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-500 hover:underline"
                    >
                        {manual.file_name || `Manual ${index + 1}`}
                    </a>
                ))}
            </div>
        </div>
    );
};

const GalleryShop = () => {
    const [activeTab, setActiveTab] = useState<any>(null);
    const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
    const [activeCategory, setActiveCategory] = useState<any>(null);
    const [activeSubcategory, setActiveSubcategory] = useState('Todas');
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const tabsRef = useRef<any>(null);

    useEffect(() => {
        if (!isAutoScrollEnabled) {
            return;
        }

        const interval = setInterval(() => {
            if (tabsRef.current) {
                tabsRef.current.scrollLeft += 1;
            }
        }, 20);

        return () => clearInterval(interval);
    }, [isAutoScrollEnabled]);

    const handleTabClick = (tab: any) => {
        if (activeCategory && activeCategory.name === tab.name) {
            setActiveCategory(null);
            setActiveTab(null);
            setActiveSubcategory('Todas');
            localStorage.removeItem('activeCategory');
            localStorage.removeItem('activeSubcategory');
        } else {
            setActiveTab(tab);
            setActiveCategory(tab);
            setActiveSubcategory('Todas');
        }
        setIsAutoScrollEnabled(false);
    };

    // Function to fetch products
    async function getProducts() {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const response = await fetch(`/api/products`, requestOptions);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            const transformedProducts = data.products
                .filter((product: any) => product.username === "dpastel")
                .map((product: any, index: number) => {
                    const measurements = product.measurements || [];

                    const prices = measurements.map((measurement: any) => parseFloat(measurement.price));

                    const lowestPrice = prices.length > 0 ? Math.min(...prices) : 'N/A';

                    return {
                        src: product.mainImageUrl,
                        title: product.name,
                        category: product.category,
                        id: product._id,
                        inlineStyles: index % 4 === 0 ? "rounded-tr-[4.5rem]" :
                            index % 4 === 1 ? "rounded-tl-[4.5rem]" :
                                index % 4 === 2 ? "rounded-br-[4.5rem]" :
                                    "rounded-bl-[4.5rem]",
                        lowestPrice,
                        subcategory: product.lightTone,
                    };
                });


            setProducts(transformedProducts);
        } catch (error) {
            console.error("error", error);
        } finally {
            setIsLoading(false);
        }
    }

    const filteredProducts = useMemo(() => {
        if (!activeCategory) {
            return products;
        } else {
            return products.filter((product: any) => {
                const matchesCategory = activeCategory?.name === product.category;
                const matchesSubcategory = activeSubcategory === 'Todas' || product.subcategory === activeSubcategory;
                return matchesCategory && matchesSubcategory;
            });
        }
    }, [products, activeCategory, activeSubcategory]);

    useEffect(() => {
        getProducts();
    }, [activeCategory, activeSubcategory]);

    useEffect(() => {
        const savedCategory = localStorage.getItem('activeCategory');
        const savedSubcategory = localStorage.getItem('activeSubcategory');
        if (savedCategory) {
            const parsedCategory = JSON.parse(savedCategory);
            setActiveCategory(parsedCategory);
            setActiveTab(parsedCategory);
        }
        if (savedSubcategory) {
            setActiveSubcategory(savedSubcategory);
        }
    }, []);

    useEffect(() => {
        if (activeCategory) {
            localStorage.setItem('activeCategory', JSON.stringify(activeCategory));
            setActiveTab(activeCategory);
        } else {
            localStorage.removeItem('activeCategory');
            setActiveTab(null);
        }
        localStorage.setItem('activeSubcategory', activeSubcategory);
    }, [activeCategory, activeSubcategory]);

    const resetSearch = () => {
        setActiveCategory(null);
        setActiveTab(null);
        setActiveSubcategory('Todas');
        localStorage.removeItem('activeCategory');
        localStorage.removeItem('activeSubcategory');
        getProducts();
    };

    if (isLoading) {
        return (
            <>
                <div
                    className="flex overflow-x-auto font-jost scroll-smooth items-center w-full lg:rounded-2xl bg-white border border-green-900"
                    ref={tabsRef}
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    <style>
                        {`
                ::-webkit-scrollbar {
                  display: none;
                }
            `}
                    </style>
                    {CATEGORIES.map(tab => (
                        <button
                            key={tab.name}
                            className={`flex-none font-jost lg:w-1/3 lg:flex-grow text-lg font-medium py-2 lg:py-3 px-4 rounded-xl ${activeTab === tab ? 'bg-green-900 text-white' : 'text-gray-900'} focus:outline-none transition-colors duration-150 ease-in-out font-family-jost`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
                <div className="mx-auto max-w-6xl py-4 px-2">
                    <div className="grid grid-cols-2 gap-4 mt-5">
                        {[...Array(4)].map((_, index) => (
                            <GalleryItemPlaceholder key={index} />
                        ))}
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="flex flex-grow font-jost">
                <div
                    className="flex overflow-x-auto scroll-smooth items-center w-full lg:rounded-2xl bg-white border border-green-900"
                    ref={tabsRef}
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    <style>
                        {`
                        ::-webkit-scrollbar {
                          display: none;
                        }
                    `}
                    </style>
                    {CATEGORIES.map(tab => (
                        <button
                            key={tab.name}
                            className={`flex-none lg:w-1/3 lg:flex-grow text-lg font-medium py-2 lg:py-3 px-4 rounded-xl ${activeTab?.name === tab.name ? 'bg-green-900 text-white' : 'text-gray-900'} focus:outline-none transition-colors duration-150 ease-in-out font-family-jost`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default GalleryShop;
