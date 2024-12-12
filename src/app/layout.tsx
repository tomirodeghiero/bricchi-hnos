import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsApp from "@/components/whatsapp/Whatsapp";

import { AOSInit } from "../../aos";
import { CartProvider } from "@/context/CartContext";
import { CONTACTS } from "@/utils/constants/constants";

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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <WhatsApp contacts={CONTACTS} />;
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
