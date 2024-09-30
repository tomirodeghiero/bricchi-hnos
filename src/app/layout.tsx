import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsApp from "@/components/whatsapp/Whatsapp";

import { AOSInit } from "../../aos";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Bricchi Hnos. S.A.",
  description: "Venta y reparación de maquinaria agrícola.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <WhatsApp />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
