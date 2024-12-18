import type { Metadata } from "next";
import { Protest_Guerrilla, Coda } from "next/font/google";
import "./globals.css";

// Configuración de las fuentes como variables globales
const coda = Coda({ subsets: ["latin"], weight: "400", variable: "--font-coda" });
const protestGuerrilla = Protest_Guerrilla({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-protest-guerrilla",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${coda.variable} ${protestGuerrilla.variable}`}>
      <body>{children}</body>
    </html>
  );
}
