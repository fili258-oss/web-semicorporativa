import type { Metadata } from "next";

import "@/app/ui/globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";


export const metadata: Metadata = {
  title: "IngenioSoft",
  description: "Soluciones tecnológicas innovadoras para tu negocio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
