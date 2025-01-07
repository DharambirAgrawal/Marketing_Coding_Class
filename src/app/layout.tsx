import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { landingPageMetadata } from "@/lib/metaData";

import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = landingPageMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <div className=" sm:px-10" id="Home">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
