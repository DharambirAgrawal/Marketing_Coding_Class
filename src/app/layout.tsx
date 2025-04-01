import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { landingPageMetadata } from "@/lib/metaData";

import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = landingPageMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
     {process.env.NODE_ENV === "production" && (
        <GoogleTagManager gtmId={process.env.GTM_ID || ""} />
      )}
      <body className={inter.className}>
        <Navbar />
        <div className=" sm:px-10" id="Home">
          {children}
        </div>
        <Footer />
      </body>
      {process.env.NODE_ENV === "production" && (
        <>
          
          <GoogleAnalytics gaId={process.env.GTM_ID || ""} />
        </>
      )}
    </html>
  );
}
