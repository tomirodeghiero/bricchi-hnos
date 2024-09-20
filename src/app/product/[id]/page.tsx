"use client";

import { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { ToastContainer, toast } from "react-toastify";

export default function ShopPage({ params }: any) {
  const [productID, setProductID] = useState<any>(null);
  const [productAdded, setProductAdded] = useState(false);

  useEffect(() => {
    // Fetch product data by ID
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:5001/api/product/${params.id}`);
        if (!res.ok) throw new Error("Error fetching product");
        const data = await res.json();
        setProductID(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [params.id]);

  const addToCart = () => {
    toast.success(`El Producto ${productID.name} ha sido añadido a su carrito! 🛍️`);
    setProductAdded(true);
  };

  if (!productID) return <div>Cargando...</div>;

  return (
    <div>
      {/* Main product display */}
      <h1>{productID.name}</h1>
      <p>{productID.description}</p>

      {/* Carousel of images */}
      <Carousel showThumbs={false} showArrows={true}>
        <div>
          <img src={productID.mainImageUrl} alt={productID.name} />
        </div>
        {productID.secondaryImageUrls?.map((url: any, index: number) => (
          <div key={index}>
            <img src={url} alt={`Imagen secundaria ${index}`} />
          </div>
        ))}
      </Carousel>

      {/* Specifications */}
      {productID.specifications && (
        <div>
          <h2>Especificaciones</h2>
          <p>{productID.specifications}</p>
        </div>
      )}

      {/* Technical Sheet */}
      {productID.technical_sheet && (
        <div>
          <h2>Ficha Técnica</h2>
          <a href={productID.technical_sheet.url} download>
            {productID.technical_sheet.file_name}
          </a>
        </div>
      )}

      {/* Manuals */}
      {productID.manuals.length > 0 && (
        <div>
          <h2>Manuales</h2>
          {productID.manuals.map((manual: any, index: number) => (
            <a key={index} href={manual.url} download>
              {manual.file_name}
            </a>
          ))}
        </div>
      )}

      {/* Add to Cart */}
      <button onClick={addToCart}>Añadir al carrito</button>
      <ToastContainer />
    </div>
  );
}
