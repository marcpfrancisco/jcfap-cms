import { Toaster } from "@/components/ui/toaster";
import { getNavigationLinks } from "@/services";
import { NavigationNode } from "@/types";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DefaultLayout from "@/components/DefaultLayout";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const routes: NavigationNode[] = (await getNavigationLinks()) || [];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <DefaultLayout
          classsName="w-full min-h-screen flex flex-col relative"
          routes={routes}
        >
          {children}
          <Toaster />
        </DefaultLayout>
      </body>
    </html>
  );
}
