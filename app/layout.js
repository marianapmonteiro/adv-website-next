import { Inter, Lora } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] });


export const metadata = {
  title: "Estrella E Suita",
  description: "Escritório de advocacia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        {children}
        <div className="fixed left-5 bottom-4">
          <div className="absolute w-[65px] h-[65px] bg-green-500 rounded-full animate-ping"></div>
          <a
            href="https://api.whatsapp.com/send?phone=51000000000&text=Olá,%20gostaria%20de%20contratar%20um%20advogado."
            target="_blank"
            className="relative flex items-center justify-center"
          >
            <img src="/whatsapp-button.png" alt="botão whatsapp" className="w-[65px] h-[65px]" />
          </a>
        </div>
        <Footer />
      </body>
    </html>
  );
}
