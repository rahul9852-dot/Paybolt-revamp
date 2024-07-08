import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Accordion />
      <Footer />
    </>
  );
};

export default Layout;
