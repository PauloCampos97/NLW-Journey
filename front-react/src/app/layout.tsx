import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-day-picker/dist/style.css"
import "../styles/globals.css";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
