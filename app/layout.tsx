// components/RootLayout.js
import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderAnimation from "./animation";
import "./globals.css";
import { ThemeProvider } from "./provider";
import ScrollToTop from "./ScrollTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PayBolt",
  description: "Simplified Payment",
};

export default function RootLayout({
  children,
  pathname,
}: Readonly<{
  children: React.ReactNode;
  pathname: string;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.jpeg" sizes="any" />
      </head>
      <body className={inter.className}>
        <HeaderAnimation/>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollToTop />
          <FloatingNav navItems={navItems} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
