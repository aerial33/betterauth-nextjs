import { Toaster } from "sonner";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/navbar";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intranet UD",
  description: "Intranet de l'UDCCAS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
