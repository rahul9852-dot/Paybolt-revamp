"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/Products";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import HorizontalScrolling from "@/components/HorizontalScrolling";
import LanguagesList from "@/components/LanguageList";
import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <LanguagesList/>
        <Grid />
        <HorizontalScrolling/>
        <RecentProjects />
        <Accordion/>
        <Footer/>
      </div>
    </main>
  );
};

export default Home;
