"use client";

import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import Link from "next/link";
import { BRICCHI_HNOS_LOGOTYPE, SPAIN } from "@/utils/assets/images";
import {
  CLOSE_MENU,
  DROP_RIGHT,
  HOME,
  MENU,
  SHOPPING_CART,
} from "@/utils/assets/icons/icons";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const router = useRouter();

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { cart } = useCart();

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/shop?search=${searchQuery}`);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  const [isMobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e: any, href: string) => {
    e.preventDefault();

    if (isMobile) {
      setIsOpen(false);
    }

    router.push(href);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setMobile(window.innerWidth < 768);
      });
      isOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "unset");
    }
  }, [isOpen]);

  if (isMobile) {
    return (
      <nav className="flex flex-wrap justify-between items-center py-5 px-4 lg:hidden relative z-50">
        <Link href="/">
          <img className="h-8" src={BRICCHI_HNOS_LOGOTYPE} alt="Bricchi Hnos. Logotype" />
        </Link>

        {!isOpen && (
          <div className="flex gap-4 items-center">
            <div className="relative">
              <img
                className="h-5 cursor-pointer"
                src={SHOPPING_CART}
                alt="Shopping cart"
              />
              {cart.length > 0 && (
                <div className="absolute top-[0.6rem] left-[0.7rem] text-[0.9rem] h-5 w-5 rounded-full border border-yellow-800 bg-gray-400 flex items-center justify-center text-white shadow">
                  {cart.length}
                </div>
              )}
            </div>
            <img className="h-4" src={MENU} alt="Menu" onClick={toggleMenu} />
          </div>
        )}

        <div
          className={`fixed top-0 left-0 w-full h-full bg-white transition-transform transform ease-in-out duration-300 ${isOpen ? "translate-y-0" : "translate-y-full"
            } flex flex-col justify-between space-y-4 z-40 p-5 overflow-auto`}
        >
          <div>
            <div className="flex justify-between items-center">
              <Link href="/">
                <img className="h-8" src={BRICCHI_HNOS_LOGOTYPE} alt="Bricchi Hnos. Logotype" />
              </Link>
              <div className="flex items-center gap-4">
                <Link href="/shopping-cart">
                  <div className="relative">
                    <img
                      className="h-5 cursor-pointer"
                      src={SHOPPING_CART}
                      alt="Shopping cart"
                    />
                    {cart.length > 0 && (
                      <div className="absolute top-[0.6rem] left-[0.7rem] text-[0.9rem] h-5 w-5 rounded-full border border-yellow-800 bg-gray-400 flex items-center justify-center text-white shadow">
                        {cart.length}
                      </div>
                    )}
                  </div>
                </Link>
                <div onClick={toggleMenu}>
                  <img
                    className="h-5 cursor-pointer"
                    src={CLOSE_MENU}
                    alt="Close Menu"
                  />
                </div>
              </div>
            </div>
            <div className="my-8">
              <div className="flex justify-between">
                <h1 className="text-xl mb-6">Navegación</h1>
                <img className="h-6 cursor-pointer" src={SPAIN} alt="Spain" />
              </div>
              <div className="flex flex-col">
                <div
                  className="flex justify-between border-b border-gray-400 py-7 items-center"
                  onClick={(event) => handleLinkClick(event, "/")}
                >
                  <div className="flex gap-4">
                    {/* <img className="h-6 cursor-pointer" src={HOME} alt="Home" /> */}
                    <h2 className="text-xl">Inicio</h2>
                  </div>
                  <img
                    className="h-4 cursor-pointer"
                    src={DROP_RIGHT}
                    alt="Drop right"
                  />
                </div>
                <div
                  className="flex justify-between border-b border-gray-400 py-7 items-center"
                  onClick={(event) => handleLinkClick(event, "/about")}
                >
                  <div className="flex gap-4">
                    {/* <img className="h-6 cursor-pointer" src={HOME} alt="Home" /> */}
                    <h2 className="text-xl">Empresa</h2>
                  </div>
                  <img
                    className="h-4 cursor-pointer"
                    src={DROP_RIGHT}
                    alt="Drop right"
                  />
                </div>
                <div
                  className="flex justify-between border-b border-gray-400 py-7 items-center"
                  onClick={(event) => handleLinkClick(event, "/shop")}
                >
                  <div className="flex gap-4">
                    {/* <img
                      className="h-6 cursor-pointer"
                      src={SHOPPING_CART}
                      alt="Shopping"
                    /> */}
                    <h2 className="text-xl">Productos</h2>
                  </div>
                  <img
                    className="h-4 cursor-pointer"
                    src={DROP_RIGHT}
                    alt="Drop right"
                  />
                </div>
                <div
                  className="flex justify-between border-b border-gray-400 py-7 items-center"
                  onClick={(event) => handleLinkClick(event, "/categories")}
                >
                  <div className="flex gap-4">
                    {/* <img className="h-6 cursor-pointer" src={HOME} alt="Home" /> */}
                    <h2 className="text-xl">Categorías</h2>
                  </div>
                  <img
                    className="h-4 cursor-pointer"
                    src={DROP_RIGHT}
                    alt="Drop right"
                  />
                </div>
                <div
                  className="flex justify-between border-b border-gray-400 py-7 items-center"
                  onClick={(event) => handleLinkClick(event, "/services")}
                >
                  <div className="flex gap-4">
                    {/* <img className="h-6 cursor-pointer" src={HOME} alt="Home" /> */}
                    <h2 className="text-xl">Servicios</h2>
                  </div>
                  <img
                    className="h-4 cursor-pointer"
                    src={DROP_RIGHT}
                    alt="Drop right"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => handleLinkClick(e, "/contact")}
            className="bg-white border py-3 text-[0.85rem] font-medium px-10 border-black rounded mt-12 uppercase"
          >
            Contacto
          </button>
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex justify-between items-center px-16 py-8 bg-white">
      <div className="flex items-center gap-16">
        <Link href="/">
          <img className="h-8" src={BRICCHI_HNOS_LOGOTYPE} alt="Bricchi Hnos. Logotype" />
        </Link>

        <div className="space-x-12 font-medium text-lg">
          <Link href="/" className="navlink">
            Inicio
          </Link>
          <Link href="/about" className="navlink">
            Empresa
          </Link>
          <Link href="/shop" className="navlink">
            Productos
          </Link>
          <Link href="/categories" className="navlink">
            Categorías
          </Link>
          <Link href="/services" className="navlink">
            Servicios
          </Link>
          <Link href="/contact" className="navlink">
            Contacto
          </Link>
        </div>
      </div>

      <div className="relative flex items-center">
        <button
          type="button"
          className="ml-4 h-10 w-10 bg-green-400 text-white rounded-full flex items-center justify-center"
        >
          <FaSearch className="h-4 w-4" />
        </button>

        <button
          type="button"
          className="ml-4 h-10 w-10 bg-green-900 text-white rounded-full flex items-center justify-center"
        >
          <FaShoppingCart className="h-4 w-4" />
        </button>
      </div>

    </nav>
  );
}
