
import Header from "@/components/Header";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Metadata } from "next";
import { Info } from "@/components/Info";


export const metadata: Metadata = {
  title: "Meteora- Moda de Impacto Positivo",
  description: "A Meteora é uma marca de moda que tem como propósito impactar positivamente a sociedade e o meio ambiente. Conheça nossos produtos e nossa história.",
  
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="antialiased">
        <Header/>
        {children}
        <Info/>
        <Newsletter/>
        <Footer/>
      </body>
    </html>
  );
}
