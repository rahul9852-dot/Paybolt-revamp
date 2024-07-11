import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FollowerPointerCard } from "@/components/ui/FollowingPointer";
import { navItems } from "@/data";
import type { Metadata } from "next";
import { Open_Sans, Dancing_Script } from "next/font/google";
import HeaderAnimation from "./animation";
import "./globals.css";
import { ThemeProvider } from "./provider";
import ScrollToTop from "./ScrollTop";

const openSans = Open_Sans({ subsets: ["latin"] });
const DancingScript = Dancing_Script({ subsets: ["latin"] });


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
      <body className={openSans.className}>
      {/* <FollowerPointerCard
        // title={
        //   <TitleComponent
        //     // title={blogContent.author}
        //     // avatar={blogContent.authorAvatar}
        //   />
        // }
      > */}
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
        {/* </FollowerPointerCard> */}
      </body>
    </html>
  );
}
