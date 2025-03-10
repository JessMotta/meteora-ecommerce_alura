
import Header from "@/components/Header";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Newsletter/>
        <Footer/>
      </body>
    </html>
  );
}
