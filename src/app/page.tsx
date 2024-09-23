import HeroSection from "./components/HeroSection";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
export default function Home() {
  return (
    <>
      <Navbar/>
      <section id="section-0">
        <HeroSection />
      </section>
      <div className="bg-[#0B1D26]">
        
         <Section/>
        
        <FooterSection/>
      </div>
      
    </>
  );
}
