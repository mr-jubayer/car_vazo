import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { NextAuthProvider } from "./Providers/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Carvazo",
  description: "Carvazo center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body
          cz-shortcut-listen="true"
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          {children}
        </body>
      </NextAuthProvider>
    </html>
  );
}
