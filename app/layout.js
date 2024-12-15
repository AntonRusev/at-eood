import { Raleway } from "next/font/google";
import "./globals.css";

import ActiveSectionContextProvider from "@/context/ActiveSectionContext";

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "АРГИРОВ ТРАНС ЕООД",
  description: "Предлага цялостна услуга - Изкоп с багер със собствен оператор, гориво и включен транспорт до адрес посочен от клиента.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="en"
      className="!scroll-smooth"
      suppressHydrationWarning
    >
      <body className={`${raleway.className} relative pt-28 sm:pt-36 bg-slate-800`}>
          {/* Tracking the active section with the help of a Context */}
          <ActiveSectionContextProvider>
            {/* Header */}
            <Header />

            {/* CHILDREN */}
            {children}

            {/* Footer */}
            <Footer />
          </ActiveSectionContextProvider>
      </body>
    </html>
  );
};