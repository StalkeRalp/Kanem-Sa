import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KANEM-SA | Institution Africaine de Recherche & Innovation Technologique",
  description: "« Enracinés dans notre héritage, bâtis pour l'innovation. » Institution africaine de recherche appliquée, souveraineté technologique et développement numérique.",
  keywords: ["KANEM-SA", "Recherche", "Innovation", "Afrique", "Cameroun", "RAIDE-RACE", "Souveraineté numérique", "IA", "Cybersécurité"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 font-sans selection:bg-[#C59B27] selection:text-white">
        <LanguageProvider>
          <Header />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
