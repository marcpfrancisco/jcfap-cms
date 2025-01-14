import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import LayoutWrapper from "@/components/Layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JCFAP Website",
  description: "Junior Confederation of Finance Association Philippines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager
        gtmId="G-4XDYR6WFE3"
        gtmScriptUrl="https://www.googletagmanager.com/gtag/js?id=G-4XDYR6WFE3"
      />
      <body className={`${inter.variable} antialiased`}>
        <Toaster />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
