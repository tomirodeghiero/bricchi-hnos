"use client";
import React, { createContext, useContext, useState } from "react";

type Product = {
  mainImageUrl: string;
  name: string;
  price: number;
  productId: string;
};

type CartItem = Product & {
  quantity: number;
  size: string;
  color: string;
  measure: string;
};

const CartContext = createContext({} as any);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (
    productId: any,
    name: string,
    price: number,
    mainImageUrl: string,
    quantity: any,
    size: string,
    color: string,
    measure: string
  ) => {
    setCart((prevCart: any) => {
      const productInCart = prevCart.find(
        (item: any) => item.productId === productId
      );
      if (productInCart) {
        return prevCart.map((item: any) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            productId,
            name,
            price,
            mainImageUrl,
            quantity,
            size,
            color,
            measure,
          },
        ];
      }
    });
  };

  const increment = (productId: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrement = (productId: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increment, decrement }}
    >
      {children}
    </CartContext.Provider>
  );
};
